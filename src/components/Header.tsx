import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
      <div className=" flex justify-between items-center">
        <Link to="/">欢迎</Link>
        <Link to="/home">我的博客</Link>
        <Link to="/home">首页</Link>
      </div>
    </header>
  )
}