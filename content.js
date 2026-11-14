// ВСІ ТЕКСТИ САЙТУ ТУТ. Редагуйте лише текст між лапками/зворотними лапками.
// Контакти та ціни змінюються один раз у блоці C — вони підставляться всюди.
const C = {
  oleksiiTg: 'https://t.me/nyshkom',
  trayanTg: 'https://t.me/Trayan',
  adminTg: 'https://t.me/residence_mc6', adminPhone: '0976562285',
  instagram: 'https://www.instagram.com/residence_mc6',
  foodGroup: 'https://t.me/+D7LSStt8Nc5mMjFi',
  taxiPhone: '0964318503', emergencyPhone: '0678552267',
  breakfast: 300, lunch: 450, dinner: 400, banya: 2000, lift: 400
};
const a = (h, t) => `<a href="${h}">${t}</a>`;
const tel = n => a('tel:+38' + n, n);
const oleksii = `${a(C.oleksiiTg, '@nyshkom')}, ${tel(C.oleksiiPhone)}`;
const trayan = `${a(C.trayanTg, '@Trayan')}, ${tel(C.trayanPhone)}`;
const mapImg = `<img src="map.jpg" alt="" onerror="this.outerHTML='<p>Схему території додамо найближчим часом.</p>'">`;

const SITE = {
  uk: {
    label: 'UA',
    title: 'Креативна резиденція МС6',
    intro: 'Вітаємо у креативному вільному просторі МС6! У нас немає ресепшену та постійного адміністратора, тому заселення відбувається самостійно. Ми прагнемо подарувати вам спокій, усамітнення та повноцінний відпочинок, а все потрібне для цього зібрано на цій сторінці: контакти, карта, харчування, послуги та відповіді на часті питання.',
    keyTitle: 'Коротко',
    key: [
      `Нічого не замикається, ключі й коди не потрібні. Знайдіть свій будиночок чи кімнату за картою.`,
      `Заїзд: будиночки з 14:00, Арт-простір після 12:00. Виїзд до 10:00.`,
      `Є питання: ${oleksii} або ${trayan}.`,
      `Не додзвонилися: Ресторація МС6, щодня 9:00–21:00.`,
      `Харчування: вступіть у ${a(C.foodGroup, 'Telegram-групу ресторації')} і замовляйте за 3–4 години.`,
      `Тиша після 23:00.`
    ],
    sections: [
      { t: 'Як заселитися самостійно', open: true, h: `<ol>
        <li>Домовтеся про бронювання з онлайн-адміністратором${C.adminTg ? ' (' + a(C.adminTg, 'Telegram') + ')' : ''} і внесіть передплату.</li>
        <li>Отримайте підтвердження, що можна приїздити.</li>
        <li>Дістаньтеся до нас (таксі від вокзалу: див. розділ «Дорога»).</li>
        <li>Знайдіть свій будиночок або кімнату за картою. Будиночки: Модрина, Зерно, Море, а також Архіхатка та Садиба (нижня локація, біля парковки). В Арт-просторі 8 кімнат без номерів.</li>
        <li>Заселяйтесь: будиночки з 14:00, Арт-простір після 12:00. Ранній заїзд чи пізній виїзд можливі за додаткову плату (0,5 доби), домовляйтеся з онлайн-адміністратором.</li>
        <li>Виїзд до 10:00. За харчування розраховуєтесь наприкінці перебування.</li></ol>
        <p>Не можете знайти своє місце? Напишіть чи зателефонуйте Олексію або Траяну.</p>` },
      { t: 'Контакти', h: `<ul>
        <li>Олексій (технічний адміністратор): ${oleksii}</li>
        <li>Траян: ${trayan}</li>
        <li>Онлайн-адміністратор (бронювання, питання до приїзду): ${a(C.adminTg, '@residence_mc6')}, ${tel(C.adminPhone)}</li>
        <li>Адреса: с. Славське, вул. Волошина, 68б.</li>
        <li>Instagram: ${a(C.instagram, '@residence_mc6')}</li>
        <li>Команда кухні змінюється, але допоможе з оперативними питаннями або підкаже, до кого звернутися.</li></ul>
        <p><b>Немає зв'язку або ніхто не відповідає?</b> Зверніться до Ресторації МС6 (9:00–21:00).</p>` },
      { t: 'Карта території', h: mapImg },
      { t: 'Дорога та трансфер', h: `<ul>
        <li>Таксі від вокзалу: Василь, ${tel(C.taxiPhone)}. Орієнтовно 350–500 грн.</li>
        <li>Трансфер від резиденції та підйом речей нагору: платна послуга (вартість уточнюйте). Замовляти заздалегідь в онлайн-адміністратора.</li></ul>` },
      { t: 'Харчування', h: `<ul>
        <li>Усі гості вступають у ${a(C.foodGroup, 'Telegram-групу ресторації')}, де робляться замовлення.</li>
        <li>Замовляйте за 3–4 години до прийому їжі. Мінімальної кількості немає.</li>
        <li>Сніданок ${C.breakfast} грн, обід ${C.lunch} грн, вечеря ${C.dinner} грн.</li>
        <li>Час: 9:00, 13:00, 18:00 (залежить від наявної групи).</li>
        <li>Фіксованого меню немає: пропонуємо вегетаріанські та невегетаріанські позиції.</li>
        <li>Оплата наприкінці перебування: QR-код (IBAN) у ресторації або готівкою шеф-кухарю.</li></ul>
        <p><b>Приблизне меню</b></p><ul>
        <li>Сніданок: омлет-суфле, кукурудзяна каша з бринзою, буряковий хумус, свіжі овочі, фрукти, печиво, чай, кава.</li>
        <li>Обід: борщ з вишнями (сало, сметана, хрін, гірчиця), паста «путанеска» із запеченим курячим стегном, свіжі овочі, чай.</li>
        <li>Вечеря: рис басматі з овочами та рубана курка, салат зі шпинату та яблук.</li></ul>` },
      { t: 'Додаткові послуги', h: `<ul>
        <li><b>Баня і чан:</b> замовляйте мінімум за добу. Баня ${C.banya} грн за годину, до 10 осіб. Вартість чану уточнюйте.</li>
        <li><b>Студія звукозапису:</b> безкоштовно, бронювання мінімум за добу. Базове обладнання: пуш-контролер, клавіші, мікрофони, гітари, сопілки, джембе, монітори.</li>
        <li><b>Крамничка при ресторації:</b> працює цілодобово, оплата самостійно за QR-кодом. Прикраси ручної роботи, свічки, мед, чай з місцевих трав, кераміка.</li></ul>` },
      { t: 'Поруч', h: `<ul><li>Підйомник на гору Тростян: субота та неділя 10:00–17:00, ${C.lift} грн.</li>
        <li>Магазини й кафе: біля вокзалу, за 3 км від нас. Купіть продукти по дорозі.</li></ul>` },
      { t: 'Правила', h: `<ul>
        <li>Тиша після 23:00.</li>
        <li>Не впускайте наших тваринок у приміщення.</li>
        <li>Щось розбили чи пошкодили? Повідомте ${a(C.oleksiiTg, '@nyshkom')}.</li></ul>` },
      { t: 'Часті питання', h: `<ul>
        <li><b>Зникла вода?</b> Напишіть ${a(C.trayanTg, '@Trayan')}.</li>
        <li><b>Зник інтернет?</b> Напишіть ${a(C.trayanTg, '@Trayan')}.</li>
        <li><b>Екстрена ситуація:</b> 103 або Катерина ${tel(C.emergencyPhone)}. Аптечки є в ресторації, Арт-просторі та резиденції. Найближча лікарня: смт Славське (у суботу й неділю не працює) та смт Сколе, 30 км.</li>
        <li><b>Мобільний зв'язок:</b> у горах працюють усі оператори.</li>
        <li><b>Білизна, рушники, прибирання:</b> надає резиденція.</li>
        <li><b>Парковка:</b> залиште авто на парковці біля «Садиби МС6» (нижня локація). До неї можна доїхати легковим авто.</li>
        <li><b>Світло та Wi-Fi:</b> електрику вимикають за графіком. В Арт-просторі та Резиденції є еко-флоу для зарядки гаджетів, і під час відключень Wi-Fi працює лише там.</li>
        <li><b>Посуд і кухня:</b> у кожному будиночку є посуд, рушники, постіль і невелика кухня з плитою. В Арт-просторі спільна кухня: місце для приготування, холодильник, кавоварка, чайник.</li>
        <li><b>Мангал:</b> на кухні кемпінгу (сезонно).</li></ul>` }
    ]
  },
  en: {
    label: 'EN',
    title: 'MS6 Creative Residence',
    intro: 'Welcome to MS6, a free creative space! We have no reception desk and no on-site administrator, so check-in is self-service. We want you to rest in peace and privacy, and everything you need is on this page: contacts, map, meals, services and answers to common questions.',
    keyTitle: 'In short',
    key: [
      `Nothing is locked, no keys or codes. Find your house or room using the map.`,
      `Check-in: houses from 14:00, Art Space from 12:00. Check-out by 10:00.`,
      `Questions: ${oleksii} or ${trayan}.`,
      `No answer? Call the MS6 Restaurant, daily 9:00–21:00.`,
      `Meals: join the ${a(C.foodGroup, 'restaurant Telegram group')} and order 3–4 hours ahead.`,
      `Quiet hours after 23:00.`
    ],
    sections: [
      { t: 'Self check-in', open: true, h: `<ol>
        <li>Agree on your booking with the online administrator${C.adminTg ? ' (' + a(C.adminTg, 'Telegram') + ')' : ''} and pay the prepayment.</li>
        <li>Receive confirmation that you may come.</li>
        <li>Get here (taxi from the station: see “Getting here”).</li>
        <li>Find your house or room using the map. Houses: Modryna, Zerno, More, plus Arkhikhatka and Sadyba (the lower location, next to the parking). The Art Space has 8 unnumbered rooms.</li>
        <li>Settle in: houses from 14:00, Art Space from 12:00. Early check-in or late check-out costs half a day's price; arrange it with the online administrator.</li>
        <li>Check out by 10:00. Pay for meals at the end of your stay.</li></ol>
        <p>Can't find your place? Message or call Oleksii or Trayan.</p>` },
      { t: 'Contacts', h: `<ul>
        <li>Oleksii (technical administrator): ${oleksii}</li>
        <li>Trayan: ${trayan}</li>
        <li>Online administrator (bookings, questions before arrival): ${a(C.adminTg, '@residence_mc6')}, ${tel(C.adminPhone)}</li>
        <li>Address: 68b Voloshyna St., Slavske.</li>
        <li>Instagram: ${a(C.instagram, '@residence_mc6')}</li>
        <li>The kitchen team changes, but they can help with urgent questions or tell you who to ask.</li></ul>
        <p><b>No connection or no answer?</b> Go to the MS6 Restaurant (9:00–21:00).</p>` },
      { t: 'Map', h: mapImg.replace('Схему території додамо найближчим часом.', 'Map coming soon.') },
      { t: 'Getting here', h: `<ul>
        <li>Taxi from the station: Vasyl, ${tel(C.taxiPhone)}. About 350–500 UAH.</li>
        <li>Transfer from the residence and carrying luggage uphill: paid service (price on request). Book in advance with the online administrator.</li></ul>` },
      { t: 'Meals', h: `<ul>
        <li>All guests join the ${a(C.foodGroup, 'restaurant Telegram group')}, where orders are placed.</li>
        <li>Order 3–4 hours ahead. No minimum.</li>
        <li>Breakfast ${C.breakfast} UAH, lunch ${C.lunch} UAH, dinner ${C.dinner} UAH.</li>
        <li>Times: 9:00, 13:00, 18:00 (depends on the group).</li>
        <li>No fixed menu: vegetarian and non-vegetarian options.</li>
        <li>Pay at the end of your stay: QR code (IBAN) at the restaurant or cash to the head chef.</li></ul>
        <p><b>Sample menu</b></p><ul>
        <li>Breakfast: soufflé omelette, cornmeal porridge with brynza, beet hummus, fresh vegetables, fruit, cookies, tea, coffee.</li>
        <li>Lunch: borscht with cherries (salo, sour cream, horseradish, mustard), puttanesca pasta with baked chicken thigh, fresh vegetables, tea.</li>
        <li>Dinner: basmati rice with vegetables and minced chicken, spinach and apple salad.</li></ul>` },
      { t: 'Extra services', h: `<ul>
        <li><b>Banya and chan (hot tub):</b> book at least 1 day ahead. Banya ${C.banya} UAH per hour, up to 10 people. Chan price on request.</li>
        <li><b>Recording studio:</b> free, book at least 1 day ahead. Basic gear: push controller, keys, microphones, guitars, flutes, djembe, monitors.</li>
        <li><b>Souvenir shop at the restaurant:</b> open 24/7, pay yourself by QR code. Handmade jewelry, candles, honey, local herbal tea, ceramics.</li></ul>` },
      { t: 'Nearby', h: `<ul><li>Trostian mountain lift: Saturday and Sunday 10:00–17:00, ${C.lift} UAH.</li>
        <li>Shops and cafes: near the station, 3 km from us. Buy groceries on the way.</li></ul>` },
      { t: 'Rules', h: `<ul>
        <li>Quiet hours after 23:00.</li>
        <li>Please don't let our animals into the buildings.</li>
        <li>Broke or damaged something? Tell ${a(C.oleksiiTg, '@nyshkom')}.</li></ul>` },
      { t: 'FAQ', h: `<ul>
        <li><b>No water?</b> Message ${a(C.trayanTg, '@Trayan')}.</li>
        <li><b>No internet?</b> Message ${a(C.trayanTg, '@Trayan')}.</li>
        <li><b>Emergency:</b> 103 or Kateryna ${tel(C.emergencyPhone)}. First-aid kits are in the restaurant, Art Space and residence. Nearest hospitals: Slavske (closed Sat and Sun) and Skole, 30 km.</li>
        <li><b>Mobile signal:</b> all operators work in the mountains.</li>
        <li><b>Bedding, towels, cleaning:</b> provided by the residence.</li>
        <li><b>Parking:</b> leave your car near “Sadyba MS6” (lower location). An ordinary car can get there.</li>
        <li><b>Power and Wi-Fi:</b> electricity is switched off on a schedule. The Art Space and the Residence have eco-flow stations for charging gadgets, and during outages Wi-Fi works only there.</li>
        <li><b>Dishes and kitchen:</b> every house has dishes, towels, bedding and a small kitchen with a stove. The Art Space has a shared kitchen: a cooking area, fridge, coffee machine and kettle.</li>
        <li><b>Grill:</b> at the camping kitchen (seasonal).</li></ul>` }
    ]
  }
};
