import React from 'react'
import { Flex, Center, Image, Heading, Text, SimpleGrid, Box } from '@chakra-ui/react'
import { Button } from '../styles/Button'
import { colors } from "../utils/Utils"

function Company() {

    const menuItemsCountArray = ["62", "139", "34", "57"]

    return (
        <>
            <Center w='100%' h='400px' bgColor='#35b7be18'>
                <Center p='0 3%'>
                    <Heading animation='move-up 1s ease-in-out, fade-out 1s ease-in-out' size='3xl' maxW='680px' textAlign='center'>Our company focuses on <span style={{ color: colors.blue }}>food and people.</span> </Heading>
                </Center>
            </Center>

            <Center animation='fade-out 1s ease-in-out'>
                <Center flexDirection={{ base: 'column', lg: 'row' }} maxW='1300px' p='100px 3%'>
                    <Flex direction='column' w={{ base: '75%', lg: '46%' }} align={{ base: 'center', lg: 'flex-start' }} textAlign={{ base: 'center', lg: 'initial' }} mr={{ base: '0', lg: '80px' }} mb='80px'>
                        <Heading fontSize='50px' color='#35b8be' style={{ wordSpacing: '-5px' }} w='400px'>The home of fresh products</Heading>
                        <Text color = 'gray.600' fontSize='18px' mt='30px' mb='50px'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</Text>
                        <Button style={{ width: '200px' }}>Learn about us</Button>
                    </Flex>
                    <Image src='Assets/CompanyImage1.png' w={{ md: '65%', lg: '40%' }} pt='50px' />
                </Center>
            </Center>

            <Center position='relative' bgImage='Assets/OrderNowHomeImage1.png' h='500px' bgRepeat='no-repeat' bgSize='2000px 1200px' p='100px 3%'>
                <Box position='absolute' left='0' top='0' bgColor='blackAlpha.500' w='100%' h='100%'  />
                <SimpleGrid gap='100px' zIndex='10' columns={{base:'2', lg:'4'}}>
                    {
                        menuItemsCountArray.map((item, index) => {
                            return (
                                <Center key={index} flexDirection='column' color='white' gap='20px'>
                                    <Heading size='4xl'>{item}</Heading>
                                    <Image src='Assets/WaveBlue.svg' w='100px' />
                                    <Text fontSize='xl'>Fiesty Menu Items</Text>
                                </Center>
                            )
                        })
                    }
                </SimpleGrid>

            </Center>
        </>
    )
}

export default Company