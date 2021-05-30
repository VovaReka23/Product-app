import React from 'react';
import ProductList from './page/ProductList';
import ProductDetails from './page/ProductDetails';
import { Route, Switch } from "react-router-dom";
function App() {
	return (
		<Switch>
        <Route exact path="/">
          <ProductList />
        </Route>
        <Route path="/:productId">
          <ProductDetails />
        </Route>
      </Switch>
		
	);
}

export default App;
