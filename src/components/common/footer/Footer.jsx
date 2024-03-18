import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box logo'>
            <img src='../images/tech-logo-footer.png' alt='' />
            <p>Обращайтесь при возникновении вопросов. Мы обязательно ответим!.</p>
            <i className='fa fa-envelope'></i>
            <span> iskenderbeishenov1@gmail.com </span> <br />
            <i className='fa fa-envelope'></i>
            <span> erjankerimkulov2005@gmail.com</span> <br />
            <i className='fa fa-envelope'></i>
            <span> zylkycievtilek@gmail.com </span> 


  

          </div>
          <div className='box'>
            <h3>Политика</h3>
            <div className='item'>
              <img src='https://data.vb.kg/image/medium/2024-03-17_13-18-52_655720.jpg' alt='' />
              <p>Садыр Жапаров в день памяти Аксыйских событий обратился к кыргызстанцам</p>
            </div>
            <div className='item'>
              <img src='https://data.vb.kg/image/big/2024-03-16_15-04-06_841306.jpg' alt='' />
              <p>Ташиев и Ятимов обсудили вопросы делимитации кыргызско-таджикской границы</p>
            </div>
          </div>
          <div className='box'>
            <h3>Экономика</h3>
            <div className='item'>
              <img src='https://www.energo-es.kg/assets/pages/94f3f2a06a/toktogul-reservoir.jpg' alt='' />
              <p>Токтогульское водохранилище. Объем упал до 7,3 миллиарда кубометров</p>
            </div>
            <div className='item'>
              <img src='https://img.freepik.com/free-photo/kyrgyzstan-metallic-flag-textured-flag-grunge-flag_559531-11221.jpg' alt='' />
              <p>Сумма венчурных сделок в Кыргызстане за 2023 год составила $1,1 миллиона</p>
            </div>
          </div>
          <div className='box'>
            <h3>Этикет</h3>
            {/*<i className='fa fa-chevron-right'></i>*/}
            <ul>
              <li>
                <span>Заниматься боксом</span> <label>(5)</label>
              </li>
              <li>
                <span>Мода</span> <label>(6)</label>
              </li>
              <li>
                <span>Здоровье</span> <label>(7)</label>
              </li>
              <li>
                <span>Природа</span> <label>(9)</label>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal  '>
        <div className='container flexSB'>
          <p>© все права защищеныsad</p>
          <p>
          сделано с <i className='fa fa-heart'></i> by gorkhcoder
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer
