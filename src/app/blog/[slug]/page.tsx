import { posts } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
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
    <div className="space-y-8">
        <Button variant="outline" asChild>
            <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
            </Link>
        </Button>
        <article className="max-w-4xl mx-auto bg-card p-6 md:p-10 rounded-lg shadow-lg">
        <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">{post.title}</h1>
            <div className="flex justify-center items-center gap-4 text-muted-foreground">
                <Badge variant="secondary">{post.author}</Badge>
                <span>&bull;</span>
                <p>{post.date}</p>
            </div>
        </div>
        <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
            <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
                data-ai-hint={post.dataAiHint}
            />
        </div>
        <div className="prose-lg max-w-none text-foreground/90 leading-relaxed space-y-4">
            {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </div>
        </article>
    </div>
  );
}
