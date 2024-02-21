import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import AboutImg1 from '../../images/about-banner.jpg'


const About = () => {
  return (
    <Box component={'section'} id='about' height={'100vh'} p={'4rem 1%'} >
      <Stack height={'100%'} direction={{ md: 'row', xs: 'column' }} spacing={{ md: 0, xs: 5 }}>
        <Stack p={'0 20px'} width={{ md: '50%', xs: '100%' }} spacing={3} justifyContent={'center'} alignItems={'center'} textAlign={'center'}>
          <Typography variant='subtitle2' color={'#FFCD75'} letterSpacing={6} fontWeight={600}>
            OUR STORY
          </Typography>
          <Typography variant='h2' fontWeight={500} color={'white'} >
            Every Flavor Tells a Story
          </Typography>
          <Typography variant='h6' color={'white'} fontSize={16} maxWidth={420} >
            Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries, but also the leap into.
          </Typography>
          <Stack direction={'column'} alignItems={'center'}>
            <Typography variant='subtitle1' fontSize={20} sx={{ opacity: 0.6 }} >
              Book Through Call
            </Typography>
            <Typography variant='subtitle1' fontSize={25} color={'#FFCD75'}>
              +80 (400) 123 4567
            </Typography>
          </Stack>
        </Stack>
        <Stack justifyContent={'center'} width={{ md: '50%', xs: '100%' }} p={'0 20px'} alignItems={'center'} position={'relative'}>
          <Box width={'100%'} height={500}>
            <img width={'100%'} height={'100%'} style={{ objectFit: 'cover' }} src={AboutImg1} alt='' />
          </Box>
        </Stack>
      </Stack>
    </Box>
  )
}

export default About