/**
 * The Apps Script web app every form posts to (contact enquiry, media kit,
 * opt-out). The site is a static export, so the browser posts straight to it.
 */
export const SHEET_ENDPOINT = process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT;

/**
 * Posts form-encoded fields (no CORS preflight) and reports whether the script
 * ran.
 *
 * Apps Script runs doPost, then answers 302 to a one-time
 * script.googleusercontent.com URL holding the reply. That second hop
 * intermittently 404s even though the row is already written, so following it
 * turned saved leads into "couldn't send" errors. Instead the redirect is not
 * followed: the 302 itself only comes back once doPost has executed, so it is
 * the success signal. A missing or broken deployment never redirects and
 * still fails. The script's JSON body is given up, which is fine — every
 * caller validates its fields before posting.
 */
export async function postToSheet(fields: Record<string, string>): Promise<void> {
  if (!SHEET_ENDPOINT) throw new Error("NEXT_PUBLIC_ENQUIRY_ENDPOINT is not set");
  const response = await fetch(SHEET_ENDPOINT, {
    method: "POST",
    redirect: "manual",
    body: new URLSearchParams(fields),
  });
  if (response.type !== "opaqueredirect" && !response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
}
