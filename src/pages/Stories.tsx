import { useState } from "react";
import { Star, Filter, MessageSquare, Send } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const Stories = () => {
  const [filter, setFilter] = useState("all");

  const stories = [
    {
      id: 1,
      category: "improved-attendance",
      title: "From 60% to 98% Attendance",
      content: "Since implementing Mark My Face, my attendance has dramatically improved. No more forgetting to sign in or dealing with long queues. The system is so convenient!",
      rating: 5,
      semester: "6th Semester CS",
      anonymous: true
    },
    {
      id: 2,
      category: "ease-of-use",
      title: "Seamless Experience",
      content: "The facial recognition is incredibly fast and accurate. I love how I can just walk into class and my attendance is automatically marked. It's like magic!",
      rating: 5,
      semester: "4th Semester EE",
      anonymous: true
    },
    {
      id: 3,
      category: "time-saving",
      title: "More Time for Learning",
      content: "No more wasting 10-15 minutes every class for attendance. Our professor can start teaching immediately, and we get more value from each session.",
      rating: 4,
      semester: "2nd Semester ME",
      anonymous: false,
      name: "Sarah K."
    },
    {
      id: 4,
      category: "improved-attendance",
      title: "Never Miss Again",
      content: "The system helped me realize how often I was accidentally missing classes. Now I'm more conscious about my attendance and my grades have improved!",
      rating: 5,
      semester: "5th Semester IT",
      anonymous: true
    }
  ];

  const filteredStories = filter === "all" ? stories : stories.filter(story => story.category === filter);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="hero-surveillance py-24 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-surveillance mb-6">
              Student Stories
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real experiences from students using Mark My Face attendance system
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 px-4 border-b border-border/50">
          <div className="container mx-auto">
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <Label htmlFor="story-filter">Filter stories by topic:</Label>
              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Stories</SelectItem>
                  <SelectItem value="improved-attendance">Improved Attendance</SelectItem>
                  <SelectItem value="ease-of-use">Ease of Use</SelectItem>
                  <SelectItem value="time-saving">Time Saving</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Stories Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {filteredStories.map((story) => (
                <Card key={story.id} className="card-surveillance">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{story.title}</CardTitle>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < story.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <CardDescription>
                      {story.anonymous ? "Anonymous Student" : story.name} • {story.semester}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      "{story.content}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Share Your Story Section */}
        <section className="py-16 px-4 bg-secondary/20">
          <div className="container mx-auto max-w-2xl">
            <div className="text-center mb-8">
              <MessageSquare className="h-12 w-12 text-accent mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Share Your Story</h2>
              <p className="text-muted-foreground">
                Help other students by sharing your experience with Mark My Face
              </p>
            </div>

            <Card className="card-surveillance">
              <CardContent className="space-y-6 pt-6">
                <div className="space-y-2">
                  <Label htmlFor="story-title">Story Title</Label>
                  <Input
                    id="story-title"
                    placeholder="Give your story a title..."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="story-content">Your Story</Label>
                  <Textarea
                    id="story-content"
                    placeholder="Share your experience with Mark My Face..."
                    rows={6}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="story-category">Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="improved-attendance">Improved Attendance</SelectItem>
                      <SelectItem value="ease-of-use">Ease of Use</SelectItem>
                      <SelectItem value="time-saving">Time Saving</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="anonymous" />
                  <Label htmlFor="anonymous">Submit anonymously</Label>
                </div>

                <Button className="btn-surveillance w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Share Your Story
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Stories;