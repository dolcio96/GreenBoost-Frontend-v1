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

const Message = ({ isOpen, onOpen, onClose, header, text, bgColor , href }) => {



    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg={bgColor}>
                    <ModalHeader color={"tertiary"}>{header}</ModalHeader>
                    <ModalBody color={"tertiary"}>
                        {text}
                    </ModalBody>
                    <ModalFooter><Center><Button as={'a'} href={href}>check on your profile</Button></Center></ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )

}

export default Message

