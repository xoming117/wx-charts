import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

let banner = `
/*
 * charts for WeChat small app v1.0
 *
 * Contact: https://github.com/xiaolin3303
 * 2016-11-28
 *
 * Designed and built with all the love of Web
 */
`;

export default {
  entry: 'src/app.js',
  format: 'cjs',
  dest: 'dist/charts-min.js',
  plugins: [
      babel({
          exclude: 'node_modules/**',
      }),
      uglify()
  ],
  banner: banner
};