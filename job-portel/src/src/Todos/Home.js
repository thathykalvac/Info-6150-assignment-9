import React from 'react';
import { Typography, Grid, Box, Container, Button, Card, CardContent, CardActions, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import { Home as HomeIcon, Info as InfoIcon, Work as WorkIcon, ContactMail as ContactMailIcon } from '@mui/icons-material';

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ paddingTop: 5 }}>
      {/* Hero Section */}
      <Box 
        sx={{
          textAlign: 'center',
          marginBottom: 5,
          backgroundImage: 'linear-gradient(to right, #6a11cb, #2575fc)',
          color: 'white',
          padding: 5,
          borderRadius: 2,
        }}
      >
        <Typography variant="h3" gutterBottom>
          Welcome to Job Portal
        </Typography>
        <Typography variant="h6" paragraph>
          Your Gateway to the Perfect Job! Start Your Journey Today.
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{ backgroundColor: '#ff9800', ':hover': { backgroundColor: '#e65100' } }}
          component={Link}
          to="/job-listings"
          startIcon={<WorkIcon />}
        >
          Explore Jobs
        </Button>
      </Box>

      {/* Feature Cards */}
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ minHeight: '350px', border: '1px solid #e0e0e0', ':hover': { boxShadow: 3 } }}>
            <CardMedia
              component="img"
              height="140"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa8nO0U6R7r0ewjo9DSc_lq_me2BahI6fzxQ&s"
              alt="About Us"
            />
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body2" color="textSecondary" paragraph>
                Learn more about our mission and the team behind the job portal.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="outlined"
                color="primary"
                component={Link}
                to="/about"
                startIcon={<InfoIcon />}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ minHeight: '350px', border: '1px solid #e0e0e0', ':hover': { boxShadow: 3 } }}>
            <CardMedia
              component="img"
              height="140"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJw_-TUiPyMcA21ChnfABfZ6CfXn-v8A8WDg&s"
              alt="Job Seekers"
            />
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Job Seekers
              </Typography>
              <Typography variant="body2" color="textSecondary" paragraph>
                Browse open job positions and apply directly to the companies you're interested in.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="outlined"
                color="primary"
                component={Link}
                to="/job-listings"
                startIcon={<WorkIcon />}
              >
                Explore Jobs
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ minHeight: '350px', border: '1px solid #e0e0e0', ':hover': { boxShadow: 3 } }}>
            <CardMedia
              component="img"
              height="140"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJw_-TUiPyMcA21ChnfABfZ6CfXn-v8A8WDg&s"
              alt="Employers"
            />
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Employers
              </Typography>
              <Typography variant="body2" color="textSecondary" paragraph>
                Post job openings and find the best talent to help grow your business.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="outlined"
                color="primary"
                component={Link}
                to="/job-listings"
                startIcon={<HomeIcon />}
              >
                Post a Job
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ minHeight: '350px', border: '1px solid #e0e0e0', ':hover': { boxShadow: 3 } }}>
            <CardMedia
              component="img"
              height="140"
              image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANUAAACUCAMAAAAzmpx4AAABIFBMVEX///8Atv////v///0AtP/e5e8At/4Auv8Atfr7+/v///jd3d309PQAtffn5+cAu/3u7u55eXkAsP8AcJ3S7/jd8/6GhoZLw/rQ7f5LxP/f9PoIf62s3/x80f75+v9Xy/rB7f225foCh8CJ0/wAkcrp9/oDeKMChLdix/2rq6vDw8OZmZnI7viRkZEuLi5ubm5cXFyF1vbv/fZISEi+ysOY3vexqJ9iZl89PT26t7lXUE41yv9To8Ly8elsXVxx1PcCTWqgwMkAP18AW3sFn9gAKEUAS3cDl8cHLkIrxfEAZosLdqsGYY8FOVEpLDMAOElzqsIJR1im5fQAIDBhdIR+dWgyUmPs5PQLoud0l6AAGjnM0d0tl7yJnquQn5saGBW6XLbPAAANKElEQVR4nO1aC3fbuJnlAwJA2hBsRTZFRaJEyxxLshxZStnG43Y0rdVm68nubNzdNn3t/v9/sfcjRZmSPPbQnjPJ9uCehKZIEMDF9yZoWQYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgb/v7Ff377i/RjsV8PBw6gDB9n/7Ljv/QSEDugwPi/I4H99fH5x+DSOj48fuUm3nwE8dji9uNpZ5KqYjnC4uih+eqO3745H470Xo/5c7O2Nzy/fjl9I6+35Pav68ZvzbJ3cip080N51H7m50Y6w1VN9+m50UHEOG9iHtMYXpHv188vRft6171mO4/gEJ4O/CWcD7gp04jyE0uWdBlu94Zfn+LTAl794iYXVR/v1PfwdT8/3iwVznHn7qFWg/yjiZ6DzOOJJ23X3Do9fJK4MF1OiBl2ADrTT7jAMdQaxg/yaUsUvrfKWiiCEtHfAbS4JvMBukxKELXQ4nE2cX/7qAAtcncrB4Vt4BxLR8WF2wbP8qN9jnD067s8BLoP06ut96zlq6NX364gQ+ytSlpvc6QbT9hPL+XOQsrV9/et3v3kGqQLnx57luXAR/Z5kStlPKcnPQQtqa+uzb55vW+MplDCC20vl51e9Mpj+6sL3/OexegNH4cGjLhrys8toA1qqb3/7LNNCfnFlkf45PVt/WaKyla2Xv0vLUfpHY/yWfJ/jdR/wyZ8f/Oak41d3797hmKKC21FfJqvl76/71WW1R/HKcZvi3qQY3I+wGStcIdcKBtdQguIYV4yL7BbXssE1tSZ/hQNTXCDW2lzYq85WHUjFV15t1dLOfwsaCXomOVNZQ/hfXFelyCL1H057CVKtaqxGyNphVGWTkopJ3Vv0aNY0KrODYe86YExpTiaMaKI5B0epMSMlimUVlETQfJjMJymwBOq6NwwyWusRclZSaallRkWpID+xw6CrNVP3XouL99+KFPljJVr7F2NK/NINP6F78dxBnhkHnPKM3sSBNNuzgGTFZs3WZDKAwMJJc5LKGX6tEIOkTnHSulsJ2RaztutbeJanaL1CP6cco6MZdELHcWvSQ8982EQm7GMge20NnF3/m9Jtr5rHqB8eUEoRluIuZ5nIPWTQyUwwkXqUduPQCjHPxh0l2U2h5HDuu61GfJ91tyHO3pwyb0fTKmN57qAHWU/xxKfr+Oc6CaPRdBMZegd6GySW7wxsKWaOAy8+d/0+u2clxM2pPavoL/am6Mjtry2BOgoTTGWOVNfxU84WnmvlNZDbx2CNDuoUK+kyNUwsB6yieT6k67RDxRbUzvV7ZHlcxw44uW4U+QeZvF3PQ+OjXCFaoNuBiMIksvyBbS8iH2ETnsuZNUpGLl59JVTG98djfGyhr0VJVIL1oTOWl8x9p6kxJubhQyyg4szYipWV2iJnlc7nEaX6UZJMQlvHRN/zc43uzj1UNdGR77t/7ETJnOQ2n8/bjG+xcv0BU31Sv36c+B0hxT0rfnKrG7FTSVqjc8zhKCyJivV8zKUJVzFsw5oHtIB3sjGjVT+SjGWsXGjbMHHBijUaYRusujhhdth23DmSryOqO+QEwolmqhFMZjZu2wkkETQaDUnDbbGygwTrMWAN3dWNe1JgtbwRvFctZp2PrMiPy6GKxZijF2JW9jV82BFm0oYbYDH6TYa2zFk5C9gDscITOavMzQWYeNxCVkmeMiBt7FDfgrwa054XQTcLl7TJSoYJKbaNOmwzwwErKfW8krcAK98re0CO0VwrlgLFgEJ35AruGjD9HunZTOaygu7tsML02QJa1O3gNqVfC7RL4M+QfJPreJyVIlZWqnaqIGIleLMqK8vrllcn8xWDrHJESAp93/IpmRJQLsvqZKz8yPfmMrerMivO+sgow9S1/BhqRtI9YiILT/wpVrY+gqudp1zafJuVgL1WtSt3f1hiRebiOgVP1nXAimKkwiwsN9bEyoWn9dNwRwM5g1+vqSFCZpvlrCb3hfUTrOQMfg5BYKA3aYnTW8FUp5Ks4AOdJNhmlQzXrBCMXUSfgpUiH+j0mo6TgMwmK2iaQ+6f6ELz2ASVUYutLf8pVrrjzGHE/iTIRLRm9d0rLexOFVJZvErCTVaO5a1Z9aAW/jUjVhPMva9YxmoG7zbYZTXDiqaNoOn60cDmLciq1VjbyQOs/JJnR56VYmg804THUGtW+sOZFrIaq/px3ZqHP6yBgUskiFXYhEeL83jVI6/e3tZAbvfR46JB+YbbYTacqXX0aT29p1ghqw1SD9ozXmgh7FzGUuh/Xwqmq2mghzxwk1UIqyXNWM3EdSKnQ54j81GdnNVCxm6WVG2y0kdoEnfSlhs5E81m+NW+z1S3WTWJFb9nlaXHw/qb8fF/3LxfKpFVEVIvv9eK67Ra0j469/wNHyj7SI8mGlpArovBI3pNZks2Q97szXINXDQGlPps+kDb7s2zl77IA1wX6VOIJr9ZIAPHgqO3LVYcMdqNhbSHSeT7XQyMjF/Z/3kIFTy5+Xh7ckpvF5V4/ZrKm0k1VnvTA3cjY2cDTAZJvJRBqhm7cz1KHBQ5Xlggt8mzLxrX7R1WnGVJ6CrVtYYsgOjcFlJeuQil2GZFYR3cWQO+z4F7UrqHCs3uv/XcFkqc01c3N7dnSutPpNqiXbHAOryy+uXiKgvyrtMZpE1vxhp/hFdykzht0gvwtEHxKvIXMBprh5WKsQJJs9mcwOKcVIk7N/Kc5mwQ7x+pHQ20Uz9yvMmsk1iedRTYqjtvDa9n1nRMdbnkQi3Pbj/evJYaVV3gV7Mra++NhfXUxVioBQdIurJO3P0FyiA/L9lAjgyQ7MqFvmCcKNrUwKAJ5ewwqCtlAk2pg3aez1PWiox2ixUCQBTRzQhrqDjlgR7SlqtjK+jV4m6gIDH1/vZP355KlVbLbtHPxTk0rFSmMRavigtYs24ELd+hwS0X9sdzbwFDZG1kUBus4D2RQGY2muLhREuqtlas5ghCW6xo9bzsrtPE3SJ7OJjOWIe2slqDUEiu9fsP3//ht1U4ZcKyLn8Rc1WyLBS0CZmH5XU40yyIqTJxrHZXUqqHchusUHfB2H1ixcK2lbGaIYbOA3oXsfCzVFCoYdsiSbvtHr2KtZw8ShSWhfiUW2fAuAxietHquMl/ndmLv9Rq9Vqt1hp0Qy00+/U31ffp9i5rvY0sheleOmn1025+UXc7/f4d6u4soAaDwSDMrg66g2FWKS0GXYyOO7hAYUbobrc7CAQVurO43+oMQkYaiKtdXRpH9lLaK5qF2aCqS786w9e3IqzlrHDAw4GcTJ+x+3j13x27VNJwSbstqGVlFjI48god8OJ9jVRMKZ35FZm9duFQWqT6GrGFZe9XePbKCMUL9Ym8AI49SxUUuiiTsvEcbRGxRvEuqyG4tpc3yu7U1khqrdb0uDopZO7fBCVZsXzy95mYsGmLIr/A8UdQZOXZJpadzZbel1FNr0VmoPQCTeZLgtwHNi8zMSuZtywJC7aHSmW16QV1h7uT6tulHtZK2PvVYa1WfXPftUZ//iQUrd1aXra9VRGUY9ojr+O3q6PVkw8+8cALcJCkFxVh8y/3pKbHudCqvuz0rF/++UyUWX02QBeWH4UuqeBlTqpW+YMF10GOcSOR8Td49vYVBNewi11PDl0pUGyIrlaiWI8n12WdL/3AZiquSPH9JzWor0mNVidRVVYZ/vq3D0oF5CZgDHAIsJuCQUGgnAXn4BnB6sicTRlC565Jw5N/davDtagOpytSz9gZoYjU++53H06WxIdeM+QricNaPor8A/EtI9vw3kLeBL6k9HP7yd1tdNo7V+rT8nSp/8RlXLCKclrPkxRScy8Nzm5vbm+/+iG8Kp2+elX8/Slxe/vhw+2n64+ndpeo/P3i7zgeH+7VoudsYmVfpbjOpMfU8vT96x+Fs3ucnJzkx+zkZH0xx+lp6ZRwhn9npw9huVxCPfR3t0ITqcvpZUbr6+rf66yB+tCJdYOzh3Rj52MJXrpCEZuvdDE/ktPhO8qpNjst1JuXLgBMqI+qEdf2vh7VRm9BK7m4fMGHMvTRjhcPQ4RGpdZuMD8pU8r2oKRafTdCG06rVjtukOV+Ze388IC83/6DnaF44mqFrEwVGIqpm3/0JuPM+43egFZ0fPnCD2XceTNd9ILi45jMsMMC+YVwB0H5JNjCZtPhk+gO0n/+j1VfufTR16SEF4cvo0W7+V5y1HwcR6Vjs9kucPQ02iUkD8Py96bnRZxKxpltnU/3n577o8KifR33Ho98QkZ7N0Dpb7YltPHM/Td1pa/miiZuGTAB2uLycW9vtBcVwXf8jmiN3r6M1hcCLyNFbmL8v2Oi9VLb+jJQkEIF+O4K588psr48HNQOiuA7vryqHR4+M8H4sgA7Lc5Qr79DkVX7l9DBAh599PeCxP1LBcSW+8TPPZGfHNFz65EvG1HtXyJkGRgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBh8TvwfGZGAXwvsY8sAAAAASUVORK5CYII="
              alt="Contact Us"
            />
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body2" color="textSecondary" paragraph>
                Have questions? Get in touch with our support team for assistance.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="outlined"
                color="primary"
                component={Link}
                to="/contact"
                startIcon={<ContactMailIcon />}
              >
                Contact Us
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
