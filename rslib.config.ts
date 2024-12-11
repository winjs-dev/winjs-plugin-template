import { defineConfig } from '@rslib/core';

export default defineConfig({
  lib: [
    { format: 'esm', syntax: 'es2021'},
    { format: 'cjs', syntax: 'es2019', dts: true },
  ],
});
