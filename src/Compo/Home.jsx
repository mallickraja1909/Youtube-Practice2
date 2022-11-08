import React from 'react'
import { Box ,Container,Heading,Image, Stack} from '@chakra-ui/react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../Images/1.jpg'
import img2 from '../Images/2.jpg'
import img3 from '../Images/3.jpg'
import img4 from '../Images/4.jpg'
import img5 from '../Images/5.png'
// import { BiRotateLeft } from 'react-icons/bi';

const headingOptions={
    pos:"absolute",
    left:"50%",
    top:"50%",
    transform:"translate(-50%,-50%)",
    textTransform:"uppercase",
    p:"4",
    size:"4xl"

}



const Home = () => {
  return (
   <Box>
    <MyCarousel/>
    <Container minH={'100vh'} maxW={'container.xl'} p='16'>
        <Heading textTransform={'uppercase'} py='2' w={'fit-content'} borderBottom={"2px solid"} margin={'auto'}>
            Services
        </Heading>
        <Stack
        h={'full'}
        p={'4'}
        alignItems={'center'}
        direction={['column','row']}
        >
          <Image src={img5} h={['40','400']} filter={'hue-BiRotateLeft(-130deg)'}/>
          <text 
          latterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolorum veniam architecto et iusto iure assumenda,
            maiores doloribus illum tenetur mollitia nobis hic.
            Expedita laboriosam laborum modi.
            Architecto non maiores quibusdam.
          </text>
        </Stack>




    </Container>
   </Box>
  )
}



const MyCarousel=()=>(
    <Carousel autoPlay
     infiniteLoop
      interval={2000}
       showStatus={false}
       showThumbs={false}
        showArrows={false}
        >

<Box w={'full'} h={'100vh'}>
<img src={img1}alt="" h={'full'} w={'full'} objectFit={'cover'}/>
<Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
Watch the Future
</Heading>
</Box>

<Box w={'full'} h={'100vh'}>
<img src={img2}alt="" h={'full'} w={'full'} objectFit={'cover'}/>
<Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
Future is Internet
</Heading>
</Box>

<Box w={'full'} h={'100vh'}>
<img src={img3}alt="" h={'full'} w={'full'} objectFit={'cover'}/>
<Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
Future is Internet
</Heading>
</Box>

<Box w={'full'} h={'100vh'}>
<img src={img4}alt="" h={'full'} w={'full'} objectFit={'cover'} />
<Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
Future is Internet
</Heading>
</Box>


        </Carousel> 
)

export default Home;