import { Container } from '@chakra-ui/react';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Img1 from '../../../images/image-product-1.jpg';
import Img2 from '../../../images/image-product-2.jpg';
import Img3 from '../../../images/image-product-3.jpg';
import Img4 from '../../../images/image-product-4.jpg';

const Slider = () => {
	return (
		<Container borderRadius="15px" h="600px" maxW="420px">
			<Carousel>
				<div as="div">
					<img src={Img1} />
				</div>
				<div>
					<img src={Img2} />
				</div>
				<div>
					<img src={Img3} />
				</div>
				<div>
					<img src={Img4} />
				</div>
			</Carousel>
		</Container>
	);
};

export default Slider;
