import React, {useEffect} from 'react'
import {
    Flex, Center, Image, Heading, Text, SimpleGrid, Box, Accordion, AccordionItem, AccordionButton,
    AccordionPanel, AccordionIcon,
} from '@chakra-ui/react'
import { colors } from "../utils/Utils"
import { motion } from 'framer-motion'

import { useContext } from "react";
import { NavbarContext } from "../context/NavbarContext";

function Faq() {

    const { setNavbarLinkIndex } = useContext(NavbarContext);

    useEffect(()=>{
        setNavbarLinkIndex(3);
    },[])

    const AccordianData = ["Do you offer any vegan options?", "Do you offer any gluten free options?", "Can I clone these sections?", "Why is Webflow so amazing?", "Do we need to write a business plan?", "How can we get funding for our start up?"]

    const RenderAccordians = () => {
        return AccordianData.map((item, index) => {
            return (
                <AccordionItem key={index} p='30px'>
                    {({ isExpanded }) => (
                        <>
                            <AccordionButton _hover={{ bg: 'white' }}>
                                <Box flex='1' textAlign='left' fontWeight='bold' fontSize='18px' color={colors.blue}>
                                    {item}
                                </Box>
                                <motion.img animate={{rotate: isExpanded ? -45 : 0}} transition={{duration: 0.25}} src='Assets/Plus.svg' />
                            </AccordionButton>
                            <AccordionPanel pb={4} color='gray.600'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>
            )
        })
    }

    return (
        <>
            <Center w='100%' h='400px' bgColor='#35b7be18'>
                <Center p='0 3%'>
                    <Heading animation='move-up 1s ease-in-out, fade-out 1s ease-in-out' size='3xl' maxW='680px' textAlign='center'>Frequently Asked  <span style={{ color: colors.blue }}>Questions</span> </Heading>
                </Center>
            </Center>

            <Center animation='fade-out 1s ease-in-out' p={{base:'100px 3%', lg: '100px 10%'}} >
                <Accordion allowMultiple w='100%'>
                    {
                        RenderAccordians()
                    }
                </Accordion>
            </Center>
        </>
    )
}

export default Faq