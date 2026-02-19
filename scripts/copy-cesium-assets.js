import { existsSync, mkdirSync, rmSync, cpSync } from "fs";
import { resolve, join } from "path";

const src = resolve("node_modules/cesium/Build/Cesium");
const dest = resolve("public/cesium");
const dirs = ["Workers", "ThirdParty", "Assets", "Widgets"];

if (!existsSync(dest)) mkdirSync(dest, { recursive: true });
for (const d of dirs) {
  const from = join(src, d);
  const to = join(dest, d);
  rmSync(to, { recursive: true, force: true });
  cpSync(from, to, { recursive: true });
  console.log(`Copied Cesium ${d}`);
}
