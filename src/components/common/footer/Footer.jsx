import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box logo'>
            <img src='../images/tech-logo-footer.png' alt='' />
            <p>Busan — это потрясающая тема для журналов Blogger, которую легко настроить под свои нужды.</p>
            <i className='fa fa-envelope'></i>
            <span> iskenderbeishenov1@gmail.com </span> <br />
            <i className='fa fa-headphones'></i>
            <span> +996702550979</span>
          </div>
          <div className='box'>
            <h3>Спорт</h3>
            <div className='item'>
              <img src='../images/hero/hero1.jpg' alt='' />
              <p>Google повысит безопасность Android за несколько дней</p>
            </div>
            <div className='item'>
              <img src='../images/hero/hero2.jpg' alt='' />
              <p>Сеспедес играет в победный бейсбольный матч</p>
            </div>
          </div>
          <div className='box'>
            <h3>Крикет</h3>
            <div className='item'>
              <img src='../images/hero/hero3.jpg' alt='' />
              <p>США обещают оказать Intel помощь в поиске солдат</p>
            </div>
            <div className='item'>
              <img src='../images/hero/hero1.jpg' alt='' />
              <p>Возобновляемая энергетика мертва, поскольку промышленность ждет политики</p>
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
