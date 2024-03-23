let passwordLength = document.getElementById('passwordLength');
let password = document.getElementById('password');
let saveButton = document.getElementById('saveButton');

const generatePassword = (len) => {
    const lowerAlphabet = "abcdeefghijklmnopqrstuvwxyz"
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numeric = "1234567890"
    const symbol = "!@#$%^&*()_+=-{}[];:'<>,./?~`"

    const data = lowerAlphabet + upperAlphabet + numeric + symbol
    let generator = '';
    for (let index = 0; index < len; index++) {
        generator += data[~~(Math.random() * data.length)];
    }
    return generator
}

const getPassword = () => {
    const newPassword = generatePassword(passwordLength.value)
    password.value = newPassword
    alert('password has ben generated!');
}

function savePassword() {
    document.title = password.value;
    saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`Password telah Disimpan: ${document.title}`))
    saveButton.setAttribute('download', 'MyPasswordLOG.txt')
    setTimeout(() => {
        alert('berhasil disimpan')
    }, 1000)
}