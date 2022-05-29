function defineSuit(card) {
    let cardArr=card.split("");
    if  (cardArr[cardArr.length-1]==='♣')  return 'clubs';
    if (cardArr[cardArr.length-1]==='♦')  return 'diamonds';
    if (cardArr[cardArr.length-1]==='♥') return 'hearts';
    if (cardArr[cardArr.length-1]==='♠') return 'spades';
}