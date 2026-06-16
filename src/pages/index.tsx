
import PostCard from '../components/PostCard'
import { posts } from '../posts/index'
import SplitText from '@/components/t/SplitText'
// import Ferrofluid from '@/components/t/Ferrofluid'
import DotGrid from '@/components/t/DotGrid'
export default function Home() {
  return (<>
    <div   className='w-full h-full fixed top-0 left-0 z-1'>
       <DotGrid
    dotSize={5}
    gap={15}
    baseColor="#2F293A"
    activeColor="#5227FF"
    proximity={120}
    shockRadius={250}
    shockStrength={5}
    resistance={750}
    returnDuration={1.5}
  />
    </div>
    <div className="pt-20! relative z-9">
      <h2><SplitText text="所有文章" /></h2>
      <p className="posts-count">共 {posts.length} 篇文章</p>

      {posts.length === 0 ? (
        <div className="empty-state">
          <p>暂无文章，请在 src/posts/ 目录下创建 .md 文件</p>
        </div>
      ) : (
        <div> 
          {posts.map((post,i) => (
              <PostCard
                key={i}
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
  </>
  )
}