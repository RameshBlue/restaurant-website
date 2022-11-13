import React from 'react'
import { HStack, Text, Center, Flex, Image, Icon, IconButton, Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, useDisclosure, Divider, Heading, Button as ChakraButton, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { colors, ExtensionMethods } from "../utils/Utils"
import { useEffect } from 'react'
import { NavbarContext } from "../context/NavbarContext";
import { useContext } from 'react'
import { Button } from '../styles/Button'
import { BsFillCartFill } from 'react-icons/bs'
import CartItem from './CartItem'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'
import { motion } from 'framer-motion'

function Navbar() {

    const [isNavbarDropdownOpen, setIsNavbarDropdownOpen] = useState(false);
    const [hideNavbar, setHideNavbar] = useState(true);

    const { navbarLinkIndex, setNavbarLinkIndex, cartItems, GetTotalQuantityInCart, GetTotalPriceInCart } = useContext(NavbarContext);

    const links = [
        {
            name: "Home",
            path: '/'
        },
        {
            name: "Order",
            path: "/order"
        },
        {
            name: "Company",
            path: "/company"
        },
        {
            name: "FAQ",
            path: "/faq"
        },
        {
            name: "Contact",
            path: "/contact"
        }
    ]

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const RenderBaseLinks = () => {

        return links.map((item, index) => {
            return (
                <Box as={Link} display={{ base: 'none', md: 'block' }} key={index} to={item.path} style={{
                    color: `${navbarLinkIndex === index ? colors.blue : 'black'}`,
                    fontWeight: '500'
                }} onClick={() => { setNavbarLinkIndex(index) }}>{item.name}</Box>
            )
        })
    }

    const RenderDropdownLinks = () => {

        return links.map((item, index) => {
            return (
                <Box as={Link} key={index} to={item.path} style={{
                    color: `${navbarLinkIndex === index ? colors.blue : 'black'}`,
                    fontWeight: '500'
                }} onClick={() => { setNavbarLinkIndex(index); setIsNavbarDropdownOpen(false) }}>{item.name}</Box>
            )
        })
    }

    useEffect(() => {
        ExtensionMethods.openCartOverlay = () => {
            onOpen();
        }
    }, [])

    return (
        <>
            <Center pos='relative' bgColor='white' p='20px 3%'>
                <Flex direction='row' justify="space-between" w='1200px' >
                    <Link to='/'>
                        <Image w='40px' cursor='pointer' src="Assets/Logo.svg" alt="logo" onClick={() => { setNavbarLinkIndex(0) }} />
                    </Link>
                    <HStack spacing="24px">
                        {
                            RenderBaseLinks()
                        }
                        <Button ref={btnRef} style={{ borderRadius: '5px', position: "relative", height: '100%', width: 'fit-content' }} onClick={onOpen}>
                            <BsFillCartFill />
                            <Center position='absolute' w='20px' h='20px' rounded='full' bgColor='white' right='-4px' top='-4px' shadow='lg' border='1px solid' borderColor='blackAlpha.200'>
                                <Text color={colors.blue} zIndex='10' fontSize='sm' fontWeight='500'>{GetTotalQuantityInCart()}</Text>
                            </Center>
                        </Button>
                        <ChakraButton h='100%' w='50px' display={{ base: 'block', md: 'none' }} onClick={() => {
                            setIsNavbarDropdownOpen(!isNavbarDropdownOpen);
                            if (!isNavbarDropdownOpen) {
                                setHideNavbar(false);
                            }else{
                                setTimeout(() => {
                                    setHideNavbar(true);
                                }, 500);
                            }
                        }}>
                            <GiHamburgerMenu />
                        </ChakraButton>
                    </HStack>
                </Flex>

                <motion.div animate={{x: isNavbarDropdownOpen ? 0 : '100%'}} transition= {{duration:0.35}}
                style={{position:'absolute', left:'0', top:'0', width:'100%', marginTop:'90px'}}>
                    <VStack display={hideNavbar ? 'none' : 'flex'} spacing={5} pb={5} bgColor='white' boxShadow='lg'>
                        {
                            RenderDropdownLinks()
                        }
                    </VStack>
                </motion.div>


            </Center>

            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size='sm'
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Your Order</DrawerHeader>
                    <Divider size='80px' />
                    {
                        cartItems.length > 0 ?
                            <Flex direction='column' gap='30px' p='25px' h='100vh'>
                                {
                                    cartItems.map((item, index) => {
                                        return (
                                            <CartItem key={index} image={item.image} title={item.name} price={item.price} quantity={item.quantity} />
                                        )
                                    })
                                }
                            </Flex>
                            :
                            <Center flexDirection='column' gap='30px' w='100%' h='100%'>
                                <Text color='gray.600'>We couldn't find any items in your cart.</Text>
                                <Button as={Link} to='/order' style={{ width: '180px' }} onClick={() => {
                                    onClose();
                                    setNavbarLinkIndex(1);
                                }}>Start an Order</Button>
                            </Center>
                    }
                    {
                        cartItems.length > 0 &&
                        <>
                            <Divider />
                            <Flex direction='column' gap='20px' p='25px'>
                                <Flex justify='space-between'>
                                    <Heading fontSize='20px'>Subtotal</Heading>
                                    <Heading fontSize='20px'>${GetTotalPriceInCart()}</Heading>
                                </Flex>
                                <Button style={{
                                    borderRadius: '5px',
                                    padding: '10px',
                                    fontSize: '16px'
                                }}>Continue to Checkout</Button>
                            </Flex>
                        </>
                    }

                </DrawerContent>
            </Drawer>
        </>

    )
}

export default Navbar