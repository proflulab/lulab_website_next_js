'use client';

import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function SettingsPage() {
    return (
        <AdminLayout>
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>General Settings</CardTitle>
                        <CardDescription>Configure general website settings</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Website Name</label>
                                <Input defaultValue="Lu Lab Bootcamp" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Contact Email</label>
                                <Input type="email" defaultValue="contact@lulab.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Description</label>
                                <Textarea
                                    defaultValue="Lu Lab Bootcamp is a comprehensive coding education platform offering project-based learning experiences."
                                    rows={4}
                                />
                            </div>

                            <div className="pt-2">
                                <Button>Save Changes</Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Notification Settings</CardTitle>
                        <CardDescription>Configure email notifications</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <input type="checkbox" id="new-user" className="rounded border-gray-300" defaultChecked />
                                <label htmlFor="new-user" className="text-sm font-medium">New user registration</label>
                            </div>

                            <div className="flex items-center space-x-2">
                                <input type="checkbox" id="new-project" className="rounded border-gray-300" defaultChecked />
                                <label htmlFor="new-project" className="text-sm font-medium">New project enrollment</label>
                            </div>

                            <div className="flex items-center space-x-2">
                                <input type="checkbox" id="system-updates" className="rounded border-gray-300" />
                                <label htmlFor="system-updates" className="text-sm font-medium">System updates</label>
                            </div>

                            <div className="pt-2">
                                <Button>Save Notification Settings</Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AdminLayout>
    );
}