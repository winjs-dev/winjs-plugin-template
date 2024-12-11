import { defineConfig } from 'win';

export default defineConfig({
  plugins: ['../src/index.ts'],
  example: {
    foo: 'bar',
  },
});
