"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Check, Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { VariantProps } from "class-variance-authority";
import Link from "next/link";

const pricingData = {
  plans: [
    {
      name: "Basic",
      description:
        "Paket ideal untuk perguruan tinggi yang ingin hadir di seluruh kota dengan harga terjangkau.",
      features: [
        { name: "Booth standar 2x3m", tooltip: "Ruang booth standar untuk display universitas Anda" },
        {
          name: "Publikasi logo di website & sosmed",
          tooltip: "Logo Anda akan tampil di materi promosi pendukung",
        },
        { name: "Akses ke 6 kota roadshow", tooltip: "Hadir di Semarang, Surakarta, Yogyakarta, Purwokerto, Tegal, dan Pekalongan" },
      ],
      price: "7.680.000",
      period: "/6 kota",
      variant: "outline",
    },
    {
      name: "Platinum",
      description:
        "Paket lengkap dengan benefit eksklusif untuk memaksimalkan visibilitas dan interaksi dengan calon mahasiswa.",
      features: [
        { name: "Booth strategis 2x3m", tooltip: "Posisi booth premium di area strategis" },
        { name: "Sesi seminar/presentasi eksklusif", tooltip: "Slot presentasi 30-45 menit (kuota terbatas)" },
        { name: "Akses database pengunjung", tooltip: "Data leads untuk follow-up rekrutmen" },
        { name: "Publikasi logo di semua materi promosi", tooltip: "Logo di spanduk, poster, website, dan media sosial" },
        { name: "Highlight di media sosial event", tooltip: "Promosi khusus di akun media sosial Campus Expo" },
        { name: "Listing program Campus Tour", tooltip: "Tercantum dalam program Campus Tour setelah pameran" },
      ],
      price: "9.600.000",
      period: "/6 kota",
      variant: "default",
      highlighted: true,
    },
  ],
};

export function PricingSection3() {
  return (
    <section
      className="bg-secondary section-padding-y border-b"
      aria-labelledby="pricing-section-title-3"
      id="partisipasi"
    >
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col items-center gap-10 md:gap-12">
          {/* Section Header */}
          <div className="section-title-gap-lg flex max-w-xl flex-col items-center text-center">
            {/* Category Tag */}
            <Tagline>Paket Partisipasi</Tagline>
            {/* Main Title */}
            <h2
              id="pricing-section-title-3"
              className="heading-lg text-foreground"
            >
              Pricing plans crafted to meet your needs
            </h2>
          </div>

          {/* Two-Column Side-by-Side Pricing Cards - Stacks on mobile */}
          <div className="flex w-full flex-col items-center gap-4 md:max-w-3xl md:flex-row md:gap-0">
            {pricingData.plans.map((plan, index) => (
              <Card
                key={plan.name}
                className={`p-6 shadow-none sm:p-12 md:rounded-tl-xl md:rounded-tr-none md:rounded-br-none md:rounded-bl-xl md:border-r-0 ${
                  plan.highlighted
                    ? "shadow-[0px_0px_0px_6px_rgba(7,46,106,0.05)] md:rounded-xl md:border-r-1"
                    : ""
                }`}
              >
                {/* Card Content Container */}
                <CardContent className="flex flex-col gap-8 p-0">
                  {/* Plan Header Section */}
                  <div className="flex flex-col gap-6">
                    {/* Plan Title and Description Block */}
                    <div className="relative flex flex-col gap-3">
                      <h3
                        className={`text-lg font-semibold ${
                          plan.highlighted ? "text-primary" : ""
                        }`}
                      >
                        {plan.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {plan.description}
                      </p>
                    </div>

                    {/* Price Display with Currency and Period */}
                    <div className="flex items-end gap-0.5">
                      <span className="text-4xl font-semibold">
                        Rp {plan.price}
                      </span>
                      <span className="text-muted-foreground text-base">
                        {pricingData.plans[index].period ?? "/month"}
                      </span>
                    </div>

                    {/* Call-to-Action Button */}
                    <Link
                      href={`https://wa.me/6281261286706?text=Halo,%20saya%20tertarik%20dengan%20paket%20${plan.name}%20Campus%20Expo%202026`}
                      target="_blank"
                    >
                      <Button
                        variant={
                          plan.variant as VariantProps<
                            typeof buttonVariants
                          >["variant"]
                        }
                        className="w-full"
                      >
                        Daftar Paket
                      </Button>
                    </Link>
                  </div>

                  {/* Features List Section */}
                  <div className="flex flex-col gap-4">
                    {/* Features Header with Plan Inheritance */}
                    <p className="text-sm font-medium">
                      {index === 0
                        ? "What's included:"
                        : `Everything in ${
                            pricingData.plans[index - 1].name
                          }, plus:`}
                    </p>
                    {/* Features Grid with Tooltips */}
                    <div className="flex flex-col gap-4">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <Check className="text-primary h-5 w-5" />
                          <span className="text-muted-foreground flex-1 text-sm">
                            {feature.name}
                          </span>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <Info className="text-muted-foreground h-4 w-4 cursor-pointer opacity-70 hover:opacity-100" />
                              </TooltipTrigger>
                              <TooltipContent className="max-w-xs">
                                <p>{feature.tooltip}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
