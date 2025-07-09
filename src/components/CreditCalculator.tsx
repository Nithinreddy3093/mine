'use client';
import { useState, useRef } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Plus, Trash, Sigma } from 'lucide-react';

type CreditItem = {
  id: number;
  value: string;
};

export function CreditCalculator() {
  const [credits, setCredits] = useState<CreditItem[]>([{ id: 1, value: '' }]);
  const [totalCredits, setTotalCredits] = useState<number>(0);
  const nextId = useRef(2);

  const addCreditInput = () => {
    setCredits([...credits, { id: nextId.current++, value: '' }]);
  };

  const removeCreditInput = (id: number) => {
    setCredits(credits.filter(c => c.id !== id));
  };

  const handleCreditChange = (id: number, value: string) => {
    setCredits(credits.map(c => (c.id === id ? { ...c, value } : c)));
  };

  const calculateTotal = () => {
    const total = credits.reduce((sum, item) => sum + (parseFloat(item.value) || 0), 0);
    setTotalCredits(total);
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Credit Calculator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className='space-y-2 max-h-48 overflow-y-auto pr-2'>
        {credits.map((credit, index) => (
          <div key={credit.id} className="flex items-center gap-2">
            <Label htmlFor={`credit-${credit.id}`} className="sr-only">Credit {index + 1}</Label>
            <Input
              id={`credit-${credit.id}`}
              type="number"
              placeholder={`Course ${index + 1} Credits`}
              value={credit.value}
              onChange={(e) => handleCreditChange(credit.id, e.target.value)}
              suppressHydrationWarning
            />
            <Button variant="ghost" size="icon" onClick={() => removeCreditInput(credit.id)} disabled={credits.length === 1} suppressHydrationWarning>
              <Trash className="h-4 w-4 text-destructive" />
            </Button>
          </div>
        ))}
        </div>
        <div className='flex gap-2'>
            <Button variant="outline" size="sm" onClick={addCreditInput} suppressHydrationWarning>
                <Plus className="mr-2 h-4 w-4" /> Add Course
            </Button>
            <Button size="sm" onClick={calculateTotal} className='flex-grow' suppressHydrationWarning>
                <Sigma className="mr-2 h-4 w-4" /> Total
            </Button>
        </div>
        {totalCredits > 0 && (
          <div className="text-center bg-blue-100 p-3 rounded-lg mt-4">
            <p className="text-lg">Total Credits:</p>
            <p className="text-3xl font-bold text-blue-800">{totalCredits}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
