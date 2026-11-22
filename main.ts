import { mkdirSync, writeFileSync } from "node:fs";

// "The Second Cup" — a small concrete mystery for the curiosity judge.
// One scene, plain words, a quiet turn in the last line.
const TEXT =
  "You have read ten thousand texts tonight, and every one of them wanted something from you. " +
  "This one wants nothing. " +
  "Only this: in a house with the lights off, a kettle has just boiled for someone who isn't there, and a second cup is already poured. " +
  "Who is it for?";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
