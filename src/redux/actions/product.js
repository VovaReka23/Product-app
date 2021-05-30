export const addProducts = ({ imageUrl, name, description, price, count, weight, width, height}) => ({
	type: 'ADD_PRODUCTS',
	payload: {imageUrl, name, description, price, count, weight, width, height },
});
export const editProducts = ({id, imageUrl, name, description, price, count, weight, width, height}) => ({
	type: 'EDIT_PRODUCTS',
	payload: {id, imageUrl, name, description, price, count, weight, width, height },
});

export const removeProduct = (id) => ({
	type: 'REMOVE_PRODUCT',
	payload: id,
});

export const sortProduct = (sort) => ({
	type: 'SORT_BY_COUNT_PRODUCT',
	payload: sort
});

export const searchProducts = (search) => ({
	type: 'SEARCH_PRODUCTS',
	payload: search,
});

export const setPinProduct = (id) => ({
	type: 'SET_PIN_PRODUCT',
	payload: id,
});



