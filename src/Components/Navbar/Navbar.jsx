import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Link as ScrollToLink, animateScroll as scroll } from 'react-scroll';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import logo_black from '../../assets/logo_black.png';
import { Button, Container, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

// This function will add Go_back feature on the Navbar
function ScrollTop(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });


    // Go_back to the top Button Handler
    const handleClick = () => {
        scroll.scrollToTop({
            duration: 500,
            smooth: true,
        });
    }
    return (
        <Fade in={trigger}>
            <Box onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 20, right: 16 }}
            >
                {children}
            </Box>
        </Fade>
    );
}

// This function will show a Elevation effect on the Navbar when scrolling
function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}


const Links = ({ drawer, setIsOpenDrawer, isOpenDrawer }) => {
    class LinkClass {
        constructor(id, linkName) {
            this.id = id,
                this.linkName = linkName
        }
    }

    const pageLink = [new LinkClass(0, 'Home'), new LinkClass(1, 'About'), new LinkClass(2, 'Categories')];
    const componentsLink = [new LinkClass('services', 'Services'), new LinkClass('footer', 'Contact')]

    return drawer ? (
        <List sx={{ mt: 1.5 }}>
            {pageLink.map(link => (
                <Link to={`/${link.linkName.toLowerCase()}`} key={link.id}>
                    <ListItem sx={{ minWidth: '12rem' }} disablePadding>
                        <ListItemButton
                            onClick={() => setIsOpenDrawer(!isOpenDrawer)}
                            sx={{ ":hover": { bgcolor: '#E0F3D7' } }}>
                            <ListItemText sx={{ marginLeft: '0.4rem' }} primary={link.linkName} />
                        </ListItemButton>

                    </ListItem>
                </Link>
            ))}
            {
                componentsLink.map((link, i) => (
                    <ScrollToLink
                        key={i}
                        to={link.id}
                        smooth={true}
                        spy={true}
                        offset={-70}
                        duration={500}>
                        <ListItem sx={{ minWidth: '12rem' }} key={i} disablePadding>
                            <ListItemButton
                                onClick={() => setIsOpenDrawer(!isOpenDrawer)}
                                sx={{ ":hover": { bgcolor: '#E0F3D7' } }}>
                                <ListItemText sx={{ marginLeft: '0.4rem' }} primary={link.linkName} />
                            </ListItemButton>

                        </ListItem>
                    </ScrollToLink>
                ))
            }
        </List>
    )
        : (< ul className={`flex p-0 sm:space-x-8 space-x-5' text-black`} >
            {
                pageLink.map(li => (
                    <Link to={`/${li.linkName.toLowerCase()}`} key={li.id}>
                        <li className='sm:text-base text-sm'>
                            {li.linkName}
                        </li>
                    </Link>
                ))}
            {
                componentsLink.map((link, i) => (
                    <li key={i} className='sm:text-base text-sm cursor-pointer'>
                        <ScrollToLink
                            activeClass="active"
                            to={link.id}
                            smooth={true}
                            spy={true}
                            offset={-70}
                            duration={500}>
                            {link.linkName}
                        </ScrollToLink>
                    </li>
                ))
            }
        </ul >
        )
}

const Navbar = (props) => {
    const [isNavBarElevated, setIsNavbarElevated] = React.useState(false)
    const [isOpenDrawer, setIsOpenDrawer] = React.useState(false);

    // Media Query
    const isExtraSmallScreen = useMediaQuery('(max-width: 664px)')
    const isSemiMediumScreen = useMediaQuery('(max-width: 900px)')

    // This function will change the  navBar bg-color when user scrolls
    window.addEventListener('scroll', () => {
        setIsNavbarElevated(window.scrollY > 0)
    })

    return (
        <nav className='fixed'>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar sx={{ bgcolor: isNavBarElevated ? 'white' : 'transparent' }}>
                    <Toolbar>
                        <Container sx={{ display: 'flex' }} >

                            {/* Open Drawer Btn */}
                            {isSemiMediumScreen &&
                                <IconButton
                                    color="black"
                                    aria-label="open drawer"

                                    onClick={() => setIsOpenDrawer(!isOpenDrawer)}
                                    edge="start"
                                    sx={{ mr: 1.1 }}
                                >
                                    <MenuIcon fontSize='inherit' />
                                </IconButton>}

                            <div className='flex w-full justify-between items-center'>
                                {/* Brand_icon */}
                                <Link to={'/home'}>
                                    <img className='sm:max-h-6 max-h-5 my-auto cursor-pointer' src={logo_black} alt="grocery" />
                                </Link>

                                <div className='flex items-center space-x-8'>
                                    {/* Links */}
                                    {isSemiMediumScreen ?
                                        <Drawer
                                            anchor={'left'}
                                            open={isOpenDrawer}
                                            onClose={() => setIsOpenDrawer(!isOpenDrawer)}
                                        >
                                            <Links
                                                setIsOpenDrawer={setIsOpenDrawer}
                                                isOpenDrawer={isOpenDrawer}
                                                drawer={true} />
                                        </Drawer>

                                        : <Links
                                            setIsOpenDrawer={setIsOpenDrawer}
                                            isOpenDrawer={isOpenDrawer} />
                                    }

                                    {/* Authentication Btn */}
                                    {
                                        // Log in
                                        0 < 1 ? <Button
                                            size={isExtraSmallScreen ? 'small' : 'medium'}
                                            sx={{ textTransform: 'capitalize' }}
                                            color='success'
                                            variant='contained'>
                                            Log in
                                        </Button>

                                            // Log out
                                            : <Button
                                                size={isExtraSmallScreen ? 'small' : 'medium'}
                                                sx={{ textTransform: 'capitalize' }}
                                                color='success'
                                                variant='contained'>
                                                Log in
                                            </Button>
                                    }
                                </div>
                            </div>
                        </Container>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar id="back-to-top-anchor" />

            {/* Go_Back on the top btn */}
            <ScrollTop {...props}>
                <Fab color='warning' size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </nav>
    )
};

export default Navbar;