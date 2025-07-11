import { posts } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, User, Calendar, Clock, Share2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
        <Button variant="outline" asChild>
            <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
            </Link>
        </Button>
        <article className="bg-card p-0 rounded-lg shadow-lg overflow-hidden">
            <div className="relative w-full h-64 md:h-96">
                <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-contain"
                    data-ai-hint={post.dataAiHint}
                />
            </div>

            <div className="p-6 md:p-10 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                        <Badge variant="outline" className="text-primary border-primary/50 bg-primary/10">{post.category}</Badge>
                        <div className="flex items-center gap-2"><User className="h-4 w-4" /> {post.author}</div>
                        <div className="flex items-center gap-2"><Calendar className="h-4 w-4" /> {post.date}</div>
                        <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> {post.readTime} min read</div>
                    </div>
                     <Button variant="ghost" size="icon">
                        <Share2 className="h-5 w-5" />
                        <span className="sr-only">Share</span>
                    </Button>
                </div>
                
                <h1 className="text-3xl md:text-5xl font-bold text-primary">{post.title}</h1>
                
                <div className="prose-lg max-w-none text-foreground/90 leading-relaxed space-y-4">
                    {post.content.split('\n\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>

                <div className="border-t pt-6 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-2">
                         <span className="text-sm font-semibold">Tags:</span>
                         {post.tags.map(tag => (
                             <Badge key={tag} variant="secondary">{tag}</Badge>
                         ))}
                    </div>
                     <Button variant="ghost">
                        <Share2 className="mr-2 h-4 w-4" />
                        Share
                    </Button>
                </div>
            </div>
        </article>
    </div>
  );
}
