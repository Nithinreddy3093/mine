'use client';
import { useState, useRef } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Plus, Trash, Calculator } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const gradePoints: { [key: string]: number } = { 'O': 10, 'A+': 9, 'A': 8, 'B+': 7, 'B': 6, 'C': 5, 'E': 4, 'F': 0 };

type Subject = {
  id: number;
  credits: string;
  grade: string;
};

export function GpaCalculator() {
  const [subjects, setSubjects] = useState<Subject[]>([{ id: 1, credits: '', grade: '' }]);
  const [gpa, setGpa] = useState<number | null>(null);
  const nextId = useRef(2);

  const addSubject = () => {
    setSubjects([...subjects, { id: nextId.current++, credits: '', grade: '' }]);
  };

  const removeSubject = (id: number) => {
    setSubjects(subjects.filter((s) => s.id !== id));
  };

  const handleSubjectChange = (id: number, field: 'credits' | 'grade', value: string) => {
    setSubjects(subjects.map((s) => (s.id === id ? { ...s, [field]: value } : s)));
    setGpa(null);
  };

  const calculateGpa = () => {
    let totalCredits = 0;
    let totalGradePoints = 0;
    
    for (const subject of subjects) {
      const credits = parseFloat(subject.credits);
      const grade = subject.grade;
      if (!isNaN(credits) && credits > 0 && grade in gradePoints) {
        totalCredits += credits;
        totalGradePoints += credits * gradePoints[grade];
      } else {
        setGpa(null); // Invalid input
        return;
      }
    }
    
    if (totalCredits === 0) {
      setGpa(0);
      return;
    }
    
    setGpa(+(totalGradePoints / totalCredits).toFixed(2));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2"><Calculator /> GPA Calculator</CardTitle>
        <CardDescription>Enter your course credits and grades to calculate your semester GPA.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {subjects.map((subject, index) => (
          <div key={subject.id} className="grid grid-cols-1 md:grid-cols-6 gap-2 items-end">
            <div className="md:col-span-2 space-y-1">
                <Label htmlFor={`credits-${subject.id}`}>Credits</Label>
                <Input
                    id={`credits-${subject.id}`}
                    type="number"
                    placeholder="e.g., 4"
                    value={subject.credits}
                    onChange={(e) => handleSubjectChange(subject.id, 'credits', e.target.value)}
                />
            </div>
            <div className="md:col-span-3 space-y-1">
                <Label htmlFor={`grade-${subject.id}`}>Grade</Label>
                <Select onValueChange={(value) => handleSubjectChange(subject.id, 'grade', value)} value={subject.grade || undefined}>
                    <SelectTrigger id={`grade-${subject.id}`}>
                        <SelectValue placeholder="Select Grade" />
                    </SelectTrigger>
                    <SelectContent>
                        {Object.keys(gradePoints).map(g => <SelectItem key={g} value={g}>{g}</SelectItem>)}
                    </SelectContent>
                </Select>
            </div>
            <Button
                variant="ghost"
                size="icon"
                onClick={() => removeSubject(subject.id)}
                disabled={subjects.length === 1}
                className="text-destructive hover:bg-destructive/10"
            >
              <Trash className="h-4 w-4" />
            </Button>
          </div>
        ))}
        <div className='flex gap-2'>
            <Button variant="outline" onClick={addSubject}>
                <Plus className="mr-2 h-4 w-4" /> Add Subject
            </Button>
            <Button onClick={calculateGpa} className="flex-grow bg-accent hover:bg-accent/90">
                Calculate GPA
            </Button>
        </div>
        {gpa !== null && (
          <div className="text-center bg-primary/10 p-4 rounded-lg mt-4">
            <p className="text-lg">Your Calculated GPA is:</p>
            <p className="text-4xl font-bold text-primary">{gpa.toFixed(2)}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
