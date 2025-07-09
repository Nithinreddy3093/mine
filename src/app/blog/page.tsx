import { posts } from "@/lib/data"
import { BlogCard } from "@/components/BlogCard"
import Link from "next/link"

export default function BlogPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary">SRM Student Blog</h1>
        <p className="text-muted-foreground mt-2">Tips, guides, and stories about life at SRM, written by students for students.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className="block hover:translate-y-[-2px] transition-transform duration-300">
            <BlogCard post={post} />
          </Link>
        ))}
      </div>
    </div>
  )
}
