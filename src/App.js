import React, {useEffect} from 'react';
import ProductList from './page/ProductList';
import ProductDetails from './page/ProductDetails';
import { Route, Switch } from "react-router-dom";
import { getComments } from './redux/reducers/products';
import { useDispatch } from 'react-redux';
import {
	setComment
} from './redux/actions/product';
function App() {
  const dispatch = useDispatch();
  const comments = getComments();
	useEffect(() => {
		dispatch(setComment(comments));
	}, []);
	return (
		<Switch>
        <Route exact path="/Product-app">
          <ProductList />
        </Route>
        <Route path="/Product-app/:productId">
          <ProductDetails />
        </Route>
      </Switch>
		
	);
}

export default App;
