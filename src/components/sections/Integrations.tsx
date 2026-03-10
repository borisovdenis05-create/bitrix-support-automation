const INTEGRATIONS = [
  {
    category: "Телефония",
    color: "from-green-500/10 to-emerald-500/5",
    border: "border-green-500/20",
    items: [
      {
        name: "Мегафон",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/MegaFon_logo_%282021%29.svg/320px-MegaFon_logo_%282021%29.svg.png",
        desc: "Виртуальная АТС, запись звонков, аналитика",
      },
      {
        name: "Билайн Бизнес",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Beeline_logo_%28Russia%29.svg/320px-Beeline_logo_%28Russia%29.svg.png",
        desc: "IP-телефония, контакт-центр, SIP",
      },
      {
        name: "Mango Office",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Mango_Telecom_Logo.svg/320px-Mango_Telecom_Logo.svg.png",
        desc: "Облачная АТС, коллтрекинг, CRM-интеграция",
      },
    ],
  },
  {
    category: "Мессенджеры и чаты",
    color: "from-blue-500/10 to-cyan-500/5",
    border: "border-blue-500/20",
    items: [
      {
        name: "Wazzup",
        logo: "https://wazzup24.com/wp-content/uploads/2021/08/wazzup-logo.svg",
        desc: "WhatsApp и ВКонтакте в Битрикс24",
      },
      {
        name: "Chat2Desk",
        logo: "https://chat2desk.com/wp-content/themes/chat2desk/assets/img/logo.svg",
        desc: "Мультиканальный чат: WA, TG, VK, Viber",
      },
      {
        name: "ChatApp",
        logo: "https://chatapp.online/img/logo-chatapp.svg",
        desc: "WhatsApp Business API для рассылок и ботов",
      },
    ],
  },
  {
    category: "1С и учётные системы",
    color: "from-orange-500/10 to-amber-500/5",
    border: "border-orange-500/20",
    items: [
      {
        name: "1С:Предприятие",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/1C_logo.svg/240px-1C_logo.svg.png",
        desc: "Двусторонняя синхронизация товаров, заказов, счетов",
      },
      {
        name: "МойСклад",
        logo: "https://moysklad.ru/upload/medialibrary/logo-moysklad-ru.svg",
        desc: "Складской учёт, остатки, заказы онлайн",
      },
    ],
  },
  {
    category: "Маркетплейсы",
    color: "from-purple-500/10 to-violet-500/5",
    border: "border-purple-500/20",
    items: [
      {
        name: "Авито",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Avito_logo.svg/320px-Avito_logo.svg.png",
        desc: "Лиды с объявлений прямо в CRM",
      },
      {
        name: "Wildberries",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/WB_logo.svg/320px-WB_logo.svg.png",
        desc: "Синхронизация заказов и остатков",
      },
      {
        name: "Ozon",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Ozon_logo.svg/320px-Ozon_logo.svg.png",
        desc: "Автоматическая обработка заказов из Ozon",
      },
    ],
  },
  {
    category: "Email и рассылки",
    color: "from-red-500/10 to-rose-500/5",
    border: "border-red-500/20",
    items: [
      {
        name: "UniSender",
        logo: "https://unisender.com/images/logo-unisender.svg",
        desc: "Email-рассылки, триггерные письма",
      },
      {
        name: "SendPulse",
        logo: "https://sendpulse.com/img/sendpulse-logo.svg",
        desc: "Email, SMS, push, чат-боты в одном",
      },
    ],
  },
  {
    category: "Аналитика и реклама",
    color: "from-yellow-500/10 to-amber-500/5",
    border: "border-yellow-500/20",
    items: [
      {
        name: "Яндекс.Метрика",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Yandex_Metrica_logo.svg/320px-Yandex_Metrica_logo.svg.png",
        desc: "Цели, воронки, вебвизор из CRM",
      },
      {
        name: "Яндекс.Директ",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Yandex_Direct_logo.svg/320px-Yandex_Direct_logo.svg.png",
        desc: "Передача лидов из рекламы в CRM",
      },
    ],
  },
];

export default function Integrations() {
  return (
    <section className="py-20 px-6 bg-[hsl(220,20%,4%)]" id="integrations">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-ibm font-medium bg-violet-500/15 text-violet-300 border border-violet-500/25 mb-4">
            Интеграции
          </span>
          <h2 className="text-3xl md:text-4xl font-golos font-bold text-white mb-4">
            Подключаем всё, что нужно бизнесу
          </h2>
          <p className="text-white/75 font-ibm text-base max-w-2xl mx-auto">
            Настраиваем интеграции CRM с телефонией, мессенджерами, 1С,
            маркетплейсами и десятками других сервисов — всё работает как единая
            экосистема.
          </p>
        </div>

        <div className="space-y-10">
          {INTEGRATIONS.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-ibm font-medium text-white/65 uppercase tracking-widest mb-4">
                {group.category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className={`bg-gradient-to-br ${group.color} border ${group.border} rounded-2xl p-5 flex items-center gap-4 hover:scale-[1.02] transition-transform duration-200`}
                  >
                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center flex-shrink-0 p-2">
                      <img
                        src={item.logo}
                        alt={item.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                          (e.target as HTMLImageElement).parentElement!.innerHTML = `<span class="text-xs font-bold text-gray-700">${item.name[0]}</span>`;
                        }}
                      />
                    </div>
                    <div>
                      <div className="font-golos font-semibold text-white text-sm">
                        {item.name}
                      </div>
                      <div className="font-ibm text-white/75 text-xs mt-0.5 leading-snug">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-white/60 font-ibm text-sm mt-12">
          Не нашли свой сервис? Свяжитесь с нами — скорее всего, мы уже
          интегрировали его.
        </p>
      </div>
    </section>
  );
}