import { useSession } from "next-auth/react"

// Chakra imports
import {
    Avatar,
    AvatarGroup,
    Box,
    Button,
    Flex,
    Grid,
    Icon,
    Image,
    Link,
    Switch,
    Text,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";
import {
    FaCube,
    FaFacebook,
    FaInstagram,
    FaPenFancy,

} from "react-icons/fa";

import { GrOverview } from "react-icons/gr";
import { RiLeafLine } from "react-icons/ri";

import { IoDocumentsSharp } from "react-icons/io5";
import { useRouter } from 'next/router'

const ProfileNav = () => {
    const { colorMode } = useColorMode();
    const textColor = "tertiary"
    const bgProfile = useColorModeValue("hsla(0,0%,100%,.8)", "navy.800");
    const borderProfileColor = useColorModeValue("white", "transparent");
    const emailColor = useColorModeValue("gray.400", "gray.300");
    const router = useRouter()
    const { data: session, status } = useSession()
    console.log(session?.user.company)
    return (<>

        <Flex direction='column' pt={{ base: "64px", md: "64px", lg: "64px" }}  >
            <Flex
                px={4}
                direction={{ sm: "column", md: "row" }}
                justifyContent={{ sm: "center", md: "space-between" }}
                align='center'
                bg={"quaternary"}
                borderRadius='20px'
                >
                <Flex
                    align='center'
                    mb={{ sm: "10px", md: "0px" }}
                    direction={{ sm: "column", md: "row" }}
                    w={{ sm: "100%" }}
                    textAlign={{ sm: "center", md: "start" }}
                    
                >
                    <Avatar
                        me={{ md: "22px" }}
                        src={
                            ' https://bit.ly/sage-adebayo'
                        }
                        w='80px'
                        h='80px'
                        p={2}
                        borderRadius='15px'
                    />
                    <Flex direction='column' maxWidth='100%' my={{ sm: "14px" }} >
                        <Text
                            fontSize={{ sm: "lg", lg: "xl" }}
                            color={textColor}
                            fontWeight='bold'
                            ms={{ sm: "8px", md: "0px" }}>
                            {status == 'loading' ? 'loading...' : 'mycompany'/**session?.user.company.company_name*/}
                        </Text>
                        <Text
                            fontSize={{ sm: "md", lg: "lg" }}
                            color={textColor}
                            fontWeight='bold'>
                            {status == 'loading' ? 'loading...' : session?.user.customer_type}
                        </Text>
                        <Text
                            fontSize={{ sm: "sm", md: "md" }}
                            color={emailColor}
                            fontWeight='semibold'>
                            {status == 'loading' ? 'loading...' : session?.user.company.customer.email}
                        </Text>
                    </Flex>
                </Flex>
                <Flex
                    direction={{ sm: "column", lg: "row" }}
                    w={{ sm: "100%", md: "50%", lg: "auto" }}>
                    <Button p='0px' bg='transparent' variant='no-effects' as="a" href="/profile/profile-overview">
                        <Flex
                            align='center'
                            w={{ sm: "100%", lg: "135px" }}
                            borderRadius='8px'
                            justifyContent='center'
                            py='10px'
                            bg={router.pathname === "/profile/profile-overview" ? 'white' : 'none'}
                            boxShadow={router.pathname === "/profile/profile-overview" ? '0px 2px 5.5px rgba(0, 0, 0, 0.36)' : 'none'}
                            cursor='pointer'>
                            <Icon color={router.pathname === "/profile/profile-overview" ? 'black' : 'tertiary'} as={RiLeafLine} me='6px' />
                            <Text fontSize='xs'  color={router.pathname === "/profile/profile-overview" ? 'black' : 'tertiary'} fontWeight='bold'>
                                OVERVIEW
                            </Text>
                        </Flex>
                    </Button>
                    <Button p='0px' bg='transparent' variant='no-effects' as="a" href="/profile/profile-projects">
                        <Flex
                            align='center'
                            w={{ sm: "100%", lg: "135px" }}
                            borderRadius='8px'
                            justifyContent='center'
                            bg={router.pathname === "/profile/profile-projects" ? 'white' : 'none'}
                            boxShadow={router.pathname === "/profile/profile-projects" ? '0px 2px 5.5px rgba(0, 0, 0, 0.36)' : 'none'}
                            py='10px'
                            cursor='pointer'>
                            <Icon color={router.pathname === "/profile/profile-projects" ? 'black' : 'tertiary'} as={FaCube} me='6px' />
                            <Text fontSize='xs' color={router.pathname === "/profile/profile-projects" ? 'black' : 'tertiary'} fontWeight='bold'>
                                PROJECTS
                            </Text>
                        </Flex>
                    </Button>
                    <Button p='0px' bg='transparent' variant='no-effects' as="a" href="/profile/profile-info">
                        <Flex
                            align='center'
                            w={{ sm: "100%", lg: "135px" }}
                            borderRadius='8px'
                            justifyContent='center'
                            bg={router.pathname === "/profile/profile-info" ? 'white' : 'none'}
                            boxShadow={router.pathname === "/profile/profile-info" ? '0px 2px 5.5px rgba(0, 0, 0, 0.36)' : 'none'}
                            py='10px'
                            cursor='pointer'>
                            <Icon color={router.pathname === "/profile/profile-info" ? 'black' : 'tertiary'} as={FaPenFancy} me='6px' />
                            <Text fontSize='xs' color={router.pathname === "/profile/profile-info" ? 'black' : 'tertiary'} fontWeight='bold'>
                                USER INFO
                            </Text>
                        </Flex>
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    </>)

}

export default ProfileNav
