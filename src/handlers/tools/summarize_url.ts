import { Request, Response } from 'express';
import fetch from 'node-fetch';

export const summarizeUrl = async (req: Request, res: Response) => {
  const { url } = req.body || {};
  if (!url) return res.status(400).json({ ok:false, error:'url required' });
  try {
    const resp = await fetch(url, { timeout: 5000 });
    const text = await resp.text();
    const snippet = text.replace(/\s+/g,' ').slice(0,2000);
    const summary = snippet.split('.').slice(0,3).join('.').trim();
    return res.json({ ok:true, url, summary: summary || snippet.slice(0,200) });
  } catch (e:any) {
    return res.status(500).json({ ok:false, error:String(e) });
  }
};
