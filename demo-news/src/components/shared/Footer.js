import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


//icons-material
import FacebookIcon from '@mui/icons-material/Facebook';


const Footer = () => {

    //Nav items .

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

    return (

        < Box className="bg-black px-2 py-10" >
            <Container>
                <Box className="w-full text-center"
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
                </Box>

                <Box className="w-full text-center"  >
                    {nevItems.map((item) => (
                        <Link key={item} href={item.pathname}>
                            <Button className="text-white">{item.route}</Button>
                        </Link>
                    ))}
                </Box>

                <Typography variant="body2" color="gray" textAlign="center">
                    @2024 The Demo News ,Desgin by Sojib Mir.
                </Typography>

            </Container>
        </Box >
    );
};

export default Footer;