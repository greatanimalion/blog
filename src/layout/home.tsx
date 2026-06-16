import Loading from '@/components/loading'
import {  Suspense } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const HomeLayout = ({children}: {children: React.ReactNode}) => {
  return (
     <div className="app">
            <Header />
            <main className="container">
              <Suspense fallback={<Loading />}>
                {children}
              </Suspense>
            </main>
            <Footer />
          </div>
  )
}
export default HomeLayout