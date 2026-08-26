import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import bondIcon from "../assets/bond-icon.svg";


const pages = ['Browse', 'Sell'];
const drawerWidth = 0;

export default function TopNavBar() {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleCloseNavMenu = () => {
        setMobileOpen(false);
    };

    return (
    <AppBar
        position="sticky"
        sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            backgroundColor: '#1E1E1E',
        }}
    >
        <Toolbar sx={{ alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <img src={bondIcon} alt="Bond Marketplace logo" style={{ height: '1.5rem', width: 'auto' }} />
                <Typography variant="h6" component="span" sx={{ color: 'white', fontWeight: 'bold', lineHeight: 1 }}>
                    Bond Marketplace
                </Typography>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'right' }}>
                {pages.map((page) => (
                    <Button
                        key={page}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        {page}
                    </Button>
                ))}
            </Box>

            <Button
                size="medium"
                href="/login"
                variant="contained"
                sx={{
                    borderRadius: '10px', // Adjust border radius for button shape
                    outlineColor: 'white', // Outline color
                    fontSize: '1rem', // Adjust font size
                    fontWeight: 'bold', // Adjust font weight
                    textDecorationColor: 'black', // Underline color
                    color: 'white', // Text color
                    pl: 2, // Adjust padding for horizontal positioning
                    pr: 2, // Adjust padding for right spacing
                }}
            >
                Sign in
            </Button>
        </Toolbar>
    </AppBar>
    );
}