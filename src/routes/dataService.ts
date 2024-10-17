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
	new NavLink("Paprikáink", "chilies", true),
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
		"30000 Ft feletti rendeléseknél",
		"/delivery.svg",
		"delivery icon",
	),
	new Card(
		"Csomagponti átvétel",
		"Akár 990 forinttól",
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
		`<b>Házhozszállítás (akár 1890 forinttól)</b><ul style="margin-top: 0;padding-left: 1rem;list-style-type: disc"><li>GLS</li><li>MPL</li><li>Foxpost</li></ul><b>Csomagpontra történő szállítás (akár 990 forinttól)</b><ul style="margin-top: 0;padding-left: 1rem;list-style-type: disc"><li>Foxpost</li></ul><b>Személyes átvétel (ingyenes)</b><ul style="margin-top: 0;padding-left: 1rem;list-style-type: disc"><li>Tiszalökön</li><li>Budapesten 11. kerületben (Feneketlen-tó környéke)</li></ul>`,
		true),
	new GYIKelement(
		"/market-white.svg",
		"Szoktatok vásárokra is járni?",
		"Igen, egyes termelői piacokon megtalálhatók vagyunk. A legfrissebb infókért látogass el a Tiktok oldalunkra (Mr. Chili).",
	),
];

class ChiliCategory {
	constructor(
		public readonly title = "",
		public readonly products: Product[] = []
	) { }
}

class Product {
	constructor(
		public readonly title = "",
		public readonly price = 0,
		public readonly spiceLevel = 0,
		public readonly description = "",
		//TODO later add stock
	) { }
}

export let productInfo = [
	new ChiliCategory(
		"Chiliszósz",
		[
			new Product(
				"Végítélet",
				3499,
				5,
				"Carolina reaper, etc. Lorem ipsum dolor sit amet con sectetur. lékdang fédlajga."
			),
			new Product(
				"Gangsteper",
				3499,
				1,
				"Carolina reaper, etc. Lorem ipsum dolor sit amet con sectetur. lékdang fédlajga."
			),
			new Product(
				"Barackrém",
				3499,
				2,
				"Carolina reaper, etc. Lorem ipsum dolor sit amet con sectetur. lékdang fédlajga."
			),
			new Product(
				"Pumpkin Spicy",
				3499,
				2,
				"Carolina reaper, etc. Lorem ipsum dolor sit amet con sectetur. lékdang fédlajga."
			)
		]
	),
	new ChiliCategory(
		"Chutney",
		[]
	),
	new ChiliCategory(
		"BBQ",
		[]
	)

]
