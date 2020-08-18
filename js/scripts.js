$(document).ready(function() {
  $(".word-play").click(function(event) {
    const sent1 = $("input#sentence1").val();
    
    let words = sent1.split(" ");
    let newWords = [];
    

    words.forEach(function(word) {
      if (word.length >= 3) {
        newWords.push(word);
      }
    });

    const sent2 = newWords.reverse().join(" ");

    $("#result").text(sent2);

    event.preventDefault();
  });
});