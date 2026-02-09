let noCount = 0;

const noTexts = [
  "Please don't 😢",
  "I will cry 😭",
  "Think again 🥺",
  "Are you sure? 😟",
  "I really love you ❤️ Think again",
  "Piti piti kr dunga samjhi 😤"
];

const question = document.getElementById("question");
const gif = document.getElementById("gif");
const card = document.getElementById("card");

document.getElementById("noBtn").onclick = () => {
  if (noCount < noTexts.length) {
    question.innerText = noTexts[noCount];
    gif.src = "https://media.giphy.com/media/d2lcHJTG5Tscg/giphy.gif";
    noCount++;
  }
};

document.getElementById("yesBtn").onclick = () => {
  card.innerHTML = `
    <h2>❤️ For You ❤️</h2>
    <p>
    Ye hamara pehla valentine hai long distance wala,
    but agle wale valentine me ham sath honge.
    Me tumhare liye gift launga,
    badle me mujhe tumse kuch nahi chahiye
    kyunki mera gift tum hi ho 🤭<br><br>

    Tum itni khas ho ki duniya me koi aisi language nahi
    jisse me proof kar paun 🫂🫀<br><br>

    Tum mujhe pasand ho,
    kyu pasand ho ye mat pucho,
    bas pasand ho ❤️<br><br>

    Happy Valentine's Day Priyanshi 😚
    </p>

    <button class="back-btn" onclick="showPhotos()">Next ➡️</button>
  `;
};

function showPhotos() {
  card.innerHTML = `
    <h2>📸 Our Memories 💖</h2>

    <img src="IMG_20260209_095929.jpg">
    <p>Ye maine tumhare liye likha hua first love letter hai 🤭</p>

    <img src="IMG_20260209_095944.jpg">
    <p>Jab ham call pr soye the 🥹🫀</p>

    <img src="IMG_20260209_095914.jpg">
    <p>Dekho ham kitna baat karte the 🫂</p>

    <img src="Screenshot_20260209_100032.jpg">
    <p>Ye BGMI ki yaadein 🥰</p>

    <img src="IMG_20260209_095445.jpg">
    <p>Tumhare liye pehli baar phool banaya tha 🤭</p>

    <button class="back-btn" onclick="location.reload()">⬅️ Back</button>
  `;
}
