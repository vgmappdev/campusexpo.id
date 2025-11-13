"use client";

import { Logo } from "@/components/pro-blocks/logo";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function Footer1() {
  return (
    <footer
      className="bg-background section-padding-y"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container-padding-x container mx-auto flex flex-col gap-12 lg:gap-16">
        {/* Top Section */}
        <div className="flex w-full flex-col items-center gap-12 text-center">
          {/* Logo Section */}
          <Link href="/" aria-label="Go to homepage">
            <Logo />
          </Link>

          {/* Main Navigation */}
          <nav
            className="flex flex-col items-center gap-6 text-sm md:flex-row md:gap-8"
            aria-label="Footer navigation"
          >
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Beranda
            </Link>
            <Link
              href="#benefit"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Benefit
            </Link>
            <Link
              href="#how-it-works"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Konsep Acara
            </Link>
            <Link
              href="#pricing"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Paket
            </Link>
            <Link
              href="#faq"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              FAQ
            </Link>
          </nav>
        </div>

        {/* Section Divider */}
        <Separator role="presentation" />

        {/* Bottom Section */}
        <div className="flex w-full flex-col-reverse items-center gap-12 text-sm lg:flex-row lg:justify-between lg:gap-6">
          {/* Copyright Text */}
          <p className="text-muted-foreground text-center lg:text-left">
            © 2026 PT. Visi Generasi Mulia. All rights reserved.
          </p>

          {/* Contact Navigation */}
          <nav
            className="flex flex-col items-center gap-6 text-sm md:flex-row md:gap-8"
            aria-label="Contact links"
          >
            <Link
              href="mailto:hello@campusexpo.id"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              hello@campusexpo.id
            </Link>
            <Link
              href="https://wa.me/6281261286706"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              0812-6128-6706
            </Link>
            <Link
              href="https://www.campusexpo.id"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              www.campusexpo.id
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
