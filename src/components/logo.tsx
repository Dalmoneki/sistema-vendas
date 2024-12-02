// components/logo.tsx
import Image from 'next/image'

export default function Logo() {
  return (
    <div>
      <Image
        src="/images/logo.png" 
        alt="Logo"
        width={150} 
        height={100} 
      />
    </div>
  );
}