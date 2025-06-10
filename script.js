function showDare(answer, questionNumber) {
  const dareBox = document.getElementById('dare');
  dareBox.classList.remove('hidden');

  const dares = {
    1: { a: "Send your cutest selfie now!", b: "Send a pic of your dreamy eyes!" },
    2: { a: "Draw us on the beach together!", b: "Write me a sweet café date text!" },
    3: { a: "Say 'I love you' under the moon tonight.", b: "Send a love poem with heart emojis." },
    4: { a: "Say 'I love you' 3 times right now!", b: "Say 'I love you more' in voice note." },
    5: { a: "Send me a night stargazing plan.", b: "Send a 'rainy cuddle' selfie!" },
    6: { a: "Send me 3 cute compliments.", b: "Plan a 30-min video call tonight!" },
    7: { a: "Draw us as penguins!", b: "Send a bird couple meme!" },
    8: { a: "Pick a movie for tonight!", b: "Send a dinner menu suggestion!" },
    9: { a: "Call me Boo in your next text 💬", b: "Say 'Pookie' 5 times cutely!" },
    10: { a: "Kiss me next time we meet 😘", b: "Send a 10-second hug emoji flood!" },
    11: { a: "Buy me chocolate next time 😋", b: "Send me an ice cream date plan!" },
    12: { a: "Record a voice note calling me Baby 💕", b: "Send a pic of my name as 'Love' in your phone." },
    13: { a: "Send a romantic slow dance reel 💃", b: "Send a 10-sec dance video!" },
    14: { a: "Make me a dish this weekend 🍲", b: "Rate my cooking out of 10 now!" },
    15: { a: "Plan a binge-watch list with me!", b: "Send a sleepy emoji selfie!" },
    16: { a: "Write a short love note ✍️", b: "Send a teddy bear photo!" },
    17: { a: "Send me 'our song' today 🎵", b: "Send a funny meme that screams 'us'" },
    18: { a: "Propose to me in 5 cute emojis 💍💖", b: "Text: 'Forever started the day I met you.'" }
  };

  dareBox.innerText = dares[questionNumber][answer];

  setTimeout(() => {
    dareBox.classList.add('hidden');
    document.getElementById(`q${questionNumber}`).classList.add('hidden');
    const next = document.getElementById(`q${questionNumber + 1}`) || document.getElementById('end');
    next.classList.remove('hidden');
  }, 3000);
}
