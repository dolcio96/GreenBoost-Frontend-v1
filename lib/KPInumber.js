import React from 'react';
import {
    Text,
    Flex
} from "@chakra-ui/react";
import { useSpring, animated } from "react-spring";


export default function Number({ n, dly, lbl, fontSize }) {
    const AnimatedText = animated(Text);
    const { number } = useSpring({
        reset: true,
        from: { number: 0 },
        number: n,
        delay: dly,
        config: { mass: 1, tension: 50, friction: 20 }
    });

    return (<>
        <Flex direction='row' >
            <AnimatedText fontSize={fontSize}>

                {number.to((n) => n.toFixed(0))}
            </AnimatedText>
            <Text fontSize={fontSize}> &nbsp; {lbl}</Text>

        </Flex> </>)

}
