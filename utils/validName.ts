const validNameRegex = /^[a-zA-Z]+(?:-[a-zA-Z]+)*(?: [a-zA-Z]+(?:-[a-zA-Z]+)*)*$/;

function isValidName(name: string) {
    return validNameRegex.test(name);
}

export default isValidName