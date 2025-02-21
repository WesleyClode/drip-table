import { IConfig } from '@umijs/core';
import { defineConfig } from 'dumi';
import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';
import path from 'path';

const umiConfig: IConfig = {
  title: 'DripTable',
  favicon: 'https://img13.360buyimg.com/imagetools/jfs/t1/204416/31/13736/8631/617f8334E9ae79a1c/5b96dfdce922e5fb.png',
  logo: 'https://img11.360buyimg.com/imagetools/jfs/t1/156025/11/22552/175523/617fb164E678b9642/6b8c55c5079b9819.jpg',
  outputPath: 'docs-dist',
  hash: true,
  dynamicImport: {
    loading: '/docs/loading.js',
  },
  locales: [['zh-CN', '中文']],
  ignoreMomentLocale: false,
  navs: [
    {
      title: '渲染器',
      path: '/drip-table',
      children: [
        { title: '使用指南', path: '/drip-table' },
        { title: '常见问题', path: '/drip-table/faq' },
        { title: '案例展示', path: '/drip-table/sample' },
        { title: '更新日志', path: '/drip-table/changelog' },
      ],
    },
    {
      title: '生成器',
      path: '/drip-table-generator',
      children: [
        { title: '使用指南', path: '/drip-table-generator' },
        { title: '常见问题', path: '/drip-table-generator/faq' },
        { title: '案例展示', path: '/drip-table-generator/preview' },
        { title: '更新日志', path: '/drip-table-generator/changelog' },
      ],
    },
    {
      title: 'DEMO',
      path: '/demo',
    },
    {
      title: '讨论组',
      path: 'https://github.com/JDFED/drip-table/discussions',
    },
    {
      title: '',
      path: 'https://github.com/JDFED/drip-table',
    },
  ],
  menus: {
    '/drip-table': [
      {
        title: '指南',
        path: '/drip-table/guide',
        children: [
          '/drip-table/guide/index.md',
          '/drip-table/guide/fast-start.md',
          '/drip-table/guide/basic-demo.md',
        ],
      },
      {
        title: '案例展示',
        path: '/drip-table/sample',
        children: [],
      },
      {
        title: '类型',
        path: '/drip-table/types',
        children: [
          '/drip-table/types/generic-render-element',
          '/drip-table/types/column-schema',
        ],
      },
      {
        title: '参数',
        path: '/drip-table/props',
        children: [
          '/drip-table/props/index',
          '/drip-table/props/class-name',
          '/drip-table/props/style',
          '/drip-table/props/ref',
          '/drip-table/props/driver',
          '/drip-table/props/schema',
          '/drip-table/props/ajv',
          '/drip-table/props/data-source',
          '/drip-table/props/selected-row-keys',
          '/drip-table/props/display-column-keys',
          '/drip-table/props/total',
          '/drip-table/props/current-page',
          '/drip-table/props/loading',
          '/drip-table/props/components',
          '/drip-table/props/slots',
          '/drip-table/props/ext',
          '/drip-table/props/sticky',
          '/drip-table/props/title',
          '/drip-table/props/footer',
          '/drip-table/props/subtable-title',
          '/drip-table/props/subtable-footer',
          '/drip-table/props/row-expandable',
          '/drip-table/props/expanded-row-render',
          '/drip-table/props/component-did-mount',
          '/drip-table/props/component-did-update',
          '/drip-table/props/component-will-unmount',
          '/drip-table/props/on-row-click',
          '/drip-table/props/on-row-double-click',
          '/drip-table/props/on-selection-change',
          '/drip-table/props/on-search',
          '/drip-table/props/on-insert-button-click',
          '/drip-table/props/on-filter-change',
          '/drip-table/props/on-page-change',
          '/drip-table/props/on-change',
          '/drip-table/props/on-display-column-keys-change',
          '/drip-table/props/on-event',
        ],
      },
      {
        title: 'Schema',
        path: '/drip-table/schema',
        children: [
          '/drip-table/schema/index',
          '/drip-table/schema/id',
          '/drip-table/schema/class-name',
          '/drip-table/schema/style',
          '/drip-table/schema/inner-class-name',
          '/drip-table/schema/inner-style',
          '/drip-table/schema/columns/index',
          '/drip-table/schema/columns/key',
          '/drip-table/schema/columns/title',
          '/drip-table/schema/columns/data-index',
          '/drip-table/schema/columns/default-value',
          '/drip-table/schema/columns/width',
          '/drip-table/schema/columns/align',
          '/drip-table/schema/columns/description',
          '/drip-table/schema/columns/fixed',
          '/drip-table/schema/columns/hidable',
          '/drip-table/schema/columns/filters',
          '/drip-table/schema/columns/default-filtered-value',
          '/drip-table/schema/columns/component',
          '/drip-table/schema/columns/options',
          '/drip-table/schema/bordered',
          '/drip-table/schema/show-header',
          '/drip-table/schema/header/index',
          '/drip-table/schema/header/style',
          '/drip-table/schema/header/elements',
          '/drip-table/schema/footer',
          '/drip-table/schema/pagination',
          '/drip-table/schema/size',
          '/drip-table/schema/sticky',
          '/drip-table/schema/scroll',
          '/drip-table/schema/row-selection',
          '/drip-table/schema/ellipsis',
          '/drip-table/schema/virtual',
          '/drip-table/schema/row-key',
          '/drip-table/schema/subtable',
        ],
      },
      {
        title: '常见问题',
        path: '/drip-table/faq',
      },
      {
        title: '更新日志',
        path: '/drip-table/changelog',
        children: [],
      },
    ],
    '/drip-table-generator': [
      {
        title: '使用指南',
        path: '/drip-table-generator/guide',
        children: [
          '/drip-table-generator/guide/index.md',
          '/drip-table-generator/guide/fast-start.md',
        ],
      },
      {
        title: '使用教程',
        path: '/drip-table-generator/functions',
        children: [
          '/drip-table-generator/functions/index.md',
          '/drip-table-generator/functions/refs.md',
          '/drip-table-generator/functions/custom.md',
        ],
      },
      {
        title: '参数',
        path: '/drip-table-generator/props',
        children: [
          '/drip-table-generator/props/index',
          '/drip-table-generator/props/custom-component-panel',
          '/drip-table-generator/props/custom-global-config-panel',
          '/drip-table-generator/props/data-fields',
          '/drip-table-generator/props/mock-data-source',
          '/drip-table-generator/props/no-data-feedback',
          '/drip-table-generator/props/on-export-schema',
          '/drip-table-generator/props/show-component-layout',
          '/drip-table-generator/props/show-tool-layout',
        ],
      },
      {
        title: '内置组件库',
        path: '/drip-table-generator/components',
        children: [
          '/drip-table-generator/components/index',
          '/drip-table-generator/components/group',
          '/drip-table-generator/components/lowcode',
          '/drip-table-generator/components/cdn-link',
        ],
      },
      {
        title: '常见问题',
        path: '/drip-table-generator/faq',
      },
      {
        title: '案例展示',
        path: '/drip-table-generator/preview',
      },
      {
        title: '更新日志',
        path: '/drip-table-generator/changelog',
        children: [],
      },
    ],
  },
  mode: 'site',
  esbuild: {},
  publicPath: '/',
  copy: [
    { from: './docs/assets', to: './assets' },
  ],
  exportStatic: {},
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'lib',
        style: true,
      },
      'antd',
    ],
    [
      'import',
      {
        libraryName: '@alifd/next',
        libraryDirectory: 'lib',
      },
      '@alifd/next',
    ],
  ],
  chainWebpack(config, { webpack }) {
    config.plugin('monaco-editor').use(MonacoWebpackPlugin);
  },
  alias: {
    'drip-table': path.resolve(__dirname, './packages/drip-table'),
    'drip-table-driver-antd': path.resolve(__dirname, './packages/drip-table-driver-antd'),
    'drip-table-generator': path.resolve(__dirname, './packages/drip-table-generator'),
  },
  proxy: {
    '/storage.jd.com': {
      target: 'https://storage.jd.com/',
      changeOrigin: true,
      pathRewrite: { '^/storage.jd.com': '' },
    },
  },
  // more config: https://d.umijs.org/config
  styles: [
    `.__dumi-default-navbar-logo { width:146px !important; color: transparent !important; }
    .__dumi-default-layout-hero,
    .__dumi-default-layout-toc li a.active::before,
    .__dumi-default-menu-inner ul li a::before,
    .__dumi-default-menu-inner ul li > span::before,
    .__dumi-default-navbar nav > span > a.active::after,
    .__dumi-default-menu-list > li > a::after
    { background-image: linear-gradient( 90deg, #00C6FF 0%, #0072FF 100% );}`,
    '.__dumi-default-layout-hero h1 { color: #fff !important; }',
    '.__dumi-default-layout-hero h1 + div .markdown { color: #fff !important; }',
    '.__dumi-default-layout-hero button { border: 1px solid #fff !important; color: #fff !important; }',
    '.__dumi-default-layout-hero a:last-child button { background: #fff !important; color: #2b64ff !important; }',
    `.__dumi-default-navbar nav a:hover,
    .__dumi-default-navbar a.active,
    .__dumi-default-menu-inner ul li,
    .__dumi-default-layout-toc li a:hover,
    ul[role='slug-list'] li > a.active,
    .__dumi-default-menu-inner ul li a:hover,
    .__dumi-default-menu-inner ul li > span:hover,
    .__dumi-default-menu-inner ul li a.active,
    .__dumi-default-menu-inner ul li > span.active,
    .__dumi-default-layout-footer-meta > span:last-child::before
    { color: #2b64ff !important; }`,
    '.__dumi-default-menu-list > li > a.active { background: linear-gradient(to left, #f8faff, rgb(248 255 253 / 0%)); !important; }',
    '.__dumi-default-layout-content { max-width:100% !important; }',
    '.__dumi-default-layout[data-route="/"] .__dumi-default-layout-footer-meta { display: none; }',
    // navbar customization
    '.__dumi-default-navbar nav > :nth-child(6) { position: relative; margin-left: 40px; display: inline-block; color: #454d64; height: 64px; cursor: pointer; font-size: 14px; line-height: 64px; text-decoration: none; letter-spacing: 0; background-image: url("https://img14.360buyimg.com/imagetools/jfs/t1/220852/40/8646/5883/61c2dd7aE04a55d46/e930932b7dee46b0.png"); background-size: 100%; background-repeat: no-repeat; background-position-x: center; background-position-y: center; }',
    '.__dumi-default-navbar nav > :nth-child(6) a { display: inline-block; width: 30px; }',
    '.__dumi-default-navbar nav > :nth-child(6) > a > svg, .__dumi-default-dark { display: none; }',
    '.__dumi-default-navbar { padding: 0 0 0 58px; }',
    '.__dumi-default-previewer-demo { overflow: auto; }',
  ],
};

export default defineConfig(umiConfig);
