"use client";

import { cn } from "@/lib/utils";
import { useStackApp, useUser } from "@stackframe/stack";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import * as React from "react";
// import { ColorModeSwitcher } from "./color-mode-switcher";
import { Logo } from "./logo";
import { Button, buttonVariants } from "./ui/button";
import Image from 'next/image';
import { useEffect, useState } from 'react';


interface NavProps {
  items?: {
    title: string;
    href: string;
    disabled?: boolean;
    external?: boolean;
  }[];
}

function SignInSignUpButtons() {
  const app = useStackApp();
  return (
    <>
      <Link
        href={app.urls.signIn}
        className={buttonVariants({ variant: "secondary" })}
      >
        Sign In
      </Link>

      <Link
        href={app.urls.signUp}
        className={buttonVariants({ variant: "default" })}
      >
        Sign Up
      </Link>
    </>
  );
}

function AuthButtons() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Return null during server-side rendering
  }

  const figmaSignInLink = "https://www.figma.com/proto/0p7y0hGDDd9a2EdziZMiLb/ACSM-Style-Guide?page-id=642%3A470&node-id=934-4640&viewport=2026%2C-2680%2C0.57&t=wuZP7xZENApPsQFA-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=934%3A4640";
  const figmaSignUpLink = "https://www.figma.com/proto/0p7y0hGDDd9a2EdziZMiLb/ACSM-Style-Guide?page-id=642%3A470&node-id=934-4640&viewport=2026%2C-2680%2C0.57&t=wuZP7xZENApPsQFA-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=934%3A4640";

  return (
    <div className="flex gap-2">
      <Button asChild>
        <a 
          href={figmaSignInLink} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Sign In
        </a>
      </Button>
      <Button variant="outline" asChild>
        <a 
          href={figmaSignUpLink} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Sign Up
        </a>
      </Button>
    </div>
  );
}

function MobileItems(props: NavProps) {
  return (
    <div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 animate-in slide-in-from-bottom-80 md:hidden">
      <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {props.items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                item.disabled && "cursor-not-allowed opacity-60"
              )}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
            >
              {item.title}
            </Link>
          ))}

          <div className="flex flex-col gap-2 mt-4">
            <AuthButtons />
          </div>
        </nav>
      </div>
    </div>
  );
}

function DesktopItems(props: NavProps) {
  const segment = useSelectedLayoutSegment();

  return (
    <nav className="hidden gap-6 md:flex">
      {props.items?.map((item, index) => (
        <Link
          key={index}
          href={item.disabled ? "#" : item.href}
          className={cn(
            "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
            item.href.startsWith(`/${segment}`)
              ? "text-foreground"
              : "text-foreground/60",
            item.disabled && "cursor-not-allowed opacity-80"
          )}
          target={item.external ? "_blank" : undefined}
          rel={item.external ? "noreferrer" : undefined}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}

export function LandingPageHeader(props: NavProps) {
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  return (
    <header className="fixed w-full z-50 bg-background/80 px-4 md:px-8 backdrop-blur">
      <div className="flex h-18 items-center justify-between py-4">
        <div className="flex items-center gap-4 md:gap-10">
          <Button
            className="space-x-2 md:hidden"
            variant="ghost"
            size="icon"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            {showMobileMenu ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>

          <Link href="/" className="flex items-center gap-2 sm:hidden">
            <Image
              src="https://dxeikk2e6c.ufs.sh/f/0UWZWh8ye0t5MJAhIjzKhfNEjBx9Q2zpulADRPmGrvCHMeUW"
              alt="sssync logo"
              width={24}
              height={24}
              className="mr-1"
            />
            <span className="font-bold text-lg">sssync</span>
          </Link>
          
          <Link href="/" className="hidden sm:flex items-center gap-2">
            <Image
              src="/assets/sssv2.svg"
              alt="sssync logo"
              width={24}
              height={24}
              className="mr-1"
            />
            <span className="font-bold text-lg">sssync</span>
          </Link>
          
          {props.items?.length ? <DesktopItems items={props.items} /> : null}

          {showMobileMenu && props.items && <MobileItems items={props.items} />}
        </div>

        <div className="flex gap-4 items-center">
          {/* <ColorModeSwitcher /> */}
          <nav className="gap-4 items-center hidden md:flex">
            <AuthButtons />
          </nav>
        </div>
      </div>
    </header>
  );
}
