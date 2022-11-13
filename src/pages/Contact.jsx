import React, { useEffect, useState } from 'react'

import { Flex, Heading, Text, Image, Stack, InputGroup, InputLeftElement, Input, Center, Textarea, useToast } from "@chakra-ui/react"
import { Button } from '../styles/Button'

import { MdEmail } from 'react-icons/md'
import { IoMdContact } from 'react-icons/io'

import emailjs from 'emailjs-com';

function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('')

    const [isFieldsFilled, setisFieldsFilled] = useState(false)

    const toast = useToast();

    useEffect(()=>{
        if (name.length!==0 && email.length!==0 && message.length!==0) {
            setisFieldsFilled(true);
        }else{
            setisFieldsFilled(false)
        }    
    },[name, message, email])

    const SendEmail = ()=>{
        emailjs.send("service_g3plejg","template_8w4r2kd",{
            from_name: name,
            to_name: 'Chomp',
            message: message
        },'FPN7tEdahc_qW-vjA').then((result)=>{
            toast({
                title:'Success',
                description: 'Message sent',
                status: 'success',
                duration: 2000,
                isClosable: true,
            })
        },(err)=>{
            console.log(err.text);
        })
    }

    return (
        <Center animation='fade-out 1s ease-in-out' direction='row' p='100px 3%'>
            <Flex direction={{base:'column', md:'row'}} justify='center' align={{base:'center', lg:'initial'}} maxW='1200px' gap={{ base: '50px', lg: '150px' }}>
                <Image src='Assets/HeroImage.png' w={{base:'80%', md:'50%'}} />
                <Flex direction='column' gap='30px' flex='1' w={{base:'80%', md:'50%'}}>
                    <Heading>Contact us</Heading>
                    <Stack spacing={4}>
                        <InputGroup >
                            <InputLeftElement
                                pointerEvents='none'
                                children={<IoMdContact />}
                            />
                            <Input type='text' placeholder='Name' onChange={(e)=>{
                                setName(e.target.value);
                            }} required/>
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                                children={<MdEmail />}
                            />
                            <Input type='text' placeholder='Email' onChange={(e)=>{
                                setEmail(e.target.value);
                            }} required/>
                        </InputGroup>
                        <Textarea placeholder='Message' onChange={(e)=>{
                                setMessage(e.target.value);
                            }} required/>
                        <Button style={{
                            padding: '10px',
                            borderRadius: '5px',
                            fontSize: '16px',
                        }} onClick={()=>{
                            if (isFieldsFilled) {
                                SendEmail();
                            }else{
                                toast({
                                    title:'Error',
                                    description: 'All fields should be filled',
                                    status: 'error',
                                    duration: 2000,
                                    isClosable: true,
                                })
                            }
                        }}>Send</Button>
                    </Stack>
                </Flex>
            </Flex>
        </Center>
    )
}

export default Contact