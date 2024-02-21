import React, { useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Clock, EnvelopeSimple, MapPin, Phone } from 'phosphor-react'

const TopBar = () => {

    useEffect(() => {
        const header = document.querySelector(".TopBar");

        const scrollHandler = () => {
            (window.scrollY >= 50) ? header.classList.add("hide") : header.classList.remove("hide")
        };

        window.addEventListener("scroll", scrollHandler);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    return (
        <Box p={2}  component={'div'} className='TopBar' boxShadow={'0px 0px 5px 0 rgba(255,255,255,0.5)'} position={'fixed'} right={0} color={'white'} left={0} zIndex={2}>
            <Stack direction={'row'} justifyContent={'space-between'}>
                <Stack direction={'row'} spacing={6}>
                    <Stack direction={'row'} alignItems={'center'} spacing={0.5}>
                        <MapPin size={18} />
                        <Typography variant='subtitle2'>
                            Restaurant St, Kollam City, Kerala 9578, India
                        </Typography>
                    </Stack>
                    <Stack direction={'row'} alignItems={'center'} spacing={0.5}>
                        <Clock size={18} />
                        <Typography variant='subtitle2'>
                            Daily : 8.00 am to 10.00 pm
                        </Typography>
                    </Stack>
                </Stack>
                <Stack direction={'row'} spacing={6}>
                    <Stack direction={'row'} alignItems={'center'} spacing={0.5} sx={{ cursor: 'pointer', '&:hover': { color: "#FFCD75" } }}>
                        <Phone size={18} />
                        <Typography variant='subtitle2' >
                            +1 123 456 7890
                        </Typography>
                    </Stack>
                    <Stack direction={'row'} alignItems={'center'} spacing={0.5} sx={{ cursor: 'pointer', '&:hover': { color: "#FFCD75" } }}>
                        <EnvelopeSimple size={18} />
                        <Typography variant='subtitle2'>
                            booking@restaurant.com
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    )
}

export default TopBar