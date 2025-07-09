import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { type Post } from '@/lib/data';
import { Badge } from './ui/badge';

export function BlogCard({ post }: { post: Post }) {
  return (
    <Card className="h-full flex flex-col hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="aspect-video relative w-full">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover"
          data-ai-hint={post.dataAiHint}
        />
      </div>
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <Badge variant="outline">{post.author}</Badge>
        <p className="text-sm text-muted-foreground">{post.date}</p>
      </CardFooter>
    </Card>
  );
}
