"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  User, 
  Mail, 
  Phone, 
  MessageSquare, 
  Tag, 
  MapPin,
  MailCheck,
  PhoneCall,
  Loader2
} from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  civilite: z.enum(["Monsieur", "Madame"]),
  lastName: z.string().min(1, { message: "Le champ nom est obligatoire" }),
  firstName: z.string().min(1, { message: "Le champ prénom est obligatoire" }),
  telephone: z.string().min(10, { message: "Numéro invalide" }),
  email: z.string().email({ message: "Adresse e-mail invalide" }),
  source: z.string().min(1, { message: "Veuillez choisir une option" }),
  message: z.string().min(1, { message: "Le champ message est obligatoire" }),
});

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      civilite: "Monsieur",
      lastName: "",
      firstName: "",
      telephone: "",
      email: "",
      source: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        alert("Votre message a bien été envoyé à Prohabitation.");
        form.reset();
      } else {
        alert("Une erreur est survenue lors de l'envoi.");
      }
    } catch (error) {
      alert("Erreur de connexion au serveur.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const iconInputStyle = "pl-10 h-12 bg-slate-50/50 border-slate-200 rounded-none focus:ring-teal-600";

  return (
    <main className="min-h-screen bg-slate-200 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-800 mb-8 uppercase tracking-wide">
          Contact  Perpignan
        </h1>

        <div className="bg-white p-8 md:p-16 shadow-sm border border-slate-100">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 pb-12 border-b border-slate-100">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-slate-100 text-teal-700"><MapPin className="size-5" /></div>
              <p className="text-slate-700 text-sm font-medium">
                Prohabitation <br/>7 avenue de Banyuls sur mer<br/> 66100 Perpignan
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-slate-100 text-teal-700"><MailCheck className="size-5" /></div>
              <a href="mailto:contact@prohabitation.com" className="text-slate-700 text-sm font-medium hover:text-teal-700">
                contact@prohabitation.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-slate-100 text-teal-700"><PhoneCall className="size-5" /></div>
              <a href="tel:0616224682" className="text-slate-700 text-sm font-medium hover:text-teal-700">
                06 16 22 46 82
              </a>
            </div>
          </div>

          <p className="text-slate-600 mb-12 max-w-2xl leading-relaxed italic">
            Besoin d'un expert en pose placo, peinture ou isolation ? Complétez le formulaire ci-dessous pour une étude personnalisée de votre projet à Perpignan ou dans l'ensembles des Pyrnénées Orientales - 66.
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                
                <div className="space-y-8">
                  <h2 className="text-xl font-bold text-slate-800 uppercase tracking-wider border-b pb-2">1. Vos Informations</h2>
                  
                  <FormField
                    control={form.control}
                    name="civilite"
                    render={({ field }) => (
                      <FormItem className="space-y-4">
                        <FormLabel>Civilité *</FormLabel>
                        <FormControl>
                          <RadioGroup onValueChange={field.onChange} value={field.value} className="flex gap-8">
                            <div className="flex flex-col items-center gap-2">
                              <User className="size-8 text-slate-400" />
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="Monsieur" id="m" />
                                <label htmlFor="m" className="text-sm font-medium">Monsieur</label>
                              </div>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                              <User className="size-8 text-slate-400" />
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="Madame" id="f" />
                                <label htmlFor="f" className="text-sm font-medium">Madame</label>
                              </div>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="space-y-4">
                    <FormField control={form.control} name="lastName" render={({ field }) => (
                      <FormItem><div className="relative"><Tag className="absolute left-3 top-3.5 size-5 text-slate-400" /><FormControl><Input placeholder="Nom *" {...field} className={iconInputStyle} /></FormControl></div><FormMessage /></FormItem>
                    )}/>
                    <FormField control={form.control} name="firstName" render={({ field }) => (
                      <FormItem><div className="relative"><Tag className="absolute left-3 top-3.5 size-5 text-slate-400" /><FormControl><Input placeholder="Prénom *" {...field} className={iconInputStyle} /></FormControl></div><FormMessage /></FormItem>
                    )}/>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField control={form.control} name="telephone" render={({ field }) => (
                      <FormItem><div className="relative"><Phone className="absolute left-3 top-3.5 size-5 text-slate-400" /><FormControl><Input placeholder="Téléphone *" {...field} className={iconInputStyle} /></FormControl></div><FormMessage /></FormItem>
                    )}/>
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem><div className="relative"><Mail className="absolute left-3 top-3.5 size-5 text-slate-400" /><FormControl><Input placeholder="Adresse e-mail *" {...field} className={iconInputStyle} /></FormControl></div><FormMessage /></FormItem>
                    )}/>
                  </div>

                  <FormField control={form.control} name="source" render={({ field }) => (
                    <FormItem className="space-y-4">
                      <FormLabel>Quel est votre projet ? *</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl><SelectTrigger className="h-12 rounded-none"><SelectValue placeholder="Choisir une option" /></SelectTrigger></FormControl>
                        <SelectContent>
                          <SelectItem value="placo">Pose placo</SelectItem>
                          <SelectItem value="joint">Pose joint</SelectItem>
                          <SelectItem value="peinture">Peinture</SelectItem>
                          <SelectItem value="isolation">Isolation</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}/>
                </div>

                <div className="space-y-8">
                  <h2 className="text-xl font-bold text-slate-800 uppercase tracking-wider border-b pb-2">2. Votre Message</h2>
                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-4 size-5 text-slate-400" />
                        <FormControl>
                          <Textarea placeholder="Détaillez votre demande (surface, type de support...)*" className="min-h-[250px] pl-10 pt-4 rounded-none bg-slate-50/50" {...field} />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}/>
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <Button type="submit" disabled={isSubmitting} className="bg-slate-800 hover:bg-teal-700 text-white px-16 h-14 rounded-none uppercase font-bold tracking-widest text-lg">
                  {isSubmitting ? <><Loader2 className="animate-spin size-5 mr-2" /> Envoi...</> : "Envoyer mon message"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </main>
  );
}