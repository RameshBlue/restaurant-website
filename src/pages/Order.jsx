import React, { useEffect } from 'react'
import { Flex, Center, Image, Heading, Text, SimpleGrid } from '@chakra-ui/react'
import { Button } from '../styles/Button'
import BrowseMenu from '../components/BrowseMenu'
import { useContext } from "react";
import { NavbarContext } from "../context/NavbarContext";

function Order() {
    const { setNavbarLinkIndex } = useContext(NavbarContext);

    useEffect(()=>{
        setNavbarLinkIndex(1);
    },[])
    return (
        <>
            <Center w='100%' h='400px' bgColor='#35b7be18'>
                <Center p='0 3%'>
                    <Heading animation='move-up 1s ease-in-out, fade-out 1s ease-in-out' size='3xl' maxW='750px'  textAlign='center'>Get your food <span style={{ color: "#35b8be" }}>delivered</span>, or <span style={{ color: "#35b8be" }}>pick-up</span> in store.</Heading>
                </Center>
            </Center>
            <BrowseMenu showFullmenuTab={true}/>
        </>
    )
}

export default Order