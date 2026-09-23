import Link from "next/link";
import Image from "next/image";

export function FomuraLogo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className={`logo ${light ? "logo-light" : ""}`} aria-label="Fomura, inicio">
      <Image src="/brand/fomura-full-logo.png" alt="Fomura" width={190} height={76} priority />
    </Link>
  );
}
