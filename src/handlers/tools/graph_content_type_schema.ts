import { Request, Response } from 'express';

export const graphContentTypeSchema = (req: Request, res: Response) => {
  const types = ['Article','BlogPost','EventPage','Author','LandingPage'];
  res.json({ ok: true, types, count: types.length });
};
