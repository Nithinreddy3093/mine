'use client';
import { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Plus, Trash, Calculator } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const gradePoints: { [key: string]: number } = { 'O': 10, 'A+': 9, 'A': 8, 'B+': 7, 'B': 6, 'C': 5, 'RA': 0, 'F': 0 };

type Subject = {
  id: number;
  name: string;
  credits: string;
  grade: string;
};

export function GpaCalculator() {
  const [subjects, setSubjects] = useState<Subject[]>([{ id: 1, name: '', credits: '', grade: '' }]);
  const [gpa, setGpa] = useState<number | null>(null);
  const nextId = useRef(2);

  const addSubject = () => {
    setSubjects([...subjects, { id: nextId.current++, name: '', credits: '', grade: '' }]);
  };

  const removeSubject = (id: number) => {
    setSubjects(subjects.filter((s) => s.id !== id));
    if (subjects.length === 1) {
      setGpa(null);
    }
  };

  const handleSubjectChange = (id: number, field: 'name' | 'credits' | 'grade', value: string) => {
    setSubjects(subjects.map((s) => (s.id === id ? { ...s, [field]: value } : s)));
  };

  useEffect(() => {
    calculateGpa();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subjects]);

  const calculateGpa = () => {
    let totalCredits = 0;
    let totalGradePoints = 0;
    let validSubjects = 0;
    
    for (const subject of subjects) {
      const credits = parseFloat(subject.credits);
      const grade = subject.grade;
      if (!isNaN(credits) && credits > 0 && grade in gradePoints) {
        validSubjects++;
        totalCredits += credits;
        totalGradePoints += credits * gradePoints[grade];
      }
    }
    
    if (totalCredits === 0) {
      setGpa(null);
      return;
    }
    
    setGpa(+(totalGradePoints / totalCredits).toFixed(2));
  };

  const gradingScale = [
      { grade: "O", points: 10 },
      { grade: "A+", points: 9 },
      { grade: "A", points: 8 },
      { grade: "B+", points: 7 },
      { grade: "B", points: 6 },
      { grade: "C", points: 5 },
      { grade: "RA", points: 0 },
  ]

  return (
    <div className="space-y-6">
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <Button onClick={addSubject} suppressHydrationWarning>
                    <Plus className="mr-2 h-4 w-4" /> Add Subject
                </Button>
                <div className="text-muted-foreground">
                    Total Subjects: {subjects.length}
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                {subjects.map((subject, index) => (
                <div key={subject.id} className="grid grid-cols-1 md:grid-cols-12 gap-2 items-end animate-in fade-in-50">
                    <div className="md:col-span-6 space-y-1">
                        <Label htmlFor={`name-${subject.id}`} className={index !== 0 ? 'sr-only' : ''}>Subject Name</Label>
                        <Input
                            id={`name-${subject.id}`}
                            type="text"
                            placeholder={`Subject ${index + 1}`}
                            value={subject.name}
                            onChange={(e) => handleSubjectChange(subject.id, 'name', e.target.value)}
                            suppressHydrationWarning
                        />
                    </div>
                    <div className="md:col-span-2 space-y-1">
                        <Label htmlFor={`credits-${subject.id}`} className={index !== 0 ? 'sr-only' : ''}>Credits</Label>
                        <Input
                            id={`credits-${subject.id}`}
                            type="number"
                            placeholder="e.g., 4"
                            value={subject.credits}
                            onChange={(e) => handleSubjectChange(subject.id, 'credits', e.target.value)}
                            suppressHydrationWarning
                        />
                    </div>
                    <div className="md:col-span-3 space-y-1">
                        <Label htmlFor={`grade-${subject.id}`} className={index !== 0 ? 'sr-only' : ''}>Grade</Label>
                        <Select onValueChange={(value) => handleSubjectChange(subject.id, 'grade', value)} value={subject.grade || undefined}>
                            <SelectTrigger id={`grade-${subject.id}`} suppressHydrationWarning>
                                <SelectValue placeholder="Select" />
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
                        suppressHydrationWarning
                    >
                    <Trash className="h-4 w-4" />
                    </Button>
                </div>
                ))}
                {gpa !== null && (
                <div className="text-center bg-primary/10 p-4 rounded-lg mt-4 animate-in fade-in-50">
                    <p className="text-lg">Your Calculated GPA is:</p>
                    <p className="text-4xl font-bold text-primary">{gpa.toFixed(2)}</p>
                </div>
                )}
            </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
                <CardHeader>
                    <CardTitle>SRM Grading Scale</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-2 text-sm">
                        {gradingScale.map(item => (
                            <div key={item.grade} className="flex justify-between">
                                <span className='font-medium'>{item.grade}:</span>
                                <span>{item.points}</span>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
            <Card className="bg-blue-50/50 border-blue-200">
                <CardHeader>
                    <CardTitle>How to Use</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className='list-disc list-inside space-y-2 text-muted-foreground text-sm'>
                        <li>Enter subject name, select grade and credit for each subject</li>
                        <li>GPA is calculated automatically as you input data</li>
                        <li>Use "Add Subject" to add more subjects</li>
                        <li>GPA = &#8721;(Grade Points &times; Credits) &divide; &#8721;(Credits)</li>
                    </ul>
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
