import Link from "next/link";

type NavbarTabProps = {
  title: string;
  link: string;
};

const NavbarTab: React.FC<NavbarTabProps> = ({ title, link }) => {
  return (
    <li>
      <Link href={link}>{title}</Link>
    </li>
  );
};

export default NavbarTab;
