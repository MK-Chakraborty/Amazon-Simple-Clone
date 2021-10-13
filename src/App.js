import './App.css';
import Header from './Pages/Shared/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from './Pages/Products/Products';

function App() {
  return (
    <div className="App" style={{background: '#eaeded'}}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/products'>
            <Products></Products>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
