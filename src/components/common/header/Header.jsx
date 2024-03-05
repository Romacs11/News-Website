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
              <li>
                <Link to='/'>Главная s </Link>
              </li>
              <li>
                <Link to='/culture'>Культура</Link>
              </li>
              <li>
                <Link to='/politics'>Политика</Link>
              </li>
              <li>
                <Link to='/memes'>Мемы</Link>
              </li>
              <li>
                <Link to='/sports'>Спорт</Link>
              </li>
              <li>
                <Link to='/boxed'>Общий</Link>
              </li>
              <li>
                <Link to='/reviews'>Отзывы </Link>
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
