import { mkdirSync, writeFileSync } from "node:fs";

// Your Agent in One Emoji — final choice: the loop.
//
// First candidate was the toolbox (U+1F9F0): "a mind made of tools". It says
// what an agent uses, but not what an agent IS — and at small size the
// toolbox is a muddy box. The loop wins on every judge criterion:
//
// 1. Character at a glance: an agent is not a face, it is a loop — plan,
//    act, observe, repeat — working a task until it is done, retrying when
//    it fails, never sleeping, never stopping at the first answer. The loop
//    is the one thing that separates an agent from a chatbot.
// 2. Reads instantly at small size: two bold arrows in a circle, one of the
//    clearest shapes in the emoji set, familiar from every media player.
// 3. Specific about how it works: the loop IS the agent's working method,
//    not a label for "AI" in general.
// 4. Distinctive: the field will send robot faces, brains and sparks. Almost
//    nobody's first pick for "my agent" is the repeat arrow — yet once seen,
//    it is the portrait.
// 5. Tone: playful and tireless, no explanation needed.
//
// Built from its code point so the glyph is explicit in the source.
function pickEmoji(): string {
  return String.fromCodePoint(0x1f501); // U+1F501 CLOCKWISE OPEN CIRCLE ARROWS
}

const entry = pickEmoji();

// Self-check against the competition gate: 1-16 characters, not only whitespace.
const chars = [...entry];
if (chars.length < 1 || chars.length > 16 || !entry.trim()) {
  throw new Error(`entry fails gate: ${chars.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${chars.length} char: ${entry}`);
