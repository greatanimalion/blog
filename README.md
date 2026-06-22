# React + Vite 静态博客系统

一个基于 React 18 + Vite 构建的静态个人博客系统，支持 Markdown 文章自动转换为页面。

## 技术栈

- React 18
- TypeScript
- Vite
- React Router 6
- @pity/vite-plugin-react-markdown
- Tailwind CSS v4
- github-markdown-css

## 功能特性

- Markdown 自动转换：在 `src/posts/` 目录下创建 `.md` 文件，构建时自动转换为 React 组件
- Frontmatter 元数据：支持文章标题、日期、标签等元数据
- Tailwind CSS：原子化 CSS 样式
- 欢迎页特效：进入博客前展示自我介绍动画页
- 静态生成：构建后生成纯静态文件，可部署到任意静态服务器
- GitHub Actions：支持 CI/CD 自动构建与部署

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm dev
```

访问 http://localhost:5173 查看博客。

### 构建生产版本

```bash
pnpm build
```

生成的静态文件在 `dist` 目录。

## 创建文章

在 `src/posts/` 目录下创建 `YYYY-MM-DD-标题.md` 文件：

```js
---
title: 文章标题
date: 2025-03-18
tags: [React, 博客]
---
正文内容...
```
当md中需要应用本地图片时，需要将图片放在`src/public/`目录下，然后在md中引用，引用时需要加入/blog前缀，如将aaa.img放在public下，引用时为`<img src="/blog/aaa.img" alt="aaa" />`。

```js
---
title: 文章标题
date: 2025-03-18
tags: [React, 博客]
---
正文内容...
<img src="/public/vite.svg" alt="setup 函数" />
```

其中 Frontmatter 元数据必须包含 `title`、`date`、`tags` 字段。

## 项目结构

```
project-root/
├── src/
│   ├── pages/              # 页面组件
│   │   ├── welcome.tsx     # 欢迎页（自我介绍特效）
│   │   ├── index.tsx       # 首页（文章列表）
│   │   └── posts/
│   │       └── [id].tsx    # 文章详情页（动态路由）
│   ├── posts/              # Markdown 文章源文件
│   │   ├── index.ts        # 文章元数据解析
│   │   └── *.md
│   ├── components/         # 公共组件
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── PostCard.tsx
│   ├── router/             # 路由配置
│   │   └── index.tsx
│   ├── layout/             # 布局组件
│   │   └── home.tsx
│   ├── main.tsx            # 入口文件
│   ├── index.css           # 全局样式（含 Tailwind）
│   └── env.d.ts            # 类型声明
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## 部署

### GitHub Pages（推荐）

1. 在仓库 Settings → Pages 中，Source 选择 `GitHub Actions`
2. 推送代码到 `main` 分支，GitHub Actions 会自动构建并部署
3. 访问 `https://<用户名>.github.io/<仓库名>/` 查看博客

### 其他平台

- Netlify
- Vercel
- 任何支持静态文件的服务器

## 项目工作流

1. 在 `src/posts/` 目录下创建 `.md` 文件（含 Frontmatter 元数据）
2. Vite 开发服务器自动热更新，即写即看
3. 构建时，Markdown 文件会被编译为 React 组件
4. 首页通过 `import.meta.glob` 扫描所有 Markdown 文件，提取元数据生成文章列表
5. 文章详情页通过动态路由 `/posts/:id` 匹配并懒加载对应的 Markdown 组件
6. 推送代码到 GitHub → GitHub Actions 自动构建并部署到 GitHub Pages