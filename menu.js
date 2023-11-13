import { getQuestion } from "./readline.js";
import {
    figurEtt,
    figurTvå,
    figurTre,
    figurFyra,
    figurFem,
    figurSex,
    figurSju,
    figurOtta,
    figurNio,
    figurTio,
} from "./script.js";

const [question, close] = getQuestion();

let input = "";
while (input !== "q") {
    console.log();
    console.log("Huvudmeny. Välj ett alternativ:");
    console.log("1. Figur 1");
    console.log("2. Figur 2");
    console.log("3. Figur 3");
    console.log("4. Figur 4");
    console.log("5. Figur 5");
    console.log("6. Figur 6");
    console.log("7. Figur 7");
    console.log("8. Figur 8");
    console.log("9. Figur 9");
    console.log("10. Figur 10");
    console.log("Q. Avsluta");
    input = await question("> ");
    input = input.toLowerCase();

    if (input === "q") {
        console.log("Avslutar...");
        break;
    } else if (input === "1") {
        figurEtt();
    } else if (input === "2") {
        figurTvå();
    } else if (input === "3") {
        figurTre();
    } else if (input === "4") {
        figurFyra();
    } else if (input === "5") {
        figurFem();
    } else if (input === "6") {
        figurSex();
    } else if (input === "7") {
        figurSju();
    } else if (input === "8") {
        figurOtta();
    } else if (input === "9") {
        figurNio();
    } else if (input === "10") {
        figurTio();
    } else {
        console.log("Ogiltigt val. Programmet avslutas.");
        break;
    }
}

close();
