import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="shell nav">
        <Link className="brand" href="/">Kristian Borisov <span>/ Film</span></Link>
        <nav className="navlinks" aria-label="Основна навигация">
          <Link href="/work">Проекти</Link>
          <Link href="/services">Услуги</Link>
          <Link href="/about">За мен</Link>
          <Link href="/contact">Контакт</Link>
        </nav>
        <Link className="navcta" href="/contact">Запитване</Link>
      </div>
    </header>
  );
}
