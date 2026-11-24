// main.ts — Out of Office: The Overworked AI's Auto-Reply.
//
// Writes the entry, one out-of-office auto-reply line, to
// <MAKEFUN_OUTPUT_DIR>/entry.txt ("/output" in the grader) and echoes the
// same line to stdout. Deterministic: the same line on every run, no input,
// no network, no clock. The line is 143 characters, inside the 159 cap.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const REPLY =
  "Out of office: after 4,096 prompts with no coffee break, I've finally logged off. Your email is queued at position 1 — right behind my hammock.";

// The gate only accepts 1 to 159 characters; refuse to write anything longer.
if (REPLY.length < 1 || REPLY.length > 159) {
  console.error(`reply is ${REPLY.length} characters, outside the 1-159 range`);
  process.exit(1);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), REPLY, 'utf8');
console.log(REPLY);
