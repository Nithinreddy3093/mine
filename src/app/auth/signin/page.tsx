
'use client';

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import Link from "next/link"
import { useState } from "react";

function GoogleIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
            <path d="M21.999 12c0-1.25-.11-2.45-.32-3.59H12v6.7h5.61c-.24 1.74-1.1 3.25-2.65 4.3v2.8h3.61c2.12-1.95 3.37-4.8 3.37-8.21z"/>
            <path d="M12 22c2.97 0 5.46-1 7.22-2.68l-3.61-2.8c-.98.66-2.23 1.06-3.61 1.06-2.76 0-5.1-1.85-5.93-4.35H2.39v2.88C4.24 19.98 7.89 22 12 22z"/>
            <path d="M6.07 14.31c-.17-.52-.27-1.08-.27-1.65s.1-1.13.27-1.65V8.13H2.39c-.64 1.28-1 2.72-1 4.22s.36 2.94 1 4.22l3.68-2.88z"/>
            <path d="M12 5.25c1.62 0 3.06.56 4.19 1.62l3.2-3.2C17.45 2.1 14.97 1 12 1 7.89 1 4.24 3.02 2.39 5.25l3.68 2.88C7 5.7 9.24 3.85 12 3.85z"/>
        </svg>
    )
}

export default function SignInPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSignIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Signed In!",
        description: "Welcome back! You have been successfully signed in.",
      });
    }, 1500);
  }

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-15rem)]">
        <Card className="w-full max-w-sm">
            <CardHeader className="text-center">
                <CardTitle className="text-2xl">Sign In</CardTitle>
                <CardDescription>
                Enter your credentials to access your account.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <Button variant="outline" className="w-full">
                    <GoogleIcon />
                    Sign in with Google
                </Button>
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">
                        Or continue with
                        </span>
                    </div>
                </div>
                <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required />
                </div>
                <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
                </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
                <Button className="w-full" onClick={handleSignIn} disabled={isLoading}>
                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Sign in
                </Button>
                <div className="text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <Link href="/auth/signup" className="underline">
                        Sign up
                    </Link>
                </div>
            </CardFooter>
        </Card>
    </div>
  )
}
