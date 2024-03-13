import React, { useState } from 'react';
import {
  Container,
  Box,
  Heading,
  Button,
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  HStack,
  Center
} from '@chakra-ui/react';
import { BsPerson } from "react-icons/bs";

// Definisci la variabile sections fuori dal componente
const sections = [
  {
    label: "A quanto ammontano le tue emissioni di Co2?",
    icon: BsPerson,
  },
  {
    label: "Quante persone coinvolgi nelle tue attività?",
    icon: BsPerson,
  },
  {
    label: "Qual è la tua posizione geografica?",
    icon: BsPerson,
  },
  // Aggiungi altre sezioni come desiderato
];

const Calculator = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [inputs, setInputs] = useState(Array(sections.length).fill(''));
  const [showEmailSection, setShowEmailSection] = useState(false); // Stato per gestire la visibilità della sezione dell'email

  const handleNext = () => {
    setCurrentSection(currentSection + 1);
  };

  const handlePrevious = () => {
    setCurrentSection(currentSection - 1);
    setShowEmailSection(false); // Nascondi la sezione dell'email quando si preme "Indietro"
  };

  const handleInputChange = (event) => {
    const newInputs = [...inputs];
    newInputs[currentSection] = event.target.value;
    setInputs(newInputs);
  };

  const handleFinish = () => {
    setShowEmailSection(true); // Attiva la visualizzazione della sezione dell'email al click su "Fine"
    console.log("Valori raccolti:", inputs); // Stampa i valori raccolti nella console
  };

  return (
    <Container bg="tertiary" h="100vh" maxW="full" mt={0} centerContent overflow="hidden">
      <Box bg="primary" color="white" borderRadius="lg" m={{ sm: 4, md: 16, lg: 10 }} p={{ sm: 5, md: 5, lg: 16 }}>
        <Box p={4}>
          <Heading mb={4}>Calcola le tue emissioni Scope 2</Heading>
          <VStack spacing={10}>
            <FormControl id="name">
              <FormLabel py={4}>{sections[currentSection].label}</FormLabel>
              <InputGroup borderColor="primary" bg="tertiary" color="primary" borderRadius="lg">
                <InputLeftElement pointerEvents="none" color="primary" as={sections[currentSection].icon} />
                <Input type="text" size="md" value={inputs[currentSection]} onChange={handleInputChange} />
              </InputGroup>
            </FormControl>
            <HStack>
              <Button
                variant="solid"
                bg="tertiary"
                color="primary"
                onClick={handlePrevious}
                _hover={{}}
                disabled={currentSection === 0}
              >
                Indietro
              </Button>
              {currentSection === sections.length - 1 ? (
                <Button
                  variant="solid"
                  bg="tertiary"
                  color="primary"
                  onClick={handleFinish}
                  _hover={{}}
                >
                  Fine
                </Button>
              ) : (
                <Button
                  variant="solid"
                  bg="tertiary"
                  color="primary"
                  onClick={handleNext}
                  _hover={{}}
                  disabled={currentSection === sections.length - 1}
                >
                  Avanti
                </Button>
              )}
            </HStack>
            {showEmailSection && ( // Mostra la sezione dell'email solo se showEmailSection è true
              <Box>
                <FormControl id="email">
                  <FormLabel py={4}>Inserisci il tuo indirizzo email per avere i risultati</FormLabel>
                  <InputGroup borderColor="primary" bg="tertiary" color="primary" borderRadius="lg">
                    <Input type="email" size="md" />
                  </InputGroup>
                  <Center> <Button
                    variant="solid"
                    bg="tertiary"
                    color="primary"
                    onClick={() => setShowEmailSection(false)} // Nascondi la sezione dell'email al click su "Invia"
                    _hover={{}}
                  >
                    Invia
                  </Button></Center>
                </FormControl>
              </Box>
            )}
          </VStack>
        </Box>
      </Box>
    </Container>
  );
}

export default Calculator;
