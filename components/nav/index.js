import { ReactNode } from 'react';
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
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useSession, signIn, signOut } from "next-auth/react"

const Links = ['Dashboard', 'Projects', 'Contact Us'];

const NavLink = ({ children }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={children.toString().replace(/\s/g, '').toLowerCase()}>
        {children}
    </Link>
);



const Nav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { data: session } = useSession()

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Box as="a" href="/">GreenBoost</Box>
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
                                        backgroundColor="green"
                                    />}

                            </MenuButton>
                            <MenuList>
                                {session ? <MenuItem onClick={() => signOut()}>Logout</MenuItem> : <MenuItem onClick={() => signIn()}>Login</MenuItem>}
                                <MenuItem as="a" href="/auth/signup">Signup</MenuItem>
                                <MenuItem as="a" href="/profile/profile-overview">Profile</MenuItem>
                                <MenuItem as="a" href="/aboutus">About us</MenuItem>
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
        </>
    );

}

export default Nav


