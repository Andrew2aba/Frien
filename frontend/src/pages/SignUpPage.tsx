import React from "react"
import { Box, ThemeProvider, createTheme, margin } from '@mui/system'
import { BookCheck } from "lucide-react"
import Typography from "@mui/material/Typography"
import bondIcon2 from "../assets/bond-icon2.svg";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import Input from "@mui/material/Input";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";


const SignUpPage= () => {

    return (
        <Box sx={{ display: 'flex', gap: 2, height: '100vh', bgcolor: 'white' }}>
            <Box
                sx={{ flex: .5, bgcolor: 'primary.main' }}>
                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 1 }}>
                    <img src={bondIcon2} alt="Bond Marketplace logo" width={80} height={80} style={{ marginTop: 61 }} />
                    <Typography variant="h1" sx={{ color: 'white', fontSize: 40, fontWeight: 'bold', paddingTop: 10 }}>
                    Bond marketplace
                    </Typography>
                </Box>
            
                <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 10 }}>
                    <Typography variant="h2"
                        sx={{ color: 'white', fontSize: 30, justifyContent: 'center', fontWeight: 'bold' }}>
                        Find your next car
                    </Typography>
                </Box>


                <Box sx={{ display: '', justifyContent: 'center', paddingTop: 10 }}>
                    <Typography variant="subtitle1"
                        sx={{ color: 'white', justifyContent: 'center', fontSize: 20, ml: 4, mr: 4, fontWeight: 'light' }}>
                        Browse thousands of listings from dealers and private sellers.
                    </Typography>
                </Box>
                
                <Box sx={{ display: 'grid', justifyContent: 'center', paddingTop: 10 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 1, borderRadius: 2 }}>
                        <Typography variant="subtitle1"
                            sx={{ color: 'white', justifyContent: 'center', fontSize: 20, ml: 4, mr: 4 }}>
                            <SearchIcon /> search for your next car
                        </Typography>
                    </Box>

                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 1, borderRadius: 2 }}>
                        <Typography variant="subtitle1"
                            sx={{ color: 'white', justifyContent: 'center', fontSize: 20, ml: 4, mr: 4 }}>
                            <FavoriteOutlinedIcon /> save your favorites
                        </Typography>
                    </Box>

                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 1, borderRadius: 2 }}>
                        <Typography variant="subtitle1"
                            sx={{ color: 'white', justifyContent: 'center', fontSize: 20, ml: 4, mr: 4 }}>
                            <NotificationsActiveIcon/> get alerts on new cars
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{ flex: 1 }}>
                <Box
                    sx={{ display: 'grid', justifyContent: 'left', alignItems: 'center', pl: 9, pt: 10 }}>
                    <Typography variant="h1" sx={{ color: 'black', fontSize: 40, fontWeight: 'bold' }}>
                        Create your account
                    </Typography>
                </Box>

                <Box
                    sx={{ display: 'grid', justifyContent: 'left', alignItems: 'center', pl: 9, pt: 5 }}>
                    
                    <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', gap: 5, borderRadius: 2 }}>
                        
                    
                    <TextField label="First name" variant="standard" fullWidth sx={{ width: 270, height: 80, borderRadius: 2, borderColor: 'black', borderWidth: 1}} />
                    <TextField label="Last name" variant="standard" fullWidth sx={{ width: 270, height: 80, borderRadius: 2, borderColor: 'black', borderWidth: 1 }} />
                    
                        
                    </Box>

                    <TextField label="Email" variant="standard" fullWidth sx={{ width: 600, height: 80, borderRadius: 2, borderColor: 'black', borderWidth: 1 }} />
                    
                    <TextField label="Password" variant="standard" type="password" fullWidth sx={{ width: 600, height: 80, borderRadius: 2, borderColor: 'black', borderWidth: 1 }} />
                    
                    <TextField label="Comfirm password" variant="standard" type="password" fullWidth sx={{ width: 600, height: 80, borderRadius: 2, borderColor: 'black', borderWidth: 1 }} />
                    

                </Box>

                <Button variant="contained" color="primary" sx={{ width: 600, height: 50, borderRadius: 2, mt: 5, ml: 9 }}>
                    Create account
                </Button>

               < Typography variant="subtitle1" sx={{ color: 'black', fontSize: 15, justifyContent: 'right', fontWeight: 'light', mt: 5, ml: 32 }}>

                
                Already have an account? <a href="/login" style={{ color: 'blue', textDecoration: 'underline' }}>Log in</a>
                </Typography>
            </Box>
        </Box>
    )
}

export default SignUpPage;