import Header from '../src/containers/Header';
import './App.css';
import ProductListing from './containers/product_listing';
import ComponentProduct from './containers/componentProduct';
import Product_details from './containers/product_details'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <Router>
        <Header/> 
        <Switch>
            <Route path='/'exact component={ProductListing}/>
            <Route path='/Prod'exact component={ComponentProduct}/>
            <Route path='/details'exact component={Product_details}/>
        </Switch>
     </Router>
    </div>
  );
}

export default App;
