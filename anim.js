// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Close your eyes", time: 16 },
  { text: "Have no fear", time: 20 },
  { text: "The monster's gone", time: 24 },
  { text: "He's on the run ", time: 25 },
  { text: "and your daddy's here", time: 26 },
  { text: "Beautiful", time: 33 },
  { text: "beautiful", time: 33 },
  { text: "Beautiful boy", time: 36 },
  { text: "Beautiful", time: 42 },
  { text: "beautiful", time: 42 },
  { text: "beautiful", time: 42 },
  { text: "Beautiful boy", time: 45 },
  { text: "Before you go to sleep", time: 50 },
  { text: "Say a little prayer", time: 54 },
  { text: "Every day, in every way", time: 59 },
  { text: "It's getting better and better", time: 62 },
  { text: "Beautiful", time: 68 },
  { text: "beautiful", time: 68 },
  { text: "beautiful", time: 68 },
  { text: "Beautiful boy", time: 70 },
  { text: "Beautiful", time: 76 },
  { text: "beautiful", time: 76 },
  { text: "beautiful", time: 76 },
  { text: "Beautiful boy", time: 79 },
  { text: "Out on the ocean", time: 86 },
  { text: "sailing away", time: 90 },
  { text: "I can hardly wait", time: 94 },
  { text: "To see you come of age", time: 98 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 4
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);