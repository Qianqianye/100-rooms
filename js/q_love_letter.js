      var n = 0;
      var options = ['"I would like to walk around in your mind some day."',
      '"In statistics, the Q-function is the tail probability of the standard normal distribution."',
      '"You are people but you are a special kind of people."',
      '"I like your anxiety [sic]. Period." -- An anonymous poet',
      '"You are sweet, like 0 - - - - - - - | - 10."',
      '"I know I am unloveable, You dont have to tell me."'];

      setInterval(changeText, 1200);
      
      function changeText() {
        n++;
        if (n >= options.length) {
          n = 0;
        }
        var elt = document.getElementById('someText');
        elt.innerHTML = options[n];
      }