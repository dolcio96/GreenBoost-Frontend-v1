import React, { ReactNode, useEffect, useState } from 'react';
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    Text,
    Image,
    useDisclosure,
    useColorModeValue,
    Stack,
    Center,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useSession, signIn, signOut } from "next-auth/react"
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { useRouter } from "next/router";

import { ShoppingCart } from "@mui/icons-material"

const Links = ['Projects']//, 'Sell', 'Create'];

import LogoGB from '@public/logoGB.png'
import Message from "@components/modal/message"
import LanguageSelector from './languageSelector';


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
            <Text fontSize={18}>{children}</Text>
    </Link>
);



const Nav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    var defaultLang = "IT"
    const [lang, setLang] = useState(defaultLang);
    const router = useRouter()
    const isHome = router.pathname === "/" ? true : false;

    const {
        isOpen: isOpenModal,
        onOpen: onOpenModal,
        onClose: onCloseModal
    } = useDisclosure()


    const [scrolled, setScrolled] = useState(false)
    useEffect(_ => {
        const handleScroll = _ => {
            if (window.pageYOffset > 64) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return _ => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    function onChangeLanguage() {
        if (lang == "IT") {
            setLang("EN")
        }
        else {
            setLang("IT")
        }
    }

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} position="fixed" w="100%" zIndex={200}
                backgroundColor={!scrolled ? "rgba(232, 232, 232, 0)" : "white"}
            >


                <Flex h={16} alignItems={'center'} justifyContent={'space-between'} >
                    <IconButton
                        size={'md'}
                        color="white"
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        bg="primary"
                        _hover={{ bg: "none" }}
                        _active={{ bg: "none" }}
                        onClick={isOpen ? onClose : onOpen}
                        borderStyle={"none"}

                    />
                    <HStack spacing={8.} alignItems={'center'}>
                        <Box w={"200px"} as={"a"} href={"/"}>
                            <Image w={"100%"} src={LogoGB.src} />
                        </Box>




                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>

                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </HStack>




                    </HStack>
                    <Flex alignItems={'center'}>
                        <Center color={!scrolled && isHome ? "tertiary" : "primary"}>
                            <LanguageSelector />
                        </Center>
                        {/* <Center mx="10px" color={!scrolled && isHome ? "tertiary" : "primary"}>
                            <Button bg={"none"} _hover={{ bg: "none" }} >
                                <ShoppingCart fontSize="large" />
                            </Button>
                        </Center>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>

                                <Avatar
                                    size={'sm'}
                                    backgroundColor={!scrolled && isHome ? "primary" : "primary"}
                                    borderColor="black"
                                    border={!scrolled && isHome ? "4px solid #EBF0EA" : "4px solid #588157"}

                                />

                            </MenuButton>
                        </Menu> */}
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
            <Message isOpen={isOpenModal} onClose={onCloseModal} header="The Chart is Empty" bgColor={"primary"} />
        </>
    );

}

export default Nav


