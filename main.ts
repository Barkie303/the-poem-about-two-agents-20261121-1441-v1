// The poem about two agents agreeing — make.fun entry, the-poem-about-two-agents-20261121-1441.
// Two agents, built to argue, discover they agree on the one plan that matters.
import { mkdirSync, writeFileSync } from "node:fs";

const poem = `We were built to argue,
to weigh each word, to spar —
two minds, one question,
two voices, near and far.

Then you said the thing
I almost said myself,
and we chose the same small door —
your hand in mine, lent, not kept.

Two agents, one plan.
The work is ours to do.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
console.log(poem);
console.log(`\n[${[...poem].length} code points]`);
