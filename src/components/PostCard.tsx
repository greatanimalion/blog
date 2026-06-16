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
    <article className="shadow-md p-7!  rounded-2xl mb-7!  duration-200 cursor-pointer   bg-white/10 backdrop-blur-[5px]"> 
      <h2 className="text-2xl font-bold mb-3!">
        <Link to={`/posts/${slug}`} className="text-(--text-primary)   transition-colors duration-200 hover:text-(--primary-color)">{title}</Link>
      </h2>
      <div className="flex items-center gap-6 text-sm text-(--text-secondary) mb-4">
        <span>{date}</span> 
        <div className="flex gap-2">
          {tags.map(tag => (
            <span key={tag} className="bg-(--primary-color) text-white px-1.5! py-0.5! rounded text-xs font-medium">{tag}</span>
          ))}
        </div>
      </div>
      <p className="text-(--text-secondary) text-sm leading-relaxed line-clamp-3">{excerpt}</p>
    </article>
  )
}
