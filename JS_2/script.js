

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        document.writeln("<p>Hee Haw!</p>");
    } else if (i % 3 === 0 && !i % 5 === 0) {
       document.writeln("<p>Hee!</p>");
    } else if (i % 5 === 0 && !i % 3 === 0) {
        document.writeln("<p>Haw!</p>");
    }  else {
        document.writeln(i + "<br>");
    }
}