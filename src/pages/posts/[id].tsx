import { useParams } from 'react-router-dom'
import { lazy, Suspense } from 'react'

const PostPage = () => {
  const { id } = useParams<{ id: string }>()
  const MarkdownComponent = lazy(() => import(`@/pages/posts/${id}.md`))

  return (
    <article className="post-content">
      <Suspense fallback={<div>加载中...</div>}>
        <MarkdownComponent />
      </Suspense>
    </article>
  )
}

export default PostPage