import resolve from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";

const formatTypes = ["cjs", "esm", "umd"];

const config = formatTypes.map((formatType) => {
  return {
    input: "src/index.ts",
    output: {
      name: "react-spinner-overlay",
      file: `dist/index.${formatType}.js`,
      format: formatType,
      exports: "auto",
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
      },
    },
    external: ["react", "react-dom"],
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
});

export default config;
