import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import { dts } from 'rollup-plugin-dts'
const packageJson = require('./package.json')
import terser from '@rollup/plugin-terser'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      terser()
    ]
  },
  {
    input: 'dist/esm/index.d.ts',
    output: [
      {
        file: 'dist/index.d.ts',
        format: 'esm',
        sourcemap: false
      }
    ],
    plugins: [dts()]
  }
]
