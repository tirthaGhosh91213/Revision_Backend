import { readFile, writeFile } from "fs/promises";
import { createServer } from "http";
import path from "path";
import crypto from "crypto";

const PORT = 3002;
const DETAIL_PATH = path.join("data", "links.json");

const saveLinks = async (links) => {
  await writeFile(DETAIL_PATH, JSON.stringify(links));
};

const loadLinks = async () => {
  try {
    const data = await readFile(DETAIL_PATH, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    if (error.code === "ENOENT") {
      await writeFile(DETAIL_PATH, JSON.stringify({}));
      return {};
    }
    throw error;
  }
};

const server = createServer(async (req, res) => {

  if (req.method === "GET" && req.url === "/") {
    const data = await readFile(path.join("public", "index.html"));
    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end(data);
  }

  if (req.method === "POST" && req.url === "/shortner") {
    const links = await loadLinks();
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", async () => {
      const { url, shortcode } = JSON.parse(body);

      if (!url) {
        res.writeHead(400, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ message: "URL is required" }));
      }

      const finalCode = shortcode || crypto.randomBytes(4).toString("hex");

      if (links[finalCode]) {
        res.writeHead(400, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ message: "Shortcode already exists" }));
      }

      links[finalCode] = url;
      await saveLinks(links);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ success: true, shortcode: finalCode }));
    });
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
