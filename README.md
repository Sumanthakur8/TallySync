# TallySync — merged GST Credit & Debit Note Analyzer

This package adds the browser-based **Credit & Debit Note Analyzer** to the existing TallySync website.

## Included
- `index.html` — your current homepage
- `all-tools.html` — your current tools page, with the Credit & Debit Note Analyzer added
- `credit-debit-note-analyzer.html` — analyzer tool
- `api/gstin.js` — secure server-side GSTIN lookup proxy
- `vercel.json` — Vercel function configuration

## Vercel deployment
1. Upload/push these files into the same TallySync project/repository.
2. In Vercel → Project → Settings → Environment Variables, add:
   - Name: `GST_API_KEY`
   - Value: your current GSTINAPI key
3. Redeploy the project.
4. Open `/all-tools.html` and click **Credit & Debit Note Analyzer**.

## Important
- Do **not** put `GST_API_KEY` inside HTML, JavaScript running in the browser, or GitHub.
- The analyzer processes uploaded CSV/XLS/XLSX files in the browser.
- The GST name lookup goes through `/api/gstin` so the API key remains server-side.
- Existing TallySync assets such as `tallysync-logo.png`, `suman-thakur.jpg`, `tool.css`, and `tools.js` should remain in your existing project if your homepage/tools page references them.
