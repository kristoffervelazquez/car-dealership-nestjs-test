import { Brand } from 'src/brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';
export const BRANDS_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'Toyota',
    createdAt: new Date().toISOString(),
  },
  {
    id: uuid(),
    name: 'Kia',
    createdAt: new Date().toISOString(),
  },
  {
    id: uuid(),
    name: 'Ford',
    createdAt: new Date().toISOString(),
  },
];
