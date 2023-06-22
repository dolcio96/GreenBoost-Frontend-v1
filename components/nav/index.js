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
    MenuItem,
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

const Links = ['About Us', 'test'];

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
        {children}
    </Link>
);

const DropDownMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (<>
        <Menu isOpen={isOpen}>
            <MenuButton
                py={1}
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
                as={Button}
                border="none"
                borderStyle="none"
                variant={'link'}
                color="black"
                fontWeight="normal"
                outline="none"
                textDecoration="none"
                _hover={{
                    textDecoration: 'none',
                    bg: "primary",
                    color: "white",
                    outline: "none",
                    border: "none",
                    borderStyle: "none"
                }}
                _active={{ textDecoration: "none", outline: "none", border: "none", borderStyle: "none" }}
                _visited={{ textDecoration: 'none', outline: "none", border: "none", borderStyle: "none" }}
                _after={{ textDecoration: 'none', outline: "none", border: "none", borderStyle: "none" }}
                _focusVisible={{ borderStyle: "none" }}
                minW={0}
                cursor={'pointer'}>
                <Link
                    px={2}
                    py={1}
                    rounded={'md'}
                    _hover={{
                        bg: "primary",
                        color: "white",
                        borderStyle: "none"
                    }}
                    href='/buy'
                >
                    Marketplace  {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </Link>
            </MenuButton>
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} >
                <MenuItem as="a" href="/projects"
                    _hover={{
                        bg: "primary",
                        color: "white",
                    }}>Buy</MenuItem>
                <MenuItem as="a" href="/createproject"
                    _hover={{
                        bg: "primary",
                        color: "white",
                    }}>Sell</MenuItem>
                <MenuItem as="a" href="/create"
                    _hover={{
                        bg: "primary",
                        color: "white",
                    }}>Create</MenuItem>
            </MenuList>
        </Menu>



    </>)

}



const Nav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    var defaultLang = "IT"
    const [lang, setLang] = useState(defaultLang);



    const {
        isOpen: isOpenModal,
        onOpen: onOpenModal,
        onClose: onCloseModal
    } = useDisclosure()
    const { data: session } = useSession()
    const router = useRouter()
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

    function onBuy() {


        if (session?.user?.cart) {
            router.push({
                pathname: '/order'
            }, '/order')
        }
        else
            onOpenModal()
    }


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
                            < DropDownMenu />



                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </HStack>


                    </HStack>
                    <Flex alignItems={'center'}>
                        <Center color={"primary"}>
                            <LanguageSelector/>
                            {/*  <Button bg="none" _hover={{ bg: "none" }}  onClick={onChangeLanguage}>{lang}</Button>*/}
                              </Center>
                        <Center mx="10px" color={"primary"}>
                            <Button bg={"none"} _hover={{ bg: "none" }} onClick={onBuy}>
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
                                {session ?
                                    <Avatar
                                        size={'sm'}
                                        src={
                                            ' https://bit.ly/sage-adebayo'
                                        }
                                    /> : <Avatar
                                        size={'sm'}
                                        backgroundColor="primary"
                                    />}

                            </MenuButton>
                            <MenuList>
                                {session ? <MenuItem onClick={() => signOut()}>Logout</MenuItem> : <MenuItem onClick={() => signIn()}>Login</MenuItem>}
                                {!session && <MenuItem as="a" href="/auth/signup">Signup</MenuItem>}
                                <MenuItem as="a" href="/profile/profile-overview">Profile</MenuItem>
                            </MenuList>
                        </Menu>
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


