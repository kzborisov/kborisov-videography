import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <div>© {new Date().getFullYear()} Kristian Borisov. София / България.</div>
        <div className="footer-links">
          <a
            href="https://www.instagram.com/kristian__borisov/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <Link href="/work">Проекти</Link>
          <Link href="/contact">Контакт</Link>
        </div>
      </div>
    </footer>
  );
}
