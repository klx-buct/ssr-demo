import App from 'components/App';
import ReactDOMServer from 'react-dom/server';
import React from 'react';

const express = require('express');
const app = express();
const port = 8888;

app.use(express.static('public'));

const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'klx',
        sex: 1
      })
    }, 1000);
  })
}

app.get('/', (req, res) => {
  res.setHeader("Content-Type", "text/html");
  Promise.all([getData()]).then(values => {
    const htmlString = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script>
          window.data = ${JSON.stringify({people: values[0]})}
        </script>
        <link rel="stylesheet" href="main.css">
      </head>
      <body>
        <div id="root">${ReactDOMServer.renderToString(<App data={values[0]}/>)}</div>
        <script src="bundle.browser.js"></script>
      </body>
      </html>
    `
    res.send(htmlString)
  })
})

app.listen(port, () => {
  console.log('[server] listen http://localhost:8888');
})
