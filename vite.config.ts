import { builtinModules } from 'module';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    conditions: ['node', 'import', 'module', 'default'],
  },
  build: {
    lib: {
      entry: 'src/main.ts',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: [...builtinModules, ...builtinModules.map((i) => `node:${i}`)],
      output: { banner: `#!/usr/bin/env node` },
    },
  },
  plugins: [
    {
      name: 'vite:appnify',
      enforce: 'pre',
      transform(code, id) {
        if (id.includes('iconv-lite/lib/index.js')) {
          code = code.replace('./streams', './streams.js');
          code = code.replace('./extend-node', './extend-node.js');
          return code;
        }
        return null;
      },
    },
  ],
});
