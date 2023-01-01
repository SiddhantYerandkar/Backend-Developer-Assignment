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

const isValidPincode = function (pincode) {
    if (/^[1-9][0-9]{5}$/.test(pincode)) {
        return true
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

const isValidAge = function (Age) {
    if (/^[1-9]?[0-9]{1}$|^100$/.test(Age)) {
        return true
    }
}

const isValidAdhaar = function (AadharNo) {
    if (/^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/.test(AadharNo)) {
        return true
    }
}

module.exports = { isValidMobile, isValidName, isValidPassword, isValidPincode, isValidString, isValidAge, isValidAdhaar }