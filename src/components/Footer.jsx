import React from 'react'
import { Flex, Center, Image, Heading, Text, SimpleGrid, Spacer } from '@chakra-ui/react'
import { Button } from '../styles/Button'

function Footer() {
    return (
        <Flex justify='center' pos='relative' bgColor='#35b7be12' h={{base:'700px', lg:'600px'}} p='0 3%'>
            <Image pos='absolute' left='0' bottom ='0' w='600px' src='Assets/OrderNowHomeImage2.svg' opacity='0.1' />
            <Flex direction={{base:'column', lg:'row'}} maxW='1200px' w='100%' pl='3%' mt='150px' justify='space-between'>
                <Flex direction='column' gap='20px' w='90%' maxW='350px'>
                    <img style={{ width: '40px', cursor: 'pointer' }} src="Assets/Logo.svg" alt="logo" />
                    <Text fontSize='18px' color = 'gray.600'>Takeaway & Delivery template
                        for small - medium businesses.
                    </Text>
                </Flex>
                <Flex direction='row' gap='80px' color = 'gray.600' flexWrap='wrap' mt='50px' mb='50px'>
                    <Flex direction='column' gap='30px' >
                        <Heading size='sm'>COMPANY</Heading>
                        <Text>Home</Text>
                        <Text>Order</Text>
                        <Text>FAQ</Text>
                        <Text>Contact</Text>
                    </Flex>
                    <Flex direction='column' gap='30px'>
                        <Heading size='sm'>TEMPLATE</Heading>
                        <Text>Style Guide</Text>
                        <Text>Changelog</Text>
                        <Text>Licence</Text>
                        <Text>Webflow University</Text>
                    </Flex>
                    <Flex direction='column' gap='30px'>
                        <Heading size='sm'>FLOWBASE</Heading>
                        <Text>More Cloneables</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Footer