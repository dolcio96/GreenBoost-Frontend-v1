
import Card from "./card"
import {
    Flex,
    Grid,
    GridItem,
    SimpleGrid
} from '@chakra-ui/react';

const data = {
    card1: {
        imageURL:
            'https://images.hdqwalls.com/wallpapers/sunbeams-morning-forest-4k-j7.jpg',
        name: 'Buy Now',
        description: 'Choose Your Carbon Credit',
        moreInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        href: '/buy/buynow',
    },
    card2: {
        imageURL:
            'https://images.hdqwalls.com/wallpapers/sunbeams-morning-forest-4k-j7.jpg',
        name: 'Chose VCC',
        description: 'Get Random Carbon Credit',
        moreInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        href: '/buy/choosevcc',
    },
};



const Buy = () => {


    return (
        <>
            <SimpleGrid columns={{ base: 2, md: 2, sm:1}}>
                <Card {...data.card1} />
                <Card {...data.card2} />
            </SimpleGrid>

        </>)

}

export default Buy
