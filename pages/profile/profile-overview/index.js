import {
  Spinner,
  Center,
} from '@chakra-ui/react';

import { ReactElement } from "react"
import Layout from "@components/layout"
import Head from "@components/head"
import ProfileOverviewSellerComponet from "@components/profile/profileOverviewSeller"
import ProfileOverviewBuyerComponet from "@components/profile/profileOverviewBuyer"
import ProfileLayout from "@components/layout/profileLayout"
import { useRouter } from 'next/router';
import { useSession, getSession } from "next-auth/react"

import handler from '@pages/api/backend/user/userGetData'

export default function Profile( {userInfo} ) {
const { data: session, status } = useSession()
console.log(session);
console.log(userInfo);

var userinfo = {
  "id": "buyer_fd3322a8-c11e-4631-894d-b004074250c1",
  "company_id": "company_be93f1b5-fbc0-45da-aa11-0666f8c4dadc",
  "insert_timestamp": "2024-07-15T19:06:54.162Z",
  "update_timestamp": "2024-07-15T19:06:54.162Z",
  "company": {
    "name": "EcoCorp",
    "address": "123 Green St, EcoCity",
    "industry": "Renewable Energy",
    "website": "https://www.ecocorp.com"
  },
  "cart": {
    "items": [
      {
        "product_id": "product_123",
        "quantity": 10,
        "price": 20
      },
      {
        "product_id": "product_456",
        "quantity": 5,
        "price": 15
      }
    ],
    "total": 275
  },
  "carbon_credits": [
    {
      "id": "carbon_credit_ed02d51b-f215-4cd7-a218-acfa683e4fb3",
      "company_id": "company_be93f1b5-fbc0-45da-aa11-0666f8c4dadc",
      "emission_order_id": "emission_order_bc89f4de-4d64-40c8-a31c-1176ee5b09ec",
      "project_id": "project_42b68505-bee4-4d10-ac78-c473ada5356c",
      "insert_timestamp": "2024-07-15T19:53:35.861Z",
      "update_timestamp": "2024-07-15T19:53:35.861Z",
      "project": {
        "id": "project_42b68505-bee4-4d10-ac78-c473ada5356c",
        "name": "New Project Name",
        "description": "Description of the new project",
        "unit": 2,
        "price_per_unit": "50",
        "latitude": "-17.69149",
        "longitude": "-42.516541",
        "valid_from": "2024-01-01",
        "valid_to": "2024-12-31",
        "seller_id": "seller_ce790fac-cf7b-4af1-b03a-b27bcdf25bdd",
        "certification_method_id": "cert_method_001",
        "certification_authority_id": "cert_authority_001",
        "project_type_id": "project_type_529d4df2-a8ed-4853-a2f9-f9646864b484",
        "durability_id": "durability_001",
        "country_id": "country_7f766af5-79fa-45f1-a1f0-9fc31891ed86",
        "insert_timestamp": "2024-07-15T18:50:12.526Z",
        "update_timestamp": "2024-07-15T18:50:12.526Z",
        "project_type": {
          "id": "project_type_529d4df2-a8ed-4853-a2f9-f9646864b484",
          "name": "CORC 100+",
          "description": "...",
          "insert_timestamp": "2024-07-15T18:50:12.526Z",
          "update_timestamp": "2024-07-15T18:50:12.526Z"
        }
      }
    },
    {
      "id": "carbon_credit_b92bcc5a-3ebd-41c4-8305-4d348c7d08b1",
      "company_id": "company_be93f1b5-fbc0-45da-aa11-0666f8c4dadc",
      "emission_order_id": "emission_order_bc89f4de-4d64-40c8-a31c-1176ee5b09ec",
      "project_id": "project_42b68505-bee4-4d10-ac78-c473ada5356c",
      "insert_timestamp": "2024-07-15T19:53:35.861Z",
      "update_timestamp": "2024-07-15T19:53:35.861Z",
      "project": {
        "id": "project_42b68505-bee4-4d10-ac78-c473ada5356c",
        "name": "Project Two",
        "description": "Another project description",
        "unit": 1,
        "price_per_unit": "75",
        "latitude": "-15.69149",
        "longitude": "-40.516541",
        "valid_from": "2024-02-01",
        "valid_to": "2024-11-30",
        "seller_id": "seller_a13f07ac-cf7b-4af1-b03a-b27bcdf25bdd",
        "certification_method_id": "cert_method_002",
        "certification_authority_id": "cert_authority_002",
        "project_type_id": "project_type_72a4d4f3-a8ed-4853-a2f9-f9646864b123",
        "durability_id": "durability_002",
        "country_id": "country_7f766af5-79fa-45f1-a1f0-9fc31891ed87",
        "insert_timestamp": "2024-07-15T18:55:12.526Z",
        "update_timestamp": "2024-07-15T18:55:12.526Z",
        "project_type": {
          "id": "project_type_72a4d4f3-a8ed-4853-a2f9-f9646864b123",
          "name": "Renewable Energy",
          "description": "Project focused on renewable energy.",
          "insert_timestamp": "2024-07-15T18:55:12.526Z",
          "update_timestamp": "2024-07-15T18:55:12.526Z"
        }
      }
    }
  ],
  "projects": [
    {
      "id": "project_1",
      "name": "Project One",
      "description": "Description for project one",
      "location": "Country A",
      "start_date": "2023-01-01",
      "end_date": "2023-12-31",
    },
    {
      "id": "project_2",
      "name": "Project Two",
      "description": "Description for project two",
      "location": "Country B",
      "start_date": "2024-01-01",
      "end_date": "2024-12-31",
      "status": "Ongoing"
    }
  ],
  "customer_type": "buyer"
}

  return (

    <>
      <Head
        title="GreenBoost: Profile"
        description="GreenBoost: Profile"
      />
      {status == 'loading' ?
        <Center h='70vh'>
          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor="#b7e4c7"
            color="#0B0E3F"
            size='xl' />
        </Center>
        : session?.user.customer_type == "seller" ?
        <ProfileOverviewSellerComponet userInfo={userinfo}/>
          : <ProfileOverviewBuyerComponet userInfo={userinfo}/>}

    </>
  )
}

Profile.getLayout = function getLayout(page) {
  return <ProfileLayout>{page}</ProfileLayout>
}

/*
export async function getServerSideProps(context) {
  const session = await getSession(context);

  // Crea un oggetto fittizio req e res per la chiamata a handler

  if (!session) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    };
  }


  const req = {
    query: {
      userType: session?.user.customer_type,
      userID: session?.user.id
    }
  };

  const res = {
    status: (statusCode) => ({
      json: (data) => ({ statusCode, data })
    })
  };

  const response = await handler(req, res);

  // Estrarre userInfo dal risultato di handler
  const userInfo = response;
  return {
    props: {
      userInfo
    }
  };
}*/