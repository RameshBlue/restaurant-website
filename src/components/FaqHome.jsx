import React from 'react'
import { Flex, Center, Image, Heading, Text } from '@chakra-ui/react'
import { Button } from '../styles/Button'

import {NavbarContext} from "../context/NavbarContext";
import { useContext } from 'react';
import { Link } from 'react-router-dom';

function FaqHome() {

    const {setNavbarLinkIndex} = useContext(NavbarContext);

    return (
        <Center p='100px 3%'>
            <Flex direction={{ base: 'column', lg: 'row' }} align='center' maxW='1200px'>
                <Image boxSize={{ base: '70%', lg: '45%' }} src="Assets/FaqHomeImage.png" alt="FaqHome" />
                <Flex direction='column' gap='30px' align={{ base: 'center', lg: 'flex-start' }} textAlign={{ base: 'center', lg: 'initial' }} w='100%' p = '30px' >
                    <Heading color='#35b8be' size='3xl'>Order online with our simple checkout.</Heading>
                    <Text color = 'gray.600' fontSize='18px'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</Text>
                    <Button as={Link} to='/faq' style={{ width: '200px' }} onClick={()=>{setNavbarLinkIndex(3)}}>See our FAQ</Button>
                </Flex>
            </Flex>
        </Center>
    )
}

export default FaqHome