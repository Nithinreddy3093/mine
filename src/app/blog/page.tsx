
'use client';

import { useState } from "react";
import { posts } from "@/lib/data"
import { BlogCard } from "@/components/BlogCard"
import Link from "next/link"
import { Button } from "@/components/ui/button";

const categories = ["All", "First Year Guide", "Academics", "Campus Life", "Hostel Life", "Placements"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All"
    ? posts
    : posts.filter(post => post.category === activeCategory);

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold text-primary">SRM Guide Blog</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive guides, tips, and insights to help you succeed at SRM University.</p>
      </div>

      <div className="flex justify-center flex-wrap gap-2 px-4">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => setActiveCategory(category)}
            className="rounded-full"
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className="block group">
            <BlogCard post={post} />
          </Link>
        ))}
      </div>
    </div>
  )
}
