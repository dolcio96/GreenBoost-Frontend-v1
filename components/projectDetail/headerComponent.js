import React, { useEffect } from "react";
import {
    Text,
    Flex,
    Button,
    Icon
} from '@chakra-ui/react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';



const ProjectDetailHeader = (props) => {

    return (<>
        <Flex direction='column' pt={{ base: "10px", md: "10px", lg: "10px" }}>
            <Flex
                direction={{ sm: "column", md: "row" }}
                mb='24px'
                maxH='330px'
                justifyContent={{ sm: "center", md: "space-between" }}
                align='center'
                boxShadow='0px 2px 5.5px rgba(0, 0, 0, 0.02)'
                p='5px'
                pl='24px'
                pr='24px'

                borderRadius='20px'>
                <Flex
                    align='center'
                    mb={{ sm: "10px", md: "0px" }}
                    direction={{ sm: "column", md: "row" }}
                    w={{ sm: "100%" }}
                    textAlign={{ sm: "center", md: "start" }}>

                    <Flex direction='column' maxWidth='100%' my={{ sm: "14px" }}>
                        <Text
                            fontSize={{ sm: "lg", lg: "xl" }}
                            fontWeight='bold'
                            ms={{ sm: "8px", md: "0px" }}>
                            {props.project.id}
                        </Text>
                        <Text
                            fontSize={{ sm: "sm", md: "md" }}
                            fontWeight='semibold'>
                            {props.project.description}
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
                            cursor='pointer'>
                            <Icon as={ShareIcon} me='6px' />
                            <Text fontSize='xs' fontWeight='bold'>
                                SHARE
                            </Text>
                        </Flex>
                    </Button>
                    <Button p='0px' bg='transparent' variant='no-effects' as="a" href="/profile/profile-projects">
                        <Flex
                            align='center'
                            w={{ sm: "100%", lg: "135px" }}
                            borderRadius='8px'
                            justifyContent='center'
                            py='10px'
                            cursor='pointer'>
                            <Icon as={FavoriteBorderIcon} me='6px' />
                            <Text fontSize='xs' fontWeight='bold'>
                                SAVE
                            </Text>
                        </Flex>
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    </>)

}

export default ProjectDetailHeader

