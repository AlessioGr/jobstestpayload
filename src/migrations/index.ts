import * as migration_20241004_175125 from './20241004_175125.js';
import * as migration_20241004_182616 from './20241004_182616.js';

export const migrations = [
  {
    up: migration_20241004_175125.up,
    down: migration_20241004_175125.down,
    name: '20241004_175125',
  },
  {
    up: migration_20241004_182616.up,
    down: migration_20241004_182616.down,
    name: '20241004_182616'
  },
];
