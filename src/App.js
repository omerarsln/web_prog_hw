import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {NavigationBar} from "./components/NavigationBar/NavigationBar";
import {Index} from "./components/HomePage/Index";
import News from "./components/News/News";
import {NewsId} from "./components/News/NewsId";
import {Announcements} from "./components/Announcements/Announcements";
import {Actual} from "./components/Actual/Actual";
import {About} from "./components/About";
import Pdf from "./components/Announcements/Pdf"
import {Error} from "./components/Error";

class App extends React.Component{

  state = {
    news : [],
    homeNews : [
        {
          id : 1,
          title : "Sağlık Kurumlarında Enfeksiyon Kontrol Önlemleri",
          photo : "https://covid19bilgi.saglik.gov.tr/depo/orta_menu/enfeksiyonkontrolonlemleri.jpg"
        },
        {
          id : 2,
          title : "Toplumda Salgın Yönetimi",
          photo : "https://covid19bilgi.saglik.gov.tr/depo/orta_menu/toplumdasalginyonetimi.jpg"
        },
        {
          id : 3,
          title : "Kurum ve Kuruluşlara Yönelik Enfeksiyon Kontrol Önlemleri",
          photo : "https://covid19bilgi.saglik.gov.tr/depo/orta_menu/kamuvekuruluslarayonelikonlemler2.jpg"
        },
        {
          id : 4,
          title : "Covid-19 Nedir",
          photo : "https://covid19bilgi.saglik.gov.tr/depo/covid19/orta_menu/nedir.jpg"
        },
        {
          id : 5,
          title : "Covid-19 English Documents",
          photo : "https://covid19bilgi.saglik.gov.tr/depo/orta_menu/en-3.png"
        },
    ]
  };

  componentDidMount() {
    import("./news.json").then(data => (this.setState({news : data})));
  }


  render() {
    return <Router>
      <div className="App">
        <NavigationBar/>

        <Switch>
          <Route path="/" exact component={() => <Index homeNews={this.state.homeNews}/>}/>
          <Route path="/haberler/" exact component={() => <News news={this.state.news.default}/>} />
          <Route path="/haberler/:id" exact component={(props) => <NewsId {...props} news={this.state.news.default}/>} />
          <Route path="/duyurular/" exact component={Announcements} />
            <Route path="/duyurular/:id" exact component={(props) => <Pdf {...props}/>} />
          <Route path="/guncel/" exact component={Actual} />
          <Route path="/hakkında/" exact component={About} />
          <Route component={Error} />
        </Switch>

      </div>
    </Router>;
  }
}

export default App;
