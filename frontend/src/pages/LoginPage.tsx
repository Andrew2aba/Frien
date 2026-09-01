import { Box, padding } from '@mui/system'
import React from 'react';
import blackcar from "../assets/blackcar.svg";
import { TextField, Typography } from '@mui/material';
import { Bold } from 'lucide-react';



const LoginPage = () => {

    return (
        <Box sx={{ display: 'flex', gap: 2, height: '100vh', bgcolor: 'primary.main', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{
                bgcolor: '#141314',
                flex: 3,
                borderRadius: 3,
                minHeight: 580,
                maxWidth: 500,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                
             
            }}>
                <img src={blackcar} alt="Bond Marketplace logo" width={80} height={80} style={{ marginTop: 1 }} />
                
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <h1 style={{ color: 'white', fontSize: 40, marginBottom: 20, margin: 20, font: 'bold' }}>Bond Marketplace</h1>
                    <p style={{ color: 'white', fontSize: 20, marginBottom: 20 }}>The best place to buy and sell cars</p>
                    
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
                    <TextField
                        label="Email"
                        variant="outlined"
                        sx={{
                            marginBottom: 2,
                            width: '350px',
                            '& .MuiOutlinedInput-root': {
                                color: 'white',
                                '& fieldset': { borderColor: 'grey.400' },
                                '&:hover fieldset': { borderColor: 'white' },
                                '&.Mui-focused fieldset': { borderColor: 'white' },
                            },
                            '& .MuiInputLabel-root': { color: 'grey.400' },
                            '& .MuiInputLabel-root.Mui-focused': { color: 'white' },
                        }}
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        type="password"
                        sx={{
                            marginBottom: 2,
                            width: '350px',
                            '& .MuiOutlinedInput-root': {
                                color: 'white',
                                '& fieldset': { borderColor: 'grey.400' },
                                '&:hover fieldset': { borderColor: 'white' },
                                '&.Mui-focused fieldset': { borderColor: 'white' },
                            },
                            '& .MuiInputLabel-root': { color: 'grey.400' },
                            '& .MuiInputLabel-root.Mui-focused': { color: 'white' },
                        }}
                    />
                    <Typography variant="subtitle1" sx={{ color: 'white', fontSize: 14, marginBottom: 2, cursor: 'pointer' }}>Forgot Password? </Typography>
                    <button style={{ backgroundColor: 'white', color: 'black', padding: '10px 20px', borderRadius: 5, fontSize: 16, cursor: 'pointer', width: 400 }}>Login</button>
                    <Typography variant="subtitle1" sx={{ color: 'white', fontSize: 14, marginTop: 2 }}>    
                        Dont have an account? <a href="/signup" style={{ color: 'primary.main', textDecoration: 'underline' }}>sign up</a>
                    </Typography>
                    
                </Box>
            </Box>
        </Box>
    )
    
}

export default LoginPage;