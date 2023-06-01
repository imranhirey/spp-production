import { Box, Heading, Button, Divider, Center, ChakraBaseProvider } from '@chakra-ui/react';
import { ReactElement } from 'react';
import {  SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';


const ProgramWelcomeSection = () => {
  // make the head Skillhob .pdf



  return (
   <ChakraBaseProvider>

     <Box>
    
    <Box
      textAlign="center"
      py={12}
      px={8}
      bg="teal.500"
      color="white"
    >
    <h1 
    style={{
      fontSize: '2.5rem',
      fontWeight: 'bold',
      lineHeight: '1.2',
      letterSpacing: '-0.05rem',
      marginBottom: '1rem',
      marginTop: '3rem',
    }}
    >
      SKILLHOB PATNERSHIP PROGRAM
    </h1>

    
    </Box>
    <Box style={{
      
    }} p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        
        <Divider
          orientation="vertical"
          style={{
            height: 'auto',
            width: 'auto',
            border: '1px solid #e2e8f0',
            margin: '0 1rem',

          }}


        />
        <Center>
          <h1 style={{
            fontSize: '1.1rem',
          }}  >
          Join the SkillHob Partnership Program, where skilled professionals collaborate directly with us on our innovative project. Through comprehensive training, personalized support, and equity-based incentives, you become an integral part of our vision to revolutionize recruitment. Shape the future of the industry - join us today!
          </h1>
        
        
        </Center>
     

        
      </SimpleGrid>
      <Center>
        <Button
         style={{
          fontSize: '1.1rem',
          marginTop: '1rem',
          marginBottom: '1rem',
          backgroundColor: '#3182ce',
          color: 'white',
          borderRadius: '0.5rem',
          padding: '0.5rem 1rem',
          fontWeight: 'bold',
         }}
          
          
        >
          Apply Now
        </Button>
        </Center>
    </Box>
    <Center>
      <Heading>
        External Resources
      </Heading>

     
    </Center>
 <Center>
 <Button onClick={()=>{
  // download Skillhob .pdf in the public folder
  window.open('/Skillhob.pdf')
 }} color={'blue'} variant={'link'} >
     download the Program Profile

     </Button>

    
 </Center>
 <Center>
 <Button 
 onClick={()=>{
    window.open('https://beta.companieshouse.gov.uk/company/14829091')
 }}
  color={'blue'} variant={'link'} >
     Skillhob / Company House /  14829091

     </Button>
 </Center>

</Box>
   </ChakraBaseProvider>
  );
}

export default ProgramWelcomeSection;
