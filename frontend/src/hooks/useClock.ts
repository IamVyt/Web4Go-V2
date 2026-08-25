import { useEffect, useState } from 'react';
import { MONTHS } from '../lib/constants';

export function useClock() {
  const [time, setTime] = useState('9:41am');
  const [date, setDate] = useState('12 March, 2025');

  useEffect(() => {
    function update() {
      const now = new Date();
      let h = now.getHours();
      const m = now.getMinutes();
      const mer = h >= 12 ? 'pm' : 'am';
      h = h % 12 || 12;
      setTime(`${h}:${String(m).padStart(2, '0')}${mer}`);
      setDate(`${now.getDate()} ${MONTHS[now.getMonth()]}, ${now.getFullYear()}`);
    }
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return { time, date };
}
