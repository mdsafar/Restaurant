import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import BgImage1 from '../../images/hero-slider-1.jpg'
import BgImage2 from '../../images/hero-slider-2.jpg'
import BgImage3 from '../../images/hero-slider-3.jpg'


const imgArr = [
  {
    special: 'TRADATIONAL & HYGINE',
    heading: "For the love of delicious food",
    img: BgImage1
  },
  {
    special: 'DELIGHTFUL EXPERIENCE',
    heading: 'Where every flavor tells a story',
    img: BgImage2
  },
  {
    special: 'AMAZING & DELICIOUS',
    heading: 'Flavors Inspired by the Seasons',
    img: BgImage3
  },
]


const Home = () => {

  const [banner, setBanner] = useState(imgArr[0])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBanner(imgArr[index]);
      setIndex((prevIndex) => (prevIndex + 1) % imgArr.length);
    }, 3000);

    return () => clearInterval(intervalId);

  }, [index])


  useEffect(() => {
    const headings = document.querySelector('.headings')
    const bannerImages = document.querySelector('.banner_images')
    headings.classList.add('reveal')
    bannerImages.classList.add('reveal');
  }, [])


  return (
    <Box component={'section'} id='home' height={'100vh'} sx={{
      backgroundImage: `url(${banner.img})`,
      backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center',
    }}>
      <Stack justifyContent={'space-evenly'} alignItems={'center'} height={'100%'} textAlign={'center'} spacing={3}  >
        <Stack p={'0 20px'} spacing={2} className='headings' >
          <Typography variant='subtitle2' color={'#FFCD75'} letterSpacing={6} fontWeight={600}>
            {banner.special}
          </Typography>
          <Typography variant='h2' fontWeight={500} color={'white'} >
            {banner.heading}
          </Typography>
          <Typography variant='h6' color={'white'}>
            Come with family & feel the joy of mouthwatering food
          </Typography>
        </Stack>
        <Stack direction={'row'} spacing={{ sm: 4, xs: 2.5 }} className='banner_images'  >
          {imgArr.map((item, i) => (
            <Box key={i} component={'div'} width={{ sm: 160, xs: 90 }} height={{ sm: 160, xs: 90 }} sx={{ cursor: "pointer", '& :hover': { transform: 'scale(1.03)' } }} onClick={() => { setBanner(item); setIndex(index) }}>
              <img width={'100%'} height={'100%'}
                style={{
                  objectFit: 'cover', borderRadius: 20,
                  border: item.img === banner.img ? "2px solid #FFCD75" : "1px solid white",
                  transform: item.img === banner.img && 'scale(1.08)'
                }}
                src={item.img} alt='' />
            </Box>
          ))}
        </Stack>
      </Stack>
    </Box>
  )
}

export default Home