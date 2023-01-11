const isValidString = function (value) {
    if (typeof value == "number" || typeof value == null || typeof value == undefined)
        return false
    if (typeof value == "string" && value.trim().length == 0)
        return false
    return true
}

const isValidMobile = function (mobile) {
    if (/^[0]?[789]\d{9}$/.test(mobile)) {
        return true
    }
}

const isValidName = function (name) {
    if (/^[a-zA-Z ,.'-]+$/.test(name)) {
        return true;
    }
}

const isValidPassword = function (pwd) {
    let passwordRegex =
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/;

    if (passwordRegex.test(pwd)) {
        return true;
    } else {
        return false;
    }
}

module.exports = { isValidMobile, isValidName, isValidPassword, isValidString }