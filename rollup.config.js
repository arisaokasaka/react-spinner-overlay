import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import serve from "rollup-plugin-serve";
import replace from "@rollup/plugin-replace";

// `yarn build` -> all rollup
// `yarn watch` -> rollup only for demo
const watch = process.env.ROLLUP_WATCH;

const config = [];

// skip when watching
if (!watch) {
  const formatTypes = [
    {
      name: "cjs",
    },
    {
      name: "esm",
    },
    {
      name: "umd",
    },
  ];

  formatTypes.forEach((formatType) => {
    const conf = {
      input: "src/index.ts",
      output: {
        name: "react-spinner-overlay",
        file: `dist/index.${formatType.name}.js`,
        format: formatType.name,
        exports: "auto",
        globals: {
          react: "React",
        },
      },
      external: ["react"],
      plugins: [
        resolve({ browser: true }),
        babel({
          exclude: "node_modules/**",
          babelHelpers: "bundled",
        }),
        commonjs({ extensions: [".js", ".ts"] }),
        typescript({ outDir: "dist" }),
        postcss({ extensions: [".css"] }),
        terser(),
      ],
    };

    config.push(conf);
  });
}

// config for demo
config.push({
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
    typescript({
      tsconfig: "./tsconfig.demo.json",
      declaration: false,
    }),
    babel({
      exclude: "node_modules/**",
      babelHelpers: "bundled",
    }),
    terser(),
    watch &&
      serve({
        open: true,
        verbose: true,
        contentBase: ["", "examples/public"],
        host: "localhost",
        port: 3010,
      }),
  ],
});

export default config;
