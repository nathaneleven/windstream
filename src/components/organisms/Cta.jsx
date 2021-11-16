import React from 'react'
import { Flex, Box, Text, Spacer } from '@chakra-ui/layout'
import { Input } from '@chakra-ui/input'
import { Button } from '@chakra-ui/button'

const Cta = () => {
    return (
<>
<Box p="8" bgGradient="linear(to-r, #3D3993, #A43895, #ED1863)" color="white" align="center"  >
        <Flex maxW="1272px" align="center" direction={{base: "column", md: "row"}} >
            <Box pb={{base:5, md:0}}>
            <Text fontWeight="700" fontSize="2xl" >
            See Windstream deals in your area
            </Text>
            </Box>
            <Spacer/>
            <Flex align="center">
                <Input w="80%" focusBorderColor="white" colorScheme="white" borderRadius="full" placeholder="Enter Zip Code" size="lg" variant="filled" mr="3" />
                <Button colorScheme="white" bgColor="" px="40px" size="lg" variant="outline" borderRadius="full">Check Availability</Button>
            </Flex>
        </Flex>
</Box>
</>
    )}


export default Cta