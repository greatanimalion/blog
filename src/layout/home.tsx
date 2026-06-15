const LoadingComponent = () => <div className="loading">加载中...</div>
import { lazy, Suspense } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const HomeLayout = ({children}: {children: React.ReactNode}) => {
  return (
     <div className="app">
            <Header />
            <main className="container">
              <Suspense fallback={<LoadingComponent />}>
                {children}
              </Suspense>
            </main>
            <Footer />
          </div>
  )
}
export default HomeLayout