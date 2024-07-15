// Chakra imports
import {

    Box,
    Button,
    Flex,
    Grid,
    Icon,
    Image,
    Link,
    Heading,
    Spacer,
    Text,
    Input,
    Center,
    useColorModeValue,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react"
import Card from "@components/card/Card";
import CardBody from "@components/card/CardBody";
import CardHeader from "@components/card/CardHeader";
import { RiMastercardFill } from "react-icons/ri";
import UserInfo from '@components/profile/profileInfo/userInfo';
import Documentations from "@components/profile/userDocumentation/documentations";

const FlexContainerIB = ({ children }) => {
    return <Flex direction={{ sm: "column" }}>{children}</Flex>;
};

const TextDesc = ({ children }) => {
    return <Text w={{ md: "50%" }} fontWeight='bold' fontSize="15px" mr={{ sm: "0px", md: "20px" }}>{children}</Text>;
};

const TextValue = ({ children }) => {
    return <Text  color="gray.400" mt={"9px"}  mb='18px' >{children}</Text>;
};

const pdfList = [{ name: "Nome1", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
    { name: "Nome2", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" }]
function ProfileInfoBuyer({userInfo}) {

    //var { data: session, status } = useSession()

     //console.log(status)
     //console.log(session)

     var session = {
          "user": {
            "company": {
              "company_name": "Nome Azienda",
              "customer": {
                "email": "email@azienda.com",
                "customer_address": "Indirizzo Azienda",
                "city": {
                  "city_name": "Nome Città",
                  "country": {
                    "country_name": "Nome Paese"
                  }
                }
              },
              "tax_number": "1234567890"
            }
          }
        }
      
    return (
        <>
         <Flex direction='column'  >
                <Grid templateColumns={{ sm: "1fr", xl: "repeat(2, 1fr)" }} gap='22px'>
                <UserInfo user={userInfo}/>
                <Documentations pdfList={pdfList}/>
                </Grid>

                </Flex>
    

        </>
    );
}

export default ProfileInfoBuyer;
