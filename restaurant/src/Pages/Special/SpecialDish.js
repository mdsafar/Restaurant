import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import SpecialDishImg from '../../images/special-dish-banner.jpg'
import Shape from '../../images/shape-4.png'

const SpecialDish = () => {
  return (
    <Box component={'section'} p={0} style={{ height: "100%" }} bgcolor={'hsla(30, 8%, 5%, 1)'}>
      <Stack height={'100%'} direction={{md:'row',xs:'column'}}>
        <Box width={{md:'50%',xs:'100%'}} height={500}>
          <img width={'100%'} height={'100%'} style={{ objectFit: 'cover' }} src={SpecialDishImg} alt='' />
        </Box>
        <Stack width={{md:'50%',xs:'100%'}} p={{md:'0',xs:'4rem 0'}}  justifyContent={'center'} alignItems={'center'}>
          <Stack p={'0 20px'} spacing={2} >
            <Typography variant='subtitle2' color={'#FFCD75'} letterSpacing={6} fontWeight={600}>
              SPECIAL DISH
            </Typography>
            <Typography variant='h2' fontWeight={500} color={'white'} >
              Lobster Tortellini
            </Typography>
            <Typography variant='h6' color={'white'} fontSize={16} maxWidth={420} >
              Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type.
            </Typography>
            <Stack direction={'row'} spacing={3} alignItems={'center'}>
              <Typography variant='subtitle1' fontSize={20} sx={{ opacity: 0.6 }} >
                $40.00
              </Typography>
              <Typography variant='subtitle1' fontSize={25} color={'#FFCD75'}>
                $20.00
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <img style={{ position: "absolute", right: 0, bottom: 0, zIndex: -1 }} src={Shape} alt='' />
    </Box>
  )
}

export default SpecialDish