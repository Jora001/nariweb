import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"}>
      <Image
        src="/assets/images/logo.png"
        alt="logo"
        width={150.8}
        height={64}
        
      />
    </Link>
  );
}
