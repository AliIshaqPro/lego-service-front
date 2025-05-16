
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Calendar, CheckCircle, Clock, MessageCircle, Settings, PlusCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { toast } from "sonner";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [userName, setUserName] = useState("John");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleConsultation = () => {
    toast.success("Consultation scheduled! Check your email for confirmation.");
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-muted/30">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h1 className="text-3xl font-bold mb-2">Welcome back, {userName}!</h1>
            <p className="text-muted-foreground mb-8">
              Track your projects, schedule consultations, and manage your services.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ScrollReveal>
                <Tabs defaultValue="projects">
                  <TabsList className="grid grid-cols-3 mb-8">
                    <TabsTrigger value="projects">My Projects</TabsTrigger>
                    <TabsTrigger value="quotes">Quotes</TabsTrigger>
                    <TabsTrigger value="messages">Messages</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="projects">
                    <div className="space-y-6">
                      <Card>
                        <CardHeader className="p-6 pb-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle>E-commerce Website Redesign</CardTitle>
                              <p className="text-sm text-muted-foreground mt-1">Start date: March 15, 2025</p>
                            </div>
                            <Badge className="bg-amber-100 text-amber-900 hover:bg-amber-200 dark:bg-amber-700/30 dark:text-amber-500">In Progress</Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="p-6">
                          <div className="mb-4">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium">Project Progress</span>
                              <span className="text-sm font-medium">65%</span>
                            </div>
                            <Progress value={65} className="h-2" />
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="flex items-center gap-2 text-sm">
                              <Clock className="w-4 h-4 text-muted-foreground" />
                              <span className="text-muted-foreground">Due: April 30, 2025</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <MessageCircle className="w-4 h-4 text-muted-foreground" />
                              <span className="text-muted-foreground">3 Unread messages</span>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            <Link to="/projects/1">
                              <Button variant="outline" size="sm">View Details</Button>
                            </Link>
                            <Button variant="outline" size="sm">Contact Manager</Button>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader className="p-6 pb-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle>SEO Optimization Campaign</CardTitle>
                              <p className="text-sm text-muted-foreground mt-1">Start date: February 10, 2025</p>
                            </div>
                            <Badge className="bg-green-100 text-green-900 hover:bg-green-200 dark:bg-green-700/30 dark:text-green-500">Completed</Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="p-6">
                          <div className="mb-4">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium">Project Progress</span>
                              <span className="text-sm font-medium">100%</span>
                            </div>
                            <Progress value={100} className="h-2" />
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="flex items-center gap-2 text-sm">
                              <Clock className="w-4 h-4 text-muted-foreground" />
                              <span className="text-muted-foreground">Completed: March 5, 2025</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-muted-foreground">Final report delivered</span>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            <Link to="/projects/2">
                              <Button variant="outline" size="sm">View Report</Button>
                            </Link>
                            <Button variant="outline" size="sm">Order Follow-up</Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="quotes">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-4">Your Recent Quotes</h3>
                        <div className="space-y-6">
                          <div className="border-b pb-4">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h4 className="font-medium">Web Development + SEO Package</h4>
                                <p className="text-sm text-muted-foreground">Created on March 20, 2025</p>
                              </div>
                              <Badge>Pending</Badge>
                            </div>
                            <div className="text-lg font-bold mb-2">$3,499</div>
                            <div className="flex gap-2">
                              <Button size="sm">Accept Quote</Button>
                              <Button variant="outline" size="sm">Modify</Button>
                            </div>
                          </div>
                          
                          <div className="border-b pb-4">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h4 className="font-medium">Logo Design + Brand Guidelines</h4>
                                <p className="text-sm text-muted-foreground">Created on March 15, 2025</p>
                              </div>
                              <Badge variant="outline">Expired</Badge>
                            </div>
                            <div className="text-lg font-bold mb-2">$1,299</div>
                            <div className="flex gap-2">
                              <Button size="sm">Renew Quote</Button>
                              <Button variant="outline" size="sm">View Details</Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="messages">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-4">Recent Messages</h3>
                        <div className="space-y-4">
                          <div className="border-b pb-4">
                            <div className="flex items-start gap-3 mb-2">
                              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                                AM
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <h4 className="font-medium">Alex Miller</h4>
                                  <Badge variant="secondary" className="text-xs">Project Manager</Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">3 hours ago</p>
                              </div>
                            </div>
                            <p className="text-sm mb-3">
                              Hi John, I've uploaded the latest mockups for your e-commerce project. 
                              Could you review them and provide feedback? Thanks!
                            </p>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">Reply</Button>
                              <Button size="sm" variant="ghost">View Files</Button>
                            </div>
                          </div>
                          
                          <div className="border-b pb-4">
                            <div className="flex items-start gap-3 mb-2">
                              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                                SJ
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <h4 className="font-medium">Sarah Johnson</h4>
                                  <Badge variant="secondary" className="text-xs">SEO Specialist</Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">Yesterday</p>
                              </div>
                            </div>
                            <p className="text-sm mb-3">
                              Your SEO campaign results are in! We've seen a 45% increase in 
                              organic traffic over the past month. Let's schedule a call to discuss.
                            </p>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">Reply</Button>
                              <Button size="sm" variant="ghost">Schedule Call</Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </ScrollReveal>
            </div>
            
            <div>
              <div className="space-y-6">
                <ScrollReveal delay={2}>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Schedule a Consultation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Book a call with our team to discuss your project or get expert advice.
                      </p>
                      <Button onClick={handleConsultation} className="w-full gap-2">
                        <Calendar className="w-4 h-4" />
                        Book Consultation
                      </Button>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                <ScrollReveal delay={3}>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <Button variant="outline" className="w-full justify-start">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Contact Support
                        </Button>
                        <Link to="/builder">
                          <Button variant="outline" className="w-full justify-start">
                            <PlusCircle className="w-4 h-4 mr-2" />
                            Create New Package
                          </Button>
                        </Link>
                        <Button variant="outline" className="w-full justify-start">
                          <Settings className="w-4 h-4 mr-2" />
                          Account Settings
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
                
                <ScrollReveal delay={4}>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Recommended Services</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="border-b pb-3">
                          <h4 className="font-medium mb-1">Content Marketing</h4>
                          <p className="text-xs text-muted-foreground mb-2">
                            Boost your SEO results with strategic content marketing.
                          </p>
                          <Link to="/services">
                            <Button size="sm" variant="secondary" className="w-full">
                              Learn More
                            </Button>
                          </Link>
                        </div>
                        <div className="border-b pb-3">
                          <h4 className="font-medium mb-1">Social Media Management</h4>
                          <p className="text-xs text-muted-foreground mb-2">
                            Extend your reach with professional social media management.
                          </p>
                          <Link to="/services">
                            <Button size="sm" variant="secondary" className="w-full">
                              Learn More
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
