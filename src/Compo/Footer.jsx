import React from 'react'
import { Box, Button, Heading, HStack, VStack,Input,Stack,Text } from '@chakra-ui/react'
import {AiOutlineSend} from 'react-icons/ai';
const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
    <Stack direction={['column','row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
            <Heading size={'md'} textTransform={'uppercase'}>
               Subscribe to get Updates
            </Heading>
            <HStack
            borderBottom={'2px solid white'}
            py={'2'}
            >
            <Input 
            placeholder='Enter Your Email...'
             border={'none'}
              borderRadius={'none'} 
              outline={'none'}>
              </Input>

                <Button
                p={'0'}
                colorScheme={'purple'}
                variant={'ghost'}
                borderRadius={'0 20px 20px 0'}>

                    <AiOutlineSend size={'20'}/>

                </Button>
            </HStack>
        </VStack>

       <VStack w={'full'} 
       borderLeft={['none','1px solid White']}
       borderRight={['none','1px solid White']}
       >
       <Heading textTransform={'uppercase'} textAlign={['center','left']}>
         VIDO HOUSE
       </Heading>
       <Text>
        All rights reserved
       </Text>
       </VStack>

       <VStack w={'full'}>
        <Heading size={'md'} textTransform={'uppercase'}>
           Social Media
//         </Heading>
//         <Button variant={'link'} colorScheme={'white'}>
//             <a target={'blank'} href='https://github.com/mallickraja1909'>GitHub</a>
//         </Button>
        <Button variant={'link'} colorScheme={'white'}>
            <a target={'blank'} href='https://www.linkedin.com/in/raja-mallick-2b62a0131'>Linkedin</a>
        </Button>
        <Button variant={'link'} colorScheme={'white'}>
            <a target={'blank'} href='https://portfolio-raja-mallick.netlify.app/'>Portfolio</a>
        </Button>
       </VStack>

        </Stack>
    </Box>
  )
}

export default Footer;
