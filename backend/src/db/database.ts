import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import type { RequestSubmission } from '../types/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataDir = path.resolve(__dirname, '../../data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(dataDir, 'requests.json');

// Initialize database file if not present
if (!fs.existsSync(dbPath)) {
  fs.writeFileSync(dbPath, JSON.stringify([], null, 2), 'utf-8');
}

function readAll(): RequestSubmission[] {
  try {
    const raw = fs.readFileSync(dbPath, 'utf-8');
    return JSON.parse(raw) as RequestSubmission[];
  } catch (error) {
    console.error('Error reading database file:', error);
    return [];
  }
}

function writeAll(data: RequestSubmission[]): void {
  const tempPath = `${dbPath}.tmp`;
  fs.writeFileSync(tempPath, JSON.stringify(data, null, 2), 'utf-8');
  fs.renameSync(tempPath, dbPath);
}

export function insertRequest(data: RequestSubmission): { id: number } {
  const items = readAll();
  const nextId = items.length > 0 ? Math.max(...items.map((i) => i.id || 0)) + 1 : 1;
  const newRecord: RequestSubmission = {
    id: nextId,
    name: data.name,
    email: data.email,
    project: data.project,
    created_at: new Date().toISOString(),
  };

  items.push(newRecord);
  writeAll(items);

  return { id: nextId };
}

export function getAllRequests(): RequestSubmission[] {
  const items = readAll();
  return items.sort((a, b) => {
    const timeA = new Date(a.created_at || 0).getTime();
    const timeB = new Date(b.created_at || 0).getTime();
    return timeB - timeA;
  });
}
