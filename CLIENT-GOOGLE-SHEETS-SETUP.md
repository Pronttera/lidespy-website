# Sending Enquiries to Your Google Sheet — Setup Guide

Every time someone fills in the enquiry form on your website, we can add a row
to a Google Sheet you own. This guide walks you through giving us the access to
do that.

**Time needed:** about 15 minutes.
**Technical knowledge needed:** none. You'll be clicking through two Google
websites and downloading one file.

**What you'll end up with:**

1. A Google Sheet where the enquiries will appear.
2. A small file ending in `.json` that you send us.

---

## Why it works this way

We don't ask for your Google password, and we never log in as you. Instead you
create a **robot account** — Google calls it a *service account* — and give
that robot permission to write to one single spreadsheet. Nothing else.

The `.json` file is that robot's key. Think of it as a key cut for one door.

This means: if you ever want to cut us off, you delete the robot account and
we instantly lose access — no password changes, nothing else affected.

---

## Before you start

Use a **company Google account**, not a personal one — something like
`admin@yourcompany.com`. If you set this up on a personal account and that
person leaves, the enquiry form stops working and nobody else can fix it.

---

## Step 1 — Create the spreadsheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a blank
   spreadsheet.
2. Name it something obvious, like **Website Enquiries**.
3. At the bottom left you'll see a tab called **Sheet1**. Double-click it and
   rename it to exactly:

   ```
   Enquiries
   ```

   Capital E, no spaces. This name has to match exactly or the enquiries have
   nowhere to land.

4. Look at the web address in your browser. It looks like this:

   ```
   https://docs.google.com/spreadsheets/d/1uFD7W8cRqGN4xxxxxxxxxxxxxxxxxxx/edit
                                          └──────────── this part ────────────┘
   ```

   Copy the long code between `/d/` and `/edit`. **Save it in a note** — we
   need it. It's called the *spreadsheet ID*.

> Leave the sheet empty. We'll add the column headings for you once the
> connection is live, so they're guaranteed to match what we send.

---

## Step 2 — Create a Google Cloud project

This sounds intimidating. It isn't — a "project" is just a folder Google uses
to group things. It's free.

1. Go to [console.cloud.google.com](https://console.cloud.google.com).
2. Sign in with your company Google account.
3. If it's your first time, accept the terms of service.
4. At the very top of the page, next to the Google Cloud logo, there's a
   **project dropdown**. Click it, then click **New Project**.
5. Name it something like **Website Enquiries** and click **Create**.
6. Wait a few seconds, then make sure the dropdown at the top now shows your
   new project name. If it doesn't, click the dropdown and select it.

> You may be asked for billing details. **You don't need to enable billing for
> this.** If you see a prompt, you can dismiss it. What we're using is free.

---

## Step 3 — Switch on the Sheets API

Your project can't touch Google Sheets until you explicitly allow it. This is
the step people miss, and it fails silently until you test the form.

1. Go to this page — it opens the right screen directly:

   **https://console.cloud.google.com/apis/library/sheets.googleapis.com**

2. Check the project name at the top is the project you just made.
3. Click the blue **Enable** button.
4. Wait until the page says the API is enabled. It can take a minute or two to
   take effect.

If the button says **Manage** instead of **Enable**, it's already on. Good.

---

## Step 4 — Create the robot account

1. Go to:

   **https://console.cloud.google.com/iam-admin/serviceaccounts**

2. Click **+ Create service account** near the top.
3. **Service account name:** type something like `website-enquiries`. The email
   field below fills in automatically — leave it.
4. Click **Create and continue**.
5. You'll see a step called *Grant this service account access to project*.
   **Skip it** — click **Continue**. (We grant access to one spreadsheet
   directly, which is much safer than granting access to the whole project.)
6. The next step is optional too. Click **Done**.

You'll now see your robot in a list, with an email address like:

```
website-enquiries@your-project-name.iam.gserviceaccount.com
```

**Copy that email address and save it in your note.** You need it in Step 6.

---

## Step 5 — Download the key file

1. In that list, click on the robot account you just created.
2. Click the **Keys** tab along the top.
3. Click **Add key** → **Create new key**.
4. Choose **JSON** (it's the default), then click **Create**.
5. A file downloads to your computer. It'll be named something like
   `your-project-name-a1b2c3d4e5f6.json`.

**That file is the key. Keep it safe and don't share it publicly.** Anyone who
has it can write to any spreadsheet the robot can reach.

> You can only download this file once. That's fine — if you lose it, come back
> here and create a new key. Nothing breaks.

---

## Step 6 — Let the robot into your spreadsheet

The robot exists, but it can't see your sheet yet. This is a separate
permission from Step 3, and both are required.

1. Open the **Website Enquiries** spreadsheet from Step 1.
2. Click the green **Share** button, top right.
3. Paste the robot's email address (from Step 4) into the box.
4. Change the permission dropdown from *Viewer* to **Editor**.
5. **Untick "Notify people"** — there's no inbox on the other end.
6. Click **Share** (or **Send**).

Google may warn you that this address is outside your organisation. That's
expected. Continue.

---

## Step 7 — Send it to us

Send us these two things:

| What | Where you got it |
|---|---|
| The `.json` file | Step 5 |
| The spreadsheet ID | Step 1 |

**Please don't send the `.json` as a plain email attachment.** It's a key, and
email isn't private. Any of these is fine:

- Share it through your password manager (1Password, Bitwarden, LastPass all
  support sending a file or secret).
- Upload it to a Google Drive folder shared only with us.
- Use a self-destructing link service such as
  [onetimesecret.com](https://onetimesecret.com) — paste the file's contents in
  and send us the link.

Once we have it, we'll add the column headings and send you a test enquiry so
you can watch it appear in the sheet.

---

## If something doesn't work

Give us the error message and we can tell which step needs revisiting. These
are the usual two, and they look almost identical from the outside but come
from different steps:

| What we see | What it means | Fix |
|---|---|---|
| `SERVICE_DISABLED` | The Sheets API isn't switched on for the project | Redo **Step 3**. Check the project name at the top of the page matches. |
| `PERMISSION_DENIED` (no `SERVICE_DISABLED`) | The robot isn't allowed into the sheet | Redo **Step 6**. Confirm it's **Editor**, not Viewer. |
| `Requested entity was not found` | The spreadsheet ID is wrong | Recopy it from the address bar in **Step 1**. |
| `Unable to parse range` | The tab isn't named `Enquiries` | Rename the tab at the bottom of the sheet, exactly as in **Step 1**. |

A note on Step 3: switching the API on takes a minute or two to take effect
across Google's systems. If you test immediately and it fails, wait and retry
before assuming something's wrong.

---

## Questions you might have

**Does this cost anything?**
No. Google Sheets' API is free at the volumes an enquiry form produces — the
free allowance is hundreds of writes per minute.

**Can the robot read my other spreadsheets or my email?**
No. It can only touch documents you've explicitly shared with it. It has no
access to your Gmail, Drive, or anything else.

**How do I revoke access later?**
Either remove the robot from the sheet's Share list, or delete the robot
account entirely at the Step 4 link. Either takes effect immediately.

**Can I edit the sheet while it's collecting enquiries?**
Yes — filter, sort, add columns to the right, add other tabs. Just don't delete
or reorder the existing columns, and don't rename the `Enquiries` tab, or new
rows will land in the wrong place.

**What if we want the enquiries somewhere else too — email, a CRM?**
That's a separate piece of work, but the form can send to more than one place.
Tell us where and we'll quote it.
