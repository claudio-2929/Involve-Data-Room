import React, { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '../services/authService';
import type { User } from '../services/authService';

interface AuthContextType {
    user: User | null;
    login: (user: User, token: string) => void;
    logout: () => void;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        authService.init();

        // Check for stored session
        const storedUser = localStorage.getItem('involve_auth_user');
        const storedToken = localStorage.getItem('involve_auth_token');

        if (storedUser && storedToken) {
            setUser(JSON.parse(storedUser));
        }

        setIsLoading(false);
    }, []);

    const login = (userData: User, token: string) => {
        setUser(userData);
        localStorage.setItem('involve_auth_user', JSON.stringify(userData));
        localStorage.setItem('involve_auth_token', token);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('involve_auth_user');
        localStorage.removeItem('involve_auth_token');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
