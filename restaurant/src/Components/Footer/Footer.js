import React from 'react'
import FooterImg from '../../images/footer-bg.jpg'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { Link as ScrollLink } from 'react-scroll'
import FooterFormImg from '../../images/footer-form-bg.png'



const navItems = [
    { path: 'home', name: "Home" },
    { path: 'menu', name: "Menu" },
    { path: 'about', name: "About Us" },
    { path: 'contact', name: "Contact" }
];

const social = ['FACEBOOK', 'INSTAGRAM', 'YOUTUBE', 'GOOGLEMAP']

const Footer = () => {
    return (
        <Box sx={{ backgroundImage: `url(${FooterImg})` }} p={'2rem 0 1.5rem'}>
            <Stack direction={'column'} spacing={3}>
                <Box sx={{ backgroundImage: `url(${FooterFormImg})` }} width={'100%'} p={'2rem 0'}>
                    <Stack direction={'column'} spacing={4} >
                        <Stack justifyContent={'center'} alignItems={"center"} spacing={.6}>
                            <Typography variant='subtitle1' fontSize={16} sx={{ opacity: 0.7 }}>
                                Restaurant St, Kollam City, Kerala 9578, India
                            </Typography>
                            <Typography variant='subtitle1' fontSize={16} sx={{ opacity: 0.7 }}>
                                booking@restaurant.com
                            </Typography>
                            <Typography variant='subtitle1' fontSize={16} sx={{ opacity: 0.7 }}>
                                Booking Request : +91-123-123456
                            </Typography>
                            <Typography variant='subtitle1' fontSize={16} sx={{ opacity: 0.7 }}>
                                Open : 09:00 am - 01:00 pm
                            </Typography>
                        </Stack>
                        <Stack alignItems={'center'} spacing={3}>
                            <Stack alignItems={'center'}>
                                <Typography variant='h4' >
                                    Get News & Offers
                                </Typography>
                                <Typography variant='subtitle1' fontSize={16} >
                                    <span style={{ opacity: 0.6 }}> Subscribe us & Get </span> 25% Off.
                                </Typography>
                            </Stack>
                            <Stack direction={'row'} width={{ sm: '50%', xs: '100%' }} p={'0 1.5rem'}>
                                <TextField
                                    sx={{
                                        backgroundColor: '#262626', borderRadius: 3,
                                        borderRight: '0 !important',
                                    }}
                                    name="name"
                                    fullWidth
                                    label="Your Email"
                                    InputLabelProps={{
                                        style: { color: '#fff', opacity: 0.7, borderRight: 0 }
                                    }}
                                />
                                <Button variant='outlined' sx={{
                                    color: "white", fontWeight: 600,
                                    p: '10px 20px',
                                    borderColor: 'rgba(200, 200, 210, 0.5)',
                                    '&:hover': {
                                        borderColor: 'white',
                                    },
                                }}>Subscribe</Button>
                            </Stack>
                        </Stack>
                    </Stack>
                </Box>
                <Stack height={'100%'} direction={'row'} justifyContent={'center'} >
                    <Stack component={'div'} className='nav_items' spacing={4} direction={'column'} width={'100%'} alignItems={"center"}>
                        {navItems.map((item) => (
                            <ScrollLink
                                to={item.path}
                                smooth={true}
                                duration={500}
                                key={item.path}
                                spy={true}
                                style={{ opacity: 0.6, }}
                            >
                                {item.name}
                            </ScrollLink>
                        ))}
                    </Stack>
                    <Stack component={'div'} className='nav_items' spacing={4} direction={'column'} width={'100%'} alignItems={"center"}>
                        {social.map((item, index) => (
                            <Typography
                                key={index}
                                variant='subtitle1'
                                fontWeight={600}
                                fontSize={14}
                                sx={{ opacity: 0.6, cursor: 'pointer', '&:hover': { color: '#FFCD75', opacity: 1 } }}
                            >
                                {item}
                            </Typography>
                        ))}
                    </Stack>
                </Stack>
                <Stack textAlign={'center'} p={'0 1rem'} mt={'35px !important'}>
                    <Typography variant='subtitle1' fontSize={15} >
                        {`\u00A9 ${new Date().getFullYear()} Restaurant. All Rights Reserved | Crafted by`} <span style={{ fontWeight: 600 }}>SAFAR</span>
                    </Typography>
                </Stack>
            </Stack>
        </Box>
    )
}

export default Footer