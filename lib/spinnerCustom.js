import React from 'react';
import {
    Text,
    Spinner
} from "@chakra-ui/react";
import { useSpring, animated } from "react-spring";


export default function SpinnerCustom() {
    return (<>
        <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor="secondary"
            color="primary"
            size='xl' />
    </>)

}
