import React from "react"
import Header from "./components/common/header/Header"
import "./App.css"
import Homepages from "./components/home/Homepages"
import Footer from "./components/common/footer/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SinglePage from "./components/singlePage/SinglePage"
import Culture from "./components/culture/Culture"
import Politics from "./components/politics/Politics"
import Memes from "./components/memes/Memes"
import Boxed from "./components/boxed/Boxed"
import Reviews from "./components/reviews/Reviews"
import { BOXED_ROUTE, SPORT_ROUTE } from "./components/utils/Consts"
import Sport from "./components/sport/Sport"





const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepages} />
          <Route path='/singlepage/:id' exact component={SinglePage} />
          <Route exact path='/culture' component={Culture} />
          <Route exact path='/politics' component={Politics} />
          <Route exact path='/memes' component={Memes} />
          <Route path={SPORT_ROUTE} component={Sport} />
          <Route path={BOXED_ROUTE} component={Boxed} />
          <Route exact path='/reviews' component={Reviews} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
