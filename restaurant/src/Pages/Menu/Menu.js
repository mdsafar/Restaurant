import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import MenuImg1 from '../../images/menu-1.png'
import MenuImg2 from '../../images/menu-2.png'
import MenuImg3 from '../../images/menu-3.png'
import MenuImg4 from '../../images/menu-4.png'
import MenuImg5 from '../../images/menu-5.png'
import MenuImg6 from '../../images/menu-6.png'
import Shape1 from '../../images/shape-5.png'
import Shape2 from '../../images/shape-6.png'



const MenuArr = [
  {
    img: MenuImg1,
    name: 'Greek Salad',
    price: '$25.50',
  },
  {
    img: MenuImg2,
    name: 'Butternut Pumpkin',
    price: '$10.00',
  },
  {
    img: MenuImg3,
    name: 'Olivas Rellenas',
    price: '$25.00',
  },
  {
    img: MenuImg4,
    name: 'Lasagne',
    price: '$40.00',
  },
  {
    img: MenuImg5,
    name: 'Tokusen Wagyu',
    price: '$39.00',
  },
  {
    img: MenuImg6,
    name: 'Opu Fish',
    price: '$49.00',
  }
]

const Menu = () => {
  return (
    <Box component={'section'} p={'5rem 3%'} height={'100vh'} id='menu' bgcolor={'transparent'}>
      <Stack height={'100%'} spacing={8} >
        <Stack p={'0 20px'} spacing={1} justifyContent={'center'} alignItems={'center'} textAlign={'center'}>
          <Typography variant='subtitle2' color={'#FFCD75'} letterSpacing={6} fontWeight={600}>
            SPECIAL SELECTION
          </Typography>
          <Typography variant='h2' fontWeight={500} color={'white'} >
            Delicious Menu
          </Typography>
        </Stack>
        <Stack direction={{md:'row',xs:'column'}} justifyContent={'center'} alignItems={'center'} flexWrap={'wrap'} height={'100%'} gap={6} >
          {MenuArr.map((item, index) => (
            <Stack key={index} direction={'row'} spacing={3} width={{md:'40%',xs:'100%'}} justifyContent={'center'}  >
              <Box>
                <img src={item.img} alt='' />
              </Box>
              <Stack direction={'column'} spacing={1}>
                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                  <Typography variant='h6' fontWeight={600}>
                    {item.name}
                  </Typography>
                  <Typography variant='subtitle1' fontSize={20} color={'#FFCD75'}>
                    {item.price}
                  </Typography>
                </Stack>
                <Typography variant='body1' fontSize={14.3} sx={{ opacity: 0.7 }}>
                Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
      <img className='move-anim' style={{position:"absolute",top:0,left:0,zIndex:-1}} src={Shape1} alt=''/>
      <img className='move-anim' style={{position:"absolute",right:0,bottom:0,zIndex:-1}} src={Shape2} alt=''/>
    </Box>
  )
}

export default Menu