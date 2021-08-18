let div1 = document.querySelector('#time');
let div2 = document.querySelector('#clock');
let div3 = document.querySelector('#timer');

let Time = function(element) {
  this.element = element; 
  this.element.addEventListener('click',() => {this.toggle()}) 
}
  
Time.prototype.render = function() {
  let now = new Date();
  let h = now.getHours().toString();
  let m = now.getMinutes().toString();
  let s = now.getSeconds().toString()
    if (h < 10) {
      h = '0' + h;
    }
    if (m < 10) {
      m = '0' + m;
    }
    if (s < 10) {
      s = '0' + s;
    }
    if (this.element.classList.contains('hidden')) {
      this.element.innerHTML = h + ':' + m + ':' + s;
    } else {
      this.element.innerHTML = h + ':' + m;
    } 
}

Time.prototype.getting = function() {
     setInterval(() => {this.render()
    }, 100);
}

Time.prototype.toggle = function() {
    this.element.classList.toggle('hidden'); 
      }; 

function Clock1 (element) {
  Time.call(this, element)
}

Clock1.prototype = Object.create(Time.prototype);
let shotClock = new Time(div1);
shotClock.getting();
shotClock.toggle();

function Clock2(element) {
  Clock1.call(this, element);
}

Clock2.prototype = Object.create(Clock1.prototype);
let longClock = new Time(div2);

longClock.render = function() {
  let now = new Date();
  let h = now.getHours().toString();
  let m = now.getMinutes().toString();
  let s = now.getSeconds().toString();
    if (h < 10) {
      h = '0' + h;
    }
    if (m < 10) {
      m = '0' + m;
    }
    if (s < 10) {
      s = '0' + s;
    }
    if (this.element.classList.contains('hidden')) {
      this.element.innerHTML = h + ':' + m;
    } else {
      this.element.innerHTML = h + ':' + m + ':' + s;
    } 
}

longClock.getting();
longClock.toggle();

console.log(Time);
console.log(shotClock);
console.log(longClock);

