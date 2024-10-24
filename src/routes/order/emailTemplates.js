export function returnClientTemplate(formInfo, productPrice, deliveryPrice, userCart) {

    const cartItems = userCart.map(product => `
        <tr>
            <td style="padding: 10px; border: 1px solid #ccc;">
                ${product.productType.title}
            </td>
            <td style="padding: 10px; border: 1px solid #ccc;">
                ${product.productCount} x ${product.productType.price} Ft
            </td>
        </tr>
    `).join('');

    return `
        <p>Kedves ${formInfo.name}!</p>

        <p>Köszönjük a rendelését.</p>

        <table style="width: 50%; border-collapse: collapse; margin-bottom: 20px;">
            <thead>
                <tr>
                    <th style="text-align: left; padding: 10px; border: 1px solid #ccc;">Termék</th>
                    <th style="text-align: left; padding: 10px; border: 1px solid #ccc;">Mennyiség és Ár</th>
                </tr>
            </thead>
            <tbody>
                ${cartItems}
            </tbody>
        </table>

        <p style="font-weight: bold;">
            Termékek ára: ${productPrice} Ft
            <br />
            Szállítási díj: ${deliveryPrice} Ft
            <br />
            Végösszeg: ${productPrice + deliveryPrice} Ft
        </p>

        <p>Kérjük utalja el a fizetendő összeget a következő bankszámlaszámra: 11773449-02242675.</p>

        <p>Kérjük az utalás közleményébe írja be a rendelésnél megadott nevet.</p>

        <p>Amint megérkezik az utalás, már csomagoljuk is a rendelt termék(ek)et és a választott szállítási módon eljuttatjuk Önnek.</p>

        <p>Üdvözlettel,<br>Mr. Chili csapata</p>
`
}
