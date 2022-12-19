import React, { useEffect } from 'react'
import { Button } from '../styles/Button'
import { Flex, Heading, Image, Text, Center, Input, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/react'

import { NavbarContext } from "../context/NavbarContext";
import { useContext } from 'react'

function CartItem({ image, title, price, quantity }) {

    const { RemoveCartItem, SetExistingItemQuantity } = useContext(NavbarContext);


    console.log("cart enter");
    return (
        <>
            <Flex gap='15px'>
                <Image src={image} w='60px' h='70px' />
                <Flex direction='column' flex='1'>
                    <Text fontWeight='500'>{title}</Text>
                    <Text>${(price * quantity).toFixed(2)}</Text>
                    <Text color='red.500' cursor='pointer' onClick={() => { RemoveCartItem(title) }}>Remove</Text>
                </Flex>
                <NumberInput w='80px' h='60%' defaultValue={quantity} value={quantity} min={0} onChange={(value) => {
                    if (value == "") {
                        SetExistingItemQuantity({
                            name: title,
                            quantity: 0
                        }
                        )
                    } else {
                        SetExistingItemQuantity({
                            name: title,
                            quantity: parseInt(value)
                        }
                        )
                    }
                }
                }>
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </Flex>

        </>
    )
}

export default CartItem