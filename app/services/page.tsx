import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Social Content",
    tagline: "Видео съдържание за бизнеса ти.",
    description:
      "За брандове и бизнеси, които искат качествено и последователно съдържание за социалните си канали.",
    details: [
      "Кратка стратегия и планиране",
      "До 4 часа снимки",
      "6 вертикални видеа (15–45 сек.)",
      "20–30 обработени снимки",
      "Sound design и color grade",
      "1 кръг корекции",
    ],
    price: "от €450",
  },
  {
    number: "02",
    title: "Sport & Events",
    tagline: "Историята на събитието, не просто кадри от него.",
    description:
      "Динамично покритие на спортни и други събития с фокус върху хората, атмосферата и моментите, които си струва да останат.",
    details: [
      "До 5 часа снимки",
      "60–90 сек. cinematic highlight",
      "3 вертикални reels (15–30 сек.)",
      "20–30 снимки / frame grabs при подходящ материал",
      "Лицензирана музика, sound design и color grade",
      "1 кръг корекции",
    ],
    price: "от €500",
  },
  {
    number: "03",
    title: "Brand Story",
    tagline: "Филм, който показва кои сте и защо го правите.",
    description:
      "За бизнеси и брандове, които имат история за разказване, а не просто продукт за показване.",
    details: [
      "Discovery и концепция",
      "1 снимачен ден",
      "Интервю и B-roll",
      "Brand film (2–3 мин.)",
      "3 кратки версии за социални мрежи",
      "2 кръга корекции",
    ],
    price: "от €900",
  },
  {
    number: "04",
    title: "Testimonials",
    tagline: "Истории от клиентите ви, които изграждат доверие.",
    description:
      "Автентични клиентски истории, заснети и монтирани така, че да звучат естествено и убедително.",
    details: [
      "Подготовка на въпросите",
      "До 4 часа снимки",
      "1–2 интервюта и B-roll",
      "Основно видео (60–120 сек.)",
      "3 вертикални cutdowns със субтитри",
      "1 кръг корекции",
    ],
    price: "от €500",
  },
  {
    number: "05",
    title: "Monthly Partnership",
    tagline: "Постоянно съдържание без всеки месец да започваме от нулата.",
    description:
      "Дългосрочно партньорство за бизнеси, които искат постоянен поток от видео и фото съдържание.",
    details: [
      "START — 1 half-day / 4 reels / 15 снимки — €750/мес.",
      "GROW — 1 full-day или 2 half-days / 8 reels / 30 снимки — €1,200/мес.",
      "PARTNER — 2 снимачни дни / 12 reels / 1 brand/story video / 40–50 снимки — €1,800/мес.",
    ],
    price: "от €750 / месец",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero shell">
        <div className="eyebrow">Услуги</div>
        <h1>Не започвам от пакет. Започвам от целта.</h1>
        <p>
          Първо уточняваме какво трябва да постигне съдържанието, за кого е и
          къде ще бъде използвано. След това изграждам продукцията около тази
          цел.
        </p>
      </section>

      <section className="section">
        <div className="shell service-packages">
          {services.map((service) => (
            <article className="service-package" key={service.number}>
              <div className="service-num">{service.number}</div>
              <div className="service-package-main">
                <h2>{service.title}</h2>
                <h3>{service.tagline}</h3>
                <p>{service.description}</p>
              </div>
              <div className="service-package-details">
                <ul>
                  {service.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                <strong>{service.price}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="quote shell service-cta">
        <p>Имаш проект, който не влиза в стандартна категория?</p>
        <Link className="navcta" href="/contact">
          Разкажи ми за него
        </Link>
        <small>
          Финалната оферта зависи от снимачните дни, броя видеа, локациите,
          сложността на продукцията и начина на използване на съдържанието.
        </small>
      </section>
    </>
  );
}
