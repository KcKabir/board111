var Sounds = {
    a: "a",
    s: "c",
    d: "d",
    f: "p2",
    g: "p3",
    h: "PB",
    j: "s"
};


var Songs1 = document.querySelectorAll(".key").length;

for (i = 0; i < Songs1; i++){
    document.querySelectorAll(".key")[i].addEventListener("click", function() {
        var keyClass = this.classList[1];
        var name = Sounds[keyClass];
        if (name){
            playSound(name);
            console.log(name);
        }
    });
}
document.addEventListener("keydown", function(event) {
    var hey = event.key.toLowerCase();
    if (Sounds[hey]){
        playSound(Sounds[hey]);
        console.log(Sounds[hey]);
    }
})


function playSound(word) {
  const audio = new Audio(word + ".mp3");
  audio.play();

  // Add visual animation
  const keyDiv = document.querySelector(`.key[data-key="${word}"]`);
  if (keyDiv) {
    keyDiv.classList.add("active");

    // Remove the class after 150ms
    setTimeout(() => {
      keyDiv.classList.remove("active");
    }, 150);
  }
}
