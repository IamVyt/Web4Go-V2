import express from 'express';
import cors from 'cors';
import { requestsRouter } from './routes/requests.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API routes
app.use('/api/requests', requestsRouter);

app.listen(PORT, () => {
  console.log(`[Web4Go API] Server running on http://localhost:${PORT}`);
});
