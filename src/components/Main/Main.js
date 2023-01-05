import { Container, Flex, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import CardInfo from './components/CardInfo';
import Slider from './components/Slider';

const Main = ({ count, setCount, setItemsInBox, itemsInBox, setCartOpen }) => {
	const [isLarger850] = useMediaQuery('(min-width: 850px)');
	return (
		<Container mt="40px" maxW="container.xl">
			{isLarger850 && (
				<Flex justifyContent="space-between" m="70px 30px 0">
					<Slider />
					<CardInfo
						itemsInBox={itemsInBox}
						setItemsInBox={setItemsInBox}
						setCartOpen={setCartOpen}
						count={count}
						setCount={setCount}
					/>
				</Flex>
			)}
			{!isLarger850 && (
				<>
					<Slider />
					<CardInfo
						itemsInBox={itemsInBox}
						setItemsInBox={setItemsInBox}
						setCartOpen={setCartOpen}
						count={count}
						setCount={setCount}
					/>
				</>
			)}
		</Container>
	);
};

export default Main;
