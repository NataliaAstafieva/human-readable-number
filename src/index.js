module.exports = function toReadable (number) {
  let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  if (number < 20) {
      return numbers[number];
  }
  let doubleNum = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
 if (number > 19 && number < 100) {
      let a = Math.floor(number / 10);
      let b = number - (a * 10);
      if (b == 0) {
          return doubleNum[a];
      }
      return (doubleNum[a]+ ' ' + numbers[b]);
  }
  else if (number > 99 && number < 1000) {
      let c = Math.floor(number / 100);
      let d = Math.floor((number % 100) / 10);
      let tents = ' ' + doubleNum[d]; 
      if (d == 0) {
       tents = '';
      }
      let num = '';
      if (d == 1 ) {
        tents = ' ' + numbers[number % 100];
      }
  else { 
      let e = (number % 10);
      num = ' ' + numbers[e];
      if (e == 0) {
          num = '';
      }
    }
      return (numbers[c] + ' hundred' + tents + num);
  }
}
