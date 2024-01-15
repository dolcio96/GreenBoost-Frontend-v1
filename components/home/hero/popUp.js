import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    createIcon,
    Flex,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalOverlay,
    FormControl,
    Input,
    Radio,
    RadioGroup,
    Image,
    Center,
    useToast
} from '@chakra-ui/react';


//import BackgroudImage from "@public/Images/heroForest2.jpg"
import { useTranslation } from "react-i18next";

const PopUp = ({ isOpen, onOpen, onClose }) => {

    const toast = useToast()
    // const { isOpen, onOpen, onClose } = useDisclosure()

    let { t } = useTranslation();
    const {
        control,
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm()

    async function onSubmit(subscriber) {
        try {
          const result = await fetch('/api/sendMail', {
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
                        <ModalHeader justifyContent={"center"} textAlign={"center"}>{t('home.pop_up_contact_us.title')}</ModalHeader>
                        <ModalBody>
                            <Stack direction={'column'} spacing={6}>
                                <Text>{t('home.pop_up_contact_us.description')}</Text>
                                <FormControl isRequired>
                                    <Input placeholder='Email' className="inputFieldNormal" type={"email"} {...register('email')} />
                                </FormControl>
                                <FormControl isRequired>
                                    <Stack direction='column' textAlign={"center"}>
                                        <Text>{t('home.pop_up_contact_us.choose')}</Text>
                                        <Center>
                                        <Controller
                                            render={({ field: { onChange, value } }) => (
                                            <RadioGroup name='type' onChange={onChange} value={value}>
                                                <Stack direction='row'>
                                                    <Radio value='Seller'>{t('home.pop_up_contact_us.seller')}</Radio>
                                                    <Radio value='Buyer'>{t('home.pop_up_contact_us.buyer')}</Radio>
                                                </Stack>
                                            </RadioGroup>
                                             )}
                                             name="type"
                                             control={control}
                                         />
                                        </Center>

                                    </Stack>
                                </FormControl>
                            </Stack>

                        </ModalBody>
                        <ModalFooter justifyContent={"center"}>

                            <Button variant={"normalButton"} mr={3} justifyContent={"center"} type='submit'>
                                {t('home.pop_up_contact_us.button')}
                            </Button>

                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>)

}

export default PopUp
