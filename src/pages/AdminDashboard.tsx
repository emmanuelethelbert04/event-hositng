import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Check, 
  X, 
  Eye, 
  Calendar, 
  MapPin, 
  Users, 
  DollarSign, 
  Clock,
  AlertCircle,
  CheckCircle,
  User
} from "lucide-react";

const AdminDashboard = () => {
  // Mock data
  const stats = {
    totalEvents: 45,
    pendingEvents: 8,
    totalUsers: 1250,
    totalRevenue: 125000
  };

  const pendingEvents = [
    {
      id: 1,
      title: "AI & Machine Learning Conference",
      host: "Sarah Johnson",
      hostEmail: "sarah@example.com",
      date: "2024-04-15",
      location: "San Francisco, CA",
      type: "paid",
      price: 299,
      category: "Technology",
      description: "A comprehensive conference covering the latest in AI and ML technologies...",
      submittedAt: "2024-03-01"
    },
    {
      id: 2,
      title: "Startup Founders Meetup",
      host: "Mike Chen",
      hostEmail: "mike@example.com",
      date: "2024-04-10",
      location: "Austin, TX",
      type: "free",
      price: 0,
      category: "Business",
      description: "Monthly meetup for startup founders to network and share experiences...",
      submittedAt: "2024-03-02"
    }
  ];

  const approvedEvents = [
    {
      id: 3,
      title: "Digital Marketing Workshop",
      host: "Emma Davis",
      date: "2024-03-25",
      location: "New York, NY",
      type: "paid",
      price: 150,
      attendees: 45,
      revenue: 6750
    },
    {
      id: 4,
      title: "React Developer Meetup",
      host: "Alex Rivera",
      date: "2024-03-28",
      location: "Seattle, WA",
      type: "free",
      price: 0,
      attendees: 80,
      revenue: 0
    }
  ];

  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      joinDate: "2024-01-15",
      eventsHosted: 3,
      status: "active"
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      joinDate: "2024-02-20",
      eventsHosted: 1,
      status: "active"
    }
  ];

  const payments = [
    {
      id: 1,
      eventTitle: "Digital Marketing Workshop",
      amount: 6750,
      date: "2024-03-20",
      status: "completed",
      host: "Emma Davis"
    },
    {
      id: 2,
      eventTitle: "AI Conference",
      amount: 299,
      date: "2024-03-18",
      status: "pending",
      host: "Sarah Johnson"
    }
  ];

  const handleApprove = (eventId: number) => {
    console.log("Approving event:", eventId);
    // Approval logic will be added when backend is connected
  };

  const handleReject = (eventId: number) => {
    console.log("Rejecting event:", eventId);
    // Rejection logic will be added when backend is connected
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge variant="default" className="bg-success">Completed</Badge>;
      case "pending":
        return <Badge variant="secondary">Pending</Badge>;
      case "active":
        return <Badge variant="default" className="bg-success">Active</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Header */}
      <div className="bg-card border-b shadow-soft">
        <div className="container mx-auto px-4 py-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage events, users, and platform settings</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-medium border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Events</p>
                  <p className="text-2xl font-bold text-foreground">{stats.totalEvents}</p>
                </div>
                <Calendar className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Pending Review</p>
                  <p className="text-2xl font-bold text-foreground">{stats.pendingEvents}</p>
                </div>
                <Clock className="w-8 h-8 text-warning" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Users</p>
                  <p className="text-2xl font-bold text-foreground">{stats.totalUsers}</p>
                </div>
                <Users className="w-8 h-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Revenue</p>
                  <p className="text-2xl font-bold text-foreground">${stats.totalRevenue.toLocaleString()}</p>
                </div>
                <DollarSign className="w-8 h-8 text-success" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="pending">
              Pending Events
              {stats.pendingEvents > 0 && (
                <Badge variant="destructive" className="ml-2 px-1.5 py-0.5 text-xs">
                  {stats.pendingEvents}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="approved">Approved Events</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="space-y-6">
            <div className="space-y-4">
              {pendingEvents.map((event) => (
                <Card key={event.id} className="shadow-medium border-0">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold text-foreground">{event.title}</h3>
                            <Badge variant={event.type === "paid" ? "default" : "secondary"}>
                              {event.type === "paid" ? `$${event.price}` : "Free"}
                            </Badge>
                            <Badge variant="outline">{event.category}</Badge>
                          </div>
                          
                          <div className="space-y-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <User className="w-4 h-4" />
                              <span>Hosted by {event.host} ({event.hostEmail})</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(event.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              <span>{event.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              <span>Submitted on {new Date(event.submittedAt).toLocaleDateString()}</span>
                            </div>
                          </div>

                          <p className="text-sm text-foreground mt-3 line-clamp-2">{event.description}</p>
                        </div>

                        <div className="flex flex-row lg:flex-col gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 lg:flex-none"
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                          <Button
                            variant="default"
                            size="sm"
                            onClick={() => handleApprove(event.id)}
                            className="flex-1 lg:flex-none bg-success hover:bg-success/90"
                          >
                            <Check className="w-4 h-4 mr-2" />
                            Approve
                          </Button>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => handleReject(event.id)}
                            className="flex-1 lg:flex-none"
                          >
                            <X className="w-4 h-4 mr-2" />
                            Reject
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="approved" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {approvedEvents.map((event) => (
                <Card key={event.id} className="shadow-medium border-0">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <h3 className="text-lg font-semibold text-foreground">{event.title}</h3>
                        <CheckCircle className="w-5 h-5 text-success" />
                      </div>
                      
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>Hosted by {event.host}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(event.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>{event.attendees} attendees</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4" />
                          <span>Revenue: ${event.revenue.toLocaleString()}</span>
                        </div>
                      </div>

                      <Button variant="outline" size="sm" className="w-full">
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <div className="space-y-4">
              {users.map((user) => (
                <Card key={user.id} className="shadow-medium border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-foreground">{user.name}</h3>
                          <p className="text-sm text-muted-foreground">{user.email}</p>
                          <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                            <span>Joined: {new Date(user.joinDate).toLocaleDateString()}</span>
                            <span>Events: {user.eventsHosted}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {getStatusBadge(user.status)}
                        <Button variant="outline" size="sm">
                          View Profile
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="payments" className="space-y-6">
            <div className="space-y-4">
              {payments.map((payment) => (
                <Card key={payment.id} className="shadow-medium border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{payment.eventTitle}</h3>
                        <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                          <span>Host: {payment.host}</span>
                          <span>Date: {new Date(payment.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="font-semibold text-foreground">${payment.amount.toLocaleString()}</p>
                          {getStatusBadge(payment.status)}
                        </div>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;