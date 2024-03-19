import React, { useState } from "react"
import { hero } from "../../dummyData"
import "./../../components/home/hero/hero.css"
import Card from "../home/hero/Card"

const Culture = () => {
  const [items, setIems] = useState(hero)

  return (
    <>
      <section className='hero'>
        <div className='container'>
          {items.map((item) => {
            return (
              <>
                <Card key={item.id} item={item} />
              </>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Culture
