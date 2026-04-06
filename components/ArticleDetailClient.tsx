"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, User2, MapPin, Home, Calendar, Loader2 } from "lucide-react";
import Image from "next/image";

interface Post {
  id: string;
  title: string;
  category: string;
  author_name: string;
  image_url: string;
  created_at: string;
  content: string;
  slug: string;
}

export default function ArticleDetailClient({ slug }: { slug: string }) {
  const router = useRouter();
  const supabase = createClient();
  
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("posts")
          .select("*")
          .eq("slug", slug)
          .single();

        if (error) {
          console.error("Erreur Supabase:", error.message);
          setPost(null);
        } else {
          setPost(data);
        }
      } catch (err) {
        console.error("Erreur système:", err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchPost();
  }, [slug, supabase]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-200">
        <Loader2 className="w-12 h-12 text-teal-600 animate-spin mb-4" />
        <p className="text-slate-500 uppercase tracking-widest text-xs">Chargement de l'article...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="p-20 text-center bg-slate-200 min-h-screen">
        <h2 className="text-2xl font-bold text-slate-800 uppercase mb-4">Article introuvable</h2>
        <Button onClick={() => router.push('/actualites')} variant="outline" className="rounded-none">
          Retour à l'accueil
        </Button>
      </div>
    );
  }

  // Données structurées pour Google (SEO)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.image_url,
    "datePublished": post.created_at,
    "author": { "@type": "Person", "name": post.author_name },
    "publisher": { "@type": "Organization", "name": "Prohabitation" }
  };

  return (
    <article className="min-h-screen bg-slate-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation supérieure */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Button 
            variant="ghost" 
            onClick={() => router.push('/actualite')}
            className="rounded-none hover:bg-slate-100 transition-colors gap-2 uppercase tracking-widest text-[10px] font-bold"
          >
            <ArrowLeft size={14} /> Retour
          </Button>
          <span className="hidden md:block text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold">
            Prohabitation — Expertise Bâtiment Perpignan
          </span>
        </div>
      </div>

      <header className="max-w-4xl mx-auto px-4 pt-16 pb-12 text-center md:text-left">
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8 justify-center md:justify-start">
          <Badge className="rounded-none bg-teal-700 text-white border-none px-4 py-1 uppercase tracking-tighter w-fit mx-auto md:mx-0">
            {post.category || "Chantier"}
          </Badge>
          <div className="flex items-center justify-center gap-2 text-slate-500 text-[11px] uppercase tracking-[0.2em]">
            <Calendar size={12} />
            <time dateTime={post.created_at}>
              {new Date(post.created_at).toLocaleDateString("fr-FR", {
                year: 'numeric', month: 'long', day: 'numeric'
              })}
            </time>
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-wide uppercase leading-[0.9] mb-12">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 border-y border-slate-200 py-6">
          <div className="flex items-center gap-2">
            <User2 size={14} className="text-teal-700" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-700">{post.author_name}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-teal-700" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">66000 Perpignan</span>
          </div>
        </div>
      </header>

      {/* Image Principale */}
      <div className="max-w-6xl mx-auto px-0 md:px-4">
        <div className="relative aspect-video md:aspect-[21/9] overflow-hidden shadow-2xl bg-slate-200">
          {post.image_url ? (
            <img
              src={post.image_url}
              alt={`Réalisation Prohabitation : ${post.title}`}
              className="object-cover w-full h-full"
              loading="eager"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Home className="text-slate-300 size-24" />
            </div>
          )}
        </div>
      </div>

      {/* Contenu de l'article */}
      <main className="max-w-3xl mx-auto px-6 py-20">
        <div className="prose prose-slate prose-lg max-w-none font-serif leading-relaxed text-slate-800 
          first-letter:text-7xl first-letter:font-black first-letter:text-teal-700 first-letter:mr-3 first-letter:float-left 
          selection:bg-teal-100">
          
          {post.content?.split('\n').map((paragraph, index) => (
            paragraph.trim() !== "" && (
              <p key={index} className="mb-8 text-lg text-justify leading-relaxed">
                {paragraph}
              </p>
            )
          ))}
        </div>

        {/* CTA Interne pour le SEO */}
        <div className="mt-16 p-8 border-2 border-teal-700 bg-white">
          <h3 className="text-xl font-bold uppercase mb-4 tracking-tighter">Un projet similaire à Perpignan ?</h3>
          <p className="text-slate-600 mb-6 text-sm">
            Comme pour ce chantier, Prohabitation vous accompagne dans vos travaux de plâtrerie, peinture et isolation partout dans le 66.
          </p>
          <Button 
            onClick={() => router.push('/devis')}
            className="rounded-none bg-teal-700 hover:bg-slate-800 text-white uppercase font-bold tracking-widest w-full md:w-auto"
          >
            Demander mon devis gratuit
          </Button>
        </div>
      </main>

      <footer className="max-w-3xl mx-auto px-4 pb-20 border-t border-slate-200 pt-10">
        <div className="flex flex-col items-center gap-4">
           <div className="w-12 h-1 bg-teal-700 mb-4"></div>
           <p className="text-[9px] text-slate-400 uppercase tracking-[0.5em] text-center">
             Prohabitation — Artisan Plaquiste & Peintre — Pyrénées-Orientales
           </p>
        </div>
      </footer>
    </article>
  );
}