export class NavLink {
	constructor(
		public name = "",
		public route = "",
		public hidden = false,
	) { }
}

export const routes = [
	new NavLink("Főoldal", "", false),
	new NavLink("Termékeink", "products", true),
	//new NavLink("Paprikáink", "chilies", true),
	new NavLink("Kapcsolat", "contact", true),
	new NavLink("Rólunk", "about", true),
	new NavLink("Rendelés", "order", false),
];

export class Card {
	constructor(
		public readonly title = "title",
		public readonly subtitle = "subtitle",
		public readonly imgPath = "like.svg",
		public readonly altText = "icon"
	) { }
}

export const cards: Card[] = [
	new Card(
		"Ingyenes szállítás",
		"25000 Ft feletti rendeléseknél",
		"/delivery.svg",
		"delivery icon",
	),
	new Card(
		"Csomagponti átvétel",
		"Akár 1290 forinttól",
		"/box.svg",
		"box icon",
	),
	new Card(
		"Kézműves termék",
		"Saját kezűleg, nagy gondossággal elkészítve",
		"/kindness.svg",
		"kindness icon",
	),
	new Card(
		"Akciók",
		"Kedvezményes árú termékek",
		"/sale.svg",
		"prize icon",
	),
];

export class ChiliInfo {
	constructor(
		public readonly name = "Chili",
		public readonly origin = "Country",
		public readonly spiceLevel = 2,
		public readonly description = "lorem ipsum",
	) { }
}

export const chilies = [
	new ChiliInfo(
		"Trinidad Morgua Scorpio",
		"Japán 🇯🇵",
		3,
		"Lorem ipsum dolor sit amet dasrfsa consectetur. Donec mauris etiam elit orci sed quam cursus arcu.",
	),
];

export class Review {
	constructor(
		public readonly name = "",
		public readonly review = "",
		public readonly avatar = "",
		public readonly date = "",
	) { }
}

export const reviews: Review[] = [
	new Review(
		"Nagy Péter",
		"Finom szószokat kóstoltam tőlük. Ajánlom mindenkinek.",
		"/avatar1.svg",
		"2024 / 09 / 23",
	),
	new Review(
		"Tóth Bertalan",
		"Mindenki vegye komolyan a Végítéletet. Már tíz perce zsibbad a szám, de tükörtojásra kihagyhatatlan.",
		"/avatar2.svg",
		"2024 / 10 / 02",
	),
	new Review(
		"Fekete Eszter",
		"A páromnak vettem névnapjára egy barackos és egy epres szószt. Mindkettő ízlett neki.",
		"/avatar3.svg",
		"2024 / 10 / 17",
	),
];

export class GYIKelement {
	constructor(
		public readonly iconString = "",
		public readonly question = "",
		public readonly answer = "",
		public readonly asHTML = false
	) { }
}

export const gyikElements: GYIKelement[] = [
	new GYIKelement(
		"/cart-white.svg",
		"Hogyan kell rendelést leadni?",
		"Tedd kosárba a Termékeink oldalon a kiválasztott szószokat, add meg a személyes adataidat, válaszd ki a szállítási módot, majd végül a fizetési módot. Banki átutalás esetén utald el a teljes összeget a megadott bankszámlaszámra és készítjük is a csomagod. Utánvétes rendelés esetén nincs további teendőd.",
	),
	new GYIKelement(
		"/delivery-white.svg",
		"Milyen szállítási módok közül választhatok?",
		`<b style="text-decoration: underline;">Házhozszállítás (akár 1890 forinttól)</b><ul style="margin-top: 0;padding-left: 1rem;list-style-type: disc"><li>GLS</li><li>MPL</li><li>Foxpost</li></ul><b style="text-decoration: underline;">Csomagpontra történő szállítás (akár 1290 forinttól)</b><ul style="margin-top: 0;padding-left: 1rem;list-style-type: disc"><li>Foxpost</li></ul><b style="text-decoration: underline;">Személyes átvétel (ingyenes)</b><ul style="margin-top: 0;padding-left: 1rem;list-style-type: disc"><li>Tiszalökön</li><li>Budapesten 11. kerületben (Feneketlen-tó környéke)</li></ul>`,
		true),
	new GYIKelement(
		"/market-white.svg",
		"Szoktatok vásárokra is járni?",
		"Igen, egyes termelői piacokon megtalálhatók vagyunk. A legfrissebb infókért látogass el a Tiktok oldalunkra (Mr. Chili).",
	),
];

export class Product {
	constructor(
		public readonly id = -1,
		public readonly category = -1,
		public readonly imgPath = "",
		public readonly title = "",
		public readonly price = 0,
		public readonly spiceLevel = 0,
		public readonly shortDescription = "",
		public readonly ingredients = "",
		public readonly longDescription = "",
		public readonly chiliName = ""
		//TODO later add stock
	) { }
}

export let categories = ["Chiliszósz", "Chutney", "BBQ"]

