import { Link } from 'react-router-dom'

interface PostCardProps {
  slug: string
  title: string
  date: string
  tags: string[]
  excerpt: string
}

export default function PostCard({ slug, title, date, tags, excerpt }: PostCardProps) {
  return (
    <article className="card">
      <h2>
        <Link to={`/posts/${slug}`}>{title}</Link>
      </h2>
      <div className="meta">
        <span>{date}</span>
        <div className="tags">
          {tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
      <p className="excerpt">{excerpt}</p>
    </article>
  )
}
