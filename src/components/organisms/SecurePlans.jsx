import React from 'react'
import { Box, SimpleGrid, Heading, Text, Flex, List, ListIcon, ListItem } from '@chakra-ui/layout'
import CallNowPhoneBt from '../atoms/CallNowPhoneBt'
import { CheckIcon } from '@chakra-ui/icons'

const SecurePlans = () => {
    return (
<>
<Box align="center" bgColor="#fff" p={{base:"10", md:"0 10 "}}>
    <Heading mb="10">Windstream: Safer Internet for You</Heading>

  <SimpleGrid columns={{base:"1", md:"3"}} spacing={10} maxW="1250px">
    <Flex rounded="md" color="#505050" boxShadow="xl" bgColor="#fafafa" border="solid 1px #D0D0D0" align="center" direction="column" >
      <Box color="" w="100%" p="5">
        <Heading pb="10px" as="h3" fontSize="2xl">CONNECT SECURE</Heading>
        <Flex align="start" justify="center" direction="row" fontWeight="700">
          <Box fontSize="29px" mt="7px" >$</Box>
          <Box color="#EF6724" fontSize="94px" my="-25px">9</Box>
          <Box direction="column">
              <Box color="#EF6724" fontSize="43px" textAlign="start" mb="-18px" >99</Box><Box fontSize="21px" textAlign="start" mb="-5px" >/mo.</Box>
          </Box>
        </Flex>
      </Box>
      <Box justify="start" w="100%" p="5">
      <List pb="6" textAlign="start" color="#000000" spacing={1}>
                <ListItem>
                    <ListIcon as={CheckIcon}  />
                    Get around the clock Premium Tech Support. 
                 </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} />
                    Internet Security including antivirus and malware protection. 
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} />
                    Enhanced Internet Security, parental controls along with device management.
                </ListItem>
            </List>
      <CallNowPhoneBt/>
      </Box>
    </Flex>

    <Flex rounded="md" color="#505050" boxShadow="xl" bgColor="#FAFAFA" border="solid 1px #D0D0D0" align="center" direction="column" >
      <Box color="" w="100%" p="5">
        <Heading pb="10px" as="h3" fontSize="2xl">SELF SECURE</Heading>
        <Flex align="start" justify="center" direction="row" fontWeight="700">
          <Box fontSize="29px" mt="7px" >$</Box>
          <Box color="#EF6724" fontSize="94px" my="-25px">11</Box>
          <Box direction="column">
              <Box color="#EF6724" fontSize="43px" textAlign="start" mb="-18px" >99</Box><Box fontSize="21px" textAlign="start" mb="-5px" >/mo.</Box>
          </Box>
        </Flex>
      </Box>
      <Box justify="start" w="100%" p="5">
      <List pb="6" textAlign="start" color="#000000" spacing={1}>
                <ListItem>
                    <ListIcon as={CheckIcon}  />
                    Around the clock Wi-Fi device connectivity remote support. 
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} />
                    24/7 Premium protection and Tech Support. 
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} />
                    Identity Theft Protection with access to your credit score, credit reports and proper credit monitoring.
                </ListItem>
            </List>
      <CallNowPhoneBt/>
      </Box>
    </Flex>

    <Flex rounded="md" color="#505050" boxShadow="xl" bgColor="#FAFAFA" border="solid 1px #D0D0D0" align="center" direction="column" >
      <Box color="" w="100%" p="5">
        <Heading pb="10px" as="h3" fontSize="2xl">TOTAL SECURE</Heading>
        <Flex align="start" justify="center" direction="row" fontWeight="700">
          <Box fontSize="29px" mt="7px" >$</Box>
          <Box color="#EF6724" fontSize="94px" my="-25px">14</Box>
          <Box direction="column">
              <Box color="#EF6724" fontSize="43px" textAlign="start" mb="-18px" >99</Box><Box fontSize="21px" textAlign="start" mb="-5px" >/mo.</Box>
          </Box>
        </Flex>
      </Box>
      <Box justify="start" w="100%" p="5">
      <List pb="6" textAlign="start" color="#000000" spacing={1}>
                <ListItem>
                    <ListIcon as={CheckIcon}  />
                    Premium Tech Support. 
                 </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} />
                    Enhanced Internet Security with parental controls, antivirus, etc. 
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} />
                    Protection of wires inside your home with Protection Plus.
                </ListItem>
            </List>
      <CallNowPhoneBt/>
      </Box>
    </Flex>
  </SimpleGrid> 

</Box>
</>
    )}



export default SecurePlans