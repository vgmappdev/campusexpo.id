import Image from "next/image"

export const Logo = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/logo-vgm.png"
        alt="VGM Logo"
        width={135}
        height={36}
        className="h-8 w-auto md:h-9" // <── ukuran proporsional
        priority
      />
    </div>
  )
}
