"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  User, Mail, Phone, MessageSquare, Tag, 
  Maximize, Navigation, Loader2
} from "lucide-react";

import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const TYPE_PROJET_OPTIONS = ["Neuf", "Rénovation"] as const;

const formSchema = z.object({
  civilite: z.enum(["Monsieur", "Madame"]),
  lastName: z.string().min(1, "Le champ nom est obligatoire"),
  firstName: z.string().min(1, "Le champ prénom est obligatoire"),
  telephone: z.string().min(10, "Numéro invalide"),
  email: z.string().email("Adresse e-mail invalide"),
  service: z.string().min(1, "Veuillez choisir un service"),
  typeProjet: z.enum(TYPE_PROJET_OPTIONS),
  surface: z.string().min(1, "La surface est obligatoire"),
  codePostal: z.string().length(5, "Code postal invalide (5 chiffres)"),
  message: z.string().min(1, "Merci de détailler votre demande"),
});

export default function DevisForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      civilite: "Monsieur",
      lastName: "",
      firstName: "",
      telephone: "",
      email: "",
      service: "",
      typeProjet: "Rénovation",
      surface: "",
      codePostal: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/devis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        alert("Votre demande de devis a été transmise avec succès.");
        form.reset();
      } else {
        alert("Une erreur est survenue.");
      }
    } catch (error) {
      alert("Erreur de connexion au serveur.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const iconInputStyle = "pl-10 h-12 bg-slate-50/50 border-slate-200 rounded-none focus:ring-teal-600 focus:bg-white transition-all";

  return (
    <main className="min-h-screen bg-slate-200 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-800 mb-2 uppercase tracking-tighter">
          Demande de Devis Gratuit
        </h1>
        <p className="text-slate-500 mb-8 font-medium">Réponse rapide sous 48h - Secteur Perpignan & 66</p>

        <div className="bg-white p-8 md:p-16 shadow-xl border border-slate-200">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                
                {/* --- COLONNE GAUCHE : COORDONNÉES --- */}
                <div className="space-y-8">
                  <h2 className="text-xl font-bold text-slate-800 uppercase tracking-wider border-b-2 border-teal-600 pb-2 w-fit">
                    1. Vos Coordonnées
                  </h2>
                  
                  <FormField
                    control={form.control}
                    name="civilite"
                    render={({ field }) => (
                      <FormItem className="space-y-4">
                        <FormControl>
                          <RadioGroup onValueChange={field.onChange} value={field.value} className="flex gap-8">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="Monsieur" id="m" />
                              <label htmlFor="m" className="text-sm font-medium cursor-pointer">Monsieur</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="Madame" id="f" />
                              <label htmlFor="f" className="text-sm font-medium cursor-pointer">Madame</label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <FormField control={form.control} name="lastName" render={({ field }) => (
                      <FormItem><div className="relative"><Tag className="absolute left-3 top-3.5 size-5 text-slate-400" /><FormControl><Input placeholder="Nom *" {...field} className={iconInputStyle} /></FormControl></div><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="firstName" render={({ field }) => (
                      <FormItem><div className="relative"><Tag className="absolute left-3 top-3.5 size-5 text-slate-400" /><FormControl><Input placeholder="Prénom *" {...field} className={iconInputStyle} /></FormControl></div><FormMessage /></FormItem>
                    )} />
                  </div>

                  <FormField control={form.control} name="telephone" render={({ field }) => (
                    <FormItem><div className="relative"><Phone className="absolute left-3 top-3.5 size-5 text-slate-400" /><FormControl><Input placeholder="Téléphone *" {...field} className={iconInputStyle} /></FormControl></div><FormMessage /></FormItem>
                  )} />

                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem><div className="relative"><Mail className="absolute left-3 top-3.5 size-5 text-slate-400" /><FormControl><Input placeholder="E-mail *" {...field} className={iconInputStyle} /></FormControl></div><FormMessage /></FormItem>
                  )} />
                </div>

                {/* --- COLONNE DROITE : LE CHANTIER --- */}
                <div className="space-y-8">
                  <h2 className="text-xl font-bold text-slate-800 uppercase tracking-wider border-b-2 border-teal-600 pb-2 w-fit">
                    2. Votre Projet
                  </h2>
                  
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold">Nature des travaux *</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 rounded-none bg-slate-50/50 border-slate-200">
                              <SelectValue placeholder="Sélectionnez un service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="placo">Pose Placo / Cloisons / Faux-plafonds</SelectItem>
                            <SelectItem value="peinture">Peinture intérieure / Enduits</SelectItem>
                            <SelectItem value="isolation">Isolation thermique (ITI)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="typeProjet"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel className="font-bold">État du bâtiment *</FormLabel>
                          <FormControl>
                            <RadioGroup onValueChange={field.onChange} value={field.value} className="flex gap-4">
                              <div className="flex items-center space-x-2 bg-slate-50 p-2 border flex-1 justify-center cursor-pointer hover:bg-slate-100 transition-colors">
                                <RadioGroupItem value="Neuf" id="neuf" />
                                <label htmlFor="neuf" className="text-xs font-bold uppercase cursor-pointer">Neuf</label>
                              </div>
                              <div className="flex items-center space-x-2 bg-slate-50 p-2 border flex-1 justify-center cursor-pointer hover:bg-slate-100 transition-colors">
                                <RadioGroupItem value="Rénovation" id="reno" />
                                <label htmlFor="reno" className="text-xs font-bold uppercase cursor-pointer">Rénovation</label>
                              </div>
                            </RadioGroup>
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField control={form.control} name="codePostal" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold">Code Postal *</FormLabel>
                        <div className="relative">
                          <Navigation className="absolute left-3 top-3.5 size-5 text-slate-400" />
                          <FormControl><Input placeholder="Ex: 66000" {...field} className={iconInputStyle} /></FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    <FormField control={form.control} name="surface" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold">Surface estimée au sol ou mur (m²) *</FormLabel>
                        <div className="relative">
                          <Maximize className="absolute left-3 top-3.5 size-5 text-slate-400" />
                          <FormControl><Input type="number" placeholder="Ex: 85" {...field} className={iconInputStyle} /></FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold">Précisions (étage, hauteur sous plafond...)</FormLabel>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-4 size-5 text-slate-400" />
                        <FormControl>
                          <Textarea placeholder="Détaillez votre besoin pour une estimation plus précise..." className="min-h-[120px] pl-10 pt-4 rounded-none bg-slate-50/50 border-slate-200" {...field} />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
              </div>

              <div className="flex justify-center md:justify-end pt-8">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-slate-800 hover:bg-teal-700 text-white px-16 h-14 rounded-none transition-all uppercase font-bold tracking-widest flex items-center gap-3 text-lg shadow-lg"
                >
                  {isSubmitting ? <Loader2 className="animate-spin" /> : "Obtenir mon devis gratuit"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </main>
  );
}