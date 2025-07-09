import { GpaCalculator } from "@/components/GpaCalculator";
import { AttendanceCalculator } from "@/components/AttendanceCalculator";
import { CreditCalculator } from "@/components/CreditCalculator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CalendarCheck, ListTodo, Milestone } from "lucide-react";

const importantDates = [
    { date: "Sep 9 - 14", event: "Cycle Test 1" },
    { date: "Oct 21 - 26", event: "Mid Semester Exams" },
    { date: "Nov 18 - 23", event: "Cycle Test 2" },
    { date: "Dec 16 - 28", event: "End Semester Exams" },
]

export default function DashboardPage() {
    return (
        <div className="space-y-8">
             <div className="text-center">
                <h1 className="text-4xl font-bold text-primary">Student Dashboard</h1>
                <p className="text-muted-foreground mt-2">Your one-stop place for quick calculations and important dates.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Milestone /> Semester Timeline</CardTitle>
                            <CardDescription>Key milestones for the current semester.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-between text-sm text-muted-foreground relative">
                                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2"></div>
                                <div className="absolute top-1/2 left-0 w-3/4 h-0.5 bg-primary -translate-y-1/2"></div>
                                <div className="flex flex-col items-center relative bg-background px-1">
                                    <div className="w-3 h-3 bg-primary rounded-full border-2 border-background"></div>
                                    <p className="mt-2 font-semibold">Start</p>
                                </div>
                                <div className="flex flex-col items-center relative bg-background px-1">
                                    <div className="w-3 h-3 bg-primary rounded-full border-2 border-background"></div>
                                    <p className="mt-2 font-semibold">CT-1</p>
                                </div>
                                <div className="flex flex-col items-center relative bg-background px-1">
                                    <div className="w-3 h-3 bg-primary rounded-full border-2 border-background"></div>
                                    <p className="mt-2 font-semibold">Mid Sem</p>
                                </div>
                                <div className="flex flex-col items-center relative bg-background px-1">
                                    <div className="w-3 h-3 bg-primary rounded-full border-2 border-background"></div>
                                    <p className="mt-2 font-semibold">CT-2</p>
                                </div>
                                <div className="flex flex-col items-center relative bg-background px-1">
                                    <div className="w-3 h-3 bg-border rounded-full border-2 border-background"></div>
                                    <p className="mt-2">End Sem</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <GpaCalculator />
                </div>

                <div className="space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><CalendarCheck /> Important Dates</CardTitle>
                        </CardHeader>
                        <CardContent>
                           <ul className="space-y-3">
                            {importantDates.map((item, index) => (
                                <li key={index} className="flex justify-between items-center text-sm">
                                    <span className="font-medium text-foreground">{item.event}</span>
                                    <span className="text-muted-foreground">{item.date}</span>
                                </li>
                            ))}
                           </ul>
                        </CardContent>
                    </Card>
                    <AttendanceCalculator />
                    <CreditCalculator />
                </div>
            </div>
        </div>
    )
}
