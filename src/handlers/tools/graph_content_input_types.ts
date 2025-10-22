import { Request, Response } from 'express';

export const graphContentInputTypes = (req: Request, res: Response) => {
  const { contentTypeName } = req.body || {};
  if (!contentTypeName) return res.status(400).json({ ok:false, error:'contentTypeName required' });
  const map: Record<string,string[]> = {
    Article: ['ArticleWhereInput','ArticleOrderByInput','ArticleFacet'],
    BlogPost: ['BlogPostWhereInput','BlogPostOrderByInput','BlogPostFacet'],
    EventPage:['EventPageWhereInput','EventPageOrderByInput']
  };
  res.json({ ok:true, contentTypeName, inputTypes: map[contentTypeName] || [] });
};
