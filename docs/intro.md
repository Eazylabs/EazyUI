---
sidebar_position: 1
---

# Prerequisite

How to setup your project with Eazy UI?

- First make structure folder like this

```
.
├── index.html
├── root.css
└── style.css
```

- Then inside your html

```
<!doctype html>
<html>
  <head>
    <title>Page Title</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="root.css">
  </head>
  <body>
    <button type="button" class="btn btn-basic info"></button>
  </body>
</html>
```

- Then copy this css and paste in root.css

```
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: initial;
  border-radius: initial;
  background: initial;
  font-size: 16px;
  font-weight: 400;
  list-style: none;
  transition: all 150ms ease-in-out;
}

body {
  background-color: #f4f5f7;
  font-family: 'Plus Jakarta Sans', sans-serif;
}

.info {
  background-color: #4ba3e3;
  color: #fff;
}

.success {
  background-color: #14b789;
  color: #fff;
}

.warning {
  background-color: #ffd43b;
  color: #183153;
}

.danger {
  background-color: #e03131;
  color: #fff;
}

.neu {
  border: 1px solid #183153;
  box-shadow: 0px 4px 0px 0px #183153;
}

.primary {
  background-color: #fff;
  border: 1px solid #0ea5e9;
}
```

- Then go to our docs components and copy the code then paste in style.css

```
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 44px;
  border-radius: 8px;
  cursor: pointer;
}

.btn-basic {
  background-color: #4ba3e3;
  color: #fff;
}

.btn-basic:hover {
  background-color: #348fd0;
}
```

Congrats 🎉 you're Front End Developer now! Eazy right?
[Go to our components!](/docs/component)
