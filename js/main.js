const view1 = document.getElementById("view1");
console.log(view1);

const view2 = document.querySelector("#view2");
console.log(view2)


view1.style.display = "none";
view1.style.display = "flex";


const views = document.getElementsByClassName("view1");
console.log(views);

const sameViews = document.querySelectorAll(".view1");

console.log(sameViews);

const divs = view1.querySelectorAll("div");
console.log(divs);



const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);


const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);


evenDivs[4].style.backgroundColor = "purple";


for(i=0; i<evenDivs.length;i++){
    evenDivs[i].style.width="150px";
    evenDivs[i].style.backgroundColor = "purple"
}


const navText = document.querySelector("nav h1");

console.log(navText);
navText.textContent = "Hello "

const navBar = document.querySelector("nav");
navBar.innerHTML = '<h1>RRD</h1> <p>RRD UNIVERSITY</p>'
console.log(navBar)

console.log(evenDivs[0]);

console.log(evenDivs[0].parentElement);

console.log(evenDivs[0].parentElement.children)

console.log(evenDivs[0].parentElement.childNodes);


console.log(evenDivs[0].parentElement.hasChildNodes())

console.log(evenDivs[0].parentElement.lastChild);

console.log(evenDivs[0].parentElement.lastElementChild);


console.log(evenDivs[0].nextSibling);
console.log(evenDivs[0].nextElementSibling);
console.log(evenDivs[0].nextElementSibling.nextElementSibling);
console.log(evenDivs[0].previousSibling);




view1.style.display = "none";
view2.style.display = "flex";

view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";
view2.style.margin="10px";

console.log(view2.lastChild);
console.log(view2.lastElementChild.remove());


const createDiv  = (parent,iter)=>{

    const newDiv = document.createElement("div");
newDiv.textContent = iter;
parent.appendChild(newDiv)

newDiv.style.width = "100px"
newDiv.style.height = "100px";
newDiv.style.backgroundColor = "yellow";
newDiv.style.color = "black";
newDiv.style.display = "flex";
newDiv.style.justifyContent = "center";
newDiv.style.alignItems = "center"

}



for(i=0; i<12; i++){
    createDiv(view2,i)
}


