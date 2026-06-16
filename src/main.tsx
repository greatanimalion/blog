import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import 'github-markdown-css'
import './index.css'
import { router } from './router'

// GitHub Pages SPA 路由重定向
const redirect = sessionStorage.getItem('redirect')
if (redirect) {
  sessionStorage.removeItem('redirect')
  // 解析路径并替换当前历史记录
  const targetPath = redirect.replace('/blog', '')
  history.replaceState(null, '', '/blog' + targetPath)
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider future={{
      v7_startTransition: true,
    }} router={router} />
  </React.StrictMode>
)
