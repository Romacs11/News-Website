import React, { useState } from "react"
import Head from "./Head"
import "./header.css"
import { Link } from "react-router-dom"

const Header = () => {
  const [navbar, setNavbar] = useState(false)

  return (
    <>
      <Head />
      <header>
        <div className='container paddingSmall'>
          <nav>
            <ul className={navbar ? "navbar" : "flex"} onClick={() => setNavbar(false)}>
              <li style={{display:'flex',}}>
                <li><a href="/">Главная</a></li>
                <li><a href="/culture">Культура</a></li>
                <li><a href="/politics">Политика</a></li>
                <li><a href="/memes">Мемы</a></li>
                <li><a href="/sports">Спорт</a></li>
                <li><a href="/boxed">Общий</a></li>
                <li><a href="/reviews">Отзывы</a></li>
              </li>
            </ul>
            <button className='barIcon' onClick={() => setNavbar(!navbar)}>
              {navbar ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
