
var elem = document.getElementById('countdown');

// sentence - 15 - 20words
// 200 words = parag = 6 - 10 sente

// 112469



// window.setInterval(function (){


//   elem.textContent =  
// }, 1000);

let file = new File('', "dics.csv")
const reader = new FileReader();
reader.readAsText(file);
  reader.onload = function() {
    console.log(reader.result);
  };



// csv_file');
// csv_file.encoding = 'utf-8';
// let data = csv_file.read().split('/\r\n|\n/'); // split by lines
// csv_file.close();
// for (let row in data) data[row].split(','); // split all lines by comas

// alert(data); // here is your 2d array