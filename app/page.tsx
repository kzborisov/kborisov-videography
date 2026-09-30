import Link from "next/link";

const projects = [
  { title: "Endurance / Athlete Film", meta: "Спорт · Късометражно видео", wide: true },
  { title: "Race Day", meta: "Събитие · Документално" },
  { title: "Performance", meta: "Реклама · Социални мрежи" },
];

export default function Home() {
  return (
    <>
      <section className="hero shell">
        <div className="eyebrow">Видеограф · Спорт / Реклама / Събития</div>
        <h1>Истории в движение.</h1>
        <div className="hero-copy">
          <p>Създавам видео за спортисти, брандове, бизнеси и събития — с фокус върху движението, истинските хора и историята зад кадъра.</p>
          <div className="hero-meta">Работя по проекти в цяла България<br/>София / Перник</div>
        </div>
      </section>

      <section className="shell">
        <div className="reel">
          <div className="reel-title">Showreel 2026 — скоро.</div>
          <div className="reel-note">Тук ще бъде основното портфолио видео</div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div className="eyebrow">Избрани проекти</div>
            <div>
              <h2>Движение с причина.</h2>
              <p>Спортът е в основата на работата ми, но същият подход пренасям в рекламни продукции, събития и истории за хора.</p>
            </div>
          </div>
          <div className="project-grid">
            {projects.map((p, i) => (
              <Link href="/work" className={`project-card ${p.wide ? "wide" : ""}`} key={p.title}>
                <div className="project-media">
                  <div className="project-index">0{i + 1}</div>
                  <div className="project-label"><strong>{p.title}</strong><span>{p.meta}</span></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div className="eyebrow">Какво снимам</div>
            <div><h2>Идеята води. Камерата следва.</h2></div>
          </div>
          <div className="services">
            <div className="service"><div className="service-num">01</div><div><h3>Спорт</h3><p>Атлети, тренировки, състезания, клубове и спортни брандове.</p></div></div>
            <div className="service"><div className="service-num">02</div><div><h3>Рекламно съдържание</h3><p>Кратки рекламни филми, продуктови видеа и съдържание за социални мрежи.</p></div></div>
            <div className="service"><div className="service-num">03</div><div><h3>Събития</h3><p>Динамично видео покритие с внимание към хората, детайлите и атмосферата.</p></div></div>
          </div>
        </div>
      </section>

      <section className="quote shell">
        <p>Не просто красиви кадри. Видео, което кара зрителя да остане, да усети и да запомни.</p>
        <small>Kristian Borisov</small>
      </section>
    </>
  );
}
