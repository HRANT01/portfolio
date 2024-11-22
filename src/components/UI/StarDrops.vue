<template>
  <div class="stardrop-container">
    <span
      v-for="n in 150"
      :key="n"
      :style="getRandomStyle()"
      class="stardrop z-0"
    >
      {{ getRandomSymbol() }}
    </span>
  </div>
</template>

<script setup>
/**
 * Array of code symbols to display as stardrops.
 */
const codeSymbols = [
  "</>",
  "&&",
  "||",
  "{ }",
  "[ ]",
  "=>",
  "===",
  "!==",
  "const",
  "let",
  "function",
  "return",
  "if",
  "else",
  "for",
  "while",
];

/**
 * Function to randomly select a symbol from the codeSymbols array.
 */
const getRandomSymbol = () => {
  const randomIndex = Math.floor(Math.random() * codeSymbols.length);
  return codeSymbols[randomIndex];
};

/**
 * Function to generate random styles for each stardrop.
 */
const getRandomStyle = () => {
  const left = Math.random() * 100; // Random left position (0-100%)
  const startTop = Math.random() * -100; // Random start between -100px and 0px
  const delay = Math.random() * 15; // Random animation delay (0-15s)
  const duration = Math.random() * 10 + 10; // Duration between 10-20s
  const size = Math.random() * 10 + 10; // Random size between 10px and 20px
  const rotation = Math.random() * 360; // Random rotation for each symbol
  return {
    left: `${left}%`,
    top: `${startTop}px`, // Random start position off-screen
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`, // Smooth duration to prevent abrupt ends
    fontSize: `${size}px`,
    transform: `rotate(${rotation}deg)`,
    opacity: 0, // Start invisible; opacity will be handled in the animation
  };
};
</script>

<style scoped>
.stardrop-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; /* Prevent interference with page interactions */
  overflow: hidden;
  z-index: 0; /* Ensure it stays in the background */
}

/* Styling for each stardrop (symbol) */
.stardrop {
  position: absolute;
  animation: fall linear infinite; /* Smooth, infinite animation */
  color: rgba(0, 255, 127, 0.3); /* Transparent green */
  font-family: monospace; /* Use monospace font for code symbols */
}

/* Keyframes to animate the falling */
@keyframes fall {
  0% {
    transform: translateY(0);
    opacity: 0; /* Start invisible */
  }
  10% {
    opacity: 1; /* Fade in quickly */
  }
  90% {
    opacity: 1; /* Stay visible for most of the fall */
  }
  100% {
    transform: translateY(110vh); /* Drop beyond the bottom of the screen */
    opacity: 0; /* Fade out smoothly */
  }
}
</style>
