import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";
import crypto from "crypto";
import express from "express";

const app = express();
const PORT = 3002;

// Ensure data folder exists
await mkdir("data", { recursive: true });

const DETAIL_PATH = path.join("data", "links.json");

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// ================= HOME ROUTE =================
app.get("/", async (req, res) => {
  try {
    const file = await readFile(path.join("public", "index.html"), "utf-8");
    const links = await loadLinks();

    const listItems = Object.entries(links)
      .map(([shortCode, url]) => `
        <li>
          <a href="/${shortCode}" target="_blank" rel="noopener noreferrer">
            ${req.protocol}://${req.get("host")}/${shortCode}
          </a> - ${url}
        </li>
      `)
      .join("");

    const content = file.replace("{{shortened_url}}", listItems);

    res.send(content);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// ================= CREATE SHORT URL =================
app.post("/", async (req, res) => {
  try {
    const { url, shortCode } = req.body;

    // validation
    if (!url) {
      return res.status(400).send("URL is required");
    }

    const finalShortCode =
      shortCode || crypto.randomBytes(4).toString("hex");

    const links = await loadLinks();

    if (links[finalShortCode]) {
      return res.status(400).send("Short code already exists");
    }

    links[finalShortCode] = url;

    await saveLinks(links);

    return res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// ================= REDIRECT =================
app.get("/:shortCode", async (req, res) => {
  try {
    const { shortCode } = req.params;

    const links = await loadLinks();

    if (!links[shortCode]) {
      return res.status(404).send("Short URL not found");
    }

    return res.redirect(links[shortCode]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// ================= FILE HELPERS =================
const saveLinks = async (links) => {
  await writeFile(DETAIL_PATH, JSON.stringify(links, null, 2));
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

// ================= START SERVER =================
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});