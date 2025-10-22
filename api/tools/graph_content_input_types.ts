import { NowRequest, NowResponse } from '@vercel/node';
export default (req: NowRequest, res: NowResponse) => {
  const name = req.body?.contentTypeName;
  if (!name) return res.status(400).json({ ok:false, error:'contentTypeName required' });
  const map:any = { Article:['ArticleWhereInput','ArticleOrderByInput'] };
  res.json({ ok:true, inputTypes: map[name]||[] });
};
