import { Router, Request, Response } from "express";
import Server from "../classes/server";

const router = Router();

router.get('/message', (req: Request, res: Response) => {
  res.json({
    event: true,
    message: 'All ok'
  })
})

router.post('/message', (req: Request, res: Response) => {
  const { from, message } = req.body
  const payload = {
    from,
    message
  }

  const server = Server.Instance;
  server.io.emit('message-new', payload);

  res.json({
    event: true,
    message: 'All ok'
  })
})

router.post('/message/:id', (req: Request, res: Response) => {
  const id = req.params.id;
  const { from, message } = req.body

  const payload = {
    from,
    message
  }

  const server = Server.Instance;
  server.io.in(id).emit('message-private', payload);

  res.json({
    event: true,
    message: 'All ok'
  })
})

export default router;