import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { User, Book, Calendar, Eye, ArrowRight, Clock, CheckCircle } from "lucide-react";

const Dashboard = () => {
  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");

  const studentData = {
    name: "John Doe",
    rollNo: "2025/CS/007",
    email: "john.doe@clg.edu",
    phone: "9876543210",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  };

  const semesterSubjects = {
    "1": [
      "Math 1",
      "BEE (Basic Electrical Engineering)",
      "BEL (Basic Electronics Lab)",
      "Mechanics",
      "English",
      "Chemistry",
      "Physics",
      "C Programming",
      "UHV (Universal Human Values)",
    ],
    "2": ["Math 2", "Data Structures", "Digital Logic", "Engineering Graphics"],
    "3": ["Object Oriented Programming", "Database Systems", "Computer Networks"],
    "4": ["Software Engineering", "Operating Systems", "Web Development"],
    "5": ["Machine Learning", "Artificial Intelligence", "Mobile Development"],
    "6": ["Cyber Security", "Cloud Computing", "IoT Systems"],
    "7": ["Project Management", "Entrepreneurship", "Advanced Algorithms"],
    "8": ["Final Project", "Industrial Training", "Seminar"],
  };

  const recentAttendance = [
    { subject: "Math 1", date: "2024-01-15", status: "Present", time: "09:30 AM" },
    { subject: "C Programming", date: "2024-01-14", status: "Present", time: "11:00 AM" },
    { subject: "Physics", date: "2024-01-13", status: "Absent", time: "02:00 PM" },
    { subject: "Chemistry", date: "2024-01-12", status: "Present", time: "10:15 AM" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Student Dashboard</h1>
            <p className="text-muted-foreground">Manage your attendance and academic records</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Student Profile Card */}
            <div className="lg:col-span-1">
              <Card className="card-surveillance p-6">
                <div className="text-center space-y-4">
                  <div className="relative inline-block">
                    <div className="w-32 h-32 rounded-lg border-4 border-accent/30 overflow-hidden mx-auto bg-accent/10">
                      <img
                        src={studentData.photo}
                        alt="Student Photo"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <Eye className="w-4 h-4 text-background" />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">{studentData.name}</h3>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Roll No:</span>
                        <span className="font-medium text-accent">{studentData.rollNo}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Email:</span>
                        <span className="font-medium">{studentData.email}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Phone:</span>
                        <span className="font-medium">{studentData.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Quick Stats */}
              <Card className="card-surveillance p-6 mt-6">
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <Calendar className="w-5 h-5 text-accent mr-2" />
                  Quick Stats
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Overall Attendance</span>
                    <span className="font-bold text-accent">89.5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Classes This Week</span>
                    <span className="font-bold text-foreground">24</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Present Today</span>
                    <span className="font-bold text-accent">5/6</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Course Selection */}
              <Card className="card-surveillance p-6">
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                  <Book className="w-5 h-5 text-accent mr-2" />
                  Course & Subject Selection
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Select Semester</label>
                    <Select value={selectedSemester} onValueChange={setSelectedSemester}>
                      <SelectTrigger className="bg-input border-border/50">
                        <SelectValue placeholder="Choose semester (1-8)" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover border-border/50">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                          <SelectItem key={sem} value={sem.toString()}>
                            Semester {sem}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Select Subject</label>
                    <Select 
                      value={selectedSubject} 
                      onValueChange={setSelectedSubject}
                      disabled={!selectedSemester}
                    >
                      <SelectTrigger className="bg-input border-border/50">
                        <SelectValue placeholder="Choose subject" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover border-border/50">
                        {selectedSemester &&
                          semesterSubjects[selectedSemester as keyof typeof semesterSubjects]?.map((subject) => (
                            <SelectItem key={subject} value={subject}>
                              {subject}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {selectedSemester && selectedSubject && (
                  <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Selected Course</p>
                        <p className="font-medium text-foreground">
                          Semester {selectedSemester} - {selectedSubject}
                        </p>
                      </div>
                      <Button variant="surveillance" className="group">
                        Start Attendance
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                )}
              </Card>

              {/* Recent Attendance */}
              <Card className="card-surveillance p-6">
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                  <Clock className="w-5 h-5 text-accent mr-2" />
                  Recent Attendance
                </h3>
                
                <div className="space-y-3">
                  {recentAttendance.map((record, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        {record.status === "Present" ? (
                          <CheckCircle className="w-5 h-5 text-accent" />
                        ) : (
                          <div className="w-5 h-5 rounded-full border-2 border-destructive"></div>
                        )}
                        <div>
                          <p className="font-medium text-foreground">{record.subject}</p>
                          <p className="text-sm text-muted-foreground">{record.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`text-sm font-medium ${
                          record.status === "Present" ? "text-accent" : "text-destructive"
                        }`}>
                          {record.status}
                        </p>
                        <p className="text-xs text-muted-foreground">{record.time}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <Button variant="outline" className="border-accent/50 hover:border-accent text-accent">
                    View All Attendance Records
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;