var name = window.prompt("What is your name?")
if (name === 'null' || name === ''){
    document.write(`Thanks for your time, please <a href="index.html">play again</a>`)
} else {
window.prompt(`Hi ${name}, please answer the quiz by typing "a", "b" or "c" as the options indicate. Press okay to continue`)

const questions = [
    [`${name}, what do Paleontologists study? Options are: a)Mountains b) Lost Civilizations c) Fossils `, "c" ],
    ["Ottawa is the capital of which country? a) Canada b) Japan c) India", 'a'],
    ['What is the supernova? Options are a) An intense lightening storm b) The eye of a tornado c) The explosion of a star', "c"],
    ["How are bats able to fly in the dark? is a) Echolocation b) X-ray vision c) Sixth sense", "a"],
    ["Who is the author 'Dreams from My Father' is? a) Obama b) Achebe c) Soyinka", "a"],
    ["What is the technical term for a lie-detector? a) Seismograph b) Polygraph c) Omnigraph", "b"],
    ["What is an echidna? a) A mammal native to Australia b) A Spanish Desert c) An edible remedy for pain relief", "a"],
    ["Who is Kylie Minogue? a) A French Scientist b) A Dutch-German actress c) An Australian British Singer", "c"],
    ["The hunchback of Notre Dame is named... a) Luffy b) Quasimodo c) Edwing", "b"],
    ["Correct term for a baby cod fish is a) Codling b) Fingerling c)Polliwog", "a"],
    ["In Greek mythology, who is the Goddess of Agriculture? a) Persephone b) Demeter c) Hygiela", "b"],
    ["What is Xylography? a) The art of making wood engravings b) The study of hieroglyphs c) The study of dreams", "a"],
    ["Which country is Dubrovnik located in? a) Bulgaria b) Romania c) Croatia", "c"],
    ["The official name of Thailand before 1939 was a) Ceylon b) Ankara c) Siam", "c"],
    ["What's the longest river in the world a) Amazon b) Mississippi  c) Nile", "b"],
]

var count = 0;
for (let i = 0; i < questions.length; i++){
    userInput = window.prompt(`${questions[i][0]}`, '')
    if (userInput === null || userInput === ''){
        document.write(`Thanks for your time, please <a href="index.html">play again</a>`)
        break;
    }
    if (userInput.toUpperCase() === questions[i][1].toUpperCase())
    count++; 
    else if (userInput.toUpperCase() === "Q"){
        break;
    }
}
document.write(`<h1 style="font-weight: "100px"">${name}, your Final score is ${count} / ${questions.length} </h1>`)
document.write(`Thanks for your time, please <a href="index.html">play again</a>`)
}