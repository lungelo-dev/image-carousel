
var arrImages;



document.getElementById('next_btn').addEventListener('click', (event) => {
  let element_collection = document.getElementById('collection');
  element_collection.replaceChildren();
  element_collection.setAttribute("src", arrImages[0]);
  arrImages.push(arrImages.shift());

});
arrImages = ['https://i.imgur.com/kqqp4e5.jpeg', 'https://i.imgur.com/UU5XPfK.jpeg', 'https://i.imgur.com/xJb37jY.jpeg'];
let element_collection2 = document.getElementById('collection');
element_collection2.setAttribute("src", arrImages[0]);


document.getElementById('previous_btn').addEventListener('click', (event) => {
  let element_collection3 = document.getElementById('collection');
  element_collection3.replaceChildren();
  element_collection3.setAttribute("src", arrImages.slice(-1)[0]);
  arrImages.unshift(arrImages.pop());

});