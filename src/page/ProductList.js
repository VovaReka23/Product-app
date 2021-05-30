import React from 'react';
import { CartProduct, AddCartProduct } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { productsListSelector } from '../redux/reducers/products';
import {
	addProducts,
	removeProduct,
	sortProduct
} from '../redux/actions/product';


const ProductList = () => {
	const dispatch = useDispatch();
	const products = useSelector(({ products }) => productsListSelector(products));
	const [visiblePopup, setVisiblePopup] = React.useState(false);
	const toggleVisiblePopup = () => {
		setVisiblePopup(!visiblePopup);
	};
	const onRemoveProduct = (id) => {
		dispatch(removeProduct(id));
	};
	const onSortProduct = () => {
		dispatch(sortProduct('count'));
	};

	const onAddProduct = (imageUrl, name, description, price, count, weight, width, height) => {
		dispatch(addProducts(imageUrl, name, description, price, count, weight, width, height));
	};
	return (
		<div className="product">
			<h1>Products List</h1>
			{visiblePopup && (
				<AddCartProduct onClick={toggleVisiblePopup} onAddProduct={onAddProduct} />
			)}
			<button className='btn-add' onClick={toggleVisiblePopup}> Add New Product</button>
			<button className='btn-add' onClick={onSortProduct}> Sort By Count</button>
			<div className="product__list">
				{products.map((product) => (
					<CartProduct
						key={`${product.name}-id-${product.id}`}
						{...product}
						onRemoveProduct={() => onRemoveProduct(product.id)}
					/>
				))}
			</div>
		</div>
	);
};
export default ProductList;