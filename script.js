setInterval(() => {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours() % 12;
  
    document.querySelector(".second").style.transform = `rotate(${seconds * 6}deg) translateY(-50%)`;
    document.querySelector(".min").style.transform = `rotate(${minutes * 6}deg) translateY(-50%)`;
    document.querySelector(".hour").style.transform = `rotate(${hours * 30 + minutes * 0.5}deg) translateY(-50%)`;

   var secons = document.querySelector(".seconds") 
   var minuts = document.querySelector(".mins") 
  var hrs =  document.querySelector(".hours") 

    secons.innerHTML = `:${seconds}`
    minuts.innerHTML = `${minutes}:`
    hrs.innerHTML = `${hours % 12}:`
  }, 1000);

  var btn = document.querySelector('button');
  var body = document.querySelector('body');
  var flag = 0;
  
  btn.addEventListener('click', function() {
      if (flag === 0) {
          body.style.backgroundColor = 'black';
          btn.style.backgroundColor = 'white';
          btn.style.color = 'black';
          flag = 1; // Switch the flag to 1
      } else {
          body.style.backgroundColor = 'white';
          btn.style.backgroundColor = 'black';
          btn.style.color = 'white';
          flag = 0; // Switch the flag to 0
      }
  });
  