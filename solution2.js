const list = document.querySelector('ul');
const heading = document.createElement('h1');
heading.innerText = "This Time Vanilla JS";
document.body.prepend(heading);
window.iceCreamFlavors.forEach(flavor => {
    const listItem = document.createElement('li');
    listItem.innerText = flavor;
    listItem.classList.add("ice-cream-flavor")
    list.append(listItem);
});

const image = document.createElement('img');
image.setAttribute("src","https://addapinch.com/wp-content/uploads/2017/07/old-fashioned-vanilla-ice-cream-recipe-DSC_4239-500x500.jpg")
document.body.append(image);

