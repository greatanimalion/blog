import ElectricBorder from '@/components/t/ElectricBorder'
import PostCard from '../components/PostCard'
import { posts } from '../posts/index'
import SplitText from '@/components/t/SplitText'
import Ferrofluid from '@/components/t/Ferrofluid'
export default function Home() {
  return (<>
    <div   className='w-full h-full fixed top-0 left-0'>
      <Ferrofluid
        colors={["#ffffff", "#ffffff", "#ffffff"]}
        speed={0.5}
        scale={1.6}
        turbulence={1}
        fluidity={0.1}
        rimWidth={0.2}
        sharpness={2.5}
        shimmer={1.5}
        glow={2}
        flowDirection="down"
        opacity={1}
        mouseInteraction
        mouseStrength={1}
        mouseRadius={0.35}
      />
    </div>
    <div  >
      <h2><SplitText text="所有文章" /></h2>
      <p className="posts-count">共 {posts.length} 篇文章</p>

      {posts.length === 0 ? (
        <div className="empty-state">
          <p>暂无文章，请在 src/posts/ 目录下创建 .md 文件</p>
        </div>
      ) : (
        <div className="cards">
          {posts.map(post => (
            <ElectricBorder
              color="#7df9ff"
              speed={1}
              chaos={0.12}
              style={{ borderRadius: 16 }}
            >
              <PostCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                date={post.date}
                tags={post.tags}
                excerpt={post.excerpt}
              />
            </ElectricBorder>
          ))}
        </div>
      )}
    </div>
  </>
  )
}