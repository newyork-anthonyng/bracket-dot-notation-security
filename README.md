# Security: Bracket notation versus Dot notation

This demo project shows the security differences between `bracket notation` and `dot notation` in JavaScript.

## Getting started
```shell
npm install

npm run start
```

## 🚨  Dot notation
Navigate to `http://localhost:8000/dot?name=a,alert("hi")`.

The `/dot` route uses `dot notation`. Notice how it runs arbitrary JavaScript.

## ✅  Bracket notation
Navigate to `http://localhost:8000/bracket?name=a,alert("hi")`.

The `/bracket` route uses `bracket notation`. Notice how it does not run arbitrary JavaScript.
