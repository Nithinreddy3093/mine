'use client';
import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Plus, Minus, Sigma } from 'lucide-react';

type Course = {
  id: number;
  name: string;
  credits: string;
};

export function CreditCalculator() {
  const [courses, setCourses] = useState<Course[]>([{ id: 1, name: '', credits: '' }]);
  const [totalCredits, setTotalCredits] = useState<number | null>(null);
  const [nextId, setNextId] = useState(2);

  const addCourse = () => {
    setCourses([...courses, { id: nextId, name: '', credits: '' }]);
    setNextId(nextId + 1);
  };

  const removeCourse = (id: number) => {
    setCourses(courses.filter(c => c.id !== id));
  };

  const handleCourseChange = (id: number, field: 'name' | 'credits', value: string) => {
    setCourses(courses.map(c => (c.id === id ? { ...c, [field]: value } : c)));
  };

  const calculateTotal = () => {
    const total = courses.reduce((sum, item) => sum + (parseFloat(item.credits) || 0), 0);
    setTotalCredits(total);
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Credit Calculator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Headers */}
        <div className="hidden md:grid grid-cols-12 gap-4 px-1 text-sm font-medium text-muted-foreground">
            <div className="col-span-8">Course Name</div>
            <div className="col-span-3">Credits</div>
            <div className="col-span-1 text-right">Action</div>
        </div>
        <div className='space-y-2'>
        {courses.map((course, index) => (
          <div key={course.id} className="grid grid-cols-1 md:grid-cols-12 gap-2 items-center">
            <div className='md:col-span-8'>
                <Label htmlFor={`course-name-${course.id}`} className="sr-only">Course Name</Label>
                <Input
                id={`course-name-${course.id}`}
                type="text"
                placeholder={`Course ${index + 1} Name`}
                value={course.name}
                onChange={(e) => handleCourseChange(course.id, 'name', e.target.value)}
                />
            </div>
            <div className='md:col-span-3'>
                <Label htmlFor={`credit-${course.id}`} className="sr-only">Credit</Label>
                <Input
                id={`credit-${course.id}`}
                type="number"
                placeholder="e.g., 4"
                value={course.credits}
                onChange={(e) => handleCourseChange(course.id, 'credits', e.target.value)}
                />
            </div>
            <div className="md:col-span-1 flex justify-end">
                <Button variant="ghost" size="icon" onClick={() => removeCourse(course.id)} disabled={courses.length === 1}>
                <Minus className="h-4 w-4 text-destructive" />
                </Button>
            </div>
          </div>
        ))}
        </div>
        <div className='flex flex-col sm:flex-row gap-2'>
            <Button variant="outline" onClick={addCourse}>
                <Plus className="mr-2 h-4 w-4" /> Add Course
            </Button>
            <Button onClick={calculateTotal} className='flex-grow'>
                <Sigma className="mr-2 h-4 w-4" /> Calculate Total Credits
            </Button>
        </div>
        {totalCredits !== null && (
          <div className="text-center bg-primary/10 p-4 rounded-lg mt-4">
            <p className="text-lg font-medium">Total Credits:</p>
            <p className="text-3xl font-bold text-primary">{totalCredits}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
