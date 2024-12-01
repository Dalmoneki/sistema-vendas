import Image from 'next/image'

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "w-32 h-32" }: LogoProps) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-vrEhhqGRnCjI5YlJZHwqFQy1OvsedT.png"
        alt="Nova Sensação"
        layout="fill"
        objectFit="contain"
        priority
      />
    </div>
  )
}

