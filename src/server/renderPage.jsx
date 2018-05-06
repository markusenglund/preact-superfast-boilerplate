import { readFileSync } from "fs";
import { h } from "preact";
import renderToString from "preact-render-to-string";
import { renderStylesToString } from "emotion-server";
import App from "../app/components/App";

// Get the manifest which contains the names of the generated files. The files contain hashes
// that change every time they are updated, which enables aggressive caching.
const manifest = JSON.parse(
  readFileSync(`./dist/public/manifest.json`, "utf8")
);

const renderPage = (req, res) => {
  // This is where the magic happens
  const appString = renderStylesToString(renderToString(<App />));

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
        <meta name="description" content="An open source kanban application created with React and Redux. ">
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/static/favicons/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon-precomposed" sizes="152x152" href="/static/favicons/apple-touch-icon-152x152.png" />
        <link rel="icon" type="image/png" href="/static/favicons/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/static/favicons/favicon-16x16.png" sizes="16x16" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="msapplication-TileImage" content="/static/favicons/mstile-144x144.png" />
        <meta property="og:image" content="https://reactkanban.com/static/favicons/og-kanban-logo.png">
        <title>Home</title>
      </head>
      <body>
        <div id="app">${appString}</div>
      </body>
      <script src=${manifest["main.js"]}></script>
    </html>
  `;
  res.send(html);
};

export default renderPage;
