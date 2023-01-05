import React, { useState } from 'react';
import Header from '../components/header/Index';
import Main from '../components/Main/Main';

const ECommerce = () => {
	const [count, setCount] = useState(0);
	const [itemsInBox, setItemsInBox] = useState([]);
	const [cartOpen, setCartOpen] = useState(false);

	return (
		<div>
			<Header
				itemsInBox={itemsInBox}
				setItemsInBox={setItemsInBox}
				setCartOpen={setCartOpen}
				cartOpen={cartOpen}
				count={count}
			/>
			<Main
				setCartOpen={setCartOpen}
				itemsInBox={itemsInBox}
				setItemsInBox={setItemsInBox}
				count={count}
				setCount={setCount}
			/>
		</div>
	);
};

export default ECommerce;
