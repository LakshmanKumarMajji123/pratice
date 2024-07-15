let link = document.querySelector('p > a');

console.log(link);

link.setAttribute('target', '_blank');
link.setAttribute('class', 'link');

link.innerHTML += '<h4>This is new content </h4>';
link.classList.remove('link');
link.classList.add('bahubali');
link.setAttribute('href', 'https://www.flipkart.com/');
console.log(link.textContent);

console.log(link.getAttribute('href'));

/**controlling-content 
 * 1.select the element 2. work on that element
 * innerText, innerHTML, textContent
 * 
 * attribures(get,set)
 * get---to access the element
 * set---to set the new attributes (string, value)
 * 
 * changing css styles
 * 
 */

let paragraph = document.querySelector('p');

console.log(paragraph.style.margin);

paragraph.style.margin = "100px";

console.log(paragraph.style.margin);

paragraph.style.backgroundColor = "red";
paragraph.style.color = "white";

console.log(paragraph);



 