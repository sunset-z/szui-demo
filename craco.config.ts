import { CracoConfig } from '@craco/types';
import CracoLessPlugin from 'craco-less';
import path from 'path';

const isDev = process.env.NODE_ENV !== 'production';

const config: CracoConfig = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
    configure: {
      output: {
        publicPath: isDev ? '/' : './',
      },
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
    },
  ],
};

export default config;
