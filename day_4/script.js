const bookdata=[
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS5s7FbVwWtlK4nNOHuiL77rfXqr095-rHHxvM-ZFl2Q&s=10",price:345},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi9i-i1Esy7bJhfECZ2G90jKKFQBkYyBrC9JcQajWubA&s=10",price:545},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6iCzSieBSf4PZgHnuQDy40DBB0dushqApI1JMyYQbGw&s=10",price:679}
    

]


function Book(props){
    const image=React.createElement("img",{src:props.image,width:"100px",height:"100px"},null);
    const h2=React.createElement("h2",{},"price:");
    const bt=React.createElement("button",{onClick:()=>addToCart(props)},"add to cart:");
    const div=React.createElement("div",{className:"card"},[image,h2,bt])
    return div
}
const bookstore =bookdata.map((b)=>(
    Book(b)
))
const cart=[];
function viewCart(){
    if(cart.length==0){
        const h2=React.createElement("h2",{},"cart is empty");
        const parent=document.getElementById("cart");
        parent.appendChild(h2);
    }
    else{
        const h2=React.createElement("h2",{},"no of items"+cart.length)
        const parent=document.getElementById("cart");
        parent.appendChild(h2);
    }
}
function addToCart(data){
    cart.push(data);
    console.log("added to cart",data);
    alert("book added sucessfully");
}
const parent=document.getElementById("root");
const root= ReactDOM.createRoot(parent);
root.render(bookstore)
