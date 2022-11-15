import React, { useState } from 'react'
import { Center, Heading, Text, SimpleGrid } from '@chakra-ui/react'
import { Button } from '../styles/Button'
import Tabs from './Tabs'
import MenuItemCard from './MenuItemCard'
import { BurgerData, DrinksData, SidesData, fullMenu } from "../utils/MenuData"
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import { NavbarContext } from "../context/NavbarContext";
import { useContext } from 'react'

function BrowseMenu({ showTitle, showFullmenuTab }) {

    const [selectedItem, setSelectedItem] = useState(showFullmenuTab ? "Full Menu" : "Burgers");

    const [itemFade, setItemFade] = useState({
        opacity: 1,
        duration: 0.5
    });
    let itemFadeTimeout = null;

    const maxItemPerPage = 8;
    const [currentPageStart, setCurrentPageStart] = useState(0);

    const { setNavbarLinkIndex } = useContext(NavbarContext);

    const DisplayItems = () => {

        let items = [];

        let fullMenuCurrentPage = fullMenu.filter((item, index) => index >= currentPageStart && index < (currentPageStart + maxItemPerPage));

        if (selectedItem === "Full Menu") {

            items = fullMenuCurrentPage.map((item, index) => {
                return (
                    <MenuItemCard key={index} title={item.title} description={item.description} price={item.price} image={item.image} />
                )

            })
        }
        else if (selectedItem === "Burgers") {
            items = BurgerData.map((item, index) => {
                return (
                    <MenuItemCard key={index} title={item.title} description={item.description} price={item.price} image={item.image} />
                )
            })
        } else if (selectedItem === "Sides") {
            items = SidesData.map((item, index) => {
                return (
                    <MenuItemCard key={index} title={item.title} description={item.description} price={item.price} image={item.image} />
                )
            })
        } else if (selectedItem === "Drinks") {
            items = DrinksData.map((item, index) => {
                return (
                    <MenuItemCard key={index} title={item.title} description={item.description} price={item.price} image={item.image} />
                )
            })
        }

        return items;
    }

    const Fade = () => {
        setItemFade({
            opacity: 0,
            duration: 0
        });

        if (itemFadeTimeout != null) {
            clearTimeout(itemFadeTimeout);
        }
        itemFadeTimeout = setTimeout(() => {

            setItemFade({
                opacity: 1,
                duration: 0.5
            });
        }, 10);
    }

    return (
        <Center animation='fade-out 1s ease-in-out' flexDirection='column' p='100px 3%'>
            <Center flexDirection='column' w={{base:'80%', md:'500px'}} textAlign='center' mb='30px'>
                {
                    showTitle && <>
                        <Heading size='3xl' color='#35b8be' mb='20px'>Browse our menu</Heading>
                        <Text fontSize='18px'> Use our menu to place an order online, or phone our store to
                            place a pickup order. Fast and fresh food.
                        </Text>
                    </>
                }
            </Center>
            <SimpleGrid columns={{ base: '1', sm: '2', md: `${showFullmenuTab? '4' : '3'}` }} spacing={{ base: '30px', md: '60px' }}>
                <Tabs tabs={showFullmenuTab ? ["Full Menu", "Burgers", "Sides", "Drinks"] : ["Burgers", "Sides", "Drinks"]} tabWidth='150px' SetCurrentTab={(tab) => {
                    setSelectedItem(tab);
                    Fade();
                }} />
            </SimpleGrid>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: itemFade.opacity }} transition={{ duration: itemFade.duration }}>
                <SimpleGrid columns={{ base: '1', sm: '2', md: '1', lg: '2' }} px={{base:'5%',sm:'0'}} maxWidth='1200px' mt='50px' spacing='30px'>
                    {
                        DisplayItems()
                    }
                </SimpleGrid>
            </motion.div>
            <Button as={Link} to='/order' style={{ marginTop: '40px', width: '180px', display: `${!showFullmenuTab ? 'initial' : showFullmenuTab & selectedItem === "Full Menu" ? 'initial' : 'none'}` }} onClick={() => {
                if (showFullmenuTab) {
                    if ((currentPageStart + maxItemPerPage) > fullMenu.length) {
                        setCurrentPageStart(0);
                    } else {
                        setCurrentPageStart(currentPageStart + maxItemPerPage)
                    }
                    Fade();
                } else {
                    setNavbarLinkIndex(1);
                }
            }}>
                {showFullmenuTab ? currentPageStart + maxItemPerPage > fullMenu.length ? 'Previous' : 'Next' : 'See Full Menu'}
            </Button>
        </Center>
    )
}

export default BrowseMenu