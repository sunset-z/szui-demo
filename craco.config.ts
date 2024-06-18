import { CracoConfig } from '@craco/types';
import CracoLessPlugin from 'craco-less';
import path from 'path';

const config: CracoConfig = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
    },
  ],
};

export default config;
