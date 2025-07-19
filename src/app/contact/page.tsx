
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, CheckCircle, GraduationCap, Linkedin, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function CheckIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
    )
}

export default function ContactPage() {
    return (
        <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-2xl rounded-2xl">
                <div className="relative h-48">
                    <Image
                        src="https://firebasestudio-hosting.web.app/images/contact-banner.png"
                        alt="Your network is your net worth. Build it with care."
                        fill
                        className="object-cover"
                        data-ai-hint="dark street light"
                    />
                </div>

                <div className="relative px-6 -mt-16">
                     <Avatar className="h-32 w-32 border-4 border-background bg-background shadow-lg">
                        <AvatarImage src="https://firebasestudio-hosting.web.app/images/nithin-marthala-profile.png" alt="Nithin Marthala" />
                        <AvatarFallback>NM</AvatarFallback>
                    </Avatar>
                </div>
                
                <CardContent className="pt-4 p-6 space-y-6">
                    <div>
                        <div className="flex items-center gap-2">
                            <h1 className="text-3xl font-bold">Nithin Marthala</h1>
                            <CheckIcon />
                            <span className="text-sm text-muted-foreground">(He/Him)</span>
                        </div>
                        <p className="text-muted-foreground mt-1">Chennai, Tamil Nadu, India</p>
                    </div>

                    <p className="text-base text-foreground/90 leading-relaxed">
                        Computer Science Engineer with Expertise in Cyber Security | Passionate about Enhancing Digital Safety Tech Innovator & Founder of Crackit | Student at SRM University | python | c++ | Power BI | frontend developer
                    </p>
                    
                    <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-3 text-muted-foreground">
                            <Briefcase className="h-5 w-5 text-primary" />
                            <p>Founder at <span className="font-semibold text-foreground">CRACK It</span></p>
                        </div>
                         <div className="flex items-center gap-3 text-muted-foreground">
                            <GraduationCap className="h-5 w-5 text-primary" />
                            <p>Student at <span className="font-semibold text-foreground">SRM University</span></p>
                        </div>
                    </div>

                    <div className="border-t pt-6">
                         <Button asChild className="w-full sm:w-auto" size="lg">
                            <Link href="https://www.linkedin.com/in/nithin-marthala/" target="_blank" rel="noopener noreferrer">
                                <Linkedin className="mr-2 h-5 w-5" />
                                Message me on LinkedIn
                            </Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
