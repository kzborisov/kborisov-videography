import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <div>© {new Date().getFullYear()} Kristian Borisov. София / България.</div>
        <div className="footer-links">
          <a href="#">Instagram</a>
          <a href="#">YouTube</a>
          <Link href="/contact">Контакт</Link>
        </div>
      </div>
    </footer>
  );
}
