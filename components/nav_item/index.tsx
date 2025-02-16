import Link from "next/link";
import React from "react";

interface INavItemProps {
  label: string;
  href: string;
  onClick?: () => void; // ✅ Ավելացվել է onClick
}

function NavItem({ label, href, onClick }: INavItemProps) {
  return (
    <Link href={href} onClick={onClick} className="hover:text-blue-600">
      {label}
    </Link>
  );
}

export default NavItem;
