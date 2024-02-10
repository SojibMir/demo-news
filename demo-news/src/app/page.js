import LatestNews from '@/components/ui/LatestNews/LatestNews';
import SideBar from '@/components/ui/SideBar/SideBar';
import Grid from '@mui/material/Grid';

const HomePage = () => {
  return (
    <>
      <Grid container spacing={2}>

        <Grid item xs={8}>
          <h1>
            <LatestNews />
          </h1>
        </Grid>

        <Grid item xs={4}>
          <h1>
            <SideBar />
          </h1>
        </Grid>

      </Grid>
    </>
  );
};

export default HomePage;