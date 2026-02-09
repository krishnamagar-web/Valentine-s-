let noCount = 0;

const noTexts = [
  "Please don't 🥺",
  "I will cry 😭",
  "Think again 🥹",
  "Are you sure? 😢",
  "I really love you, think again 🫂",
  "Gussa ho jaunga samjhi 😤"
];

function noClicked() {
  if (noCount < noTexts.length) {
    document.querySelector(".question").innerText = noTexts[noCount];
    document.getElementById("gif").src =
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGx4bHJ5d3Y4ZnlrNjA3dGQ5eXN3d3B6b2w5ZndyM3l0bWRyZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/OPU6wzx8JrHna/giphy.gif";
    noCount++;
  }
}

function yesClicked() {
  document.body.innerHTML = `
  <div class="container">
    <p class="question">
    Ye hamara pehla valentine hai long distance wala but agle wale valentine me ham sath hoge.
    Me tumhare liye gift launga badle me mujhe tumse kuch nahi chahiye kyuki mera gift to tum hi ho 🤭<br><br>
    Tum itni khaas ho ki duniya ki koi language nahi jisse main bata pau tum mere liye kitni khaas ho 🫂🫀<br><br>
    Tum mujhe pasand ho kyu pasand ho ye mat pucho bas pasand ho ❤️<br><br>
    Happy Valentine's Day Priyanshi 😚
    </p>
    <button class="yes" onclick="photos()">NEXT ➡️</button>
  </div>`;
}

function photos() {
  document.body.innerHTML = `
  <div class="container">
    <h2>Our Memories 💕</h2>

    <img src="IMG_20260209_095929.jpg"><p>Ye maine tumhare liye likha hua first love letter hai 🤭</p>

    <img src="IMG_20260209_095944.jpg"><p>Jab ham call pr soye the 🥹🫀</p>

    <img src="IMG_20260209_095914.jpg"><p>Dekho ham kitna baat karte the 🫂</p>

    <img src="Screenshot_20260209_100032.jpg"><p>Ye BGMI ki yaadein 🥰</p>

    <img src="IMG_20260209_095445.jpg"><p>Tumhare liye pehli baar phool banaya tha 🤭</p>
  </div>`;
}
