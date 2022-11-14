import React, { useState } from "react";
import Hero from "@components/hero"
import Testimonial from "@components/testimonials"
import HomeNav from "@components/homeBuySellCreate"
import TeamComponent from "@components/team"
import DescriptionComponent from "components/description"
import Phrase from "@components/phrase"

import {
    Box,
    Stack,
    SimpleGrid,
    Center,
    GridItem,
    Flex
} from '@chakra-ui/react';


const PhraseComp = (text, highlight) => {
    return (<>

        <Box className="waveContainer">
            <Box className="wave">
                <Stack spacing={5} my={40}>
                    {text.map((el, i) => {
                        return (<>

                            <Phrase text={el[i]} highlight={['community', 'marketplace']} />
                        </>);
                    })}
                    <Phrase text="Be part of our community, join GreenBoost marketplace." highlight={['community', 'marketplace']} />
                    <Phrase text="Reduce you carbon footprint through voluntary carbon credit market." highlight={['']} />
                </Stack>
            </Box>
        </Box>
    </>)
}


const Home = () => {


    return (
        <>
            <Box>
                <Hero />
                <Box className="waveContainer">
                    <Stack spacing={5} py={20}>
                        <Phrase text="Be part of our community, join GreenBoost marketplace." highlight={['community', 'marketplace']} />
                        <Phrase text="Reduce you carbon footprint through voluntary carbon credit market." highlight={['']} />
                    </Stack>
                    <Box className="wave">
                    </Box>
                </Box>


                <Box my={25}>
                    <HomeNav />
                </Box>
                <Box className="waveContainer">
                    <Stack spacing={5} py={20}>
                        <Phrase text='"We are on a highway to climate hell."' highlight={['']} />
                        <Phrase text="Turn right and take with us the stairway to climate heaven." highlight={['']} />
                    </Stack>
                    <Box className="wave">
                    </Box>
                </Box>
                <Box my={20}>
                    <DescriptionComponent />
                </Box>
                <Box className="waveContainer">
                    <Stack spacing={5} py={20}>
                        <Phrase text="Despite yesterday, we act today because of tomorrow." highlight={['']} />
                        <Phrase text="  Offset our future, Together. " highlight={['Offset our future']} />
                    </Stack>
                    <Box className="wave">
                    </Box>
                </Box>
                <Box my={20}>
                    <TeamComponent />
                </Box>
                <Box bg={"primary"} >
                    <Stack spacing={5} py={24}>
                        <Phrase text="We are GreenBoost, we are an ecosystem, not just a marketplace." highlight={['ecosystem', 'marketplace']} />
                    </Stack>
                </Box>
            </Box>
        </>
    )

}

export default Home

