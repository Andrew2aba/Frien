import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:5000";

export interface SignUpPayload {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface AuthResponse {
    token: string;
    user: {
        id: string;
        firstName: string;
        lastName: string;
        email: string;
    };
}

export async function signUp(payload: SignUpPayload): Promise<AuthResponse> {
    const { data } = await axios.post<AuthResponse>(
        `${API_BASE_URL}/api/auth/signup`,
        payload
    );
    return data;
}
