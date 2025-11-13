"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function StatsSection4() {
  return (
    <section className="bg-background section-padding-y border-b"
      id="skala-acara">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 md:gap-12">
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
            <Tagline>Skala Acara</Tagline>
            <h2 className="heading-lg text-foreground">Jangkauan Luas, Dampak Nyata</h2>
            <p className="text-muted-foreground">
              Campus Expo 2026 hadir dengan skala besar untuk menghubungkan ribuan siswa dengan perguruan tinggi terbaik di 6 kota strategis.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:gap-6 lg:flex-row">
            <Card className="bg-secondary rounded-xl border-none p-6 shadow-none">
              <CardContent className="flex flex-col gap-2 p-0 md:gap-3">
                <h3 className="text-primary font-semibold">
                  Kota Roadshow
                </h3>
                <span className="text-foreground text-3xl font-semibold md:text-4xl">
                  6 Kota
                </span>

                <p className="text-muted-foreground text-base">
                  Hadir di Semarang, Surakarta, Yogyakarta, Purwokerto, Tegal, dan Pekalongan untuk menjangkau lebih banyak siswa.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary rounded-xl border-none p-6 shadow-none">
              <CardContent className="flex flex-col gap-2 p-0 md:gap-3">
                <h3 className="text-primary font-semibold">Perguruan Tinggi</h3>
                <span className="text-foreground text-3xl font-semibold md:text-4xl">
                  100+
                </span>
                <p className="text-muted-foreground text-base">
                  Universitas terkemuka dari dalam dan luar negeri siap memberikan informasi terbaik untuk masa depan Anda.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary rounded-xl border-none p-6 shadow-none">
              <CardContent className="flex flex-col gap-2 p-0 md:gap-3">
                <h3 className="text-primary font-semibold">Total Pengunjung</h3>
                <span className="text-foreground text-3xl font-semibold md:text-4xl">
                  90K-120K
                </span>
                <p className="text-muted-foreground text-base">
                  Siswa, orang tua, dan guru dari seluruh Jawa Tengah dan DIY akan hadir untuk menemukan kampus impian.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
