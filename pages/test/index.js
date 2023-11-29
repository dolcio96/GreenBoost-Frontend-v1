
import { ReactElement } from "react"
import {
    Container,
} from "@chakra-ui/react";
import Layout from "@components/layout/profileLayout"
import Head from "@components/head"
import TableComponet from "@components/table"
import ProjectComponent from "@components/projects"
import ProfileProjectComponent from "@components/profile/profileProjects/indexSeller"
import ProjectDetailComponent from "@components/projectDetail"
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

const userinfo = {
    projects: [
      {
        id: "Project ID 1",
        project_type: {
          type_name: "eolic"
        },
        carbon_credits: [
          {
            credit_id: 1,
            credit_value: 100
          },
          {
            credit_id: 2,
            credit_value: 200
          }
        ],
        update_timestamp: "2023-01-01T00:00:00.000Z",
        tablesData: [
          {
            buyer_name: "Buyer 1",
            purchased_credits: 50
          },
          {
            buyer_name: "Buyer 2",
            purchased_credits: 75
          }
        ]
      },
      {
        id: "Project ID 2",
        project_type: {
        type_name: "forest"
        },
        carbon_credits: [
          {
            credit_id: 3,
            credit_value: 150
          }
        ],
        update_timestamp: "2023-02-01T00:00:00.000Z",
        tablesData: [
          {
            buyer_name: "Buyer 3",
            purchased_credits: 30
          }
        ]
      }
    ]
  }

  const project= {
    id: "someId",
    name: "Project Name",
    latitude: 123.456,
    longitude: 789.012,
    description: "Project Description",
    price_per_unit: 10,
    carbon_credits: [
      // Carbon credits details if needed
    ],
    valid_from: "2023-01-01",
    valid_to: "2023-12-31",
    project_type: {
      name: "Some Project Type"
    },
    country: {
      name: "Some Country"
    }
  };
export default function Projects() {
    return (
        <>
            <Head
                title="GreenBoost: Projects"
                description="GreenBoost: Projects"
            />
            <ProjectDetailComponent project={project}/>
         {/* <ProfileProjectComponent userInfo={userinfo}/>*/} 
        {/*     <ProjectComponent projects={data} />*/}
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