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

function doPost(e) {
  try {
    const params = (e && e.parameter) || {};
    const row = COLUMNS.map(function (key) {
      if (key === 'timestamp') return new Date();
      return String(params[key] || '').slice(0, MAX_LENGTH);
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

/** A GET is only ever a health check — never log one as an enquiry. */
function doGet() {
  return json({ ok: true, service: 'lidespy-enquiries' });
}

function sheet() {
  const book = SpreadsheetApp.getActiveSpreadsheet();
  const found = book.getSheetByName(SHEET_NAME);
  if (found) return found;

  const created = book.insertSheet(SHEET_NAME);
  created.appendRow(COLUMNS);
  return created;
}

function json(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
