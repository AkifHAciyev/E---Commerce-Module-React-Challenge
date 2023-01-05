import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
import cart from '../../../images/icon-cart.svg';
import OpenCard from './OpenCard';

const Cart = ({ count, cartOpen, setCartOpen, itemsInBox, setItemsInBox }) => {
	return (
		<Box position="relative">
			<Image
				onClick={() => setCartOpen((prev) => !prev)}
				cursor={'pointer'}
				ml="30px"
				boxSize="20px"
				src={cart}
				alt="cart"
			/>
			{count ? (
				<Text
					fontSize={'12px'}
					position="relative"
					top={'-32px'}
					left="38px"
					bgColor={'hsl(26, 100%, 55%)'}
					h="16px"
					borderRadius="50%"
					w="16px"
					color={'#fff'}
					display="flex"
					alignItems={'center'}
					justifyContent="center"
				>
					{count}
				</Text>
			) : (
				''
			)}
			{cartOpen && <OpenCard itemsInBox={itemsInBox} setItemsInBox={setItemsInBox} setCartOpen={setCartOpen} />}
		</Box>
	);
};

export default Cart;
