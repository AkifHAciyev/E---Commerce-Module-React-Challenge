import {
	Flex,
	Box,
	Image,
	Text,
	CardBody,
	Heading,
	Divider,
	CardHeader,
	Card,
	CardFooter,
	Button,
} from '@chakra-ui/react';
import React from 'react';
import picture from '../../../images/image-product-1-thumbnail.jpg';
import Delete from '../../../images/icon-delete.svg';
function OpenCard({ setCartOpen, itemsInBox, setItemsInBox }) {
	const deleteItem = (item) => {
		let filteredData = itemsInBox.filter((q) => q !== item);
		setItemsInBox(filteredData);
	};
	if (itemsInBox.length === 0) {
		setCartOpen(false);
	}

	return (
		<>
			<Card zIndex="10" bgColor={'#fff'} w="400px" position="absolute" right="0" align="center">
				<CardHeader>
					<Heading size="md"> Cart</Heading>
				</CardHeader>
				<Divider />
				{itemsInBox &&
					itemsInBox.map((element, i) => (
						<CardBody key={i}>
							<Box position={'relative'} p={5}>
								<Flex>
									<Image value={i} borderRadius={'10px'} boxSize={'70px'} src={picture} />
									<Flex ml="10px" flexDirection={'column'}>
										<Text> Fall Limited Edition Sneakers</Text>
										<Text>
											$125.00 x {element}
											<Text as={'span'} fontWeight={700}>
												$ {element * 125}
											</Text>
										</Text>
									</Flex>
									<Image
										position="relative"
										top="15px"
										ml="10px"
										cursor={'pointer'}
										src={Delete}
										onClick={() => deleteItem(element)}
										h="18px"
										w="12px"
										display="inline-block"
									/>
								</Flex>
							</Box>
						</CardBody>
					))}
				<Divider />
				<CardFooter>
					<Button
						onClick={() => setCartOpen((prev) => !prev)}
						p={'15px 40px'}
						color={'white'}
						backgroundColor={'hsl(26, 100%, 55%)'}
						ml="10px"
					>
						Checkout
					</Button>
				</CardFooter>
			</Card>
		</>
	);
}

export default OpenCard;
