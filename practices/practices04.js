let data = 'A'; 
let text = data.toLowerCase();

if (!Number(text) || !' ') {
    if (text.includes('a') ||
        text.includes('e') ||
        text.includes('i') ||
        text.includes('o') ||
        text.includes('u'))
      {
        console.log(`${data} is a vowel`);
    }
    else console.log(`${data} is not a vowel`);
}
else {
    console.log('INVALID INPUT');
}



let s6 = "$";
if (
  (s6.charCodeAt() >= 33 && s6.charCodeAt() <= 47) ||
  (s6.charCodeAt() >= 58 && s6.charCodeAt() <= 64) ||
  (s6.charCodeAt() >= 91 && s6.charCodeAt() <= 96) ||
  (s6.charCodeAt() >= 123 && s6.charCodeAt() <= 126)
)
  console.log(`${s6} it is a special character`);
else if (Number(s6)) console.log(`${s6} it is a digit`);
else if (s6 === " ") console.log(`${s6} it is a whitespace`);
else console.log(`${s6} it is a letter`);



