const fs = require("fs");
const path = require("path");

const srcDir = path.join(__dirname);
const outputFile = path.join(__dirname, "..", "snippets", "csharp.json");

const jsonFiles = fs
  .readdirSync(srcDir)
  .filter((file) => file.endsWith(".json"));

console.log(`Found ${jsonFiles.length} JSON files to combine:`, jsonFiles);

const combinedSnippets = {};

jsonFiles.forEach((file) => {
  const filePath = path.join(srcDir, file);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const snippets = JSON.parse(fileContent);

  console.log(`Processing ${file}...`);

  Object.assign(combinedSnippets, snippets);
});

fs.writeFileSync(outputFile, JSON.stringify(combinedSnippets, null, 2), "utf8");
console.log(
  `\nSuccessfully combined ${
    Object.keys(combinedSnippets).length
  } snippets into ${outputFile}`
);
