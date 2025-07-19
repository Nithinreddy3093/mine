
'use client';
import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Plus, Minus } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const gradePoints: { [key: string]: number } = { 'O': 10, 'A+': 9, 'A': 8, 'B+': 7, 'B': 6, 'C': 5, 'RA': 0 };
const creditOptions = ['5', '4', '3', '2', '1'];

type Subject = {
  id: number;
  name: string;
  credits: string;
  grade: string;
};

export function GpaCalculator() {
  const [subjects, setSubjects] = useState<Subject[]>(
    [{ id: 1, name: '', credits: '', grade: '' }]
  );
  const [gpa, setGpa] = useState<number | null>(null);
  const [nextId, setNextId] = useState(2);

  const calculateGpa = (currentSubjects: Subject[]) => {
    let totalCredits = 0;
    let totalGradePoints = 0;
    
    for (const subject of currentSubjects) {
      const credits = parseFloat(subject.credits);
      const grade = subject.grade;
      if (!isNaN(credits) && credits > 0 && grade in gradePoints) {
        totalCredits += credits;
        totalGradePoints += credits * gradePoints[grade];
      }
    }
    
    if (totalCredits === 0) {
      setGpa(null);
    } else {
      setGpa(+(totalGradePoints / totalCredits).toFixed(2));
    }
  };

  const addSubject = () => {
    const newSubjects = [...subjects, { id: nextId, name: '', credits: '', grade: '' }];
    setSubjects(newSubjects);
    setNextId(prevId => prevId + 1);
    calculateGpa(newSubjects);
  };

  const removeSubject = (id: number) => {
    const newSubjects = subjects.filter((s) => s.id !== id);
    setSubjects(newSubjects);
    calculateGpa(newSubjects);
    if (newSubjects.length === 0) {
      setGpa(null);
    }
  };

  const handleSubjectChange = (id: number, field: 'name' | 'credits' | 'grade', value: string) => {
    const newSubjects = subjects.map((s) => (s.id === id ? { ...s, [field]: value } : s));
    setSubjects(newSubjects);
    calculateGpa(newSubjects);
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
            <CardHeader>
                <CardTitle>SRM GPA Calculator</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {/* Headers */}
                <div className="hidden md:grid grid-cols-12 gap-4 px-1 text-sm font-medium text-muted-foreground">
                    <div className="col-span-6">Subject Name</div>
                    <div className="col-span-2">Grade</div>
                    <div className="col-span-2">Credit</div>
                    <div className="col-span-2 text-right">Action</div>
                </div>
                {/* Subject Rows */}
                <div className="space-y-4 md:space-y-2">
                    {subjects.map((subject, index) => (
                    <div key={subject.id} className="grid grid-cols-1 md:grid-cols-12 gap-2 items-center p-2 rounded-lg bg-muted/50 animate-in fade-in-50">
                        <div className="md:col-span-6">
                            <Label htmlFor={`name-${subject.id}`} className="md:sr-only">Subject Name</Label>
                            <Input
                                id={`name-${subject.id}`}
                                type="text"
                                placeholder={`Subject Name`}
                                value={subject.name}
                                onChange={(e) => handleSubjectChange(subject.id, 'name', e.target.value)}
                                
                                className="bg-background mt-1 md:mt-0"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <Label htmlFor={`grade-${subject.id}`} className="md:sr-only">Grade</Label>
                            <Select onValueChange={(value) => handleSubjectChange(subject.id, 'grade', value)} value={subject.grade || undefined}>
                                <SelectTrigger id={`grade-${subject.id}`}  className="bg-background mt-1 md:mt-0">
                                    <SelectValue placeholder="Grade" />
                                </SelectTrigger>
                                <SelectContent>
                                    {Object.keys(gradePoints).map(g => <SelectItem key={g} value={g}>{g}</SelectItem>)}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="md:col-span-2">
                            <Label htmlFor={`credits-${subject.id}`} className="md:sr-only">Credits</Label>
                             <Select onValueChange={(value) => handleSubjectChange(subject.id, 'credits', value)} value={subject.credits || undefined}>
                                <SelectTrigger id={`credits-${subject.id}`}  className="bg-background mt-1 md:mt-0">
                                    <SelectValue placeholder="Credit" />
                                </SelectTrigger>
                                <SelectContent>
                                    {creditOptions.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="md:col-span-2 flex justify-end">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => removeSubject(subject.id)}
                                disabled={subjects.length === 1}
                                className="text-destructive hover:bg-destructive/10"
                                
                            >
                                <Minus className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                    ))}
                </div>
                {/* Actions and Total */}
                <div className="flex flex-col sm:flex-row justify-between items-center pt-4 gap-4">
                    <Button onClick={addSubject}  className='w-full sm:w-auto'>
                        <Plus className="mr-2 h-4 w-4" /> Add Subject
                    </Button>
                    <div className="text-muted-foreground font-medium w-full sm:w-auto text-center sm:text-right">
                        Total Subjects: {subjects.length}
                    </div>
                </div>

                {gpa !== null && (
                <div className="text-center bg-primary/10 p-4 rounded-lg mt-4 animate-in fade-in-50">
                    <p className="text-lg">Your Calculated GPA is:</p>
                    <p className="text-4xl font-bold text-primary">{gpa.toFixed(2)}</p>
                </div>
                )}
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>SRM Grading Scale</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-x-4 gap-y-2 text-sm">
                    {gradingScale.map(item => (
                        <div key={item.grade} className="flex justify-between md:justify-start md:gap-4 p-2 bg-muted/50 rounded">
                            <span className='font-medium'>{item.grade}:</span>
                            <span className="text-muted-foreground">{item.points}</span>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    </div>
  );
}
