'use client';
import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';

export function AttendanceCalculator() {
  const [totalClasses, setTotalClasses] = useState('');
  const [attendedClasses, setAttendedClasses] = useState('');
  const [result, setResult] = useState<{ percentage: number; message: string } | null>(null);

  const calculateAttendance = () => {
    const total = parseInt(totalClasses);
    const attended = parseInt(attendedClasses);

    if (isNaN(total) || isNaN(attended) || total <= 0 || attended < 0 || attended > total) {
      setResult(null);
      return;
    }

    const percentage = (attended / total) * 100;
    let message = '';
    const target = 75;

    if (percentage < target) {
      const needed = Math.ceil((target / 100) * total - attended);
      const classesToAttend = Math.ceil((target * total - 100 * attended) / (100-target));
      message = `You need to attend the next ${classesToAttend} class(es) to reach 75%.`;
    } else {
      const canMiss = Math.floor((100 * attended - target * total) / target);
      message = `You can miss the next ${canMiss} class(es) and still maintain 75% attendance.`;
    }
    
    setResult({ percentage, message });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Attendance Calculator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="total-classes">Total Classes Held</Label>
          <Input id="total-classes" type="number" placeholder="e.g., 40" value={totalClasses} onChange={(e) => setTotalClasses(e.target.value)} suppressHydrationWarning />
        </div>
        <div className="space-y-2">
          <Label htmlFor="attended-classes">Classes You Attended</Label>
          <Input id="attended-classes" type="number" placeholder="e.g., 35" value={attendedClasses} onChange={(e) => setAttendedClasses(e.target.value)} suppressHydrationWarning />
        </div>
        <Button onClick={calculateAttendance} className="w-full" suppressHydrationWarning>Calculate</Button>
        {result && (
          <div className={`text-center p-3 rounded-lg mt-4 ${result.percentage >= 75 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            <p className="font-bold text-2xl">{result.percentage.toFixed(2)}%</p>
            <p className="text-sm">{result.message}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
