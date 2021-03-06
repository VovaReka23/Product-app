import React from 'react';
import { AddEditCartProduct } from '../components';
import {useParams, } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import {
	editProducts
} from '../redux/actions/product';
import { Link } from "react-router-dom";

const ProductDetails = () => {
	const items = useSelector(({ products }) => products.items);
	const {productId} = useParams()
	const thisProduct = items.find(prod => prod.id === +productId) || 2
	const dispatch = useDispatch();
	
	
	const [visiblePopup, setVisiblePopup] = React.useState(false);
	const toggleVisiblePopup = () => {
		setVisiblePopup(!visiblePopup);
	};
	const onEditProduct = (id, imageUrl, name, description, price, count, weight, width, height) => {
		dispatch(editProducts(id, imageUrl, name, description, price, count, weight, width, height));
	};
	return (
		<div className="product__details">
			<Link className="product__details-nav" to={`/Product-app`}>Back to products</Link>
			{visiblePopup && (
				<AddEditCartProduct onClick={toggleVisiblePopup} onEditProduct={onEditProduct} defValue={thisProduct} />
			)}
			<button className='btn-add' onClick={toggleVisiblePopup}>Edit</button>
			<div className="product__details-img">
				{thisProduct.imageUrl ? <img src={thisProduct.imageUrl} alt="product"/>  : ''}
			</div>
			<div className="product__details-info">
				{thisProduct && thisProduct.name ? <h2 className='product__details-name'>{thisProduct.name}</h2> : ''}
				{thisProduct && thisProduct.description ? <p className='product__details-description'>{thisProduct.description}</p> : ''}
				{thisProduct && thisProduct.price ? <span className='product__details-price'>{thisProduct.price}$</span> : ''}
				{thisProduct && thisProduct.count ? <p className='product__details-count'><span>count: </span>{thisProduct.count}</p> : ''}
				{thisProduct.size && thisProduct.size.width ? <p className='product__details-width'><span>width: </span>{thisProduct.size.width}</p> : ''}
				{thisProduct.size && thisProduct.size.height ? <p className='product__details-height'><span>height: </span>{thisProduct.size.height}</p> : ''}
				{thisProduct && thisProduct.weight ? <p className='product__details-height'><span>weight: </span>{thisProduct.weight}</p> : ''}
			</div>
			{thisProduct.comments && (
				<ul className="product__details-comments">
					<h2 className='title'>Comments</h2>
					{thisProduct.comments.map((comment) => (
						<li className="comment" key={comment.id}> 
							<span className="comment__author" >{comment.auther}</span>
							<span className="comment__description" >{comment.description}</span>
							<span className="comment__date" >{comment.date}</span>
						</li>
					))}
				</ul>
			)}
			<div className="product__details-add-coment">
				<input
						className='comment__author'
						name="name"
						type="text"
						placeholder="name"
						required
					/>
				<textarea className="comment__description" name="text"></textarea>
				<button type='submit' className="btn product__add-field-button">
				Add Comment</button>
			</div>
			
		</div>
	);
};
export default ProductDetails;
