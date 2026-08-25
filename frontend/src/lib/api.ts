import type { RequestFormData } from '../types';

const API_BASE = '/api';

export async function submitRequest(data: RequestFormData): Promise<{ success: boolean; id: number }> {
  const res = await fetch(`${API_BASE}/requests`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to submit request');
  return res.json();
}
