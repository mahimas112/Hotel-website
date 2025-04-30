import React from 'react'
import { Box, Typography, Container, Link } from '@mui/material';
// import { color } from 'framer-motion';
import vcs from "../assets/images/vcs.png"
import Logo from "../assets/images/logo.png"


const Footer2 = () => {
    return (
        <>
        <Box 
        component="footer"
        sx={{
        width: '100%',
        padding: '1rem',
        backgroundColor: '#1e2222',
        color:"#fff",
        textAlign: 'center',
        bottom: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent:"space-between"
        }}
    >

        <Container>
            <img src={vcs} alt="" />
        </Container>

        <Container>
            <Typography variant="h5">
                Our Services
            </Typography>
            <Box
            sx={{
            display: 'flex',
            flexDirection: 'column', // Use 'row' for horizontal alignment
            gap: 2, // Space between links
            alignItems: 'center', // Center items horizontally (for column direction)
            justifyContent: 'center', // Center items vertically (for column direction)
            padding: 2,
            }}
            >
                <Link sx={{color:"#fff",underline:"hover"}}>Application Development</Link>
                <Link sx={{color:"#fff",underline:"hover"}}>IT Consulting</Link>
                <Link sx={{color:"#fff",underline:"hover"}}>Mobile App Development</Link>
                <Link sx={{color:"#fff",underline:"hover"}}>Software Development</Link>
                <Link sx={{color:"#fff",underline:"hover"}}>Domain Hosting</Link>
                <Link sx={{color:"#fff",underline:"hover"}}>Full Stack Development</Link>
            </Box>
        </Container>

        <Container>
            <Typography variant="h5">
                Useful Link
            </Typography>
            <Box
            sx={{
            display: 'flex',
            flexDirection: 'column', // Use 'row' for horizontal alignment
            gap: 2, // Space between links
            alignItems: 'center', // Center items horizontally (for column direction)
            justifyContent: 'center', // Center items vertically (for column direction)
            padding: 2,
            }}
            >
                <Link sx={{color:"#fff",underline:"hover"}}>About Us</Link>
                <Link sx={{color:"#fff",underline:"hover"}}>Services</Link>
                <Link sx={{color:"#fff",underline:"hover"}}>Blog</Link>
                <Link sx={{color:"#fff",underline:"hover"}}>Contact Us</Link>
            </Box>
        </Container>

        <Container>
            <Typography variant="h5">
                Quick Menu
            </Typography>
            <Box
            sx={{
            display: 'flex',
            flexDirection: 'column', // Use 'row' for horizontal alignment
            gap: 2, // Space between links
            alignItems: 'center', // Center items horizontally (for column direction)
            justifyContent: 'center', // Center items vertically (for column direction)
            padding: 2,
            }}
            >
                <Link sx={{color:"#fff",underline:"hover"}}>Get Enquiry</Link>
            </Box>
        </Container>
    </Box>

    <Box 
        component="footer"
        sx={{
        width: '100%',
        padding: '1rem',
        backgroundColor: 'Black',
        color:"#fff",
        textAlign: 'center',
        bottom: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent:"space-between"
        }}
    >
        <Container sx={{width:"150px",display: 'flex',}}>
            <img src={Logo} alt="" />
            <Typography variant='p' sx={{fontSize:"bold"}}>
                <p>Venture</p>
                <p>Consultancy</p>
                <p>Services</p>
            </Typography>
        </Container>

        <Container sx={{width:"150px",}}>
            <Typography variant='p' sx={{fontSize:"bold"}}>
                <p>©2024 TATA Consultancy Services Limited</p>
            </Typography>
        </Container>

    </Box>
        </>
    )
}

export default Footer2;