const express = require("express");
const app = express();

app.get("/dot", (req, res) => {
    // http://localhost:8000/dot?name=a,alert("hi")
    const name = req.query.name;

    res.send(`
        <html>
            <body>
                <h1>${name}</h1>

                <script>
                    const myCharacter = {
                        name: "Clifford",
                        species: "dog",
                        color: "red"
                    };

                    const value = myCharacter.${name};
                </script>
            </body>
        </html>
    `);
});

const sanitize = (str = "") => {
    // 😂 This is a naive sanitize function. Do not use in production.
    const SANITIZE_REGEX = /"/g;

    return str.replace(SANITIZE_REGEX, "");
};

app.get("/bracket", (req, res) => {
    // http://localhost:8000/bracket?name=a,alert("hi")
    const name = sanitize(req.query.name);

    res.send(`
        <html>
            <body>
                <h1>${name}</h1>

                <script>
                    const myCharacter = {
                        name: "Clifford",
                        species: "dog",
                        color: "red"
                    };

                    const value = myCharacter["${name}"];
                </script>
            </body>
        </html>
    `);
});

const listener = app.listen(8000, () => {
    console.log(`Server listening on ${listener.address().port}`);
});