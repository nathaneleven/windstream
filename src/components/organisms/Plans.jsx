import React from 'react'
import { Box, SimpleGrid, Heading, Text, Flex, List, ListIcon, ListItem } from '@chakra-ui/layout'
import CallNowPhoneBt from '../atoms/CallNowPhoneBt'
import { CheckIcon } from '@chakra-ui/icons'

const Plans = () => {
    return (
<>
<Box align="center" bgColor="#fff" p={{base:"10", md:"0 10 "}}>
    <Heading mb="10">Top Windstream plans</Heading>

  <SimpleGrid columns={{base:"1", md:"3"}} spacing={10} maxW="1250px">
    <Flex rounded="md" color="#505050" boxShadow="xl" bgColor="#FAFAFA" border="solid 1px #D0D0D0" align="center" direction="column" >
      <Box color="" w="100%" p="5">
        <Heading pb="10px" as="h3" fontSize="2xl">KINETIC INTERNET 400</Heading>
        <Text>starting at</Text>
        <Flex align="start" justify="center" direction="row" fontWeight="700">
          <Box fontSize="29px" mt="7px" >$</Box>
          <Box color="#EF6724" fontSize="94px" my="-25px">47</Box>
          <Box direction="column">
              <Box color="#EF6724" fontSize="43px" textAlign="start" mb="-18px" >00</Box><Box fontSize="21px" textAlign="start" mb="-5px" >/mo.</Box>
          </Box>
        </Flex>
      </Box>
      <Box justify="start" w="100%" p="5">
      <Text pb="4">per month for 12 months in select markets.</Text>
      <List pb="6" textAlign="start" color="#000000" spacing={1}>
                <ListItem>
                    <ListIcon as={CheckIcon}  />
                    Ideal speed up to 400 Mbps.
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} />
                    Unlimited Internet Data. 
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} />
                    No Contracts required. 
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} />
                    Kinetic Internet Security. 
                </ListItem>
            </List>
      <CallNowPhoneBt/>
      </Box>
    </Flex>

    <Flex rounded="md" color="#505050" boxShadow="xl" bgColor="#FAFAFA" border="solid 1px #D0D0D0" align="center" direction="column" >
      <Box color="" w="100%" p="5">
        <Heading pb="10px" as="h3" fontSize="2xl">KINETIC INTERNET 500</Heading>
        <Text>starting at</Text>
        <Flex align="start" justify="center" direction="row" fontWeight="700">
          <Box fontSize="29px" mt="7px" >$</Box>
          <Box color="#EF6724" fontSize="94px" my="-25px">57</Box>
          <Box direction="column">
              <Box color="#EF6724" fontSize="43px" textAlign="start" mb="-18px" >00</Box><Box fontSize="21px" textAlign="start" mb="-5px" >/mo.</Box>
          </Box>
        </Flex>
      </Box>
      <Box justify="start" w="100%" p="5">
      <Text pb="4">per month for 12 months in select markets.</Text>
      <List pb="6" textAlign="start" color="#000000" spacing={1}>
                <ListItem>
                    <ListIcon as={CheckIcon}  />
                    High internet speed up to 500 Mbps.
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} />
                    No Contracts.
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} />
                    No Data Caps. 
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} />
                    Kinetic Internet Security.
                </ListItem>
            </List>
      <CallNowPhoneBt/>
      </Box>
    </Flex>

    <Flex rounded="md" color="#505050" boxShadow="xl" bgColor="#FAFAFA" border="solid 1px #D0D0D0" align="center" direction="column" >
      <Box color="" w="100%" p="5">
        <Heading pb="10px" as="h3" fontSize="2xl">KINETIC GIG INTERNET</Heading>
        <Text>starting at</Text>
        <Flex align="start" justify="center" direction="row" fontWeight="700">
          <Box fontSize="29px" mt="7px" >$</Box>
          <Box color="#EF6724" fontSize="94px" my="-25px">67</Box>
          <Box direction="column">
              <Box color="#EF6724" fontSize="43px" textAlign="start" mb="-18px" >00</Box><Box fontSize="21px" textAlign="start" mb="-5px" >/mo.</Box>
          </Box>
        </Flex>
      </Box>
      <Box justify="start" w="100%" p="5">
      <Text pb="4">per month for 12 months in select markets.</Text>
      <List pb="6" textAlign="start" color="#000000" spacing={1}>
                <ListItem>
                    <ListIcon as={CheckIcon}  />
                    Highest internet speed of 1000 Mbps. 
                 </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} />
                    Ultra-fast internet. 
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} />
                    No Data Caps. 
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} />
                    Kinetic Internet Security.
                </ListItem>
            </List>
      <CallNowPhoneBt/>
      </Box>
    </Flex>
  </SimpleGrid> 

</Box>
</>
    )}



export default Plans