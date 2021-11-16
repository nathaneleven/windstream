import React from 'react'
import { Flex, Box, Heading, Text, AspectRatio, Stack, List, ListIcon, ListItem, Spacer } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { CheckIcon } from '@chakra-ui/icons'
const About = () => {
    return (
        <>
        <Stack bgColor="#f1f1f1" w="100%" justify="center" flexDirection={["column-reverse","column-reverse","column-reverse","column-reverse","row"]}>

        <Box pb={["25px","25px","25px","25px","0"]} w={["100%","100%","100%","100%","50%"]} m="auto">
                <Box p={["4","5","6","7","8"]}  w={["100%","100%","100%","100%","100%"]} m="auto">
                    <Heading mb="24px">
                    About Windstream
                    </Heading>
                    <Text>
                    Windstream is an Internet Service Provider in America. They also offer fiber and fixed wireless in some areas and offers broadband plans for residential customers in many locations. These plans include Internet, digital phone, and digital TV services, which can often be bundled together for a discount.<br/><br/>

                    The ISP has recently been investing heavily in network upgrades and rolling out more fiber backbone in subscriber areas. It has branded these as “Kinetic” connections because they can provide a solid alternative to traditional cable for customers who have billing issues with their regional cable provider. These plans often bundle TV, phone, and Internet service together into one bill for a discount. 
                    </Text>
                </Box>
                </Box>

            <Flex mt="0 !important" w={["100%","100%","100%","100%","50%"]} justify="flex-start">
                <AspectRatio w={["100%","100%","100%","100%","100%"]} mb={["10px","20px","30px","30px","50px"]} ratio={[3, 3, 3, 3, 6/4]} >
                    <Image objectPosition={["0 -34px","0 -40px","0 -50px","0 -60px", "0px"]} borderRadius={{xl: "0 0 0 70px"}} src="/about-windstream-image.jpg" alt="About Image EarthLink" />
                </AspectRatio>
            </Flex>
                </Stack>
        </>
    )}

export default About