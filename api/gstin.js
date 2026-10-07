export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ success: false, error: 'Method not allowed' });

  const gstin = String(req.query.gstin || '').trim().toUpperCase();
  if (!/^[0-9A-Z]{15}$/.test(gstin)) {
    return res.status(400).json({ success: false, error: 'Invalid GSTIN' });
  }

  const apiKey = process.env.GST_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ success: false, error: 'GST_API_KEY is not configured on Vercel.' });
  }

  try {
    const response = await fetch(`https://www.gstinapi.in/v1/gstin/${encodeURIComponent(gstin)}`, {
      headers: { 'x-api-key': apiKey, 'Accept': 'application/json' }
    });
    const data = await response.json().catch(() => ({}));
    return res.status(response.status).json(data);
  } catch (error) {
    return res.status(502).json({ success: false, error: 'GST lookup service is temporarily unavailable.' });
  }
}
