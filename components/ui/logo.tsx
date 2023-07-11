import Link from 'next/link'
import Image from 'next/image'
import LogoImg from '@/public/images/logo.png'

export default function Logo() {
  return (
    <Link className="block" href="/" aria-label="Cruip">
      <Image className='text-4xl' src={LogoImg} width={68} height={68} priority alt="Logo Magnum" />
    </Link>
  )
}