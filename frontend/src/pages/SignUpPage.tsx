import React, { useState } from "react"
import { useNavigate } from "react-router"
import { Box, ThemeProvider, createTheme, margin } from '@mui/system'
import Typography from "@mui/material/Typography"
import bondIcon2 from "../assets/bond-icon2.svg";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import instance from "../api/Axios"
import { setToken } from "../api/token"

interface SignUpFormState {
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    password: string;
    confirm_password: string;
}

const SignUpPage = () => {
    // Used to redirect the user to /login once their account is created.
    const navigate = useNavigate();

    // Single source of truth for every field's current value. Each TextField
    // is "controlled" by this state instead of managing its own DOM value.
    const [userInfo, setUserInfo] = useState<SignUpFormState>({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        confirm_password: "",
    });

    const { first_name, last_name, username, email, password, confirm_password } = userInfo;
    // Disables the submit button and swaps its label while the request is in flight.
    const [isSubmitting, setIsSubmitting] = useState(false);
    // Holds a message to show the user (validation failure or API error).
    const [error, setError] = useState<string | null>(null);

    // Returns an onChange handler bound to a specific field name, so we don't
    // need a separate handler function per TextField.
    const handleFieldChange =
        (field: keyof SignUpFormState) =>
            (event: React.ChangeEvent<HTMLInputElement>) => {
                setUserInfo((prev) => ({ ...prev, [field]: event.target.value }));
            };

    // Fires on form submit (button click or Enter key, since the button is type="submit").
    const handleCreateAccount = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // stop the browser's default full-page form submit

        setIsSubmitting(true);
        setError(null);

        try {
            const response = await instance.post('users/', {
                first_name,
                last_name,
                username,
                email,
                password,
                confirm_password
            });

            // Store under the same key Axios.ts reads on every request, so the
            // new account is immediately authenticated for subsequent calls.
            setToken(response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);
            navigate('/home');
        }
        catch (error) {
            console.error('Error creating account:', error);
            setError('Failed to create account. Please try again.');
        }
        finally {
            setIsSubmitting(false);
        }
    }

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
                            <NotificationsActiveIcon /> get alerts on new cars
                        </Typography>
                    </Box>
                </Box>
            </Box>
            {/* Rendered as a real <form> so the submit button and Enter key both
            trigger handleCreateAccount, and required/type="email" get native validation. */}
            <Box
                component="form"
                onSubmit={handleCreateAccount}
                sx={{ flex: 1 }}>
                <Box
                    sx={{ display: 'grid', justifyContent: 'left', alignItems: 'center', pl: 9, pt: 10 }}>
                    <Typography variant="h1" sx={{ color: 'black', fontSize: 40, fontWeight: 'bold' }}>
                        Create your account
                    </Typography>
                </Box>

                <Box
                    sx={{ display: 'grid', justifyContent: 'left', alignItems: 'center', pl: 9, pt: 5 }}>

                    {/* Each field below is "controlled": its value comes from state and
                    onChange writes back into that state on every keystroke. */}
                    <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', gap: 5, borderRadius: 2 }}>

                        <TextField label="First name" variant="standard" required fullWidth
                            value={userInfo.first_name} onChange={handleFieldChange('first_name')}
                            sx={{ width: 270, height: 80, borderRadius: 2, borderColor: 'black', borderWidth: 1 }} />
                        <TextField label="Last name" variant="standard" required fullWidth
                            value={userInfo.last_name} onChange={handleFieldChange('last_name')}
                            sx={{ width: 270, height: 80, borderRadius: 2, borderColor: 'black', borderWidth: 1 }} />

                    </Box>

                    <TextField label="Username" variant="standard" required fullWidth
                            value={userInfo.username} onChange={handleFieldChange('username')}
                            sx={{ width: 600, height: 80, borderRadius: 2, borderColor: 'black', borderWidth: 1 }} />

                    <TextField label="Email" variant="standard" type="email" required fullWidth
                        value={userInfo.email} onChange={handleFieldChange('email')}
                        sx={{ width: 600, height: 80, borderRadius: 2, borderColor: 'black', borderWidth: 1 }} />

                    <TextField label="Password" variant="standard" type="password" required fullWidth
                        value={userInfo.password} onChange={handleFieldChange('password')}
                        sx={{ width: 600, height: 80, borderRadius: 2, borderColor: 'black', borderWidth: 1 }} />

                    <TextField label="Comfirm password" variant="standard" type="password" required fullWidth
                        value={userInfo.confirm_password} onChange={handleFieldChange('confirm_password')}
                        sx={{ width: 600, height: 80, borderRadius: 2, borderColor: 'black', borderWidth: 1 }} />

                    {error && (
                        <Typography sx={{ color: 'error.main', mt: 2 }}>
                            {error}
                        </Typography>
                    )}

                </Box>

                <Button type="submit" disabled={isSubmitting} variant="contained" color="primary" sx={{ width: 600, height: 50, borderRadius: 2, mt: 5, ml: 9 }}>
                    {isSubmitting ? "Creating account..." : "Create account"}
                </Button>

                <Typography variant="subtitle1" sx={{ color: 'black', fontSize: 15, justifyContent: 'right', fontWeight: 'light', mt: 5, ml: 32 }}>
                    Already have an account? <a href="/login" style={{ color: 'blue', textDecoration: 'underline' }}>Log in</a>
                </Typography>
            </Box>
        </Box>
    )
}
export default SignUpPage;
