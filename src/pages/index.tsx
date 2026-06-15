import PostCard from '../components/PostCard'
import { posts } from '../posts/index'
import SplitText from '@/components/t/SplitText'
export default function Home() {
  return (
    <div className="posts-list">
      <h2><SplitText text="所有文章" /></h2>
      <p className="posts-count">共 {posts.length} 篇文章</p>
      
      {posts.length === 0 ? (
        <div className="empty-state">
          <p>暂无文章，请在 src/posts/ 目录下创建 .md 文件</p>
        </div>
      ) : (
        <div className="cards">
          {posts.map(post => (
            <PostCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              date={post.date}
              tags={post.tags}
              excerpt={post.excerpt}
            />
          ))}
        </div>
      )}
    </div>
  )
}