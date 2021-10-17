import './App.css';
import Header from './Pages/Shared/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from './Pages/Products/Products';
import SignIn from './Pages/SignIn/SignIn';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App" style={{ background: '#eaeded' }}>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/products'>
              <Products></Products>
            </PrivateRoute>
            <Route path='/signin'>
              <SignIn></SignIn>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
