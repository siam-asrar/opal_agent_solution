import { Request, Response } from 'express';

export const graphContentGraphqlExecutor = (req: Request, res: Response) => {
  const { query } = req.body || {};
  if (!query) return res.status(400).json({ ok:false, error:'query required' });
  if (typeof query !== 'string') return res.status(400).json({ ok:false, error:'query must be string' });
  if (query.includes('Article') && query.includes('total')) {
    return res.json({ ok:true, data:{ Article:{ total: 1234 } } });
  }
  if (query.includes('BlogPost') && query.includes('total')) {
    return res.json({ ok:true, data:{ BlogPost:{ total: 432 } } });
  }
  res.json({ ok:true, query, note:'This is a mocked executor for demo purposes' });
};
