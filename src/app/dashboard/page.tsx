
'use client';

import { GpaCalculator } from "@/components/GpaCalculator";
import { AttendanceCalculator } from "@/components/AttendanceCalculator";
import { CreditCalculator } from "@/components/CreditCalculator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, CalendarCheck, Sigma } from "lucide-react";

export default function DashboardPage() {
    return (
        <div className="max-w-5xl mx-auto space-y-8">
             <div className="text-center">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary font-headline">Academic Tools</h1>
                <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Calculate your GPA, track attendance, and manage your academic progress with our comprehensive tools.</p>
            </div>
            
            <Tabs defaultValue="gpa" className="w-full">
                <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 max-w-md mx-auto h-auto sm:h-10">
                    <TabsTrigger value="gpa" className="py-2 sm:py-1.5">
                        <Calculator className="mr-2 h-4 w-4" />
                        GPA Calculator
                    </TabsTrigger>
                    <TabsTrigger value="attendance" className="py-2 sm:py-1.5">
                        <CalendarCheck className="mr-2 h-4 w-4" />
                        Attendance Tracker
                    </TabsTrigger>
                    <TabsTrigger value="credits" className="py-2 sm:py-1.5">
                        <Sigma className="mr-2 h-4 w-4" />
                        Credit Calculator
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="gpa" className="mt-6">
                    <GpaCalculator />
                </TabsContent>
                <TabsContent value="attendance" className="mt-6">
                    <AttendanceCalculator />
                </TabsContent>
                <TabsContent value="credits" className="mt-6">
                    <CreditCalculator />
                </TabsContent>
            </Tabs>
        </div>
    )
}
