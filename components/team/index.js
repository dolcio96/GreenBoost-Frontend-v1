import React from "react"
import {
    Stack,
    SimpleGrid,
    Heading,
    Center,
    Highlight
} from '@chakra-ui/react';
import TeamCard from './teamCard'
import { useAnimation, motion } from "framer-motion"

import LudovicoAvatar from "@public/Images/team/ludovico.jpg"
import GiovanniAvatar from "@public/Images/team/giovanni.jpeg"
import EnricoAvatar from "@public/Images/team/enrico.jpeg"
import ArturoAvatar from "@public/Images/team/arturo.jpeg"
import AndreaAvatar from "@public/Images/team/andrea.jpg"
import TommasoAvatar from "@public/Images/team/tommaso.jpg"
import { useTranslation } from "react-i18next";

import BackgroudImage from "@public/Images/heroForest2.jpg"
const team = {
    ludovico: { nome: "Ludovico Dolcini", role: "Web Design Architect", desc: "descrizione", linkedin: "https://www.linkedin.com/in/ldolcini/", img: LudovicoAvatar },
    giovanni: { nome: "Giovanni Misso", role: "Backend Integration Specialist", desc: "descrizione", linkedin: "https://www.linkedin.com/in/giovannimisso/", img: GiovanniAvatar },
    arturo: { nome: "Arturo Sorgato", role: "CTO", desc: "descrizione", linkedin: "https://www.linkedin.com/in/arturo-sorgato-555b05215/", img: ArturoAvatar },
    tommaso: { nome: "Tommaso Marinelli", role: "CEO", desc: "descrizione", linkedin: "https://www.linkedin.com/in/tommaso-marinelli1/", img: TommasoAvatar },
    enrico: { nome: "Enrico Martini", role: "COO", desc: "descrizione", linkedin: "https://www.linkedin.com/in/enrico-martini-070696/", img: EnricoAvatar },
    andrea: { nome: "Andrea Corini", role: "CMO", desc: "descrizione", linkedin: "https://www.linkedin.com/in/andrea-corini-131634129/", img: AndreaAvatar },
}

const Bubbles = () => {
    const rows = []
    for (let i = 0; i <= 100; i++) {
        rows.push(<div class="circle-container">
            <div class="circle">

            </div>
        </div>)
    }
    return (<>
        {rows}
    </>)
}

const Team = () => {
    const MotionHeading = motion(Heading)
    let { t } = useTranslation();
    return (
        <>
            <Stack
                direction={"column"}
                backgroundColor={"white"}
            >
                <MotionHeading pb="20px" color="primary" fontSize={{ base: "3xl", md: "5xl" }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
                >
                    <Center>{t('home.team.title')}</Center>
                </MotionHeading>
                {/*<Bubbles />*/}

                <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={10} py={0}>
                    <TeamCard info={team.enrico} />
                    <TeamCard info={team.arturo} />
                    <TeamCard info={team.tommaso} />
                    <TeamCard info={team.andrea} />
                    <TeamCard info={team.ludovico} />
                    <TeamCard info={team.giovanni} />
                </SimpleGrid>
            </Stack>
        </>

    )
}

export default Team
