const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = Number(process.env.PORT || 4173);

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon"
};

function resolveRequest(url) {
  const parsed = new URL(url, `http://localhost:${port}`);
  if (parsed.pathname === "/_next/image") {
    const source = parsed.searchParams.get("url");
    if (source) {
      const imagePath = path.join(root, decodeURIComponent(source).replace(/^\/+/, ""));
      if (imagePath.startsWith(root) && fs.existsSync(imagePath)) return imagePath;
    }
  }

  const pathname = decodeURIComponent(parsed.pathname);
  const clean = pathname.replace(/^\/+/, "");
  const direct = path.join(root, clean);

  if (!direct.startsWith(root)) return null;
  if (fs.existsSync(direct) && fs.statSync(direct).isFile()) return direct;

  const indexPath = path.join(direct, "index.html");
  if (indexPath.startsWith(root) && fs.existsSync(indexPath)) return indexPath;

  return path.join(root, "index.html");
}

const server = http.createServer((req, res) => {
  const filePath = resolveRequest(req.url);

  if (!filePath) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }

    const type = types[path.extname(filePath).toLowerCase()] || "application/octet-stream";
    res.writeHead(200, { "Content-Type": type });
    res.end(data);
  });
});

server.listen(port, () => {
  console.log(`Meu Labs clone running at http://localhost:${port}`);
});
