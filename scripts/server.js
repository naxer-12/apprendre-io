const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

// Parse CLI args
const args = process.argv.slice(2);
let mode = 'dev';
let port = 8086;

args.forEach(arg => {
  if (arg.startsWith('--mode=')) mode = arg.split('=')[1];
  else if (arg === '--dev') mode = 'dev';
  else if (arg === '--prod') mode = 'prod';
  else if (arg.startsWith('--port=')) port = parseInt(arg.split('=')[1], 10);
});

if (mode === 'prod' && !args.some(a => a.startsWith('--port='))) {
  port = 8085;
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.txt': 'text/plain; charset=utf-8'
};

const server = http.createServer((req, res) => {
  const urlPath = req.url.split('?')[0];
  let safePath = path.normalize(decodeURIComponent(urlPath)).replace(/^(\.\.[\/\\])+/, '');
  
  if (safePath === '/' || safePath === '\\') {
    safePath = '/index.html';
  }

  const filePath = path.join(ROOT_DIR, safePath);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(`404 Not Found: ${urlPath}`);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    const headers = {
      'Content-Type': contentType,
      'X-Environment': mode === 'dev' ? 'development' : 'production'
    };

    if (mode === 'dev') {
      headers['Cache-Control'] = 'no-store, no-cache, must-revalidate, max-age=0';
      headers['Pragma'] = 'no-cache';
      headers['Expires'] = '0';
    } else {
      headers['Cache-Control'] = 'public, max-age=3600';
    }

    // CORS for local development
    headers['Access-Control-Allow-Origin'] = '*';
    headers['Access-Control-Allow-Methods'] = 'GET, HEAD, OPTIONS';

    res.writeHead(200, headers);
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(port, () => {
  const label = mode === 'dev' ? 'DEV SERVER' : 'PROD SERVER';
  const notes = mode === 'dev' ? '(Live Anti-Caching enabled)' : '(Production Cache Policy)';
  console.log(`[${label}] Active at http://localhost:${port} ${notes}`);
  console.log(`[${label}] Serving root: ${ROOT_DIR}`);
});
