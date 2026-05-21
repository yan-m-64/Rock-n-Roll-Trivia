Here's the complete `app.js` — raw JavaScript, ready to drop in alongside the HTML. Here's what it does:

**Question bank** — 36 questions across all 8 bands (Sum 41, Linkin Park, Breaking Benjamin, Escape the Fate, Falling in Reverse, Set It Off, Fall Out Boy, Pierce the Veil), covering band history, albums, lyrics, and lore. Each game draws 20 randomly shuffled questions.

**Game loop**
- Shuffles questions and answer choices independently each game
- 20-second countdown timer bar per question (CSS transition-based, smooth)
- Immediate correct/wrong highlight on answers + timeout handling
- Score increments and updates live in the header

**Feedback overlay**
- Correct → `correct-bg` class, 🤘 icon, skeleton `dancing` class added to trigger your CSS animation
- Wrong / timeout → `wrong-bg` class, ☠️ icon, skeleton hidden
- Auto-advances after 2.2 seconds

**End screen** — final score out of 20 with a verdict message that scales from "Are you sure you're at the right trivia?" to "PERFECT SCORE! You're a rock god!"

You'll need `style.css` to wire up the `.dancing` class on `.skeleton` (CSS keyframe animation for the skeleton parts) and the `.correct-bg` / `.wrong-bg` overlay colors. Want me to generate `style.css` next?