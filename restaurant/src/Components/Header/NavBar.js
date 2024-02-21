import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Divider, Drawer, IconButton, Stack, styled } from '@mui/material';
import TopBar from './TopBar';
import { Link as ScrollLink } from 'react-scroll'
import './NavBar.css'
import { CaretCircleRight, List } from 'phosphor-react';



const navItems = [
    {
        path: 'home',
        name: "Home"
    },
    {
        path: 'menu',
        name: "Menu"
    },
    {
        path: 'about',
        name: "About Us"
    },
    {
        path: 'contact',
        name: "Contact"
    }
];

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1.5, .5),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));


function NavBar(props) {
    const { windows } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const header = document.querySelector(".NavBar");
        let lastScrollPos = 0;

        const hideHeader = () => {
            const isScrollBottom = lastScrollPos < window.scrollY;
            (isScrollBottom) ? header.classList.add("hide") : header.classList.remove("hide")

            lastScrollPos = window.scrollY;
        }


        const scrollHandler = () => {
            if (window.scrollY >= 50) {
                header.classList.add("active");
                hideHeader();
            } else {
                header.classList.remove("active");
            }
        };

        window.addEventListener("scroll", scrollHandler);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);



    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const container = windows !== undefined ? () => windows().document.body : undefined;

    return <>
        <TopBar />
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" sx={{
                backgroundColor: "transparent",
                boxShadow: 'none',
                top: 55,
                transition: "250ms ease",

            }} className='NavBar'>
                <Toolbar sx={{ padding: "16px 16px" }}>
                    <Typography
                        variant="h4"
                        fontSize={26}
                        color={'#FFCD75'}
                        component="div"
                        sx={{ flexGrow: 1, fontWeight: 600 }}
                    >
                        {'Restaurant'.toUpperCase()}
                    </Typography>
                    <Box component={'div'} className='nav_items' sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <ScrollLink
                                to={item.path}
                                smooth={true}
                                duration={500}
                                key={item.path}
                                activeClass="active-link"
                                spy={true}
                            >
                                {item.name}
                            </ScrollLink>
                        ))}
                    </Box>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ display: { sm: 'none' } }}
                    >
                        <List size={30} />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    anchor='right'
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 330, backgroundColor: "transparent", backdropFilter: 'blur(20px)' }
                    }}
                >
                    <Box bgcolor={'transparent'} color={'white'} display={'block'}>
                        <Box component={'div'} >
                            <DrawerHeader>
                                <IconButton onClick={handleDrawerToggle} sx={{ ml: 1, padding: '3' }}>
                                    <CaretCircleRight size={32} color='white' />
                                </IconButton>
                            </DrawerHeader>
                            <Divider sx={{ backgroundColor: 'grey' }} />
                            <Stack component={'div'} direction={'column'} className='mobile_nav' >
                                {navItems.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <ScrollLink
                                            to={item.path}
                                            smooth={true}
                                            duration={500}
                                            key={item.path}
                                            spy={true}
                                            activeClass="active-link"
                                            style={{ padding: '20px', fontWeight: 600 }}
                                            onClick={handleDrawerToggle}
                                        >
                                            {item.name}
                                        </ScrollLink>
                                        <Divider sx={{ backgroundColor: 'grey' }} />
                                    </React.Fragment>
                                ))}
                            </Stack>
                            <Stack justifyContent={'center'} alignItems={'center'} mt={3} spacing={2} p={'2rem 1rem'}>
                                <Typography variant='h4' fontSize={28} fontWeight={600} >
                                    Visit Us
                                </Typography>
                                    <Typography variant='subtitle1' fontSize={16} textAlign={'center'} sx={{ opacity: 0.7 }}>
                                      Restaurant St, Kollam City, <br/> Kerala 9578, India
                                    </Typography>
                                <Typography variant='subtitle1' fontSize={16} sx={{ opacity: 0.7 }}>
                                    Open: 9:30am - 2.30pm
                                </Typography>
                                <Typography variant='subtitle1' fontSize={16} sx={{ opacity: 0.7 }}>
                                    booking@restaurant.com
                                </Typography>
                                <Stack direction={'column'} alignItems={'center'} mt={'40px !important'} spacing={1}>
                                    <Typography variant='subtitle1' fontSize={18} fontWeight={600}>
                                        Booking Request
                                    </Typography>
                                    <Typography variant='subtitle1' fontSize={24} color={'#FFCD75'}>
                                     +88-123-123456
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Box>
                    </Box>
                </Drawer>
            </nav>
        </Box>
    </>
}

export default NavBar