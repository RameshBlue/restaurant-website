import React from 'react'
import { Flex, Center, Image, Heading, Text, SimpleGrid } from '@chakra-ui/react'
import { Button } from '../styles/Button'
import { Link } from 'react-router-dom'
import {NavbarContext} from "../context/NavbarContext";
import { useContext } from 'react'

function ContactHome() {

    const {setNavbarLinkIndex} = useContext(NavbarContext);

    return (
        <Center bgImage="url('Assets/LearnAboutUsHomeBg.svg')" bgPosition='50% 50%' bgRepeat='no-repeat' overflow='hidden' p='100px 3%' bgSize={{ base: '300%', lg: 'initial' }}>
            <Center flexDirection={{ base: 'column', lg: 'row' }} maxW='1300px' >
                <Flex direction='column' w={{ base: '75%', lg: '50%' }} align={{ base: 'center', lg: 'flex-start' }} textAlign={{ base: 'center', lg: 'initial' }}>
                    <Heading fontSize='50px' color='#35b8be' style={{ wordSpacing: '-5px' }} w='600px'>Call our store and takeaway when it suits you best.</Heading>
                    <Text color = 'gray.600' fontSize='18px' mt='30px' mb='50px'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</Text>
                    <Button as={Link} to='/contact' style={{ width: '220px' }} onClick={()=>{setNavbarLinkIndex(4)}}>Contact us</Button>
                </Flex>
                <Image src='Assets/ContactHomeImage.png' w={{ md: '65%', lg: '40%' }} pt='50px' />
            </Center>
        </Center>
    )
}

export default ContactHome