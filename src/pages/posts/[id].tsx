import { useParams } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Particles from '@/components/t/Particles'
import Loading from '@/components/loading'

const PostPage = () => {
  const { id, title } = useParams<{ id: string, title: string }>()
  const MarkdownComponent = lazy(() => import(`../../posts/${id}.md`))

  return (<>
    <div className="fixed top-0 left-0 w-full h-full z-2  ">
      <Particles
        particleColors={["#ffffff"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover
        alphaParticles={false}
        disableRotation={false}
        pixelRatio={1}
      />
    </div>
   
    <article className="post-content relative z-1">
      <Suspense fallback={<Loading />}>
        <h1>{title}</h1>
        <MarkdownComponent  />
      </Suspense>
    </article>
  </>
  )
}

export default PostPage