import { ReactElement, useState, useEffect } from "react"
import {
    Flex,
    Accordion,
    Box,
    Image,
    AccordionItem,
    useColorModeValue,
    Text,
    Icon,
    chakra,
    Tooltip,
    AccordionIcon,
    Button,
    AccordionButton,
    AccordionPanel,
    LinkBox,
    LinkOverlay,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalCloseButton,
    useDisclosure,
    ModalBody
} from '@chakra-ui/react';
import ForestIcon from '@mui/icons-material/Forest';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';

const Card = (props) => {
    const [show, setShow] = useState(false);
    const handleToggle = () => setShow(!show);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [size, setSize] = useState('md')
    const handleSizeClick = (newSize) => {
        setSize(newSize)
        onOpen()
    }
    return (<>

        <Flex p={50} w="full" alignItems="center" justifyContent="center">
            <Box bg={useColorModeValue('white', 'gray.800')}
                maxW="sm"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative">
                <LinkBox>
                    <Flex mt="1" justifyContent="center" alignContent="center">
                        <Box
                            fontSize="2xl"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            isTruncated
                            mb="3px">
                           <Text> Project <span style={{color:"green"}}>{props.name} </span></Text>
                        </Box>
                    </Flex>
                    <LinkOverlay href={props.href}>
                        <Box>
                            <Box
                            >

                                <Image
                                    src={props.imageURL}
                                    alt={`Picture of ${props.name}`}
                                    rounded="lg"
                                    w="300px"
                                    h="300px"
                                />

                                <Box p="6">

                                    <Flex mt="1" justifyContent="center" alignContent="center">
                                        <Box
                                            fontSize="2xl"
                                            fontWeight="semibold"
                                            as="h4"
                                            lineHeight="tight"
                                            isTruncated>
                                            <ForestIcon/><EmojiNatureIcon/>
                                        </Box>
                                    </Flex>

                                    <Flex justifyContent="center" alignContent="center">

                                        <Box color={'gray.600'} fontSize="sm">
                                            {props.description}
                                        </Box>


                                    </Flex>
                                </Box >

                            </Box>
                        </Box>
                    </LinkOverlay>
                </LinkBox>
                {/*
                <Flex mt="1" mb="2" justifyContent="center" alignContent="center">
                    <Button colorScheme='teal' variant='outline' onClick={() => handleSizeClick('md')}
                        key={'md'}
                        m={4}>
                        More Info
    </Button></Flex>*/}
            </Box>
        </Flex>

        {/*  <Modal onClose={onClose} size={'md'} isOpen={isOpen}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader> {props.name}</ModalHeader>
              
                <ModalBody>
                    {props.moreInfo}
                </ModalBody>
                <ModalFooter>

                </ModalFooter>
            </ModalContent>
        </Modal>
        */ }
    </>)

}

export default Card
