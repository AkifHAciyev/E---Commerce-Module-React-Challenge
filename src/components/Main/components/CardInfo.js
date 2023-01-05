import { Button, Container, Heading, HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';
import Cart from '../../../images/icon-cart.svg';

const CardInfo = ({ count, setCount, itemsInBox, setItemsInBox, setCartOpen }) => {
	return (
		<Container>
			<Text textTransform="uppercase" fontWeight="700" color="hsl(26, 100%, 55%)">
				sneaker company
			</Text>
			<Heading fontSize="40px" mb="20px">
				Fall Limited Edition Sneakers
			</Heading>
			<Text fontSize="18px" mb="20px" color="hsl(219, 9%, 45%)">
				Therse low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole,
				they'll withstand everything the weather can offer.
			</Text>
			<HStack>
				<Text fontSize="28px" fontWeight="700">
					$125.00
				</Text>
				<Text
					fontSize="12"
					p="3px 6px"
					borderRadius="8px"
					color="hsl(26, 100%, 55%)"
					backgroundColor="hsl(25, 100%, 94%)"
					fontWeight="700"
				>
					50%
				</Text>
			</HStack>
			<Text textDecoration={'line-through'} color={'hsl(220, 14%, 75%)'} mb="20px">
				%250
			</Text>
			<HStack mb="30px">
				<Button
					onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : 0))}
					_hover={{
						color: 'hsl(26, 100%, 55%)',
					}}
				>
					-
				</Button>
				<Text>{count}</Text>
				<Button
					onClick={() => setCount((prev) => prev + 1)}
					_hover={{
						color: 'hsl(26, 100%, 55%)',
					}}
				>
					+
				</Button>
				<Button
					_hover={{
						backgroundColor: 'hsl(26, 100%, 45%)',
					}}
					p={'20px 60px'}
					color={'white'}
					backgroundColor={'hsl(26, 100%, 55%)'}
					onClick={() => {
						if (count === 0) {
						} else {
							setItemsInBox([...itemsInBox, count]);
							setCount(0);
							setCartOpen(true);
						}
					}}
				>
					<Image mx={'8px'} boxSize={'15px'} src={Cart} color="#fff" /> Add to Cart
				</Button>
			</HStack>
		</Container>
	);
};

export default CardInfo;
