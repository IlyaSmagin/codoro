const phrases = {
  init: [
    "Think before write!",
    "Compose mindfully!",
    "Find a fresh approach",
    "Keep calm and carry on",
    "Just do it",
    "Beginnig is here",
    "Ready to go?",
    "It's time to start!",
    "Start a habbit",
    "3, 2, 1... Code!",
  ],
  wait: [
    "Keep it up!",
    "Let your eyes rest",
    "Wait a minute",
    "Think about it",
    "Finish what you started!",
    "You may need to continue",
    "The only thing stoping you is you",
    "Finish what you started!",
    "Ready to continue?",
    "Are you done already?",
  ],
  work: [
    "You are doing great!",
    "Stay focused",
    "Do not forget why you here",
    "Concentrate on your goal",
    "It's not finished yet",
    "Keep coding!",
    "Do not stop",
    "Till the end",
    "Keep it up",
    "Do not lose your approach!",
  ],
  reset: [
    "Ready for another?",
    "Go again?",
    "Practice makes perfect",
    "The result is irrelevant if the effort was there",
    "Do not lose the macro, focus on the micro",
    "Press start",
    "Turn a new leaf",
    "Never surrrender",
    "Never stop forever",
    "Find a new angle!",
  ],
  edit: [
    "Input custom time frame",
    "Change a pace",
    "Find your rhythm",
    "Adapt tool to your needs",
    "Choose your tempo",
    "One step at a time",
    "Timer starts with 0",
    "Don't go negative",
    "Time your work",
    "Keep it short",
  ],
};
export function getPhrase(type) {
  return phrases[type][Math.floor(Math.random() * 10)];
}
