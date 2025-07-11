'use client';
import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Plus, Trash, Minus } from 'lucide-react';

type Subject = {
  id: number;
  name: string;
  attended: string;
  total: string;
};

export function AttendanceCalculator() {
  const [subjects, setSubjects] = useState<Subject[]>([
    { id: 1, name: '', attended: '', total: '' },
  ]);
  const [nextId, setNextId] = useState(2);

  const addSubject = () => {
    setSubjects([...subjects, { id: nextId, name: '', attended: '', total: '' }]);
    setNextId(nextId + 1);
  };

  const removeSubject = (id: number) => {
    setSubjects(subjects.filter((s) => s.id !== id));
  };

  const handleSubjectChange = (id: number, field: keyof Omit<Subject, 'id'>, value: string) => {
    setSubjects(
      subjects.map((s) => (s.id === id ? { ...s, [field]: value } : s))
    );
  };

  const calculatePercentage = (attended: string, total: string) => {
    const attendedNum = parseInt(attended);
    const totalNum = parseInt(total);
    if (isNaN(attendedNum) || isNaN(totalNum) || totalNum === 0 || attendedNum > totalNum) {
      return 0;
    }
    return (attendedNum / totalNum) * 100;
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Attendance Tracker</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Headers */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-1 text-sm font-medium text-muted-foreground">
            <div className="col-span-4">Subject Name</div>
            <div className="col-span-2">Classes Attended</div>
            <div className="col-span-2">Total Classes</div>
            <div className="col-span-3">Percentage</div>
            <div className="col-span-1 text-right">Action</div>
          </div>
          {/* Subject Rows */}
          <div className="space-y-2">
            {subjects.map((subject, index) => {
              const percentage = calculatePercentage(subject.attended, subject.total);
              return (
                <div key={subject.id} className="grid grid-cols-1 md:grid-cols-12 gap-2 items-center">
                  <div className="md:col-span-4">
                    <Label htmlFor={`name-${subject.id}`} className="sr-only">Subject Name</Label>
                    <Input
                      id={`name-${subject.id}`}
                      type="text"
                      placeholder={`Subject ${index + 1}`}
                      value={subject.name}
                      onChange={(e) => handleSubjectChange(subject.id, 'name', e.target.value)}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor={`attended-${subject.id}`} className="sr-only">Classes Attended</Label>
                    <Input
                      id={`attended-${subject.id}`}
                      type="number"
                      placeholder="e.g., 30"
                      value={subject.attended}
                      onChange={(e) => handleSubjectChange(subject.id, 'attended', e.target.value)}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor={`total-${subject.id}`} className="sr-only">Total Classes</Label>
                    <Input
                      id={`total-${subject.id}`}
                      type="number"
                      placeholder="e.g., 40"
                      value={subject.total}
                      onChange={(e) => handleSubjectChange(subject.id, 'total', e.target.value)}
                    />
                  </div>
                  <div className={`md:col-span-3 font-semibold ${percentage < 75 ? 'text-red-500' : 'text-green-600'}`}>
                    {percentage.toFixed(1)}%
                  </div>
                  <div className="md:col-span-1 flex justify-end">
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
              );
            })}
          </div>

          <Button onClick={addSubject}>
            <Plus className="mr-2 h-4 w-4" /> Add Subject
          </Button>
        </CardContent>
      </Card>
      
      <Card className="bg-amber-50 border-amber-200">
        <CardHeader>
            <CardTitle className="text-amber-900">Attendance Requirements</CardTitle>
        </CardHeader>
        <CardContent className="text-amber-800">
            <ul className="list-disc list-inside space-y-1">
                <li>Minimum 75% attendance is required for all subjects</li>
                <li>Students with less than 75% attendance cannot appear for end semester exams</li>
                <li>Medical certificates can help with attendance shortage in exceptional cases</li>
            </ul>
        </CardContent>
      </Card>

    </div>
  );
}
