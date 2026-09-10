import reactHooks from 'eslint-plugin-react-hooks';
import { baseConfig } from './base.js';

export const nextJsConfig = [
  ...baseConfig,
  reactHooks.configs['recommended-latest'],
];
