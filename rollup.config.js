import ts from 'rollup-plugin-ts';
import pkg from './package.json';

export default {
    input: 'src/index.ts',
    output: {
        file: pkg.module,
        format: 'esm',
        sourcemap:  'inline'
    },
    external: [ '@emotion/styled', 'react' ],
    plugins: [ts({ clean: true })]
};