import React from 'react'
import { Flex, Center, Image, Heading, Text, SimpleGrid, Box } from '@chakra-ui/react'
import { Button } from '../styles/Button'

import {NavbarContext} from "../context/NavbarContext";
import { useContext } from 'react';
import { Link } from 'react-router-dom';

function OrderNowHome() {

    const {setNavbarLinkIndex} = useContext(NavbarContext);

    return (
        <Flex direction={{ base: 'column', lg: 'row' }} p='100px 3%' gap='30px'>
            <Image src='Assets/OrderNowHomeImage1.png' h={{ base: '400px', md: '500px', lg: '625px' }} w={{ base: '100%', lg: '50%' }} objectFit='cover' />
            <Flex bgImage='Assets/OrderNowHomeImage2.svg' bgRepeat='no-repeat' bgSize='80%' bgPos='0 100%' direction='column' justify='center' bgColor='#35b8be' w={{ base: '100%', lg: '50%' }} h={{ base: '400px', md: '500px', lg: '625px' }} >
                <Flex direction='column' gap='50px' pl={{base:'30px', lg:'80px'}}>
                    <Heading size='3xl' color='#27888d' w='85%' >Support <span style={{ color: 'white' }}>good food
                        and local business.</span>
                    </Heading>
                    <Button as={Link} to='/order' style={{ backgroundColor: 'white', color: '#27888d', borderRadius: '5px', width: '200px' }} onclick={()=>{setNavbarLinkIndex(1)}}>Order Now</Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default OrderNowHome