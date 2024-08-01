import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { Configuration, ProgressPlugin } from 'webpack';
import FileIncludeWebpackPlugin from 'file-include-webpack-plugin-replace';
import { BuildOptions } from './types/types';
import path from 'path';

// const srcFolder = 'src';
// const builFolder = 'dist';
// const rootFolder = path.basename(path.resolve());

export function buildPlugins(options: BuildOptions): Configuration['plugins'] {
  const isDev = options.mode === 'development';
  const isProd = options.mode === 'production';
  // const htmlPages = [
  //   new FileIncludeWebpackPlugin({
  //     source: 'public',
  //     htmlBeautifyOptions: {
  //       'indent-with-tabs': true,
  //       indent_size: 3,
  //     },
  //     replace: [
  //       { regex: '<link rel="stylesheet" href="css/style.min.css">', to: '' },
  //       { regex: '../img', to: 'img' },
  //       { regex: '@img', to: 'img' },
  //     ],
  //   }),
  // ];

  // const plugins: Configuration['plugins'] = [...htmlPages];
  //[].concat(options.paths.html.map((page) => new HtmlWebpackPlugin({ template: page, inject:true, filename: page })));
  
   const plugins: Configuration['plugins'] = [
     //  new HtmlWebpackPlugin({ template: options.paths.html }), // плагин для работы с html, обязательно создаем новый экземляр класса плагина. Если не указвать template, создаться дефолтный html файл
     // ...options.paths.html.map(page => new HtmlWebpackPlugin({ template: page, filename: page })),
     new HtmlWebpackPlugin({
       title: 'Project Demo',
       hash: true,
       alwaysWriteToDisk: true,

       template: 'public/index.html',
     }),
     new HtmlWebpackPlugin({
       title: 'Page2',
       hash: true,
       alwaysWriteToDisk: true,
       filename: 'file.html',
       template: 'public/file.html',
     }),
   ];


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
