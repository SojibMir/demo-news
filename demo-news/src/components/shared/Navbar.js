"use client"

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/logo.png';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';


//icons-material
import FacebookIcon from '@mui/icons-material/Facebook';
import Header from "@/components/shared/Header";


const nevItems = [
    {
        route: "Home",
        pathname: "/",
    },
    {
        route: "Pages",
        pathname: "/pages",
    },
    {
        route: "Category",
        pathname: "/category",
    },
    {
        route: "News",
        pathname: "/news",
    },
    {
        route: "About",
        pathname: "/about",
    },
    {
        route: "Contacts",
        pathname: "/contacts",
    },

];

function Navbar() {

    return (
        <>

            <Header />

            <AppBar position="static" className="bg-black">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Image src={logo} width={100} height={100} alt='logo' />

                        <Box className="w-full text-center"  >
                            {nevItems.map((item) => (
                                <Link key={item} href={item.pathname}>
                                    <Button className="text-white">{item.route}</Button>
                                </Link>
                            ))}
                        </Box>

                        <Box>

                            <Stack
                                direction="row"
                                //css add
                                sx={{
                                    "& svg": {
                                        color: "white",
                                    },
                                }}>
                                <IconButton>
                                    < FacebookIcon />
                                </IconButton>
                                <IconButton>
                                    < FacebookIcon />
                                </IconButton>
                                <IconButton>
                                    < FacebookIcon />
                                </IconButton>
                                <IconButton>
                                    < FacebookIcon />
                                </IconButton>
                            </Stack>

                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}
export default Navbar;