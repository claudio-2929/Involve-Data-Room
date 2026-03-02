import { useState, useEffect } from 'react';
import { Trash2, UserPlus, Key, Eye, User as UserIcon } from 'lucide-react';
import { authService } from '../services/authService';
import type { AccessLevel } from '../services/authService';
import { DocHeader, Card, ContentBlock } from '../components/ui/core';

export default function AdminDashboardPage() {
    const [users, setUsers] = useState<any[]>([]);

    // Form State
    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newAccess, setNewAccess] = useState<AccessLevel>('partial');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Load users
    const loadUsers = () => {
        const allUsers = authService.getUsers();
        // Exclude the master admin from regular management if desired, or just show them
        setUsers(allUsers);
    };

    useEffect(() => {
        loadUsers();
    }, []);

    const handleCreateInvestor = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (newUsername.length < 3 || newPassword.length < 6) {
            setError('Username >= 3 chars and Password >= 6 chars required.');
            return;
        }

        try {
            authService.createInvestor(newUsername, newPassword, newAccess);
            setSuccess(`Investor "${newUsername}" created successfully!`);
            // Reset form
            setNewUsername('');
            setNewPassword('');
            setNewAccess('partial');
            loadUsers();
        } catch (err: any) {
            setError(err.message || 'Error creating user');
        }
    };

    const handleDelete = (id: string, username: string) => {
        if (confirm(`Are you sure you want to revoke access for ${username}? This cannot be undone.`)) {
            authService.deleteUser(id);
            loadUsers();
        }
    };

    return (
        <>
            <DocHeader
                breadcrumb="Admin Control Panel"
                title="Investor Access Management"
                subtitle="Create, view, and revoke dataroom access credentials for prospective investors."
            />

            <ContentBlock>
                <Card className="mb-10">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 rounded bg-involve-blue/10 flex items-center justify-center text-involve-blue">
                            <UserPlus size={16} />
                        </div>
                        <h2 className="text-xl font-light">Provision New Account</h2>
                    </div>

                    <form onSubmit={handleCreateInvestor} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                        <div>
                            <label className="block text-xs font-mono tracking-widest text-involve-dim uppercase mb-2">Username</label>
                            <input
                                type="text"
                                value={newUsername}
                                onChange={e => setNewUsername(e.target.value)}
                                className="w-full bg-involve-bg2 border border-involve-border focus:border-involve-blue rounded-md px-3 py-2 text-sm text-involve-text outline-none"
                                placeholder="firm_name"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-mono tracking-widest text-involve-dim uppercase mb-2">Temp Password</label>
                            <input
                                type="text"
                                value={newPassword}
                                onChange={e => setNewPassword(e.target.value)}
                                className="w-full bg-involve-bg2 border border-involve-border focus:border-involve-blue rounded-md px-3 py-2 text-sm text-involve-text outline-none"
                                placeholder="Involve123"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-mono tracking-widest text-involve-dim uppercase mb-2">Access Level</label>
                            <select
                                value={newAccess}
                                onChange={(e) => setNewAccess(e.target.value as AccessLevel)}
                                className="w-full bg-involve-bg2 border border-involve-border focus:border-involve-blue rounded-md px-3 py-2 text-sm text-involve-text outline-none appearance-none"
                            >
                                <option value="partial">Partial (Strategy Only)</option>
                                <option value="full">Full (Tech & Financials)</option>
                            </select>
                        </div>
                        <div>
                            <button type="submit" className="w-full bg-involve-blue hover:bg-blue-500 text-white font-medium py-2 rounded-md transition-colors flex justify-center items-center gap-2">
                                <Key size={14} /> Generate
                            </button>
                        </div>
                    </form>

                    {error && <div className="mt-4 text-sm text-involve-red">{error}</div>}
                    {success && <div className="mt-4 text-sm text-involve-green">{success}</div>}
                </Card>

                <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-4 bg-involve-cyan"></div>
                    <h3 className="text-lg font-light tracking-tight">Active Credentials</h3>
                </div>

                <div className="bg-involve-panel border border-involve-border overflow-hidden rounded-lg">
                    <table className="w-full text-left text-sm">
                        <thead>
                            <tr className="bg-involve-bg2 border-b border-involve-border font-mono tracking-widest text-[10px] text-involve-dim uppercase">
                                <th className="px-5 py-3 font-normal">Investor Username</th>
                                <th className="px-5 py-3 font-normal">Role</th>
                                <th className="px-5 py-3 font-normal">Access Level</th>
                                <th className="px-5 py-3 font-normal text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-involve-border">
                            {users.map((user) => (
                                <tr key={user.id} className="hover:bg-involve-bg2/50 transition-colors">
                                    <td className="px-5 py-3 font-medium text-involve-text flex items-center gap-2">
                                        {user.role === 'admin' ? <Eye size={14} className="text-involve-cyan" /> : <UserIcon size={14} className="text-involve-muted" />}
                                        {user.username}
                                    </td>
                                    <td className="px-5 py-3">
                                        <span className={`inline-block px-2 py-0.5 rounded-sm text-[10px] uppercase font-mono tracking-wider ${user.role === 'admin' ? 'bg-involve-cyan-dim text-involve-cyan border border-involve-cyan/20' : 'bg-involve-border text-involve-muted'}`}>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="px-5 py-3">
                                        <span className={`inline-flex items-center gap-1.5 ${user.accessLevel === 'full' ? 'text-involve-green' : 'text-involve-amber'}`}>
                                            <span className={`w-1.5 h-1.5 rounded-full ${user.accessLevel === 'full' ? 'bg-involve-green' : 'bg-involve-amber'}`}></span>
                                            {user.accessLevel === 'full' ? 'Full Stack' : 'Strategy Only'}
                                        </span>
                                    </td>
                                    <td className="px-5 py-3 text-right">
                                        {user.role !== 'admin' && (
                                            <button
                                                onClick={() => handleDelete(user.id, user.username)}
                                                className="text-involve-muted hover:text-involve-red transition-colors p-1"
                                                title="Revoke Access"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {users.length === 1 && ( // only admin
                        <div className="p-8 text-center text-involve-muted font-light text-sm">
                            No investor accounts created yet. Use the form above to provision access.
                        </div>
                    )}
                </div>
            </ContentBlock>
        </>
    );
}
