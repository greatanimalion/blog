import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
      <div className=" flex justify-between items-center backdrop-blur-[10px]!">
        <Link to="/">欢迎页</Link>
        <Link to="/home">我的博客</Link>
        <Link to="https://github.com/greatanimalion?tab=repositories">关于我</Link>
      </div>
    </header>
  )
}