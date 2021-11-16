import { Box, Flex, Spacer } from '@chakra-ui/layout'
import React from 'react'
import LogoHeader from '../atoms/Logo'
import TelephoneHeader from '../atoms/TelephoneHeader'

const  Header = () => {
return (
<>
    <Box p="17px" border="1" bgColor="##fff" boxShadow="lg" align="center">
        <Flex maxW="1272px" justify="center">
        <LogoHeader />
        <Spacer />
        <TelephoneHeader />
        </Flex>
    </Box>
    <Box h="8px" w="100%" bg="linear-gradient(90deg, rgba(61,57,147,1) 0%, rgba(164,56,149,1) 16%, rgba(237,24,99,1) 33.3%, rgba(33,168,129,1) 33.3%, rgba(107,190,89,1) 66.6%, rgba(239,103,36,1) 66.6%, rgba(239,145,35,1) 100%);"></Box>
</>
)
}

export default Header
