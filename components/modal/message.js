import React, { useState } from "react";

import {
    Box,
    Center,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,


} from "@chakra-ui/react";

const Message = ({ isOpen, onOpen, onClose, header, text, bgColor }) => {



    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg={bgColor}>
                    <ModalHeader color={"tertiary"}>{header}</ModalHeader>
                    <ModalBody color={"tertiary"}>
                        {text}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )

}

export default Message

