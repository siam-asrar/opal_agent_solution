import { NowRequest, NowResponse } from '@vercel/node';
import fetch from 'node-fetch';
export default async (req: NowRequest, res: NowResponse) => {
  const url = req.body?.url;
  if (!url) return res.status(400).json({ ok:false, error:'url required' });
  try {
    const r = await fetch(url, { timeout: 5000 });
    const t = await r.text();
    const snippet = t.replace(/\s+/g,' ').slice(0,2000);
    const summary = snippet.split('.').slice(0,3).join('.').trim();
    res.json({ ok:true, url, summary });
  } catch (e:any) {
    res.status(500).json({ ok:false, error:String(e) });
  }
};
