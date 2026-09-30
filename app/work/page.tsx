const work = [
  ["01", "Running — Athlete Film", "Спорт / Film", "2026"],
  ["02", "Cycling — Performance Reel", "Спорт / Social", "2026"],
  ["03", "HYROX — Hype Film", "Спорт / Събитие", "2026"],
  ["04", "Triathlon — Endurance", "Спорт / Film", "2026"],
  ["05", "ASICS — Spec Commercial", "Реклама / Spec", "2026"],
  ["06", "Mova Caffe — Spec Film", "Реклама / Spec", "2026"],
];

export default function WorkPage() {
  return <>
    <section className="page-hero shell"><div className="eyebrow">Портфолио</div><h1>Проекти</h1><p>Подбрани спортни, рекламни и event продукции. Тук постепенно ще влизат само проектите, които най-добре представят работата ми.</p></section>
    <section className="shell work-list">{work.map(([n,t,c,y]) => <div className="work-row" key={t}><span>{n}</span><strong>{t}</strong><span>{c}</span><span>{y}</span></div>)}</section>
  </>;
}
