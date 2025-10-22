import { NowRequest, NowResponse } from '@vercel/node';
export default (req: NowRequest, res: NowResponse) => {
  const query = req.body?.query;
  if (!query) return res.status(400).json({ ok:false, error:'query required' });
  if (query.includes('Article') && query.includes('total')) return res.json({ ok:true, data:{ Article:{ total: 1234 } } });
  return res.json({ ok:true, query, note:'mocked' });
};
