
(function () {

    var names = ["Yaakov", "john", "jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "jim"];
    
    for (var i = 0; i < names.length; i++) {
    
      var firstLetter = names[i].charAt(0).toLowerCase();
    
      if (firstLetter === 'j') {
        var speakWord2 = "Good Bye";
        function speak(names) {
          console.log(speakWord2 + " " + names);
        }
        speak(names[i]);
      } else {
        var speakWord1 = "Hello";

function speak(names) {
  console.log(speakWord1 + " " + names);
}
        speak(names[i]);
      }
    }
    
    })();