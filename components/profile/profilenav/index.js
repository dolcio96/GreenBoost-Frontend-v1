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
    FaPlus,
    FaTwitter,
} from "react-icons/fa";
import { IoDocumentsSharp } from "react-icons/io5";
import { useRouter } from 'next/router'

const ProfileNav = () => {
    const { colorMode } = useColorMode();
    const textColor = useColorModeValue("gray.700", "white");
    const bgProfile = useColorModeValue("hsla(0,0%,100%,.8)", "navy.800");
    const borderProfileColor = useColorModeValue("white", "transparent");
    const emailColor = useColorModeValue("gray.400", "gray.300");
    const router = useRouter()
    const { data: session, status } = useSession()

    return (<>

        <Flex direction='column' pt={{ base: "64px", md: "64px", lg: "64px" }}>
            <Flex
                direction={{ sm: "column", md: "row" }}
                justifyContent={{ sm: "center", md: "space-between" }}
                align='center'
                bg={bgProfile}
                p='16px'
                borderRadius='20px'>
                <Flex
                    align='center'
                    mb={{ sm: "10px", md: "0px" }}
                    direction={{ sm: "column", md: "row" }}
                    w={{ sm: "100%" }}
                    textAlign={{ sm: "center", md: "start" }}>
                    <Avatar
                        me={{ md: "22px" }}
                        src={
                            ' https://bit.ly/sage-adebayo'
                        }
                        w='80px'
                        h='80px'
                        borderRadius='15px'
                    />
                    <Flex direction='column' maxWidth='100%' my={{ sm: "14px" }}>
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
                            {status == 'loading' ? 'loading...' : session?.user.company.role} Seller
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
                            bg={colorMode === "dark" ? "navy.900" : "#fff"}
                            borderRadius='8px'
                            justifyContent='center'
                            py='10px'
                            boxShadow={router.pathname === "/profile/profile-overview" ? '0px 2px 5.5px rgba(0, 0, 0, 0.06)' : 'none'}
                            cursor='pointer'>
                            <Icon color={textColor} as={FaCube} me='6px' />
                            <Text fontSize='xs' color={textColor} fontWeight='bold'>
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
                            boxShadow={router.pathname === "/profile/profile-projects" ? '0px 2px 5.5px rgba(0, 0, 0, 0.06)' : 'none'}
                            py='10px'
                            cursor='pointer'>
                            <Icon color={textColor} as={FaPenFancy} me='6px' />
                            <Text fontSize='xs' color={textColor} fontWeight='bold'>
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
                            boxShadow={router.pathname === "/profile/profile-info" ? '0px 2px 5.5px rgba(0, 0, 0, 0.06)' : 'none'}
                            py='10px'
                            cursor='pointer'>
                            <Icon color={textColor} as={FaPenFancy} me='6px' />
                            <Text fontSize='xs' color={textColor} fontWeight='bold'>
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
