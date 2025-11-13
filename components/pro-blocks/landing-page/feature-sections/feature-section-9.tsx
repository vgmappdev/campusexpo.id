"use client";

import { Building2, MessageCircle, Presentation, GraduationCap } from "lucide-react";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function FeatureSection9() {
  return (
    <section
      className="bg-secondary section-padding-y border-b"
      id="konsep-acara"
    >
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          <Tagline>Konsep Acara</Tagline>
          <h2 className="heading-lg text-foreground">
            Pengalaman Interaktif & Informatif
          </h2>
          <p className="text-muted-foreground text-base">
            Campus Expo 2026 dirancang dengan konsep berbeda dan lebih interaktif untuk memberikan pengalaman terbaik dalam memilih kampus impian.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
              <Building2 className="text-primary h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground font-semibold">Zona Kampus Impian</h3>
              <p className="text-muted-foreground">
                Setiap booth merepresentasikan atmosfer kampus dengan foto dan video tour yang menarik
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
              <MessageCircle className="text-primary h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground font-semibold">Konsultasi Eksklusif</h3>
              <p className="text-muted-foreground">
                Konsultasi tatap muka dengan perwakilan universitas tentang jurusan, beasiswa, dan kehidupan kampus
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
              <Presentation className="text-primary h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground font-semibold">Seminar & Talkshow</h3>
              <p className="text-muted-foreground">
                Sesi inspiratif seputar tips masuk universitas, memilih jurusan, dan mendapatkan beasiswa
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
              <GraduationCap className="text-primary h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground font-semibold">Simulasi Kehidupan Kampus</h3>
              <p className="text-muted-foreground">
                Ikuti mini-class atau simulasi kegiatan perkuliahan untuk merasakan pengalaman kuliah langsung
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
