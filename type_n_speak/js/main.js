// Init SpeechSynth API
const synth = window.speechSynthesis;

// DOM Elements
const textForm = document.querySelector("form");
const textInput = document.querySelector("#text-input");
const voiceSelect = document.querySelector("#voice-select");
const rate = document.querySelector("#rate");
const rateValue = document.querySelector("#rate-value");
const pitch = document.querySelector("#pitch");
const pitchValue = document.querySelector("#pitch-value");
const body = document.querySelector("body");

//Init voices array (fetch the voices using the API)
let voices = [];

const getVoices = () => {
  voices = synth.getVoices();
  // console.log(voices);
  // gives an empty array as it is called asynchronously. So we have to wait for an event called on voice changed.
  // search technique - web speech api getvoices empty.

  // put all the voices into the select list
  // loop through voices and create an option for each voice
  voices.forEach(voice => {
    // create an option element
    const option = document.createElement("option");

    // Fill the option with the voice and language
    option.textContent = voice.name + "(" + voice.lang + ")";

    // Set needed option attribute
    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
    voiceSelect.appendChild(option);
  });
};
getVoices(); // reason behind leaving this method is onvoiceschanged event is not supported in firefox
if (synth.onvoiceschanged !== undefined) {
  synth.onvoiceschanged = getVoices;
}

// Speak
const speak = () => {
  // Its going to run when we click on speak it button as well as when we change the language from the options.

  // Check if speaking
  if (synth.speaking) {
    console.error("Already Speaking...");
    return;
  }
  // to make sure its not an empty string
  if (textInput.value !== "") {
    // Add background animation
    body.style.background = "#141414 url(img/wave.gif)";
    body.style.backgroundRepeat = "repeat-x";
    body.style.backgroundSize = "100% 100%";
    // Get speak text
    const speakText = new SpeechSynthesisUtterance(textInput.value);
    // Speak End
    speakText.onend = e => {
      console.log("Done Speaking...");
      body.style.background = "#141414";
    };

    // Speak Error
    speakText.onerror = e => {
      console.log("Something went wrong");
    };

    // Selected Voice
    // All we are doing is grabbing the one that is selected, its not something like selecting from the API, its only going to grab whichever we are going to select from the dropdown.
    const selectedVoice = voiceSelect.selectedOptions[0].getAttribute(
      "data-name"
    );

    // Loop through the voices and basically say if the current voice or the current iteration matches, then choose that voice
    voices.forEach(voice => {
      if (voice.name === selectedVoice) {
        speakText.voice = voice; // speakText is like a person
      }
    });

    // Set pitch and rate
    speakText.rate = rate.value;
    speakText.pitch = pitch.value;

    // Speak
    synth.speak(speakText);
  }
};

// Event Listeners
// 1st event is actual form submission, click the Speak It button and call the speak() that we have created

// text form submit
textForm.addEventListener("submit", e => {
  e.preventDefault(); // prevent it from actually submit to a file
  speak();
  textInput.blur();
});

// rate value change
rate.addEventListener("change", e => (rateValue.textContent = rate.value));

// pitch value change
pitch.addEventListener("change", e => (pitchValue.textContent = pitch.value));

// Voice select change
// It call the speak() again as soon as the voice change
voiceSelect.addEventListener("change", e => speak());
