import {
    Text,
} from '@chakra-ui/react';

import React from 'react';

import { useSpring, animated} from "react-spring";

function Number({ n, dly }) {
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



const Create = () => {

    return (
        <>Create

            <Number n={448} dly={200} />

            <div>
                <svg width="1000" height="100">
                    <path d="M 0 300 Q 200 350 400 300 Q 600 250 800 300" stroke="black" fill="transparent" />
                </svg>
            </div>
        </>
    );
}

export default Create