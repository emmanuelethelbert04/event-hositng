import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  Filter, 
  Calendar, 
  MapPin, 
  Users, 
  DollarSign, 
  Star,
  Grid3X3,
  List
} from "lucide-react";

const ViewEvents = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [filters, setFilters] = useState({
    category: "",
    location: "",
    priceRange: "",
    dateRange: ""
  });

  // Mock events data
  const events = [
    {
      id: 1,
      title: "AI & Machine Learning Summit 2024",
      description: "Join industry leaders for cutting-edge insights into artificial intelligence and machine learning technologies.",
      date: "2024-04-15",
      time: "09:00 AM",
      location: "San Francisco, CA",
      category: "Technology",
      price: 299,
      rating: 4.8,
      attendees: 250,
      maxCapacity: 300,
      host: "Tech Innovators Inc.",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 2,
      title: "Digital Marketing Masterclass",
      description: "Learn the latest strategies in digital marketing from industry experts and grow your business.",
      date: "2024-04-18",
      time: "02:00 PM",
      location: "New York, NY",
      category: "Marketing",
      price: 149,
      rating: 4.7,
      attendees: 180,
      maxCapacity: 200,
      host: "Marketing Pros",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 3,
      title: "Startup Founders Networking Event",
      description: "Connect with fellow entrepreneurs, share experiences, and build valuable business relationships.",
      date: "2024-04-20",
      time: "06:00 PM",
      location: "Austin, TX",
      category: "Networking",
      price: 0,
      rating: 4.9,
      attendees: 95,
      maxCapacity: 120,
      host: "Startup Community",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 4,
      title: "UX/UI Design Workshop",
      description: "Hands-on workshop covering modern design principles and prototyping techniques.",
      date: "2024-04-22",
      time: "10:00 AM",
      location: "Seattle, WA",
      category: "Design",
      price: 199,
      rating: 4.6,
      attendees: 75,
      maxCapacity: 80,
      host: "Design Academy",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 5,
      title: "Cryptocurrency & Blockchain Conference",
      description: "Explore the future of digital currencies and blockchain technology with leading experts.",
      date: "2024-04-25",
      time: "09:30 AM",
      location: "Miami, FL",
      category: "Technology",
      price: 399,
      rating: 4.5,
      attendees: 320,
      maxCapacity: 400,
      host: "Crypto Experts",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 6,
      title: "Health & Wellness Retreat",
      description: "A rejuvenating weekend focusing on mental health, fitness, and overall wellness.",
      date: "2024-04-27",
      time: "08:00 AM",
      location: "Los Angeles, CA",
      category: "Health",
      price: 249,
      rating: 4.8,
      attendees: 60,
      maxCapacity: 80,
      host: "Wellness Center",
      image: "/placeholder.svg?height=200&width=300"
    }
  ];

  const categories = ["Technology", "Marketing", "Design", "Business", "Networking", "Health", "Education", "Entertainment"];
  const locations = ["San Francisco, CA", "New York, NY", "Austin, TX", "Seattle, WA", "Miami, FL", "Los Angeles, CA"];

  const handleFilterChange = (type: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !filters.category || event.category === filters.category;
    const matchesLocation = !filters.location || event.location === filters.location;
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  const EventCard = ({ event, isListView = false }: { event: any, isListView?: boolean }) => (
    <Card className={`shadow-medium border-0 hover:shadow-large transition-all duration-300 ${isListView ? 'mb-4' : ''}`}>
      <CardContent className={`p-0 ${isListView ? 'flex' : ''}`}>
        <div className={`${isListView ? 'w-48 flex-shrink-0' : 'w-full h-48'} bg-muted`}>
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover rounded-t-lg"
          />
        </div>
        
        <div className="p-6 flex-1">
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{event.category}</Badge>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm text-muted-foreground">{event.rating}</span>
                  </div>
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{event.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{event.description}</p>
              </div>
            </div>
            
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(event.date).toLocaleDateString()} at {event.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>{event.attendees}/{event.maxCapacity} attendees</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-1">
                <DollarSign className="w-4 h-4 text-primary" />
                <span className="font-semibold text-primary">
                  {event.price === 0 ? "Free" : `$${event.price}`}
                </span>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
                <Button variant="default" size="sm">
                  {event.price === 0 ? "Register" : "Buy Ticket"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Header */}
      <div className="bg-card border-b shadow-soft">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground">Discover Amazing Events</h1>
            <p className="text-muted-foreground mt-2">Find and attend events that match your interests</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <Card className="shadow-medium border-0 mb-8">
          <CardContent className="p-6">
            <div className="space-y-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search events by title or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>

              {/* Filters */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Select onValueChange={(value) => handleFilterChange("category", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select onValueChange={(value) => handleFilterChange("location", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Locations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Locations</SelectItem>
                    {locations.map((location) => (
                      <SelectItem key={location} value={location}>{location}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select onValueChange={(value) => handleFilterChange("priceRange", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Prices" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Prices</SelectItem>
                    <SelectItem value="free">Free</SelectItem>
                    <SelectItem value="0-100">$0 - $100</SelectItem>
                    <SelectItem value="100-300">$100 - $300</SelectItem>
                    <SelectItem value="300+">$300+</SelectItem>
                  </SelectContent>
                </Select>

                <Select onValueChange={(value) => handleFilterChange("dateRange", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Dates" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Dates</SelectItem>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="week">This Week</SelectItem>
                    <SelectItem value="month">This Month</SelectItem>
                    <SelectItem value="upcoming">Upcoming</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* View Toggle and Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground">
            Showing {filteredEvents.length} events
          </p>
          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("grid")}
            >
              <Grid3X3 className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("list")}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Events Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} isListView />
            ))}
          </div>
        )}

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No events found matching your criteria.</p>
            <p className="text-muted-foreground">Try adjusting your search or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewEvents;