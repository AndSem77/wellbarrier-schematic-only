import { nanoid } from 'nanoid';
const timestamp = Date.now();

export const equipment = [
  {
    id: nanoid(),
    name: 'crown valve',
    barrier: 'secondary',
    quantity: 1,
    status: 'none',
  },
];
