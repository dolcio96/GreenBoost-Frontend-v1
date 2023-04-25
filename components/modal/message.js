import React, { useState } from "react";

import {
    Box,
    Center,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button
} from "@chakra-ui/react";

const Message = ({ isOpen, onOpen, onClose, header, text, footer, bgColor, href }) => {



    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg={bgColor}>
                    <ModalHeader color={"tertiary"}><Center>{header}</Center></ModalHeader>
                    <ModalBody color={"primary"}>
                        {text}
                    </ModalBody>
                    {footer &&
                        <ModalFooter>

                            <Center>
                                <Button as={'a'} href={href}>{footer}</Button>
                            </Center>
                        </ModalFooter>
                    }
                </ModalContent>
            </Modal>
        </>
    )

}

export default Message

