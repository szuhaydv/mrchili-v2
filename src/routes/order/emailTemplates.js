function productTable(formInfo, productPrice, deliveryPrice, userCart) {
    let deliveryString

    if (formInfo.deliveryMethod == "delivery") {
        deliveryString = "GLS házhozszállítás"
    } else if (formInfo.deliveryMethod == "pickup") {
        if (formInfo.pickupMethod == "gls") {
            deliveryString = "GLS csomagautomata<br>" + formInfo.pickupPointInfo.location
        } else if (formInfo.pickupMethod == "foxpost") {
            deliveryString = "Foxpost csomagautomata<br>" + formInfo.pickupPointInfo.location
        }
    } else if (formInfo.deliveryMethod == "personal") {
        switch (formInfo.personalPickupMethod) {
            case "bp":
                deliveryString = "Személyes átvétel<br>" + "Budapest"
                break
            case "nyh":
                deliveryString = "Személyes átvétel<br>" + "Nyíregyháza"
                break
            case "tisza":
                deliveryString = "Személyes átvétel<br>" + "Tiszalök"
                break
        }
    }

    const cartItems = userCart.map(product => `
        <tr>
            <td style="padding: 10px; border: 1px solid #ccc;">
                ${product.productType.title}
            </td>
            <td style="padding: 10px; border: 1px solid #ccc;">
                ${product.productCount} db
            </td>
            <td style="padding: 10px; border: 1px solid #ccc; white-space: nowrap;">
                ${product.productType.price} Ft
            </td>
        </tr>
    `).join('');

    return `
        <table style="width: 100%; max-width: 768px; border-collapse: collapse; margin-bottom: 20px;">
            <thead>
                <tr>
                    <th style="text-align: left; padding: 10px; border: 1px solid #ccc;">Termék neve</th>
                    <th style="text-align: left; padding: 10px; border: 1px solid #ccc;">Mennyiség</th>
                    <th style="text-align: left; padding: 10px; border: 1px solid #ccc;">Egységár</th>
                </tr>
            </thead>
            <tbody>
                ${cartItems}
                <tr>
                    <td style="padding: 10px; border: 1px solid #ccc;">
                        ${deliveryString}
                    </td>
                    <td style="padding: 10px; border: 1px solid #ccc;">
                        1 db
                    </td>
                    <td style="padding: 10px; border: 1px solid #ccc;">
                        ${deliveryPrice} Ft
                    </td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #ccc; font-weight: bold;">
                        Végösszeg:
                    </td>
                    <td style="padding: 10px; border: 1px solid #ccc; font-weight: bold; text-align: right;" colspan="2">
                        ${productPrice + deliveryPrice} Ft
                    </td>
                </tr>
            </tbody>
        </table>
`
}

export function returnClientTemplate(formInfo, productPrice, deliveryPrice, userCart) {

    return `
    <div style="min-width: 100%; width: 100%; margin: 0; padding: 0; display: block;">
        <p>Kedves ${formInfo.name}!</p>
        <p>Köszönjük a rendelését.</p>
        <p>Kérjük utalja el a fizetendő összeget a következő bankszámlaszámra: 11773449-02242675.</p>
        <p>Kérjük az utalás közleményébe írja be a rendelésnél megadott nevet.</p>
        <p>Amint megérkezik az utalás, már csomagoljuk is a rendelt termék(ek)et és a választott szállítási módon eljuttatjuk Önnek.</p>
        <p>Üdvözlettel,<br>Mr. Chili csapata</p>
        ${productTable(formInfo, productPrice, deliveryPrice, userCart)}
    </div>
`
}

export function returnStaffTemplate(formInfo, isAddressSame, productPrice, deliveryPrice, userCart) {
    const baseInfoFields = { "Név:": formInfo.name, "Email:": formInfo.email, "Telefon:": formInfo.phoneNumber, "Irányítószám:": formInfo.zipCode, "Település:": formInfo.city, "Utca, házszám:": formInfo.addressline, "Emelet, ajtó, stb:": formInfo.optionals ? formInfo.optionals : "-" }
    let userInfo = "<h2>Személyes információk és számlázási cím</h2>"
    for (let key in baseInfoFields) {
        userInfo += `<p><span style="font-weight: bold;">${key}</span> ${baseInfoFields[key]}</p>`
    }
    if (!isAddressSame) {
        userInfo += "<h2>Szállítási cím</h2>"
        const deliveryAddressFields = { "Irányítószám:": formInfo.deliveryZip, "Település:": formInfo.deliveryCity, "Utca, házszám:": formInfo.deliveryAddressline, "Emelet, ajtó, stb:": formInfo.deliveryOptionals ? formInfo.deliveryOptionals : "-" }
        for (let key in deliveryAddressFields) {
            userInfo += `<p><span style="font-weight: bold;">${key}</span> ${deliveryAddressFields[key]}</p>`
        }
    }
    if (formInfo.deliveryMethod == "delivery") {
        userInfo += `<p><span style="font-weight: bold;">Szállítási mód: </span>GLS Házhozszállítás</p>`
    } else if (formInfo.deliveryMethod == "pickup") {
        if (formInfo.pickupMethod == "gls") {
            userInfo += `<p><span style="font-weight: bold;">Szállítási mód: </span>GLS csomagautomata</p>`
        } else if (formInfo.pickupMethod == "foxpost") {
            userInfo += `<p><span style="font-weight: bold;">Szállítási mód: </span>Foxpost csomagautomata</p>`
        }
        userInfo += `<h3>Csomagpont info</h3>`
        const pickupInfoFields = { "Csomagautomata neve": formInfo.pickupPointInfo.name, "Csomagautomata ZIP:": formInfo.pickupPointInfo.zipCode, "Csomagautomata település:": formInfo.pickupPointInfo.city, "Csomagautomata címe:": formInfo.pickupPointInfo.location }
        for (let key in pickupInfoFields) {
            userInfo += `<p><span style="font-weight: bold;">${key}: </span>${pickupInfoFields[key]}</p>`
        }
    } else if (formInfo.deliveryMethod == "personal") {
        if (formInfo.personalPickupMethod == "bp") {
            userInfo += `<p><span style="font-weight: bold;">Szállítási mód: </span>Személyes felvétel - Budapest</p>`
        } else if (formInfo.personalPickupMethod == "nyh") {
            userInfo += `<p><span style="font-weight: bold;">Szállítási mód: </span>Személyes felvétel - Nyíregyháza</p>`
        } else if (formInfo.personalPickupMethod == "tisza") {
            userInfo += `<p><span style="font-weight: bold;">Szállítási mód: </span>Személyes felvétel - Tiszalök</p>`
        }
    }
    return userInfo + productTable(formInfo, productPrice, deliveryPrice, userCart)
}
