import { createClient } from "@/lib/supabase/server";
import ArticleDetailClient from "@/components/ArticleDetailClient";
import { Metadata } from "next";

// Correction 1 : On ajoute 'async' et on attend params
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params; // On déballe la Promise ici
  
  const supabase = await createClient(); 
  
  const { data: post } = await supabase
    .from("posts")
    .select("title, content")
    .eq("slug", slug)
    .single();

  if (!post) {
    return { title: "Article introuvable | Prohabitation" };
  }

  return {
    title: `${post.title} | Prohabitation`,
    description: post.content?.substring(0, 160).replace(/[#*]/g, "") + "...",
  };
}

// Correction 2 : On attend aussi params dans le composant Page
export default async function Page({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params; // Indispensable en Next.js 15
  
  return <ArticleDetailClient slug={slug} />;
}