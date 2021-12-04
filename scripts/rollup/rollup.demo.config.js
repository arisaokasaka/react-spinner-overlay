import resolve from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import serve from "rollup-plugin-serve";
import replace from "@rollup/plugin-replace";

// `yarn build:demo` -> production mode
// `yarn watch` -> development mode
const watch = process.env.ROLLUP_WATCH;

const config = [
  {
    input: "examples/src/index.tsx",
    output: {
      file: `examples/public/bundle.js`,
      format: "iife", // immediately-invoked function expression — suitable for <script> tags,
    },
    plugins: [
      resolve(),
      replace({
        preventAssignment: true,
        "process.env.NODE_ENV": JSON.stringify("development"),
      }),
      commonjs(),
      postcss({ extensions: [".css"] }),
      typescript({ tsconfig: "tsconfig.demo.json" }),
      babel({
        exclude: "node_modules/**",
        babelHelpers: "bundled",
      }),
      !watch && terser(),
      watch &&
        serve({
          open: true,
          verbose: true,
          contentBase: ["", "examples/public"],
          host: "localhost",
          port: 3010,
        }),
    ],
  },
];

export default config;
