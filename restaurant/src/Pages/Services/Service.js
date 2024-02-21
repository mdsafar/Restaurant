import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import ServiceImg1 from '../../images/service-1.jpg'
import ServiceImg2 from '../../images/service-2.jpg'
import ServiceImg3 from '../../images/service-3.jpg'
import Shape1 from '../../images/shape-1.png'
import Shape2 from '../../images/shape-2.png'

const Service = () => {
    return (
        <Box component={'section'} p={'4rem 1%'}  bgcolor={'hsla(30, 8%, 5%, 1)'}>
        <Stack height={'100%'} spacing={4} >
            <Stack  p={'0 20px'} spacing={2} justifyContent={'center'} alignItems={'center'} textAlign={'center'}>
                <Typography variant='subtitle2' color={'#FFCD75'} letterSpacing={6} fontWeight={600}>
                    FLAVORS FOR ROYALTY
                </Typography>
                <Typography variant='h2' fontWeight={500} color={'white'} >
                    We Offer Top Notch
                </Typography>
                <Typography variant='h6' color={'white'} fontSize={16} maxWidth={420} >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys standard dummy text ever.
                </Typography>
            </Stack>
            <Stack  height={'100%'} direction={'row'} alignItems={'center'} justifyContent={'center'} flexWrap={'wrap'} spacing={{md:6 , sm:0}} gap={{md:2,xs:4}}>
                <Stack alignItems={'center'} direction={'column'} spacing={1}>
                    <Box sx={{ cursor: 'pointer' }}>
                        <img src={ServiceImg1} alt='' />
                    </Box>
                    <Typography variant='h5' fontWeight={600} color={'white'} >
                        Breakfast
                    </Typography>
                </Stack>
                <Stack direction={'column'} alignItems={'center'}  spacing={1}>
                    <Box sx={{ cursor: 'pointer' }}>
                        <img src={ServiceImg2} alt='' />
                    </Box>
                    <Typography variant='h5' fontWeight={600} color={'white'} >
                        Appetizers
                    </Typography>
                </Stack>
                <Stack alignItems={'center'} direction={'column'} spacing={1}>
                    <Box sx={{ cursor: 'pointer' }}>
                        <img  src={ServiceImg3} alt='' />
                    </Box>
                    <Typography variant='h5' fontWeight={600} color={'white'} >
                        Drinks
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
            <img className='move-anim' style={{position:"absolute",top:0,left:0,zIndex:-1}} src={Shape1} alt=''/>
            <img className='move-anim' style={{position:"absolute",right:0,bottom:0,zIndex:-1}} src={Shape2} alt=''/>
        </Box>
    )
}

export default Service