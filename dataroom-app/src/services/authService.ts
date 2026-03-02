export type AccessLevel = 'full' | 'partial';
export type UserRole = 'admin' | 'investor';

export interface User {
    id: string;
    username: string;
    role: UserRole;
    accessLevel: AccessLevel;
}

export interface AuthSession {
    user: User;
    token: string;
}

const USERS_STORAGE_KEY = 'involve_dataroom_users';

// Initialize default admin if not exists
const initializeDB = () => {
    const storedUsers = localStorage.getItem(USERS_STORAGE_KEY);
    let users = [];

    if (storedUsers) {
        try {
            users = JSON.parse(storedUsers);
        } catch (e) {
            users = [];
        }
    }

    // Force seed admin if missing
    const hasAdmin = users.some((u: any) => u.username === 'admin');
    if (!hasAdmin) {
        users.push({
            id: '1',
            username: 'admin',
            password: 'Involve2026!',
            role: 'admin',
            accessLevel: 'full'
        });
        localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
    }
};

export const authService = {
    init: () => {
        initializeDB();
    },

    getUsers: () => {
        return JSON.parse(localStorage.getItem(USERS_STORAGE_KEY) || '[]');
    },

    saveUsers: (users: any[]) => {
        localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
    },

    login: async (username: string, password: string): Promise<AuthSession> => {
        // Simulate network delay for realism
        await new Promise(resolve => setTimeout(resolve, 600));

        const users = authService.getUsers();
        const user = users.find((u: any) => u.username === username && u.password === password);

        if (!user) {
            throw new Error('Invalid credentials');
        }

        // Clone without password
        const safeUser: User = {
            id: user.id,
            username: user.username,
            role: user.role,
            accessLevel: user.accessLevel
        };

        // Return fake token
        return {
            user: safeUser,
            token: `mock_token_${user.id}_${Date.now()}`
        };
    },

    createInvestor: (username: string, password: string, accessLevel: AccessLevel) => {
        const users = authService.getUsers();

        if (users.some((u: any) => u.username === username)) {
            throw new Error('Username already exists');
        }

        const newUser = {
            id: Math.random().toString(36).substr(2, 9),
            username,
            password,
            role: 'investor',
            accessLevel
        };

        users.push(newUser);
        authService.saveUsers(users);
        return newUser;
    },

    deleteUser: (id: string) => {
        let users = authService.getUsers();
        users = users.filter((u: any) => u.id !== id);
        authService.saveUsers(users);
    }
};
