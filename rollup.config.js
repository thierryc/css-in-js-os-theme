import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import url from '@rollup/plugin-url'

import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named'
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named'
    }
  ],
  plugins: [
    url(),
    babel({
      exclude: 'node_modules/**',
    }),
    resolve({
      extensions: ['.js', '.jsx']
    }),
    commonjs()
  ],
  external: ['@emotion/core', '@emotion/styled', 'react', 'react-dom']
}
