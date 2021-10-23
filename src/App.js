import Header from '../src/containers/Header';
import './App.css';
import ProductListing from './containers/product_listing';
import ProductDetails from './containers/product_details'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
function App() {
  
  return (
    <div className='App'>
      <Router>
        <Header/> 
        <Switch>
            <Route path='/'exact component={ProductListing}/>
            <Route path="/details/:productId" exact component={ProductDetails}/>
            <Route> 404 NOT FOUND!</Route>
        </Switch>/
     </Router>
    </div>
  );
}

export default App;
