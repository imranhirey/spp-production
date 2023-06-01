import { Box, Heading, Button, Divider, Center, ChakraBaseProvider } from '@chakra-ui/react';
import { ReactElement } from 'react';
import {  SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import Head from 'next/head';


const ProgramWelcomeSection = () => {
  // make the head Skillhob .pdf



  return (
   <ChakraBaseProvider>
    <Head>
      <title>Skillhob Partnership Program  </title>
    </Head>

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
      SKILLHOB PATNERSHIP PROGRAM  (SSP-2023)
    </h1>

    
    </Box>
    <Box style={{
      
    }} p={4}>
    
      
        
      
     

    <Center>
      <Box
        textAlign="center"
        py={12}
        px={8}
        bg="teal.500"
        color="white"
      >
       
        <Box textAlign="left" mb={4}>
          <Text as="span" fontWeight="bold" fontSize="lg" color="white" display="inline-block" mr={2}>
            1.
          </Text>
          <Text as="span" fontSize="lg" color="white">
            Weekly Mentorship: Gain valuable guidance and support through weekly mentorship sessions.
          </Text>
        </Box>
        <Box textAlign="left" mb={4}>
          <Text as="span" fontWeight="bold" fontSize="lg" color="white" display="inline-block" mr={2}>
            2.
          </Text>
          <Text as="span" fontSize="lg" color="white">
            Real-World Experience: Get hands-on experience working on our cutting-edge platform.
          </Text>
        </Box>
        <Box textAlign="left" mb={4}>
          <Text as="span" fontWeight="bold" fontSize="lg" color="white" display="inline-block" mr={2}>
            3.
          </Text>
          <Text as="span" fontSize="lg" color="white">
            Recognition for Your Work: Have the opportunity to showcase your work on our company resources.
          </Text>
        </Box>
        <Box textAlign="left" mb={8}>
          <Text as="span" fontWeight="bold" fontSize="lg" color="white" display="inline-block" mr={2}>
            4.
          </Text>
          <Text as="span" fontSize="lg" color="white">
            Future Equity Shares: Earn equity shares, becoming a part of our company's growth and success.
          </Text>
        </Box>
      </Box>
    </Center>
      <Center>
        <Button
        onClick={()=>{
          window.open('https://docs.google.com/forms/d/e/1FAIpQLScKi5lBTVa5-RFnyrzJnwkEn_MatpsxdxmyVIMDsXGag2J4Hw/viewform?usp=sf_link')
        }}
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
    <Center></Center>
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

 <Center>
 <Button 
 onClick={()=>{
    window.open('https://facebook.com/imrannur.hirey')
 }}
  color={'blue'} variant={'link'} >
   Contact with  me /  Imran Nur Hirey

     </Button>
 </Center>
  

 

</Box>
   </ChakraBaseProvider>
  );
}

export default ProgramWelcomeSection;
