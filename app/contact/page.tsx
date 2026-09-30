export default function ContactPage() {
  return <>
    <section className="page-hero shell"><div className="eyebrow">Контакт</div><h1>Имаш идея? Нека я направим.</h1></section>
    <section className="shell contact-grid">
      <div>
        <h2>Разкажи ми за проекта.</h2>
        <p>Изпрати ми накратко какво искаш да заснемем, къде и кога ще бъде продукцията и каква е целта на видеото. Ще се свържа с теб, за да уточним останалото.</p>
        <p><strong>Имейл</strong><br/>hello@kristianborisov.com</p>
        <p><strong>Локация</strong><br/>София / Перник<br/>Работя по проекти в цяла България.</p>
      </div>
      <form className="form" action="mailto:hello@kristianborisov.com" method="post" encType="text/plain">
        <div className="field"><label>Име</label><input name="name" required /></div>
        <div className="field"><label>Имейл</label><input name="email" type="email" required /></div>
        <div className="field"><label>Какъв е проектът?</label><input name="project" placeholder="Спорт, събитие, реклама…" /></div>
        <div className="field"><label>Ориентировъчен бюджет</label><input name="budget" placeholder="По желание" /></div>
        <div className="field"><label>Разкажи ми повече</label><textarea name="message" required /></div>
        <button className="submit" type="submit">Изпрати запитване</button>
      </form>
    </section>
  </>;
}
