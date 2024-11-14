// src/JobListings/JobListingsPage.js
import React from 'react';
import { Container, Grid, Paper, Typography, Button, Box, Chip, Stack } from '@mui/material';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'; 

const jobPosts = [
  {
    id: 1,
    title: 'Full Stack Developer',
    description: 'Join our dynamic team to work on cutting-edge technologies. Develop and maintain sophisticated web applications for our diverse client base.',
    skills: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
    salary: '$80,000 - $100,000 per year',
    lastUpdated: 'Last updated 2 days ago',
    applyLink: 'https://example.com/apply/full-stack-developer',
  },
  {
    id: 2,
    title: 'Digital Marketing Specialist',
    description: 'Elevate our digital marketing strategies to promote our innovative products. Proficiency in SEO, SEM, and social media marketing is highly valued.',
    skills: ['SEO', 'Google Analytics', 'Content Marketing'],
    salary: '$60,000 - $75,000 per year',
    lastUpdated: 'Last updated 1 day ago',
    applyLink: 'https://example.com/apply/digital-marketing-specialist',
  },
  {
    id: 3,
    title: 'UX/UI Designer',
    description: 'Shape engaging user experiences and create visually captivating designs. Work alongside cross-functional teams to turn ideas into reality.',
    skills: ['Figma', 'Sketch', 'Wireframing', 'Prototyping'],
    salary: '$70,000 - $90,000 per year',
    lastUpdated: 'Last updated 4 hours ago',
    applyLink: 'https://example.com/apply/ux-ui-designer',
  },
  {
    id: 4,
    title: 'Data Scientist',
    description: 'Leverage advanced analytics and machine learning to uncover insights from vast data sets. Proficiency with Python and R is a must.',
    skills: ['Python', 'R', 'Machine Learning', 'Data Visualization'],
    salary: '$100,000 - $120,000 per year',
    lastUpdated: 'Last updated 3 days ago',
    applyLink: 'https://example.com/apply/data-scientist',
  },
  {
    id: 5,
    title: 'Customer Support Representative',
    description: 'Deliver unparalleled customer service and support. Exceptional communication skills and a knack for solving problems are key.',
    skills: ['Communication', 'CRM Tools', 'Problem Solving'],
    salary: '$40,000 - $50,000 per year',
    lastUpdated: 'Last updated 6 hours ago',
    applyLink: 'https://example.com/apply/customer-support-representative',
  },
  {
    id: 6,
    title: 'Project Manager',
    description: 'Guide and coordinate project teams to deliver results. Strong leadership and organizational skills are required.',
    skills: ['Leadership', 'Agile', 'Scrum', 'Project Planning'],
    salary: '$90,000 - $110,000 per year',
    lastUpdated: 'Last updated 2 days ago',
    applyLink: 'https://example.com/apply/project-manager',
  }
];

const JobListingsPage = () => {
  return (
    <Container component="main" maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
        Job Listings
      </Typography>

      <Grid container spacing={3}>
        {jobPosts.map((job) => (
          <Grid item xs={12} sm={6} md={4} key={job.id}>
            <Paper 
              elevation={6} 
              sx={{
                padding: 3,
                borderRadius: 2,
                transition: 'transform 0.3s ease-in-out',
                '&:hover': { transform: 'scale(1.05)', boxShadow: 12 }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                <WorkOutlineIcon sx={{ color: '#1976d2', marginRight: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                  {job.title}
                </Typography>
              </Box>
              <Typography variant="body2" color="textSecondary" paragraph>
                {job.description}
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#555', marginTop: 1 }}>
                Salary: {job.salary}
              </Typography>
              <Stack direction="row" spacing={1} sx={{ marginTop: 1 }}>
                {job.skills.map((skill, index) => (
                  <Chip key={index} label={skill} color="primary" variant="outlined" size="small" />
                ))}
              </Stack>
              <Typography variant="caption" color="textSecondary" display="block" sx={{ marginTop: 2 }}>
                {job.lastUpdated}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                href={job.applyLink}
                target="_blank"
                fullWidth
                sx={{
                  marginTop: 2,
                  fontWeight: 'bold',
                  padding: '10px 0',
                  '&:hover': { backgroundColor: '#115293' },
                }}
              >
                Apply Now
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default JobListingsPage;
