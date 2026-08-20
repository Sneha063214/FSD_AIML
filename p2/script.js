const data=[
    {image:"https://cdn.kobo.com/book-images/6f3cf06c-4811-42d4-bd63-564c8264bc2d/1200/1200/False/the-power-of-your-subconscious-mind-ebook.jpg",price:"525"},
    {image:"https://miro.medium.com/1*m7Ef6BCO0Ye7H2wLhfQBSg.jpeg",price:"725"},
    {image:"https://m.media-amazon.com/images/I/61r8NKtnvrL._AC_UF1000,1000_QL80_.jpg",price:"625"}
       
]


function Book(data){
    
    const child=document.createElement("div");
    const image=document.createElement("img");
const priceh2=document.createElement("h2");
priceh2.textContent=data.price;
child.appendChild(image);
child.appendChild(priceh2);



child.setAttribute("class","card");
image.setAttribute("src",data.image);
image.setAttribute("height","150px");
image.setAttribute("width","150px");
image.setAttribute("border","2px solid black");

return child;

}

const root=document.querySelector('#root');
root.setAttribute("display","flex");
for(i of data){
    root.appendChild(Book(i));
}