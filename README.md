# Vue 3 + Vite 静态博客系统

一个基于 Vue 3 + Vite 构建的静态个人博客系统，支持 Markdown 文章自动生成路由。

## 技术栈

- Vue 3 (Composition API)
- Vite
- Vue Router 4
- unplugin-vue-markdown
- vite-plugin-pages
- github-markdown-css
- highlight.js

## 功能特性

- 自动路由生成：在 `src/posts/` 目录下创建 `.md` 文件即可自动生成路由
- Markdown 支持：支持完整的 Markdown 语法和 Frontmatter 元数据
- 代码高亮：使用 highlight.js 进行代码块高亮
- 静态生成：构建后生成纯静态文件，可部署到任意静态服务器

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:5173 查看博客。

### 构建生产版本

```bash
npm run build
```

生成的静态文件在 `dist` 目录。

## 创建文章

在 `src/posts/` 目录下创建 `YYYY-MM-DD-标题.md` 文件：

```yaml
---
title: 文章标题
date: 2025-03-18
tags: [Vue, 博客]
---

# 正文内容...
```

## 项目结构

```
project-root/
├── src/
│   ├── pages/           # 页面组件（自动路由）
│   │   └── index.vue    # 首页
│   ├── posts/           # Markdown 文章
│   ├── components/      # 组件
│   ├── layouts/         # 布局组件
│   ├── router/          # 路由配置
│   ├── App.vue
│   ├── main.js
│   └── style.css
├── index.html
├── vite.config.js
└── package.json
```

## 部署

可以部署到以下平台：
- GitHub Pages
- Netlify
- Vercel
- 任何支持静态文件的服务器
