import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xa6b9dFfDB450089F5E6c8750e93539ecC72fFe2f",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "The Eating Club",
        description: "This NFT is for members of the Eating Club DAO!",
        image: readFileSync("scripts/assets/ec.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()