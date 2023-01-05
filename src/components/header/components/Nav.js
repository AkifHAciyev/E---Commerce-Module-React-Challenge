import { Button, Flex, Image, Link } from '@chakra-ui/react';
import React, { useState } from 'react';
import burger from '../../../images/icon-menu.svg';
import burgerClose from '../../../images/icon-close.svg';

const Nav = () => {
	const [display, setDisplay] = useState('none');

	return (
		<>
			<Flex display={['none', 'none', 'flex', 'flex']}>
				<nav>
					<Link
						color={'#d2d1d5'}
						ml="12px"
						_hover={{
							color: '#9b9b9b',
							cursor: 'pointer',
							paddingBottom: '23px',
							borderBottom: '3px solid hsl(26, 100%, 55%)',
						}}
						href="#Collection"
					>
						Collection
					</Link>
					<Link
						color={'#d2d1d5'}
						ml="12px"
						_hover={{
							color: '#9b9b9b',
							paddingBottom: '23px',
							cursor: 'pointer',
							borderBottom: '3px solid hsl(26, 100%, 55%)',
						}}
						href="#Men"
					>
						Men
					</Link>
					<Link
						color={'#d2d1d5'}
						ml="12px"
						_hover={{
							color: '#9b9b9b',
							paddingBottom: '23px',
							cursor: 'pointer',
							borderBottom: '3px solid hsl(26, 100%, 55%)',
						}}
						href="#Women"
					>
						Women
					</Link>
					<Link
						color={'#d2d1d5'}
						ml="12px"
						_hover={{
							color: '#9b9b9b',
							paddingBottom: '23px',
							cursor: 'pointer',
							borderBottom: '3px solid hsl(26, 100%, 55%)',
						}}
						href="#About"
					>
						About
					</Link>
					<Link
						color={'#d2d1d5'}
						ml="12px"
						_hover={{
							color: '#9b9b9b',
							paddingBottom: '23px',
							cursor: 'pointer',
							borderBottom: '3px solid hsl(26, 100%, 55%)',
						}}
						href="#Contact"
					>
						Contact
					</Link>
				</nav>
			</Flex>
			<Button
				position="relative"
				top="-7px"
				zIndex={22}
				display={['flex', 'flex', 'none', 'none']}
				onClick={() => setDisplay(display === 'flex' ? 'none' : 'flex')}
			>
				<Image boxSize="20px" src={display === 'flex' ? burgerClose : burger} alt="burger" />
			</Button>
			<Flex
				pt="30px"
				position={'fixed'}
				top="0px"
				left="0"
				bgColor="gray.50"
				zIndex={20}
				h="100vh"
				w="40vw"
				flexDirection="column"
				display={[`${display}`, `${display}`, 'none', 'none']}
			>
				<Link
					fontSize="30px"
					color={'black'}
					ml="12px"
					mt="12px"
					_hover={{
						color: 'hsl(26, 100%, 55%)',
						cursor: 'pointer',
					}}
					href="#Collection"
				>
					Collection
				</Link>
				<Link
					fontSize="30px"
					mt="12px"
					color={'black'}
					ml="12px"
					_hover={{
						color: 'hsl(26, 100%, 55%)',
						cursor: 'pointer',
					}}
					href="#Men"
				>
					Men
				</Link>
				<Link
					fontSize="30px"
					mt="12px"
					color={'black'}
					ml="12px"
					_hover={{
						color: 'hsl(26, 100%, 55%)',
						cursor: 'pointer',
					}}
					href="#Women"
				>
					Women
				</Link>
				<Link
					fontSize="30px"
					mt="12px"
					color={'black'}
					ml="12px"
					_hover={{
						color: 'hsl(26, 100%, 55%)',
						cursor: 'pointer',
					}}
					href="#About"
				>
					About
				</Link>
				<Link
					fontSize="30px"
					mt="12px"
					color={'black'}
					ml="12px"
					_hover={{
						color: 'hsl(26, 100%, 55%)',
						cursor: 'pointer',
					}}
					href="#Contact"
				>
					Contact
				</Link>
			</Flex>
		</>
	);
};

export default Nav;
