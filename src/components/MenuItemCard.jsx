import React, { useState } from 'react'
import { Button } from '../styles/Button'
import { Flex, Heading, Image, Text, Center, Input, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/react'

import { NavbarContext } from "../context/NavbarContext";
import { useContext } from 'react'

import {ExtensionMethods} from "../utils/Utils"

function MenuItemCard(props) {

    const {AddCartItem} = useContext(NavbarContext);

    const [quantity, setQuantity] = useState(0);

    return (
        <Flex p='30px' direction='row' bgColor='white' shadow='md' gap='30px' cursor='pointer' borderRadius='10px' border='1px solid' borderColor='blackAlpha.100'>
            <Image boxSize='130px' src={props.image} borderRadius='15px' />
            <Flex direction='column' gap='15px'>
                <Flex direction='row' justify='space-between'>
                    <Heading size='md'>{props.title}</Heading>
                    <Text color='#35b8be' fontWeight='500' fontSize='16px'>$ {props.price} USD</Text>
                </Flex>
                <Text color='gray.600'>{props.description}</Text>
                <Flex gap='20px'>
                    <NumberInput defaultValue={0} max={10} w='80px' onChange={(value)=> {setQuantity(parseInt(value))}}>
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <Button style={{ width: '120px', padding: '10px', fontSize: '15px', borderRadius: '5px' }} onClick={()=>{
                        if (quantity>0) {
                            AddCartItem({
                                image: props.image,
                                name: props.title,
                                price: parseFloat(props.price),
                                quantity: quantity
                            })
                        }
                    }}>Add to Cart</Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default MenuItemCard