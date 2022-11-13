import { SimpleGrid } from '@chakra-ui/react';
import React, { useState } from 'react'
import { TabButton } from '../styles/TabButton'

function Tabs(props) {

    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        < >
            {
                props.tabs.map((tab, index) => {
                    return (
                        <TabButton style={{
                            width: `${props.tabWidth}`
                        }} outline={selectedIndex !== index} key={index} onClick={() => {
                            setSelectedIndex(index);
                            props.SetCurrentTab(tab);
                        }}>{tab}</TabButton>
                    )
                })
            }
        </>
    )
}

export default Tabs