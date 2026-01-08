const topNav = document.getElementsByClassName("js-top-nav")[0];
console.log(topNav);
const navLinks = topNav.getElementsByTagName("a");
const linkArray = Array.prototype.slice.call(navLinks);
let navContent = new Array();

linkArray.forEach( (node, index, arr) => {
    console.log(`Node: ${node}, Index: ${index}, Array: ${arrr}`);
})