import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import topNews from '@/assets/top-news.png'
import topNews2 from '@/assets/top-news2.png'
import Image from 'next/image';
import Grid from '@mui/material/Grid';

const LatestNews = () => {
    return (
        <Box className='my-5'>
            <Card >
                <CardActionArea>
                    <CardMedia>
                        <Image src={topNews} width={800} alt='top news' />
                    </CardMedia>
                    <CardContent>
                        <p className='
                        w-[100px]
                        bg-red-500
                        px-2
                        text-white
                        my-5
                        rounded
                        '
                        >Technology</p>
                        <Typography gutterBottom variant="h5" component="div">
                            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                        </Typography>

                        <Typography gutterBottom className='my-3' >
                            By Shofikul Islam - Feb 11 2024
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Grid className='mt-5' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Card >
                        <CardActionArea>
                            <CardMedia>
                                <Image src={topNews2} width={800} alt='top news' />
                            </CardMedia>
                            <CardContent>
                                <p className='
                        w-[100px]
                        bg-red-500
                        px-2
                        text-white
                        my-5
                        rounded
                        '
                                >Technology</p>
                                <Typography gutterBottom >
                                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                                </Typography>

                                <Typography gutterBottom className='my-3' >
                                    By Shofikul Islam - Feb 11 2024
                                </Typography>

                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card >
                        <CardActionArea>
                            <CardMedia>
                                <Image src={topNews2} width={800} alt='top news' />
                            </CardMedia>
                            <CardContent>
                                <p className='
                        w-[100px]
                        bg-red-500
                        px-2
                        text-white
                        my-5
                        rounded
                        '
                                >Technology</p>
                                <Typography gutterBottom >
                                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                                </Typography>

                                <Typography gutterBottom className='my-3' >
                                    By Shofikul Islam - Feb 11 2024
                                </Typography>

                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card >
                        <CardActionArea>
                            <CardMedia>
                                <Image src={topNews2} width={800} alt='top news' />
                            </CardMedia>
                            <CardContent>
                                <p className='
                        w-[100px]
                        bg-red-500
                        px-2
                        text-white
                        my-5
                        rounded
                        '
                                >Technology</p>
                                <Typography gutterBottom >
                                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                                </Typography>

                                <Typography gutterBottom className='my-3' >
                                    By Shofikul Islam - Feb 11 2024
                                </Typography>

                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card >
                        <CardActionArea>
                            <CardMedia>
                                <Image src={topNews2} width={800} alt='top news' />
                            </CardMedia>
                            <CardContent>
                                <p className='
                        w-[100px]
                        bg-red-500
                        px-2
                        text-white
                        my-5
                        rounded
                        '
                                >Technology</p>
                                <Typography gutterBottom >
                                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                                </Typography>

                                <Typography gutterBottom className='my-3' >
                                    By Shofikul Islam - Feb 11 2024
                                </Typography>

                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>

        </Box>


    );
};

export default LatestNews;