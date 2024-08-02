import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { Configuration, ProgressPlugin } from 'webpack';
import { BuildOptions } from './types/types';

export function buildPlugins(options: BuildOptions): Configuration['plugins'] {
  const isDev = options.mode === 'development';
  const isProd = options.mode === 'production';
 
  const plugins: Configuration['plugins'] = [].concat(
    options.paths.html.map((page) => new HtmlWebpackPlugin({ template: page.template, hash: true, filename: page.filename, alwaysWriteToDisk: true }))
  );
  if (isDev) {
    plugins.push(new ProgressPlugin()); // показывает процесс сборки
  }

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
      })
    ); //выносит css в отдельный файл
  }

  return plugins;
}
