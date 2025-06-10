function showDare(answer, questionNumber) {
  const dareBox = document.getElementById('dare');
  dareBox.classList.remove('hidden');

  const dares = {
    1: { a: "both removes underwear", b: "both removes uper half all clothes" },
    2: { a: "lick ur feet while on vc for 1 min", b: "lick ur hand for 2 mins seductively" },
    3: { a: "spank urself 10 times", b: "walk like a cat on 4 legs" },
    4: { a: "remove all clothes", b: "ask ur partner to remove all clothes" },
    5: { a: "squeez ur sweeties 30 times and moan", b: "show me ur baby" },
    6: { a: "keep showing ur baby and finger for 1 30 mins", b: "giive a dare of ur choice to ur partner" },
    7: { a: "get n doggy position and show ur ass", b: "ur partner willl get on doggy position and show ass" },
    8: { a: "I love you💓💓", b: "I love you💓💓" },
    9: { a: "send me a voice note moaning for 30 sec", b: "Say daddy 5 times seductively!" },
    10: { a: "gimme a dance show completely nude 2mins", b: "ur partner will give u a nude show for 2 mins" },
    11: { a: "split ur legs and show ur baby clearly while massaging her", b: "give ur partner dare of ur choice" },
    12: { a: "split ur legs and show ur baby clearly while massaging her", b: "split ur legs and show ur baby clearly while massaging her" },
    13: { a: "give ur partner dare of ur choice", b: "give ur partner dare of ur choice" },
    14: { a: "now both show their baby to each other", b: "both show their ass to each other " },
    15: { a: "start fingering ur baby", b: "u both start rubbing ur baby" },
    16: { a: "use spit and put one of ur finger inside ur baby for 2 mins", b: "start fingering with spit for 3 mins" },
    17: { a: "now both give each other 100 kisses", b: "now both give each other 100 kisses" },
    18: { a: "start fingering and rubbing both of u until both satisfied", b: "start fingering and rubbing both of u until both satisfied" }
  };

  dareBox.innerText = dares[questionNumber][answer];

  setTimeout(() => {
    dareBox.classList.add('hidden');
    document.getElementById(`q${questionNumber}`).classList.add('hidden');
    const next = document.getElementById(`q${questionNumber + 1}`) || document.getElementById('end');
    next.classList.remove('hidden');
  }, 3000);
}
