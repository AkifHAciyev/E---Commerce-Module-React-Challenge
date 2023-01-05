import { Image } from '@chakra-ui/react';
import React from 'react';
import avatar from '../../../images/image-avatar.png';

const Avatar = () => {
	return (
		<Image
			position={'relative'}
			top="-11px"
			ml="30px"
			borderRadius="full"
			boxSize="48px"
			src={avatar}
			alt="Dan Abramov"
			border="2px solid hsl(26, 100%, 55%)"
		/>
	);
};

export default Avatar;
