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



const WaveComp = () => {
    return (
        <div style={{ overflow: 'hidden' }}>
            <svg
                preserveAspectRatio="none"
                viewBox="0 0 1200 120"
                xmlns="http://www.w3.org/2000/svg"
                style={{ fill: '#588157', width: '139%', height: '15vh' }}
            >
                <path
                    d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
                    opacity=".25"
                />
                <path
                    d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
                    opacity=".5"
                />
                <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />

            </svg>
        </div>
    );
}


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
                <Box bg={"primary"} >
                    <Stack spacing={5} py={20}>
                        <Phrase text="Be part of our community, join GreenBoost marketplace." highlight={['community', 'marketplace']} />
                        <Phrase text="Reduce you carbon footprint through voluntary carbon credit market." highlight={['']} />
                    </Stack>

                </Box>
                <WaveComp />

                <Box my={25}>
                    <HomeNav />
                </Box>
                <Box bg={"primary"}>
                    <Stack spacing={5} py={20}>
                        <Phrase text='"We are on a highway to climate hell."' highlight={['']} />
                        <Phrase text="Turn right and take with us the stairway to climate heaven." highlight={['']} />
                    </Stack>
                </Box>
                <WaveComp />
                <Box my={20}>
                    <DescriptionComponent />
                </Box>
                <Box bg={"primary"}>
                    <Stack spacing={5} py={20}>
                        <Phrase text="Despite yesterday, we act today because of tomorrow." highlight={['']} />
                        <Phrase text="  Offset our future, Together. " highlight={['Offset our future']} />
                    </Stack>
                </Box>
                <WaveComp />
                <Box my={20}>
                    <TeamComponent />
                </Box>
                <Box bg={"primary"}>
                    <Stack spacing={5} py={24}>
                        <Phrase text="We are GreenBoost, we are an ecosystem, not just a marketplace." highlight={['ecosystem', 'marketplace']} />
                    </Stack>
                </Box>
            </Box>
        </>
    )

}

export default Home

