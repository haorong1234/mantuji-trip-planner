const fs = require('fs');
const html = fs.readFileSync('D:/mywork/mantuji-site/dist/index.html', 'utf8');
const data = fs.readFileSync('D:/mywork/mantuji-site/dist/cards.js', 'utf8');
const scripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)]
  .map((m) => m[1]).filter((s) => s.trim());
new Function('window', data)({});
for (const script of scripts) new Function(script);
const cardMatch = data.match(/"category":"/g) || [];
console.log(JSON.stringify({ inlineScripts: scripts.length, cardRecords: cardMatch.length, ok: true }));
