
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import ScrollReveal from "@/components/ScrollReveal";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login - would connect to authentication service in production
    toast.success("Login successful!");
    window.location.href = "/dashboard";
  };
  
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate registration - would connect to authentication service in production
    toast.success("Account created successfully! Check your email for verification.");
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 1000);
  };
  
  return (
    <div className="pt-28 pb-20 min-h-screen bg-muted/20 flex items-center">
      <div className="container">
        <ScrollReveal>
          <div className="max-w-md mx-auto">
            <Card className="border-none shadow-lg glass-effect">
              <CardHeader className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <CardTitle className="text-2xl">Welcome Back</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="login">
                  <TabsList className="grid grid-cols-2 mb-6">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="register">Register</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="login">
                    <form onSubmit={handleLogin}>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input 
                            id="email" 
                            type="email" 
                            placeholder="email@example.com" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <div className="flex items-center justify-between">
                            <Label htmlFor="password">Password</Label>
                            <Link to="/forgot-password" className="text-xs text-primary hover:underline">
                              Forgot password?
                            </Link>
                          </div>
                          <Input 
                            id="password" 
                            type="password" 
                            placeholder="••••••••" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full">Sign In</Button>
                      </div>
                    </form>
                  </TabsContent>
                  
                  <TabsContent value="register">
                    <form onSubmit={handleRegister}>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="register-name">Full Name</Label>
                          <Input 
                            id="register-name" 
                            type="text" 
                            placeholder="John Doe" 
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="register-email">Email</Label>
                          <Input 
                            id="register-email" 
                            type="email" 
                            placeholder="email@example.com"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="register-password">Password</Label>
                          <Input 
                            id="register-password" 
                            type="password" 
                            placeholder="••••••••" 
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="confirm-password">Confirm Password</Label>
                          <Input 
                            id="confirm-password" 
                            type="password" 
                            placeholder="••••••••" 
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full">Create Account</Button>
                      </div>
                    </form>
                  </TabsContent>
                </Tabs>
                
                <div className="mt-6 text-center text-sm text-muted-foreground">
                  By continuing, you agree to our <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
