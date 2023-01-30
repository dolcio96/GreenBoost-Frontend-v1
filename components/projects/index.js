import {
    Flex,
    Grid,
    GridItem,
    Box,
    SimpleGrid,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuDivider,
    MenuItem,
    useDisclosure,
    Link,
    Stack
} from '@chakra-ui/react';

import ProjectCardComponent from "./projectCard"

import ForestIcon from '@mui/icons-material/Forest';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
/*
const projects = [
    {
        imageURL:
            'https://images.hdqwalls.com/wallpapers/sunbeams-morning-forest-4k-j7.jpg',
        name: '1',
        description: 'Descrizione progetto in due righe',
        icons: [ForestIcon, EmojiNatureIcon],
        href: '/buy/buynow',
    },
    {
        imageURL:
            'https://images.hdqwalls.com/wallpapers/sunbeams-morning-forest-4k-j7.jpg',
        name: '2',
        description: 'Descrizione progetto in due righe',
        icons: [ForestIcon, EmojiNatureIcon],
        href: '/buy/buynow',
    },
    {
        imageURL:
            'https://images.hdqwalls.com/wallpapers/sunbeams-morning-forest-4k-j7.jpg',
        name: '3',
        description: 'Descrizione progetto in due righe',
        icons: [ForestIcon, EmojiNatureIcon],
        href: '/buy/buynow',
    },
    {
        imageURL:
            'https://images.hdqwalls.com/wallpapers/sunbeams-morning-forest-4k-j7.jpg',
        name: '4',
        description: 'Descrizione progetto in due righe',
        icons: [ForestIcon, EmojiNatureIcon],
        href: '/buy/buynow',
    },
    {
        imageURL:
            'https://images.hdqwalls.com/wallpapers/sunbeams-morning-forest-4k-j7.jpg',
        name: '5',
        description: 'Descrizione progetto in due righe',
        icons: [ForestIcon, EmojiNatureIcon],
        href: '/buy/buynow',
    },
    {
        imageURL:
            'https://images.hdqwalls.com/wallpapers/sunbeams-morning-forest-4k-j7.jpg',
        name: '6',
        description: 'Descrizione progetto in due righe',
        icons: [ForestIcon, EmojiNatureIcon],
        href: '/buy/buynow',
    },

];

*/
const FilterOpts = [{
    title: "How Many?",
    subtitle: "Select the quantity you want",
    opts: ["0-100", "+100", "+1000"]
},
{
    title: "Which?",
    subtitle: "Select the type you want",
    opts: ["Forest", "Ren. Ener.", "Agricolture", "Recyce", "Co2 Storage", "Chemical"]
},
{
    title: "Where?",
    subtitle: "Search by Reagion",
    opts: ["Europe", "South America", "North America", "Antartica", "Asia", "Africa"]
}]

const NavLink = ({ children }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: "primary",
            color: "white"
        }}
        href={'/' + children.toString().replace('&', '').replace(/\s/g, '').toLowerCase()}>
        {children}
    </Link>
);

const Filter = () => (
    <Menu>
        <MenuButton
            w={{ sm: "100px", md: "150px", lg: "200px" }}
            as={Button}
            variant={'solid'}
            cursor={'pointer'}
            minW={0}>
            How Many?
        </MenuButton>
        <MenuList>
            <MenuItem>Link 1</MenuItem>
            <MenuItem>Link 2</MenuItem>
            <MenuDivider />
            <MenuItem>Link 3</MenuItem>
        </MenuList>
    </Menu>
);

const Buy = ({projects}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Box px={4} mt={5}>
                <Flex alignItems={'center'} justifyContent={'center'} direction={{ sm: "column", md: "row" }}>
                    <Flex alignItems={'center'} justifyContent={'center'} >
                        <Menu>
                            <MenuButton
                                w={{ sm: "100px", md: "150px", lg: "200px" }}
                                as={Button}
                                variant={'solid'}
                                cursor={'pointer'}
                                minW={0}>
                                {FilterOpts[0].title}
                            </MenuButton>
                            <MenuList>
                                <b>{FilterOpts[0].subtitle}</b>
                                {FilterOpts[0].opts.map((opt) => (
                                    <MenuItem key={opt}>{opt}</MenuItem>
                                ))}
                            </MenuList>
                        </Menu>
                        
                        <Menu>
                            <MenuButton
                                w={{ sm: "100px", md: "150px", lg: "200px" }}
                                as={Button}
                                variant={'solid'}
                                cursor={'pointer'}
                                minW={0}>
                                {FilterOpts[1].title}
                            </MenuButton>
                            <MenuList>
                            <b>{FilterOpts[1].subtitle}</b>
                                {FilterOpts[1].opts.map((opt) => (
                                    <MenuItem key={opt}>{opt}</MenuItem>
                                ))}
                            </MenuList>
                        </Menu>
                        
                        <Menu >
                            <MenuButton
                                w={{ sm: "100px", md: "150px", lg: "200px" }}
                                as={Button}
                                variant={'solid'}
                                cursor={'pointer'}
                                minW={0}>
                                {FilterOpts[2].title}
                            </MenuButton>
                            <MenuList alignItems={'center'} justifyContent={'center'}>
                            <b>{FilterOpts[2].subtitle}</b>
                                {FilterOpts[2].opts.map((opt) => (
                                    <MenuItem key={opt}>{opt}</MenuItem>
                                ))}
                            </MenuList>
                        </Menu>

                    </Flex>
                    <Flex  mb={{ md: "80px" }}>
                        <Box position={{ sm: "center", md: "absolute" }}
                            mt={"20px"} ml={{ md: "10%", lg: "10%", xl: "20%" }}
                           
                            alignItems={'center'}
                            justifyContent={'center'}>
                            <Button backgroundColor={"gold"} _hover={{backgroundColor:"green.400"}} as="a" href="/fastbuy"> Fast Buy</Button>
                        </Box>
                    </Flex>

                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }} >
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}


            </Box>



            <SimpleGrid columns={{ base: 3, lg: 3, md: 2, sm: 1 }} gap={5} mx={"10%"}>
                {projects.map(project => <ProjectCardComponent key={project.id} {...project} />)}
            </SimpleGrid>

        </>)

}

export default Buy
