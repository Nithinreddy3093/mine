
import { GpaCalculator } from "@/components/GpaCalculator";

export default function DashboardPage() {
    return (
        <div className="max-w-4xl mx-auto">
             <div className="text-center mb-8">
                <h1 className="text-4xl font-bold tracking-tight text-primary font-headline">Student Tools</h1>
                <p className="text-muted-foreground mt-2">Your one-stop place for quick academic calculations.</p>
            </div>
            <GpaCalculator />
        </div>
    )
}
