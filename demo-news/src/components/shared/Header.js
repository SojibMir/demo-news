import Box from '@mui/material/Box';
import Container from '@mui/material/Box';
import Image from "next/image";
import headingImage from "@/assets/The Dragon News.png";
import Typography from '@mui/material/Typography';
import { showCurrentDate } from '@/utils/getCurrentDate';

const Header = () => {
    const currentDate = showCurrentDate();

    return (
        <Box className='w-full my-2 '>
            <Container>
                <Image
                    src={headingImage}
                    width={500}
                    height={500}
                    alt="logo"
                    className='mx-auto '
                />
                <Typography variant="body2" color="gray" textAlign="center" className='my-2'>
                    Journalism Without Fear or Favour.
                </Typography>
                <Typography textAlign="center">
                    {currentDate}
                </Typography>
            </Container>
        </Box>
    );
};

export default Header;