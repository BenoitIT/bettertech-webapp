import Link from 'next/link'
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <Image src={"/images/logooo.png"} quality={100} width={90} height={90} alt="" className="rounded"/>
    </Link>
  )
}
