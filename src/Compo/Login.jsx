import { Container, Heading, VStack,Input, Button,Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
    <from>
        <VStack alignItems={'stretch'}
        spacing={'10'}
        w={['full','96']}
        m='auto'
        my={'16'}
        >
        <Heading>Welcome Back</Heading>
<Input placeholder={'Email'}
type={'email'}
required
focuseBorderColor={'purple.600'}/>

<Input placeholder={'Password'}
type={'password'}
required
focuseBorderColor={'purple.600'}/>

<Button variant={'link'} alignSelf={'flex-end'}>
    <Link to={'/forgetpassword'}> Forget Password ?</Link>
</Button>
<Button colorScheme={'purple'} type={'submit'}>Log In</Button>

<Text  textAlign={'center'}>New User ?
<Button variant={'link'} colorScheme={'purple'}>
   <Link to={'/signup'}>  Sign Up</Link>
</Button> </Text>


        </VStack>
    </from>

    </Container>
  )
}

export default Login