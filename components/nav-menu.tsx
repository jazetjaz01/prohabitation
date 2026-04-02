"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export const NavMenu = ({ className, ...props }: ComponentProps<typeof NavigationMenu>) => (
  <NavigationMenu 
    {...props} 
    className={cn("!flex-col w-full max-w-full", className)}
  >
    <NavigationMenuList className="w-full">
      
      {/* Accueil */}
      <NavigationMenuItem className="w-full">
        <NavigationMenuLink asChild>
          <Link 
            href="/" 
            className={cn(navigationMenuTriggerStyle(), "w-full !justify-center md:w-max")}
          >
            Accueil
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      
      {/* Pose placo */}
      <NavigationMenuItem className="w-full">
        <NavigationMenuLink asChild>
          <Link 
            href="/placo" 
            className={cn(navigationMenuTriggerStyle(), "w-full !justify-center md:w-max")}
          >
            Pose placo
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

      {/* Peinture */}
      <NavigationMenuItem className="w-full">
        <NavigationMenuLink asChild>
          <Link 
            href="/peinture" 
            className={cn(navigationMenuTriggerStyle(), "w-full !justify-center md:w-max")}
          >
            Peinture
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

      {/* Isolation */}
      <NavigationMenuItem className="w-full">
        <NavigationMenuLink asChild>
          <Link 
            href="/isolation" 
            className={cn(navigationMenuTriggerStyle(), "w-full !justify-center md:w-max")}
          >
            Isolation
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

      {/* Contact */}
      <NavigationMenuItem className="w-full">
        <NavigationMenuLink asChild>
          <Link 
            href="/contact" 
            className={cn(navigationMenuTriggerStyle(), "w-full !justify-center md:w-max")}
          >
            Contact
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

    </NavigationMenuList>
  </NavigationMenu>
);