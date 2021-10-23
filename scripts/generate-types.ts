import { typeBundleForPolkadot } from "../src";
import { writeFile, mkdir, rmdir } from "fs/promises";
import { resolve as resolvePath } from "path";

async function main() {
  const bundleTypes = typeBundleForPolkadot.types;

  const generationPromises = bundleTypes.map(async (type) => {
    const startingVersion = type.minmax[0];
    const endingVersion = type.minmax[1];
    if (typeof startingVersion === "undefined") {
      throw new Error("No min version specified for type. Aborting.");
    }

    const fileName = `types${startingVersion}.json`;
    const dirPath = resolvePath(__dirname, "..", "types");

    // 1. Remove any directory leftover
    await rmdir(dirPath, { recursive: true });

    // 2. Create the expected directory
    await mkdir(dirPath, { recursive: true });

    // 3. Write each type definition within the directory
    const filePath = resolvePath(dirPath, fileName);
    console.log(`Writing type ${filePath}`);

    return writeFile(filePath, JSON.stringify(type.types, undefined, 2), {});
  });

  await Promise.all(generationPromises);
}

main().then(() => console.log("Type generation complete!"));
