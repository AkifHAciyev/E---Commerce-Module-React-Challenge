import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import logo from '../../../images/logo.svg';

const Logo = () => {
	return (
		<Box mr="10">
			<Image maxW="350px" src={logo} alt="sneakers" />
		</Box>
	);
};

export default Logo;
