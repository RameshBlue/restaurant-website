import React from 'react'
import { Flex, Heading, Image, Text } from '@chakra-ui/react'

function HowItWorks() {
    return (
        <Flex animation='fade-out 1s ease-in-out' direction='column' align='center' justify='center' p='100px 3%'>

            <Heading color='#35b8be' fontSize='60px' mb='50px'>How it works</Heading>
            <Flex direction={{base:'column', lg: 'row'}} gap={{base:'50px', lg:'100px'}} justify='center' align='center'>

                <Flex direction='column' w={{base: '60%',xl:'340px'}} textAlign='center' align='center' >
                    <Image src='Assets/HowItWorksImage1.png' mb='30px'/>
                    <Heading fontSize='22px' mb='10px'>Adapt your menu items</Heading>
                    <Text color='gray.600' fontSize='lg'>Easily adapt your menu using the webflow CMS and allow customers to browse your items.</Text>
                </Flex>

                <Flex direction='column' w={{base: '60%',xl:'340px'}} textAlign='center' align='center' >
                    <Image src='Assets/HowItWorksImage1.png' mb='30px'/>
                    <Heading fontSize='22px' mb='10px'>Accept online orders & takeout</Heading>
                    <Text color='gray.600' fontSize='lg'>Let your customers order and pay via the powerful ecommerce system, or simple let them call your store.</Text>
                </Flex>

                <Flex direction='column' w={{base: '60%',xl:'340px'}} textAlign='center' align='center' >
                    <Image src='Assets/HowItWorksImage1.png' mb='30px'/>
                    <Heading fontSize='22px' mb='10px'>Manage delivery or takeout</Heading>
                    <Text color='gray.600' fontSize='lg'>Manage your own logistics and take orders simply through the ecommerce system.</Text>
                </Flex>

            </Flex>
        </Flex>
    )
}

export default HowItWorks