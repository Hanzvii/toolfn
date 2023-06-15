import nodeRelve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import alias from '@rollup/plugin-alias'
import path from 'path'
import terser from '@rollup/plugin-terser'
import typescript from 'rollup-plugin-typescript2'
import { fileURLToPath } from "node:url"
import { dirname } from "node:path"
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);
export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.js',
            format: 'cjs'
        },
        {
            file: 'dist/index.esm.js',
            format: 'es'
        },
        {
            file: 'dist/index.aio.js',
            format: 'umd',
            name: 'toolfn'
        }
    ],
    plugins: [
        nodeRelve(),
        commonjs(),
        alias({
            entries:[
                {
                  find:'@',
                  replacement:path.resolve(__dirname,'./src/package')
                }
              ]
        }),
        typescript({  }),
        terser()
    ]
}