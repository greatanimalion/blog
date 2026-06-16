
import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'
import Welcome from '@/pages/welcome'
import HomeLayout from '@/layout/home'
import AboutMe from '@/pages/aboutMe'

const Home = lazy(() => import('@/pages/index'))
const PostPage = lazy(() => import('@/pages/posts/[id]'))


export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Welcome />
    },
    {
      path: '/home',
      element: (
        <HomeLayout> <Home /></HomeLayout>

      )
    },{
      path: '/aboutMe',
      element: (
        <HomeLayout> <AboutMe /></HomeLayout>
      )
    },
    {
      path: '/posts/:id',
      element: (
        <HomeLayout> <PostPage /></HomeLayout>
      )
    }
  ],{
    basename: '/blog/'
  }
)