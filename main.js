import "./style.css";

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || webkitSpeechGrammarList;
const SpeechRecognitionEvent =
  window.SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

const colors = [
  "aqua",
  "azure",
  "beige",
  "bisque",
  "black",
  "blue",
  "brown",
  "chocolate",
  "coral",
  "red",
  "green",
  "yellow",
  "purple",
  "orange",
];

const grammar = `#JSGF V1.0; grammar colors; public <color> = ${colors.join(
  " | "
)};`;
