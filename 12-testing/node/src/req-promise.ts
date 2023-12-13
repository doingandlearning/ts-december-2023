import { setTimeout } from "timers/promises";

export default async function fakeFetch(url: string) {
  await setTimeout(300);
  if (url === "http://error.com") throw Error("network error");
  return Buffer.from("some data");
}

// **/__tests__/**/*.[jt]s?(x), **/?(*.)+(spec|test).[tj]s?(x)

// js jsx ts tsx

//  .spec.js .spec.jsx .spec.ts .spec.tsx     .test.js .spec.jsx
