import React from "react"
import {
    Flex,
    SimpleGrid,
} from '@chakra-ui/react';
import TeamCard from './teamCard'

import LudovicoAvatar from "@public/Images/team/ludovico.JPG"
import GiovanniAvatar from "@public/Images/team/giovanni.JPEG"

import EnricoAvatar from "@public/Images/team/enrico.JPEG"
import ArturoAvatar from "@public/Images/team/arturo.JPEG"


import BackgroudImage from "@public/Images/heroForest2.jpg"
const team = {
    ludovico: { nome: "Ludovico Dolcini", role: "Frontend Developer", desc: "descrizione", linkedin: "linkedin link", img:  LudovicoAvatar  },
    giovanni: { nome: "Giovanni Misso", role: "Frontend Developer", desc: "descrizione", linkedin: "linkedin link", img:  GiovanniAvatar },
    arturo: { nome: "Arturo Sorgato", role: "CEO", desc: "descrizione", linkedin: "linkedin link", img:  ArturoAvatar  },
    tommaso: { nome: "Tommaso Marinelli", role: "CEO", desc: "descrizione", linkedin: "linkedin link", img: ArturoAvatar  },
    enrico: { nome: "Enrico Martini", role: "CEO", desc: "descrizione", linkedin: "linkedin link", img:  EnricoAvatar  },
    andrea: { nome: "Andrea Corini", role: "CEO", desc: "descrizione", linkedin: "linkedin link", img:  ArturoAvatar  },
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
    const BGImage = BackgroudImage.src
    return (
        <>
            <Flex direction={"column"}
                backgroundColor={"#FEFAE0"}



            >

                {/*<Bubbles />*/}

                <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing='40px'>
                    <TeamCard info={team.ludovico} />
                    <TeamCard info={team.giovanni} />
                    <TeamCard info={team.arturo} />
                    <TeamCard info={team.tommaso} />
                    <TeamCard info={team.enrico} />
                    <TeamCard info={team.andrea} />
                </SimpleGrid>

            </Flex>
        </>

    )
}

export default Team