export let productInfo = [
	new Product(
		0,
		0,
		"/vegitelet.png",
		"Végítélet",
		4490,
		5,
		"Carolina Reaper chiliszósz",
		"Carolina Reaper, balzsamecet, fokhagyma, só, nátrium-benzoát",
		"A világ egyik legerősebb chilije, a Kaszás nem ismer kegyelmet, kemény próbatétel elé állítja a halandókat. A Végítélet kiválóan alkalmas az utolsó vacsorák ízesítéséhez. Pörköltbe, bográcsételekbe és levesekbe adagolva igazán különleges ízélményben lehet részetek.",
		"Carolina Reaper"
	),
	new Product(
		1,
		0,
		"/kisertes.png",
		"Kísértés",
		3990,
		4,
		"Trinidad Moruga Scorpion – Bhut Jolokia chiliszósz",
		"Trinidad Moruga Scorpion Yellow, Bhut Jolokia Yellow, balzsamecet, fokhagyma, só, nátrium-benzoát",
		"Trinidad szigetén pihensz a homokban, mikor hirtelen arra eszmélsz, hogy egy skorpió végigfut a karodon. Veszélyben vagy, de végül engedsz a Kísértésnek, ami a rabjává tesz. Mire észbe kapsz, már nem tudod elképzelni a gulyáslevest, a pörköltet vagy a szendvicsedet nélküle.",
		"Trinidad Moruga Scorpion – Bhut Jolokia"
	),
	new Product(
		2,
		0,
		"/fantom.png",
		"Fantom",
		3990,
		4,
		"Bhut Jolokia chiliszósz",
		"Bhut Jolokia Red, balzsamecet, fokhagyma, só, nátrium-benzoát",
		"Egyedül vagy otthon, mikor koppanást hallasz a szoba sarkából. Nem látsz senkit, de érzed, hogy valami nincs rendjén. Elkap a borzongás, ahogy a Fantom átsuhan a testeden, próbára téve vétlen ízlelőbimbóidat. A túlvilági bizsergés úgy megigéz, hogy ezentúl minden melegszendvicsben és hamburgerben érezni akarod.",
		"Bhut Jolokia"
	),
	new Product(
		3,
		1,
		"/gangsteper.png",
		"Gangsteper",
		2990,
		1,
		"Epres-chilis chutney",
		"eper, Habanero, gyömbér, balzsamecet, fokhagyma, só, cukor, citromsav, nátrium-benzoát",
		"A mézédes eper, a tüzes Habanero és a pikáns gyömbér találkozásakor toroksimogató csoda történik. A Gangsteper nem csalja elő a könnyeidet, csak néha-néha odacsíp. A vasárnapi palacsinta és túrógombóc nélkülözhetetlen társa, de sült sertéshúsokhoz is remekül passzol.",
		"Habanero Red"
	),
	new Product(
		4,
		1,
		"/barackrem.png",
		"Barackrém",
		2990,
		2,
		"Sárgabarackos-chilis chutney",
		"sárgabarack, Bhut Jolokia Yellow, balzsamecet, méz, vöröshagyma, fokhagyma, só, citromsav, nátrium-benzoát",
		"Zamatos sárgabarack és lángoló Bhut Jolokia nászából született a palackba zárt, barátságos szellem, a Barackrém. Gyümölcsösségével elvarázsol, majd tüzességével enyhén fejbe kólint. Barackos húsok és sült csirkés ételek megbolondításához igazán jó választás.",
		"Bhut Jolokia Yellow"
	),
	new Product(
		5,
		1,
		"/bahamango.png",
		"Bahamangó",
		2990,
		2,
		"Mangós-chilis chutney",
		"mangó, Bahamian Goat Pepper, Scotch Bonnet, narancslé, cukor, méz, vöröshagyma, só, citromsav, nátrium-benzoát",
		"Lágyan hullámzó óceán, fehérhomokos part és egy finom koktél. A Bahamangó egy idilli nyaralásra inivitál az ízek színes világába. Akár a sülthúsodat locsolod meg vele , akár a fagyidra csurgatod, nem fogsz csalódni a mangós csábításban.",
		"Bahamian Goat Pepper"
	),
	new Product(
		6,
		1,
		"/pumpkin_spicy.png",
		"Pumpkin Spicy",
		2490,
		2,
		"Sütőtökös-chilis chutney",
		"sütőtök, Bahamian Goat Pepper, balzsamecet, vöröshagyma, fokhagyma, gyömbér, méz, szerecsendió, só, citromsav, nátrium-benzoát",
		"Sütőtök illata árad a konyhából egy borús őszi estén. A szerecsendió, gyömbér és chili hármasa tökéletesen harmonizál a mézes tökpürével. Ha szereted a különleges ízvilágú kávékat, egy Pumpkin Spicy Latte-t mindenképp készíts a szósszal, de a melegszendvicsedet is garantáltan feldobja.",
		"Bahamian Goat Pepper"
	)
]

export class PickupPointInfo {
	constructor(
		public name = "",
		public zipCode = "",
		public city = "",
		public location = ""
	) { }
}

export class OrderInfo {
	constructor(
		public name = "",
		public email = "",
		public phoneNumber = "",
		public deliveryMethod = "",
		public zipCode = "",
		public city = "",
		public addressline = "",
		public optionals = "",
		public deliveryZip = "",
		public deliveryCity = "",
		public deliveryAddressline = "",
		public deliveryOptionals = "",
		public pickupMethod = "",
		public pickupPointInfo = new PickupPointInfo(),
		public personalPickupMethod = ""
	) { }
}

