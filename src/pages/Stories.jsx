import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";


import { useState } from "react";
import { Star, Filter, MessageSquare, Send } from "lucide-react";
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
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-surveillance">Student Stories</h1>

        {/* Filter Section */}
        <section className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-accent" />
            <span className="font-medium">Filter by:</span>
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="improved-attendance">Improved Attendance</SelectItem>
                <SelectItem value="ease-of-use">Ease of Use</SelectItem>
                <SelectItem value="time-saving">Time Saving</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </section>

        {/* Stories List */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredStories.map(story => (
            <Card key={story.id} className="card-surveillance border-accent/30">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-accent" />
                  <span>{story.title}</span>
                </CardTitle>
                <CardDescription>{story.semester}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">{story.content}</p>
                <div className="flex items-center space-x-1 mb-2">
                  {Array.from({ length: story.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <div className="text-xs text-muted-foreground">
                  {story.anonymous ? "Anonymous" : story.name}
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Share Your Story */}
        <section className="max-w-2xl mx-auto">
          <Card className="card-surveillance">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageSquare className="h-5 w-5 text-accent" />
                <span>Share Your Story</span>
              </CardTitle>
              <CardDescription>
                Tell us how Mark My Face has impacted your academic journey.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="story-title">Title</Label>
                  <Input id="story-title" name="title" placeholder="Story title" />
                </div>
                <div>
                  <Label htmlFor="story-content">Your Story</Label>
                  <Textarea id="story-content" name="content" placeholder="Share your experience..." rows={4} />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="anonymous" name="anonymous" />
                  <Label htmlFor="anonymous">Submit anonymously</Label>
                </div>
                <Button type="submit" className="inline-flex items-center space-x-2">
                  <Send className="h-4 w-4" />
                  <span>Submit</span>
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Stories;
