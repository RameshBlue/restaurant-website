import React from 'react'
import { Button } from '../styles/Button'
import { Flex, Heading, Text, Image } from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import {NavbarContext} from "../context/NavbarContext";
import { useContext } from 'react';
import { motion } from 'framer-motion';

function HeroBanner() {

    const {setNavbarLinkIndex} = useContext(NavbarContext);

    return (
        <Flex bgImage="url('Assets/HeroBannerBg.svg')" bgPosition='100% 0' bgRepeat='no-repeat' justify='center' align='center' p='100px 6%'>

            <Flex direction={{base:'column', lg:'row'}} justify='center' align='center' gap='60px' maxW='1200px'>

                <Flex direction='column' w={{base:'75%',lg:'50%'}} mt='80px' align={{base:'center', lg:'flex-start'}} textAlign={{base:'center', lg:'initial'}}>

                    <Heading animation='move-right 1s ease-in-out, fade-out 1s ease-in-out' size='3xl' mb='30px'>Beautiful food & takeaway,<span style={{color:'#35b8be'}}>delivered</span> to your door.</Heading>

                    <Text animation='move-right 1.15s ease-in-out, fade-out 1.15s ease-in-out' fontSize='18px' mb='50px' color='gray.600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</Text>

                    <Button as={Link} style={{width:'200px', animation:'move-right 1.3s ease-in-out, fade-out 1.3s ease-in-out'}} to='/order' onClick={()=>{setNavbarLinkIndex(1)}}>
                    Place an Order
                    </Button>

                    <Image animation='move-right 1.45s ease-in-out, fade-out 1.45s ease-in-out' w='110px' mb='10px' mt='30px' src="Assets/TrustPilotLogo.svg" alt="trustPilotLogo" />

                    <Text animation='move-right 1.45s ease-in-out, fade-out 1.45s ease-in-out'><span style={{color:'#35b8be', fontWeight:'bold'}}>4.8 out of 5</span> based on 2000+ reviews</Text>

                </Flex>

                <Image animation='fade-out 2s ease-in-out, scale 2s ease-in-out' src='Assets/HeroImage.png' pt='50px' boxSize={{base:'100%', md: '80%',lg:'50%'}} ml='20px' loading='lazy' />

            </Flex>
        </Flex>
    )
}

export default HeroBanner