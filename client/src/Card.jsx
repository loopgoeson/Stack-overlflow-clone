import { Button, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import '/Users/testuser/Desktop/Stack-overflow-clone-main/client/src/Cards.css'




const Card = ({ amount, checkoutHandler }) => {
    return (
        <VStack className='card-design2'>
            <Text>₹{amount}</Text> 
            <Button  className='pay-btn' onClick={() => checkoutHandler(amount)}>Pay Now</Button>
        </VStack>
    )
}

export default Card