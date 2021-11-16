import React from 'react'
import { Flex, Box, Heading, Text, AspectRatio, Stack} from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

const Kinetic = () => {
    return (
        <>
        <Stack color="#fff" bgGradient="linear(to-r, #EF6724, #EF9123)" w="100%" justify="center" flexDirection={["column-reverse","column-reverse","column-reverse","column-reverse","row-reverse"]}>

        <Box pb={["25px","25px","25px","25px","0"]} w={["100%","100%","100%","100%","50%"]} m="auto">
                <Box p={["4","5","6","7","8"]}  w={["100%","100%","100%","100%","100%"]} m="auto">
                    <Heading color="#fff" mb="24px">
                    What is Kinetic Internet?
                    </Heading>
                    <Text>
                    With internet speeds up to 1 Gig, plus digital phone and entertainment solutions, Kinetic by Windstream is dedicated to provide fast, reliable high-speed internet. Over the past few years Kinetic by Windstream has laid over 150,000 miles of fiber internet with more planned.
                    </Text>
                </Box>
                </Box>

            <Flex mt="0 !important" w={["100%","100%","100%","100%","50%"]} justify="flex-start">
                <AspectRatio w={["100%","100%","100%","100%","100%"]} mb={["10px","20px","30px","30px","50px"]} ratio={[3, 3, 3, 3, 6/4]} >
                    <Image objectPosition={["0 -34px","0 -40px","0 -50px","0 -60px", "0px"]} borderRadius={{xl: "0 0 70px 0"}} src="/kinetic-internet-windstream-image.jpg" alt="About Image EarthLink" />
                </AspectRatio>
            </Flex>
                </Stack>
        </>
    )}

export default Kinetic