import { Router, type Request, type Response } from 'express';
import { insertRequest, getAllRequests } from '../db/database.js';

export const requestsRouter = Router();

requestsRouter.post('/', (req: Request, res: Response): void => {
  const { name, email, project } = req.body;

  if (!name || !email || !project) {
    res.status(400).json({ error: 'Name, email, and project are required fields.' });
    return;
  }

  try {
    const result = insertRequest({ name: String(name), email: String(email), project: String(project) });
    res.status(201).json({ success: true, id: result.id });
  } catch (error) {
    console.error('Failed to insert request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

requestsRouter.get('/', (_req: Request, res: Response): void => {
  try {
    const requests = getAllRequests();
    res.json({ success: true, data: requests });
  } catch (error) {
    console.error('Failed to get requests:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
