import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { type Post } from '@/lib/data';
import { Badge } from './ui/badge';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';

export function BlogCard({ post }: { post: Post }) {
  return (
    <Card className="h-full flex flex-col group-hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="aspect-video relative w-full overflow-hidden">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          data-ai-hint={post.dataAiHint}
        />
      </div>
      <CardHeader>
        <div className='flex items-center justify-between text-xs text-muted-foreground'>
           <Badge variant="outline" className='text-primary border-primary/50 bg-primary/10'>{post.category}</Badge>
           <div className='flex items-center gap-1'>
            <Clock className='h-3 w-3' />
            <span>{post.readTime} min read</span>
           </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow space-y-2">
        <CardTitle className="text-xl group-hover:text-primary transition-colors">{post.title}</CardTitle>
        <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between items-center text-sm text-muted-foreground pt-4">
        <div className='flex flex-col'>
            <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
            </div>
             <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
            </div>
        </div>
        <div className="flex items-center gap-1 text-primary font-semibold">
          <span>Read More</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </CardFooter>
    </Card>
  );
}
