document.getElementById("calculateButton")?.addEventListener("click", () => {
    const string1 = (document.getElementById("stringInput1") as HTMLInputElement).value;
    const string2 = (document.getElementById("stringInput2") as HTMLInputElement).value;
    const operation = (document.getElementById("operation") as HTMLSelectElement).value;
    let result: string | number = "";

    switch (operation) {
        case "length":
            result = `Length of string: ${string1.length}`;
            break;

        case "concat":
            result = `Concatenated string: ${string1.concat(string2)}`;
            break;

        case "charAt":
            const charAtIndex = parseInt(prompt("Enter the index to find the character:") || "0", 10);
            result = `Character at index ${charAtIndex}: ${string1.charAt(charAtIndex)}`;
            break;

        case "charCodeAt":
            const charCodeAtIndex = parseInt(prompt("Enter the index to find the character code:") || "0", 10);
            result = `Character code at index ${charCodeAtIndex}: ${string1.charCodeAt(charCodeAtIndex)}`;
            break;

        case "substr":
            const substrStart = parseInt(prompt("Enter the start index for substring:") || "0", 10);
            const substrLength = parseInt(prompt("Enter the length of the substring:") || "0", 10);
            result = `Substring: ${string1.substr(substrStart, substrLength)}`;
            break;

        case "slice":
            const sliceStart = parseInt(prompt("Enter the start index for slicing:") || "0", 10);
            const sliceEnd = parseInt(prompt("Enter the end index for slicing (optional):") || "0", 10);
            result = `Sliced string: ${string1.slice(sliceStart, sliceEnd)}`;
            break;

        case "indexOf":
            result = `Index of "${string2}" in string: ${string1.indexOf(string2)}`;
            break;

        case "replace":
            const searchValue = prompt("Enter the string to be replaced:");
            const newValue = prompt("Enter the new string:");
            result = `Replaced string: ${string1.replace(searchValue || "", newValue || "")}`;
            break;

        default:
            result = "Invalid operation!";
    }

    const resultDiv = document.getElementById("result");
    if (resultDiv) {
        resultDiv.textContent = result.toString();
    }
});
