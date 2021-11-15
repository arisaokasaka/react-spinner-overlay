import styles from "rollup-plugin-styles";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
const autoprefixer = require("autoprefixer");

const MODE = [
  {
    format: "cjs",
  },
  {
    format: "esm",
  },
  {
    format: "umd",
  },
];

const config = [];

MODE.forEach((mode) => {
  var conf = {
    input: "src/index.ts",
    output: {
      name: "react-spinner-overlay",
      file: `dist/index.${mode.format}.js`,
      format: mode.format,
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
      styles({
        postcss: {
          plugins: [autoprefixer()],
        },
      }),
      terser(),
    ],
  };

  config.push(conf);
});

export default config;
