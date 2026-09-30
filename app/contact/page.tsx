import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакт",
  description:
    "Свържи се с Kristian Borisov за видео продукция, спорт, събития и съдържание за брандове.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero shell">
        <div className="eyebrow">Контакт</div>
        <h1>Имаш идея? Нека я направим.</h1>
      </section>
      <section className="shell contact-grid">
        <div>
          <h2>Разкажи ми за проекта.</h2>
          <p>
            Изпрати ми накратко какво искаш да заснемем, къде и кога ще бъде
            продукцията и каква е целта на видеото. Ще се свържа с теб, за да
            уточним останалото.
          </p>
          <p>
            <strong>Имейл</strong>
            <br />
            <a href="mailto:hello@kristianborisov.com">
              hello@kristianborisov.com
            </a>
          </p>
          <p>
            <strong>Локация</strong>
            <br />
            София / Перник
            <br />
            Работя по проекти в цяла България.
          </p>
        </div>
        <form
          className="form"
          action="mailto:hello@kristianborisov.com"
          method="post"
          encType="text/plain"
        >
          <div className="field">
            <label htmlFor="name">Име</label>
            <input id="name" name="name" autoComplete="name" required />
          </div>
          <div className="field">
            <label htmlFor="email">Имейл</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="project">Какъв е проектът?</label>
            <input
              id="project"
              name="project"
              placeholder="Спорт, събитие, реклама…"
            />
          </div>
          <div className="field">
            <label htmlFor="budget">Ориентировъчен бюджет</label>
            <input id="budget" name="budget" placeholder="По желание" />
          </div>
          <div className="field">
            <label htmlFor="message">Разкажи ми повече</label>
            <textarea id="message" name="message" required />
          </div>
          <button className="submit" type="submit">
            Изпрати запитване
          </button>
        </form>
      </section>
    </>
  );
}
