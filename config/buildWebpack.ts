import webpack from 'webpack';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/types';

export function buildWebpack(options: BuildOptions): webpack.Configuration {
  const isDev = options.mode === 'development';
  const isProd = options.mode === 'production';
  return {
    mode: options?.mode ?? 'development',
    entry: options.paths.entry, 
    output: {
      path: options.paths.output,
      filename: '[name].[contenthash].js', 
      clean: true, 
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'inline-source-map' : false, // для отслеживания ошибок в режиме разработки
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
