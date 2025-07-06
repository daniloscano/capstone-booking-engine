const html = (strings, ...values) => {
    strings.reduce(( result, str, i ) => result + str + (values[i] || ''), '')
}

const passwordReset = (username, link) => html``

const newMasterGuest = (firstName, lastName, link) => html``

const newUser = (username, link) => html``

module.exports = {
    passwordReset,
    newMasterGuest,
    newUser
}