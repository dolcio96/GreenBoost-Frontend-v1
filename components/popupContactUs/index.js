import { Button, useToast,Center, RadioGroup,Radio,HStack, Checkbox,Link,Stack,FormControl,Input, Modal, Text, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, ModalFooter } from '@chakra-ui/react';
import { MdPhone, MdEmail, MdLocationOn } from 'react-icons/md';
import { useForm, Controller } from 'react-hook-form'
import React, { useState } from 'react'
import { useTranslation } from "react-i18next";
const PopUpContactUs = ({ isOpen, onClose }) => {
    const toast = useToast()
    // const { isOpen, onOpen, onClose } = useDisclosure()
    //var terms = true;
    let { t } = useTranslation();
    const [terms, setTerms] = useState(true);

    
    const {
        control,
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm()

    async function onSubmit(subscriber) {

        console.log(subscriber)
         try {
            const result = await fetch('/api/sendMailNumber', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(subscriber),
            });

            const data = await result.json();

            if (result.ok) {
                onClose();
                toast({
                    position: 'bottom-left',
                    title: "Grazie per la sottoscrizione!",
                    description: "Vi contatteremo presto.",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                });
            } else {
                throw new Error(data.message || "Something went wrong.");
            }
        } catch (error) {
            console.error(error);

            onClose();
            toast({
                position: 'bottom-left',
                title: "Errore!",
                description: error.message || "Qualcosa è andato storto, riprova più tardi.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
    }





    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} isCentered >
                <ModalOverlay
                    backdropFilter='blur(3px) hue-rotate(50deg)'
                />
                <ModalContent >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <ModalHeader justifyContent={"center"} textAlign={"center"}>Di quanti Carbon Credit hai bisogno?</ModalHeader>
                        <ModalBody>
                            <Stack direction={'column'} spacing={6}>
                                <Center textAlign={"center"}>
                                <Text>Inserisci la quantità e lasciaci il tuo contatto, verrai ricontattato dal nostro team specializzato.</Text>
                                </Center>
                                <FormControl isRequired>
                                    <Input placeholder='Quantità' className="inputFieldNormal" type={'number'} {...register('number')} />
                                </FormControl>
                                <FormControl isRequired>
                                    <Input placeholder='Email' className="inputFieldNormal" type={"email"} {...register('email')} />
                                </FormControl>

                                <FormControl isRequired >
                                    <Center>
                                        <Checkbox onChange={(e) => setTerms(!terms)} />
                                        <Link href="https://www.iubenda.com/privacy-policy/59609447" ml="2" isExternal>{t('home.pop_up_contact_us.terms_and_conditions')}
                                        </Link>
                                    </Center>
                                </FormControl>
                            </Stack>

                        </ModalBody>
                        <ModalFooter justifyContent={"center"}>

                            <Button variant={"normalButton"} mr={3} justifyContent={"center"} type='submit' isDisabled={terms ? true : false}>
                                Contattaci
                            </Button>

                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>)

};

export default PopUpContactUs;
