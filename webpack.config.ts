import path from 'path';
import { buildWebpack } from './config/buildWebpack';
import { BuildMode, BuildPaths } from './config/types/types';
interface EnvVariables {
  mode: BuildMode;
  port: number;
}
const pages = ['index', 'file', 'dropdown', 'menu'].map((page) => ({ template: path.resolve(__dirname, 'public', `${page}.html`), filename: `${page}.html` }));

export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    output: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    html: pages,
  };
  return buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths,
  });
};
