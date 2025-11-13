"use client"

import Image from "next/image"

const logosData = [
  { id: 1, src: "/logo-kampus/logo-itb.png" },
  { id: 2, src: "/logo-kampus/logo-itsn.png" },
  { id: 3, src: "/logo-kampus/logo-ugm.png" },
  { id: 4, src: "/logo-kampus/logo-uii.png" },
  { id: 5, src: "/logo-kampus/logo-unair.png" },
  { id: 6, src: "/logo-kampus/logo-unibra.png" },
  { id: 7, src: "/logo-kampus/logo-unpad.png" },
  { id: 8, src: "/logo-kampus/logo-uny.png" },
  { id: 9, src: "/logo-kampus/logo-usm.png" },
]

export function LogoSection7() {
  return (
    <section className="bg-secondary border-b pb-16 lg:pb-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-8 md:gap-12">
          <h2 className="text-center text-muted-foreground text-sm tracking-wide uppercase">
            50+ Universitas Telah Bergabung
          </h2>

          <div className="relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent_0%,black_12.5%,black_87.5%,transparent_100%)]">
            <div className="animate-infinite-scroll flex w-max items-center">
              {[...logosData, ...logosData].map((logo, index) => (
                <div
                  key={index}
                  className="w-48 flex-shrink-0 flex justify-center"
                >
                  <Image
                    src={logo.src}
                    alt={`Logo ${logo.id}`}
                    width={120}
                    height={50}
                    className="object-contain opacity-80 hover:opacity-100 transition"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50%));
          }
        }

        .animate-infinite-scroll {
          animation: infinite-scroll 25s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  )
}
