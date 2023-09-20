
import { ReactElement } from "react"
import {
    Container,
} from "@chakra-ui/react";
import Layout from "@components/layout"
import Head from "@components/head"
import TableComponet from "@components/table"
import ProjectComponent from "@components/projects"

import ForestIcon from '@mui/icons-material/Forest';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
//To retrieve
const data = [
  {
      imageURL:
          'https://images.hdqwalls.com/wallpapers/sunbeams-morning-forest-4k-j7.jpg',
      name: 'nome 1',
      description: 'Descrizione progetto in due righe Descrizione progetto in due righe Descrizione progetto in due righe Descrizione progetto in due righe',
      icons: [ForestIcon, EmojiNatureIcon],
      href: '/buy/buynow',
      contry:{name:"Italia"},
      project_type:{name:"forasdest"}
  },
  {
      imageURL:
          'https://images.hdqwalls.com/wallpapers/sunbeams-morning-forest-4k-j7.jpg',
      name: 'nome 2',
      description: 'Descrizione progetto in due righe Descrizione progetto in due righe Descrizione progetto in due righe Descrizione progetto in due righe Descrizione progetto in due righe',
      icons: [ForestIcon, EmojiNatureIcon],
      href: '/buy/buynow',
      contry:{name:"Francia"},
      project_type:{name:"lasdeaf"}
  },
  {
      imageURL:
          'https://images.hdqwalls.com/wallpapers/sunbeams-morning-forest-4k-j7.jpg',
      name: 'nome 3',
      description: 'Descrizione progetto in due righe Descrizione progetto in due righe Descrizione progetto in due righe Descrizione progetto in due righe Descrizione progetto in due righe',
      icons: [ForestIcon, EmojiNatureIcon],
      href: '/buy/buynow',
      contry:{name:"Germania"},
      project_type:{name:"nucleasdar"}
  },
  {
      imageURL:
          'https://images.hdqwalls.com/wallpapers/sunbeams-morning-forest-4k-j7.jpg',
      name: 'nome 4',
      description: 'Descrizione progetto in due righe Descrizione progetto in due righe Descrizione progetto in due righe Descrizione progetto in due righe Descrizione progetto in due righe',
      icons: [ForestIcon, EmojiNatureIcon],
      href: '/buy/buynow',
      contry:{name:"Austria"},
      project_type:{name:"chemical"}
  },
  {
      imageURL:
          'https://images.hdqwalls.com/wallpapers/sunbeams-morning-forest-4k-j7.jpg',
      name: 'nome 5',
      description: 'Descrizione progetto in due righe Descrizione progetto in due righe Descrizione progetto in due righe Descrizione progetto in due righe Descrizione progetto in due righe',
      icons: [ForestIcon, EmojiNatureIcon],
      href: '/buy/buynow',
      contry:{name:"Nuova Zelanda"},
      project_type:{name:"leaf"}
  },
  {
      imageURL:
          'https://images.hdqwalls.com/wallpapers/sunbeams-morning-forest-4k-j7.jpg',
      name: 'nome 6',
      description: 'Descrizione progetto in due righe Descrizione progetto in due righe Descrizione progetto in due righe Descrizione progetto in due righe Descrizione progetto in due righe',
      icons: [ForestIcon, EmojiNatureIcon],
      href: '/buy/buynow',
      contry:{name:"Stati Uniti"},
      project_type:{name:"forest"}
  },

];


export default function Projects() {
    return (
        <>
            <Head
                title="GreenBoost: Projects"
                description="GreenBoost: Projects"
            />

            <ProjectComponent projects={data} />
        </>
    )
}

Projects.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}
/*
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(
        process.env.DATABASE_URL+":"+process.env.DATABASE_PORT+"/api/crud/project",
        {
            method: "GET",
            headers: { 'Content-Type': 'application/json' }
        }
    )
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}*/