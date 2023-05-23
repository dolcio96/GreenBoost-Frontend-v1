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
    Text,
    Heading,
    Stack
} from '@chakra-ui/react';

import ClearIcon from '@mui/icons-material/Clear';

import { useState, useEffect } from "react";

import ProjectCardComponent from "@components/projects/projectCard"


import ForestIcon from '@mui/icons-material/Forest';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';


const projects2 = [
    {
        imageURL:
            'https://images.hdqwalls.com/wallpapers/sunbeams-morning-forest-4k-j7.jpg',
        name: '1',
        description: 'Descrizione progetto in due righe',
        projectType: "Forest",
        projectLocation: "Asia",
        icons: [ForestIcon, EmojiNatureIcon],
        href: '/buy/buynow',
    },
    {
        imageURL:
            'https://images.hdqwalls.com/wallpapers/sunbeams-morning-forest-4k-j7.jpg',
        name: '2',
        description: 'Descrizione progetto in due righe',
        projectType: "Forest",
        projectLocation: "Europe",
        icons: [ForestIcon, EmojiNatureIcon],
        href: '/buy/buynow',
    },
    {
        imageURL:
            'https://images.hdqwalls.com/wallpapers/sunbeams-morning-forest-4k-j7.jpg',
        name: '3',
        description: 'Descrizione progetto in due righe',
        projectType: "Agricolture",
        projectLocation: "Europe",
        icons: [ForestIcon, EmojiNatureIcon],
        href: '/buy/buynow',
    },
    {
        imageURL:
            'https://images.hdqwalls.com/wallpapers/sunbeams-morning-forest-4k-j7.jpg',
        name: '4',
        description: 'Descrizione progetto in due righe',
        projectType: "Chemical",
        projectLocation: "Europe",
        icons: [ForestIcon, EmojiNatureIcon],
        href: '/buy/buynow',
    },
    {
        imageURL:
            'https://images.hdqwalls.com/wallpapers/sunbeams-morning-forest-4k-j7.jpg',
        name: '5',
        description: 'Descrizione progetto in due righe',
        projectType: "Chemical",
        projectLocation: "Africa",
        icons: [ForestIcon, EmojiNatureIcon],
        href: '/buy/buynow',
    },
    {
        imageURL:
            'https://images.hdqwalls.com/wallpapers/sunbeams-morning-forest-4k-j7.jpg',
        name: '6',
        description: 'Descrizione progetto in due righe',
        projectType: "Forest",
        projectLocation: "Asia",
        icons: [ForestIcon, EmojiNatureIcon],
        href: '/buy/buynow',
    },

];

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


const Buy = ({ projects }) => {
    // const { isOpen, onOpen, onClose } = useDisclosure();

    const [filteredProjects, setFilteredProjects] = useState(projects2);
    const [quantity, setQuantity] = useState("");
    const [type, setType] = useState("");
    const [place, setPlace] = useState("");


    useEffect(() => {
        //setFilteredProjects(projects2)
        var projectTemp = projects2
        if (type != "") {
            console.log(type + "!=null")
            projectTemp = projectTemp.filter((project) =>
                project.projectType.toLowerCase().includes(type.toLowerCase())
            )
        }
        //Filtra per location
        if (place != "") {
            projectTemp = projectTemp.filter((project) =>
                project.projectLocation.toLowerCase().includes(place.toLowerCase())
            )
        }
        console.log("qty: " + quantity, "type: " + type, "place: " + place)

        setFilteredProjects(
            projectTemp
        );

    }, [quantity, type, place]);




    function addFilter(filterType, element) {
        //Aggiungi l'elemento filtrato alle relative variabili
        if (filterType == "type") {
            setType(element)
        }
        else if (filterType = "place") {
            setPlace(element)
        }
        else if (filterType = "quantity") {
            setQuantity(element)
        }
    }

    function removeFilter(filterType) {
        if (filterType == "type") {
            setType("")
        }
        else if (filterType = "place") {
            setPlace("")
        }
        else if (filterType = "quantity") {
            setQuantity("")
        }


    }

    return (
        <>

            <Box
                ml="50px"
                position="fixed" zIndex={999}
                bg={"primary"}
                borderRadius={6}>
                {(type || quantity || place) &&
                    <Heading color="tertiary" p="15px">Filtered By:</Heading>
                }
                {quantity &&
                    <Flex direction="row" alignItems={'center'} justifyContent={'center'}>
                        <Text color="tertiary">Quantity: {quantity}</Text><ClearIcon cursor="pointer" onClick={() => removeFilter("quantity")} />
                    </Flex>
                }
                {type &&
                    <Flex direction="row" alignItems={'center'} justifyContent={'center'}>
                        <Text color="tertiary">Type: {type}</Text>
                        <ClearIcon cursor="pointer" onClick={() => removeFilter("type")} /></Flex>
                }
                {place &&
                    <Flex direction="row" alignItems={'center'} justifyContent={'center'}>
                        <Text color="tertiary">Place: {place}</Text><ClearIcon cursor="pointer" onClick={() => removeFilter("place")} />
                    </Flex>
                }
            </Box>
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
                                    <MenuItem key={opt} onClick={() => addFilter("type", opt)}>{opt}  </MenuItem>
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
                                    <MenuItem key={opt} onClick={() => addFilter("place", opt)}>{opt}</MenuItem>
                                ))}
                            </MenuList>
                        </Menu>

                    </Flex>



                    <Flex mb={{ md: "80px" }}>
                        <Box position={{ sm: "center", md: "absolute" }}
                            mt={"20px"} ml={{ md: "10%", lg: "10%", xl: "20%" }}

                            alignItems={'center'}
                            justifyContent={'center'}>
                            <Button backgroundColor={"gold"} _hover={{ backgroundColor: "green.400" }} as="a" href="/fastbuy"> Fast Buy</Button>
                        </Box>
                    </Flex>

                </Flex>

            </Box>


            <Flex alignItems={'center'} justifyContent={'center'} direction="column" >
                {(type || quantity || place) &&
                    <Heading>Filtered By:</Heading>
                }
                {quantity &&
                    <Flex direction="row"><Text>Quantity: {quantity}</Text><ClearIcon cursor="pointer" onClick={() => removeFilter("quantity")} /></Flex>
                }
                {type &&
                    <Flex direction="row"><Text>Type: {type}</Text><ClearIcon cursor="pointer" onClick={() => removeFilter("type")} /></Flex>
                }
                {place &&
                    <Flex direction="row"><Text>Place: {place}</Text><ClearIcon cursor="pointer" onClick={() => removeFilter("place")} /></Flex>
                }
            </Flex>


            <SimpleGrid columns={{ base: 3, lg: 3, md: 2, sm: 1 }} gap={5} mx={"10%"}>
                {filteredProjects.map(project => <ProjectCardComponent key={project.id} project={project} />)}
            </SimpleGrid>

        </>)

}

export default Buy
