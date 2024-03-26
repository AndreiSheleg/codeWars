const meeting = s => {
    if (!s) {
        return ''
    }

    const uppercaseS = s.toUpperCase()

    const guests = uppercaseS.split(';')

    const guestObjects = guests.map(el => {
        const [firstName, lastName] = el.split(':')
        return { firstName, lastName }
    })

    guestObjects.sort((a, b) => {
        if (a.lastName !== b.lastName) {
            return a.lastName.localeCompare(b.lastName)
        } else {
            return a.firstName.localeCompare(b.firstName)
        }
    });

    const result = guestObjects.map(guest => `(${guest.lastName}, ${guest.firstName})`).join('');

    return result
}
