import React from 'react';
import {
    Text,
    } from "@chakra-ui/react";
import { useSpring, animated} from "react-spring";


export default function Number({ n, dly }) {
    const AnimatedText = animated(Text);
    const { number } = useSpring({
        reset: true,
        from: { number: 0 },
        number: n,
        delay: dly,
        config: { mass: 1, tension: 20, friction: 10 }
    });

    return <AnimatedText>
         {number.to((n) => n.toFixed(0))} 
    </AnimatedText>

}
