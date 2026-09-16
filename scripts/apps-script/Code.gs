/**
 * Receives Lidespy contact-form enquiries and appends them to the spreadsheet,
 * records media kit (pitch deck) download requests on their own tab, and
 * handles opt-out requests from the footer by deleting matching rows.
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

/** Where opt-out requests are recorded once their rows have been deleted. */
const OPTOUT_SHEET_NAME = 'Opt-outs';

/** Where media kit download requests (name + email) are recorded. */
const MEDIAKIT_SHEET_NAME = 'Media kit downloads';

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

    // The footer's opt-out form posts here too; it is the only caller that
    // removes data, so it has to say so explicitly.
    if (String(params.action || '') === 'optout') {
      return optOut(params);
    }

    if (String(params.action || '') === 'mediakit') {
      return mediaKit(params);
    }

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

/**
 * Deletes every row whose email matches, and reports how many went.
 *
 * The request is logged even when nothing matched, so an address we have never
 * held is still on record as opted out.
 */
function optOut(params) {
  const email = String(params.email || '').trim().toLowerCase();
  if (!email) return json({ ok: false, error: 'missing email' });

  const target = sheet();
  const lastRow = target.getLastRow();

  // Collected first and deleted from the bottom up, so removing one row never
  // shifts the index of another still on the list. Row 1 is the header.
  const matches = [];
  if (lastRow >= 2) {
    const emailColumn = COLUMNS.indexOf('email') + 1;
    const values = target
      .getRange(2, emailColumn, lastRow - 1, 1)
      .getValues();
    for (let i = 0; i < values.length; i++) {
      if (String(values[i][0] || '').trim().toLowerCase() === email) {
        matches.push(i + 2);
      }
    }
    for (let i = matches.length - 1; i >= 0; i--) {
      target.deleteRow(matches[i]);
    }
  }

  logOptOut(params, email, matches.length);
  return json({ ok: true, removed: matches.length });
}

/**
 * A deletion with no trace of itself is hard to answer for, so each one is
 * recorded on its own tab — name and email as the visitor typed them, which is
 * what a later "did you action my request?" enquiry is matched against.
 */
function logOptOut(params, email, removed) {
  try {
    const book = SpreadsheetApp.getActiveSpreadsheet();
    let log = book.getSheetByName(OPTOUT_SHEET_NAME);
    if (!log) {
      log = book.insertSheet(OPTOUT_SHEET_NAME);
      log.appendRow(['timestamp', 'fullName', 'email', 'rowsRemoved']);
    }
    log.appendRow([
      new Date(),
      String(params.fullName || '').slice(0, MAX_LENGTH),
      email,
      removed,
    ]);
  } catch (error) {
    // The removal itself already happened; failing to log it must not turn a
    // successful opt-out into an error for the visitor.
    console.error('failed to log opt-out', error);
  }
}

/** Logs who downloaded the pitch deck, so the lead lands in the sheet. */
function mediaKit(params) {
  const email = String(params.email || '').trim();
  if (!email) return json({ ok: false, error: 'missing email' });

  const book = SpreadsheetApp.getActiveSpreadsheet();
  let log = book.getSheetByName(MEDIAKIT_SHEET_NAME);
  if (!log) {
    log = book.insertSheet(MEDIAKIT_SHEET_NAME);
    log.appendRow(['timestamp', 'fullName', 'email', 'source']);
  }
  log.appendRow([
    new Date(),
    String(params.fullName || '').slice(0, MAX_LENGTH),
    email.slice(0, MAX_LENGTH),
    String(params.source || '').slice(0, MAX_LENGTH),
  ]);
  return json({ ok: true });
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
