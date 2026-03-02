import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import type { AccessLevel } from '../../services/authService';

interface ProtectedRouteProps {
    children: ReactNode;
    allowedRoles?: ('admin' | 'investor')[];
    requiredAccess?: AccessLevel;
}

export default function ProtectedRoute({
    children,
    allowedRoles,
    requiredAccess
}: ProtectedRouteProps) {
    const { user, isLoading } = useAuth();
    const location = useLocation();
    const [isRenderReady, setIsRenderReady] = useState(false);

    useEffect(() => {
        // A small delay to avoid flashing loading screens
        if (!isLoading) {
            setIsRenderReady(true);
        }
    }, [isLoading]);

    if (isLoading || !isRenderReady) {
        return (
            <div className="min-h-screen bg-involve-bg flex items-center justify-center text-involve-text">
                <div className="w-10 h-10 border-2 border-involve-blue border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    // 1. Check if logged in at all
    if (!user) {
        // Redirect to login page and save the intended location
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // 2. Check Roles (e.g., stopping an investor from hitting /admin)
    if (allowedRoles && !allowedRoles.includes(user.role)) {
        return <Navigate to="/" replace />;
    }

    // 3. Check Access Levels (e.g., stopping a 'partial' investor from seeing full pages)
    if (requiredAccess === 'full' && user.accessLevel !== 'full') {
        // A partial user tried to access a full route -> redirect back to safe start
        return <Navigate to="/dataroom/00_Executive_Overview/01_Investment_Thesis" replace />;
    }

    return <>{children}</>;
}
