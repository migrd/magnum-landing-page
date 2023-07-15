import Link from 'next/link'
import Image from 'next/image'
import LogoImg from '@/public/images/logo.png'

export default function Logo() {
  return (
    <Link className="block" href="/" aria-label="Cruip">
      <Image className='text-4xl' src={LogoImg} width={140} height={130} priority alt="Logo Magnum" />
    </Link>
  )
}