/**
 * Receives Lidespy contact-form enquiries and appends them to the spreadsheet.
 *
 * The website is a static export with no server of its own, so the form posts
 * straight here from the browser.
 *
 * Deploy (one time):
 *   1. Open the enquiries spreadsheet -> Extensions -> Apps Script.
 *   2. Paste this file in, and set SHEET_NAME below if your tab is not "Enquiries".
 *   3. Deploy -> New deployment -> type "Web app".
 *        Execute as:        Me
 *        Who has access:    Anyone
 *   4. Copy the /exec URL into NEXT_PUBLIC_ENQUIRY_ENDPOINT in .env.local,
 *      then rebuild the site.
 *
 * Re-deploy ("Manage deployments" -> edit -> new version) after any edit here,
 * or the live URL keeps serving the old code.
 */

/**
 * The spreadsheet to write to, taken from its URL:
 * docs.google.com/spreadsheets/d/<THIS>/edit
 *
 * Pinned by ID on purpose. getActiveSpreadsheet() returns whatever document
 * the script happens to be attached to, so a script created from the wrong
 * sheet writes rows into that one and still answers {"ok":true} — a failure
 * that looks exactly like success.
 */
const SPREADSHEET_ID = '1rRVUxCj0exw4s78H2vlkyUtssmU9NZ2gFcwu84OBeGw';

const SHEET_NAME = 'Enquiries';

/** Column order in the sheet. The header row should match. */
const COLUMNS = [
  'timestamp',
  'firstName',
  'lastName',
  'email',
  'phone',
  'company',
  'title',
  'country',
  'interest',
  'goals',
  'source',
];

const MAX_LENGTH = 4000;

/**
 * Sheets treats a leading =, +, - or @ as the start of a formula, so a phone
 * number like "+1 2222222222" lands as #ERROR! and a goals field of
 * "=IMPORTXML(...)" would actually run inside the spreadsheet. A leading
 * apostrophe forces the value to be stored as literal text; it is a format
 * marker, not data, so it never appears in the cell or when read back.
 */
function textCell(value) {
  return /^[=+\-@]/.test(value) ? "'" + value : value;
}

function doPost(e) {
  try {
    const params = (e && e.parameter) || {};

    // The form hides this field from people, so anything in it is a bot. The
    // browser checks it too, but a bot posting straight here never ran that.
    // Answer ok so it learns nothing, and write nothing.
    if (params.company_website) {
      return json({ ok: true });
    }

    const row = COLUMNS.map(function (key) {
      if (key === 'timestamp') return new Date();
      return textCell(String(params[key] || '').slice(0, MAX_LENGTH));
    });

    // An enquiry with no email address is a bot or a broken client.
    if (!row[COLUMNS.indexOf('email')]) {
      return json({ ok: false, error: 'missing email' });
    }

    sheet().appendRow(row);
    return json({ ok: true });
  } catch (error) {
    console.error('failed to record enquiry', error);
    return json({ ok: false, error: String(error) });
  }
}

/**
 * A GET is only ever a health check — never log one as an enquiry. It names the
 * spreadsheet it would write to, so a misconfigured deployment is visible from
 * the URL alone instead of after a lost enquiry.
 */
function doGet() {
  try {
    return json({
      ok: true,
      service: 'lidespy-enquiries',
      spreadsheet: book().getName(),
      tab: sheet().getName(),
    });
  } catch (error) {
    return json({ ok: false, error: String(error) });
  }
}

function book() {
  try {
    return SpreadsheetApp.openById(SPREADSHEET_ID);
  } catch (error) {
    // Google's own message omits the ID, which makes this near-impossible to
    // place when it happens. Name it.
    throw new Error(
      'Cannot open spreadsheet ' + SPREADSHEET_ID +
        ' — the account that owns this script needs access to it. (' + error + ')',
    );
  }
}

function sheet() {
  const target = book();
  const found = target.getSheetByName(SHEET_NAME);
  if (found) return found;

  const created = target.insertSheet(SHEET_NAME);
  created.appendRow(COLUMNS);
  return created;
}

function json(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
