import React from 'react';
import Cart from './components/Cart';
import Logo from './components/Logo';
import Nav from './components/Nav';
import Avatar from './components/Avatar';
import { Box, Container, Divider, Flex } from '@chakra-ui/react';

const Header = ({ count, cartOpen, setCartOpen, itemsInBox, setItemsInBox }) => {
	return (
		<Container mt="40px" maxW="container.xl">
			<Flex justifyContent="space-between">
				<Box>
					<Flex>
						<Logo />
						<Nav />
					</Flex>
				</Box>
				<Box>
					<Flex>
						<Cart
							itemsInBox={itemsInBox}
							setItemsInBox={setItemsInBox}
							setCartOpen={setCartOpen}
							cartOpen={cartOpen}
							count={count}
						/>
						<Avatar />
					</Flex>
				</Box>
			</Flex>
			<Divider />
		</Container>
	);
};

export default Header;
