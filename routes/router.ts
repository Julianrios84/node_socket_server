import { Router, Request, Response } from "express";

const router = Router();

router.get('/message', (req: Request, res: Response) => {
  res.json({
    event: true,
    message: 'All ok'
  })
})

router.post('/message', (req: Request, res: Response) => {
  const { owner, message } = req.body
  res.json({
    event: true,
    message: 'All ok'
  })
})

router.post('/message/:id', (req: Request, res: Response) => {
  const id = req.params.id;
  const { owner, message } = req.body
  res.json({
    event: true,
    message: 'All ok'
  })
})

export default router;