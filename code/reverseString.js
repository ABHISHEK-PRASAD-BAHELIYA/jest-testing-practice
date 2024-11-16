function reverseString(str) {
    if(!str || typeof str !== "string") {
        return "";
    }
    return str.split("").reverse().join("");
}

module.exports = { reverseString };