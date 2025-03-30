'use client';

import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Copy, Trash2, Plus, ExternalLink } from 'lucide-react';
import { LoadingSpinner } from "@/components/LoadingSpinner";

interface Channel {
    id: number;
    name: string;
    code: string;
    description: string;
    created_at: string;
    order_count?: number;
    total_amount?: number;
}

interface Order {
    id: number;
    stripe_session_id: string;
    stripe_payment_intent_id: string;
    channel_id: number;
    customer_email: string;
    amount: number;
    currency: string;
    status: string;
    created_at: string;
}

export default function ChannelManager() {
    const [channels, setChannels] = useState<Channel[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
    const [selectedChannel, setSelectedChannel] = useState<Channel | null>(null);
    const [channelOrders, setChannelOrders] = useState<Order[]>([]);
    const [showOrders, setShowOrders] = useState(false);

    // 新渠道表单状态
    const [newChannel, setNewChannel] = useState({
        name: '',
        code: '',
        description: ''
    });

    // 加载渠道数据
    useEffect(() => {
        fetchChannels();
    }, []);

    const fetchChannels = async () => {
        try {
            setLoading(true);
            const response = await fetch('/api/channels');
            if (!response.ok) {
                throw new Error('Failed to fetch channels');
            }
            const data = await response.json();
            setChannels(data.channels);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred');
        } finally {
            setLoading(false);
        }
    };

    const fetchChannelOrders = async (channelId: number) => {
        try {
            setLoading(true);
            const response = await fetch(`/api/channels/${channelId}/orders`);
            if (!response.ok) {
                throw new Error('Failed to fetch channel orders');
            }
            const data = await response.json();
            setChannelOrders(data.orders);
            setShowOrders(true);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred');
        } finally {
            setLoading(false);
        }
    };

    const handleCreateChannel = async () => {
        try {
            setLoading(true);
            const response = await fetch('/api/channels', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newChannel),
            });

            if (!response.ok) {
                throw new Error('Failed to create channel');
            }

            // 重置表单并刷新渠道列表
            setNewChannel({ name: '', code: '', description: '' });
            setIsCreateDialogOpen(false);
            fetchChannels();
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred');
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteChannel = async (channelId: number) => {
        try {
            setLoading(true);
            const response = await fetch(`/api/channels/${channelId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete channel');
            }

            fetchChannels();
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred');
        } finally {
            setLoading(false);
        }
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        // 可以添加一个提示，表示已复制
    };

    const generateCheckoutUrl = (channelCode: string) => {
        const baseUrl = window.location.origin;
        return `${baseUrl}/checkout?channel=${channelCode}`;
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">渠道管理</h2>
                <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
                    <DialogTrigger asChild>
                        <Button>
                            <Plus className="mr-2 h-4 w-4" /> 创建渠道
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>创建新渠道</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">渠道名称</Label>
                                <Input
                                    id="name"
                                    value={newChannel.name}
                                    onChange={(e) => setNewChannel({ ...newChannel, name: e.target.value })}
                                    placeholder="例如：官网、微信公众号"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="code">渠道代码</Label>
                                <Input
                                    id="code"
                                    value={newChannel.code}
                                    onChange={(e) => setNewChannel({ ...newChannel, code: e.target.value })}
                                    placeholder="例如：website、wechat"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="description">渠道描述</Label>
                                <Textarea
                                    id="description"
                                    value={newChannel.description}
                                    onChange={(e) => setNewChannel({ ...newChannel, description: e.target.value })}
                                    placeholder="渠道的详细描述"
                                />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>取消</Button>
                            <Button onClick={handleCreateChannel}>创建</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>

            {loading && <div className="flex justify-center p-8"><LoadingSpinner /></div>}

            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    {error}
                </div>
            )}

            {!loading && !error && (!channels || channels.length === 0) && (
                <div className="text-center p-8 bg-gray-50 rounded-lg">
                    <p className="text-gray-500">暂无渠道数据，请创建新渠道</p>
                </div>
            )}

            {!showOrders ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {channels?.map((channel) => (
                        <Card key={channel.id} className="p-6 hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-lg font-semibold">{channel.name}</h3>
                                    <p className="text-sm text-gray-500">代码: {channel.code}</p>
                                </div>
                                <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        <Button variant="ghost" size="icon">
                                            <Trash2 className="h-4 w-4 text-red-500" />
                                        </Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>确认删除</AlertDialogTitle>
                                            <AlertDialogDescription>
                                                确定要删除渠道 &ldquo;{channel.name}&rdquo; 吗？此操作不可撤销。
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>取消</AlertDialogCancel>
                                            <AlertDialogAction onClick={() => handleDeleteChannel(channel.id)} className="bg-red-500 hover:bg-red-600">
                                                删除
                                            </AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </div>

                            <p className="text-sm mb-4">{channel.description || "无描述"}</p>

                            <div className="bg-gray-50 p-3 rounded-md mb-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-xs text-gray-500">支付推广链接:</span>
                                    <Button variant="ghost" size="icon" onClick={() => copyToClipboard(generateCheckoutUrl(channel.code))}>
                                        <Copy className="h-3 w-3" />
                                    </Button>
                                </div>
                                <p className="text-xs text-gray-700 truncate">{generateCheckoutUrl(channel.code)}</p>
                            </div>

                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-sm">订单数: {channel.order_count || 0}</p>
                                    <p className="text-sm">总金额: ¥{channel.total_amount || 0}</p>
                                </div>
                                <Button variant="outline" size="sm" onClick={() => {
                                    setSelectedChannel(channel);
                                    fetchChannelOrders(channel.id);
                                }}>
                                    查看订单
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            ) : (
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold">{selectedChannel?.name} 渠道的订单</h3>
                        <Button variant="outline" onClick={() => setShowOrders(false)}>返回渠道列表</Button>
                    </div>

                    {channelOrders.length === 0 ? (
                        <div className="text-center p-8 bg-gray-50 rounded-lg">
                            <p className="text-gray-500">该渠道暂无订单数据</p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">订单ID</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">客户邮箱</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">金额</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">创建时间</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {channelOrders.map((order) => (
                                        <tr key={order.id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">{order.id}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">{order.customer_email}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">¥{order.amount / 100}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${order.status === 'complete' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                                    {order.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">{new Date(order.created_at).toLocaleString()}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                <Button variant="ghost" size="sm" asChild>
                                                    <a href={`https://dashboard.stripe.com/payments/${order.stripe_payment_intent_id}`} target="_blank" rel="noopener noreferrer">
                                                        <ExternalLink className="h-3 w-3 mr-1" /> Stripe
                                                    </a>
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}