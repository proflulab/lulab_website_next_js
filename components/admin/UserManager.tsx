'use client';

import React from 'react';
// import React, { useState } from 'react';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Input } from "@/components/ui/input";
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
// // import { Textarea } from "@/components/ui/textarea";
// import { Search, UserPlus, Mail, Edit, Trash2 } from 'lucide-react';

// interface User {
//     id: string;
//     name: string;
//     email: string;
//     role: string;
//     status: string;
//     created_at: string;
//     projects?: string[];
// }

export default function UserManager() {
    // const [users, setUsers] = useState<User[]>([
    //     // Sample data - in a real app, this would come from an API
    //     { id: '1', name: 'John Doe', email: 'john@example.com', role: 'student', status: 'active', created_at: '2023-01-15', projects: ['Web Development', 'Mobile App'] },
    //     { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'student', status: 'active', created_at: '2023-02-20', projects: ['Data Science'] },
    //     { id: '3', name: 'Robert Johnson', email: 'robert@example.com', role: 'instructor', status: 'active', created_at: '2022-11-05' },
    //     { id: '4', name: 'Emily Davis', email: 'emily@example.com', role: 'student', status: 'inactive', created_at: '2023-03-10', projects: ['Game Development'] },
    //     { id: '5', name: 'Michael Wilson', email: 'michael@example.com', role: 'admin', status: 'active', created_at: '2022-10-01' },
    // ]);

    // const [searchTerm, setSearchTerm] = useState('');
    // const [showUserForm, setShowUserForm] = useState(false);
    // const [editingUser, setEditingUser] = useState<User | null>(null);
    // const [formData, setFormData] = useState<Partial<User>>({
    //     name: '',
    //     email: '',
    //     role: 'student',
    //     status: 'active',
    // });

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    //     const { name, value } = e.target;
    //     setFormData(prev => ({
    //         ...prev,
    //         [name]: value
    //     }));
    // };

    // const handleSubmit = () => {
    //     if (editingUser) {
    //         // Update existing user
    //         setUsers(prev => prev.map(user =>
    //             user.id === editingUser.id ? { ...user, ...formData } : user
    //         ));
    //     } else {
    //         // Add new user
    //         const newUser: User = {
    //             id: Date.now().toString(),
    //             name: formData.name || '',
    //             email: formData.email || '',
    //             role: formData.role || 'student',
    //             status: formData.status || 'active',
    //             created_at: new Date().toISOString().split('T')[0],
    //             projects: [],
    //         };
    //         setUsers(prev => [...prev, newUser]);
    //     }
    //     setShowUserForm(false);
    //     resetForm();
    // };

    // const handleEdit = (user: User) => {
    //     setEditingUser(user);
    //     setFormData({
    //         name: user.name,
    //         email: user.email,
    //         role: user.role,
    //         status: user.status,
    //     });
    //     setShowUserForm(true);
    // };

    // const handleDelete = (userId: string) => {
    //     if (confirm('Are you sure you want to delete this user?')) {
    //         setUsers(prev => prev.filter(user => user.id !== userId));
    //     }
    // };

    // const resetForm = () => {
    //     setEditingUser(null);
    //     setFormData({
    //         name: '',
    //         email: '',
    //         role: 'student',
    //         status: 'active',
    //     });
    // };

    // const filteredUsers = users.filter(user =>
    //     user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //     user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //     user.role.toLowerCase().includes(searchTerm.toLowerCase())
    // );

    return (
        <div style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h2>待开发</h2>
            </div>
        </div>
        // <div className="space-y-6">
        //     <div className="flex justify-between items-center">
        //         <Button onClick={() => setShowUserForm(true)}>
        //             <UserPlus className="h-4 w-4 mr-2" />
        //             Add User
        //         </Button>
        //     </div>

        //     <div className="flex items-center space-x-2 mb-4">
        //         <div className="relative flex-1">
        //             <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        //             <Input
        //                 placeholder="Search users..."
        //                 className="pl-8"
        //                 value={searchTerm}
        //                 onChange={(e) => setSearchTerm(e.target.value)}
        //             />
        //         </div>
        //     </div>

        //     <Card>
        //         <CardHeader>
        //             <CardTitle>Users</CardTitle>
        //             <CardDescription>Manage bootcamp users and their access</CardDescription>
        //         </CardHeader>
        //         <CardContent>
        //             <div className="overflow-x-auto">
        //                 <table className="w-full">
        //                     <thead>
        //                         <tr className="border-b">
        //                             <th className="text-left py-3 px-4 font-medium">Name</th>
        //                             <th className="text-left py-3 px-4 font-medium">Email</th>
        //                             <th className="text-left py-3 px-4 font-medium">Role</th>
        //                             <th className="text-left py-3 px-4 font-medium">Status</th>
        //                             <th className="text-left py-3 px-4 font-medium">Projects</th>
        //                             <th className="text-right py-3 px-4 font-medium">Actions</th>
        //                         </tr>
        //                     </thead>
        //                     <tbody>
        //                         {filteredUsers.map((user) => (
        //                             <tr key={user.id} className="border-b hover:bg-muted/50">
        //                                 <td className="py-3 px-4">{user.name}</td>
        //                                 <td className="py-3 px-4">
        //                                     <div className="flex items-center">
        //                                         <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
        //                                         {user.email}
        //                                     </div>
        //                                 </td>
        //                                 <td className="py-3 px-4">
        //                                     <Badge variant={user.role === 'admin' ? 'default' :
        //                                         user.role === 'instructor' ? 'secondary' : 'outline'}>
        //                                         {user.role}
        //                                     </Badge>
        //                                 </td>
        //                                 <td className="py-3 px-4">
        //                                     <Badge variant={user.status === 'active' ? 'success' : 'destructive'}>
        //                                         {user.status}
        //                                     </Badge>
        //                                 </td>
        //                                 <td className="py-3 px-4">
        //                                     <div className="flex flex-wrap gap-1">
        //                                         {user.projects?.map((project, index) => (
        //                                             <Badge key={index} variant="outline" className="text-xs">
        //                                                 {project}
        //                                             </Badge>
        //                                         ))}
        //                                     </div>
        //                                 </td>
        //                                 <td className="py-3 px-4 text-right">
        //                                     <div className="flex justify-end space-x-2">
        //                                         <Button
        //                                             variant="ghost"
        //                                             size="sm"
        //                                             onClick={() => handleEdit(user)}
        //                                         >
        //                                             <Edit className="h-4 w-4" />
        //                                         </Button>
        //                                         <Button
        //                                             variant="ghost"
        //                                             size="sm"
        //                                             onClick={() => handleDelete(user.id)}
        //                                         >
        //                                             <Trash2 className="h-4 w-4 text-destructive" />
        //                                         </Button>
        //                                     </div>
        //                                 </td>
        //                             </tr>
        //                         ))}
        //                     </tbody>
        //                 </table>
        //             </div>
        //         </CardContent>
        //     </Card>

        //     {/* User Form Dialog */}
        //     <Dialog open={showUserForm} onOpenChange={(open) => !open && resetForm()}>
        //         <DialogContent>
        //             <DialogHeader>
        //                 <DialogTitle>{editingUser ? 'Edit User' : 'Add New User'}</DialogTitle>
        //             </DialogHeader>
        //             <div className="space-y-4 py-4">
        //                 <div className="space-y-2">
        //                     <label className="text-sm font-medium">Name</label>
        //                     <Input
        //                         name="name"
        //                         value={formData.name}
        //                         onChange={handleChange}
        //                         required
        //                     />
        //                 </div>
        //                 <div className="space-y-2">
        //                     <label className="text-sm font-medium">Email</label>
        //                     <Input
        //                         name="email"
        //                         type="email"
        //                         value={formData.email}
        //                         onChange={handleChange}
        //                         required
        //                     />
        //                 </div>
        //                 <div className="grid grid-cols-2 gap-4">
        //                     <div className="space-y-2">
        //                         <label className="text-sm font-medium">Role</label>
        //                         <select
        //                             name="role"
        //                             value={formData.role}
        //                             onChange={handleChange}
        //                             className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        //                         >
        //                             <option value="student">Student</option>
        //                             <option value="instructor">Instructor</option>
        //                             <option value="admin">Admin</option>
        //                         </select>
        //                     </div>
        //                     <div className="space-y-2">
        //                         <label className="text-sm font-medium">Status</label>
        //                         <select
        //                             name="status"
        //                             value={formData.status}
        //                             onChange={handleChange}
        //                             className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        //                         >
        //                             <option value="active">Active</option>
        //                             <option value="inactive">Inactive</option>
        //                         </select>
        //                     </div>
        //                 </div>
        //             </div>
        //             <DialogFooter>
        //                 <Button variant="outline" onClick={() => setShowUserForm(false)}>Cancel</Button>
        //                 <Button onClick={handleSubmit}>{editingUser ? 'Update User' : 'Add User'}</Button>
        //             </DialogFooter>
        //         </DialogContent>
        //     </Dialog>
        // </div>
    );
}