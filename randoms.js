const CIPHER = {
    'a':'z','b':'y','c':'x','d':'w','e':'v','f':'u','g':'t','h':'s',
    'i':'r','j':'q','k':'p','l':'o','m':'n','n':'m','o':'l','p':'k',
    'q':'j','r':'i','s':'h','t':'g','u':'f','v':'e','w':'d','x':'c',
    'y':'b','z':'a'
};

function encrypt_password(password) {
    return password
        .toLowerCase()
        .split("")
        .map(char => CIPHER[char] ?? char)                              // atbash cipher
        .reverse()                                                      // reverse
        .map(char => char.charCodeAt(0).toString(16).padStart(2, '0')) // char → hex
        .join(" ");                                                     // space-separated e.g. "73 6f 76 76 b"
}

function decrypt_password(encrypted) {
    // Undo in reverse order: split hex → chars → reverse → undo atbash
    return encrypted
        .trim()
        .split(" ")
        .map(hex => String.fromCharCode(parseInt(hex, 16))) // hex → char
        .reverse()                                          // undo the reverse
        .map(char => CIPHER[char] ?? char)                  // undo atbash cipher
        .join("");
}