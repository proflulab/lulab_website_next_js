'use client';

import React from 'react';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import { Users, FolderKanban, BookOpen, Calendar } from 'lucide-react';

// interface StatCardProps {
//     title: string;
//     value: string | number;
//     description: string;
//     icon: React.ReactNode;
//     trend?: {
//         value: number;
//         label: string;
//     };
// }

// function StatCard({ title, value, description, icon, trend }: StatCardProps) {
//     return (
//         <Card>
//             <CardHeader className="flex flex-row items-center justify-between pb-2">
//                 <CardTitle className="text-sm font-medium">{title}</CardTitle>
//                 <div className="h-8 w-8 rounded-full bg-primary/10 p-1.5 text-primary">{icon}</div>
//             </CardHeader>
//             <CardContent>
//                 <div className="text-2xl font-bold">{value}</div>
//                 <p className="text-xs text-muted-foreground">{description}</p>
//                 {trend && (
//                     <div className={`mt-2 flex items-center text-xs ${trend.value >= 0 ? 'text-green-500' : 'text-red-500'}`}>
//                         {trend.value >= 0 ? '↑' : '↓'} {Math.abs(trend.value)}% {trend.label}
//                     </div>
//                 )}
//             </CardContent>
//         </Card>
//     );
// }

export default function Dashboard() {
    // Sample data - in a real app, this would come from an API
    // const stats = [
    //     {
    //         title: "Total Projects",
    //         value: 12,
    //         description: "Active bootcamp projects",
    //         icon: <FolderKanban className="h-4 w-4" />,
    //         trend: { value: 8, label: "from last month" }
    //     },
    //     {
    //         title: "Active Users",
    //         value: 245,
    //         description: "Registered students",
    //         icon: <Users className="h-4 w-4" />,
    //         trend: { value: 12, label: "from last month" }
    //     },
    //     {
    //         title: "Curriculums",
    //         value: 84,
    //         description: "Total curriculum weeks",
    //         icon: <BookOpen className="h-4 w-4" />,
    //         trend: { value: 4, label: "from last month" }
    //     },
    //     {
    //         title: "Upcoming Sessions",
    //         value: 8,
    //         description: "Scheduled in next 7 days",
    //         icon: <Calendar className="h-4 w-4" />,
    //         trend: { value: -2, label: "from last week" }
    //     }
    // ];

    // // Sample chart data
    // const projectEnrollmentData = [
    //     { name: 'Web Dev', students: 45 },
    //     { name: 'Mobile App', students: 32 },
    //     { name: 'Data Science', students: 28 },
    //     { name: 'AI/ML', students: 38 },
    //     { name: 'Game Dev', students: 22 },
    //     { name: 'DevOps', students: 15 },
    // ];

    return (
        <div style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h2>待开发</h2>
            </div>
        </div>
        // <div className="space-y-6">
        //     <h2 className="text-2xl font-bold">Dashboard</h2>

        //     {/* Stats Overview */}
        //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        //         {stats.map((stat, index) => (
        //             <StatCard key={index} {...stat} />
        //         ))}
        //     </div>

        //     {/* Charts */}
        //     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        //         <Card>
        //             <CardHeader>
        //                 <CardTitle>Project Enrollment</CardTitle>
        //                 <CardDescription>Student distribution across projects</CardDescription>
        //             </CardHeader>
        //             <CardContent>
        //                 <div className="h-80">
        //                     <ResponsiveContainer width="100%" height="100%">
        //                         <BarChart data={projectEnrollmentData}>
        //                             <CartesianGrid strokeDasharray="3 3" />
        //                             <XAxis dataKey="name" />
        //                             <YAxis />
        //                             <Tooltip />
        //                             <Bar dataKey="students" fill="#8884d8" />
        //                         </BarChart>
        //                     </ResponsiveContainer>
        //                 </div>
        //             </CardContent>
        //         </Card>

        //         <Card>
        //             <CardHeader>
        //                 <CardTitle>Recent Activity</CardTitle>
        //                 <CardDescription>Latest actions in the admin panel</CardDescription>
        //             </CardHeader>
        //             <CardContent>
        //                 <div className="space-y-4">
        //                     {/* Sample activity items */}
        //                     <div className="flex items-start space-x-4">
        //                         <div className="rounded-full bg-primary/10 p-2">
        //                             <FolderKanban className="h-4 w-4 text-primary" />
        //                         </div>
        //                         <div>
        //                             <p className="text-sm font-medium">New project created</p>
        //                             <p className="text-xs text-muted-foreground">Web Development Bootcamp</p>
        //                             <p className="text-xs text-muted-foreground">2 hours ago</p>
        //                         </div>
        //                     </div>
        //                     <div className="flex items-start space-x-4">
        //                         <div className="rounded-full bg-primary/10 p-2">
        //                             <Users className="h-4 w-4 text-primary" />
        //                         </div>
        //                         <div>
        //                             <p className="text-sm font-medium">New user registered</p>
        //                             <p className="text-xs text-muted-foreground">John Doe</p>
        //                             <p className="text-xs text-muted-foreground">3 hours ago</p>
        //                         </div>
        //                     </div>
        //                     <div className="flex items-start space-x-4">
        //                         <div className="rounded-full bg-primary/10 p-2">
        //                             <BookOpen className="h-4 w-4 text-primary" />
        //                         </div>
        //                         <div>
        //                             <p className="text-sm font-medium">Curriculum updated</p>
        //                             <p className="text-xs text-muted-foreground">Mobile App Development - Week 3</p>
        //                             <p className="text-xs text-muted-foreground">5 hours ago</p>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </CardContent>
        //         </Card>
        //     </div>
        // </div>
    );
}