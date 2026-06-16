import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">    
      <div className="container">
        <h1><Link to="/home">我的博客</Link></h1>
        <nav>
          <Link to="/home">首页</Link>
        </nav>
      </div>
    </header>
  )
}