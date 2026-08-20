const data=[
    {image:"https://cdn.kobo.com/book-images/6f3cf06c-4811-42d4-bd63-564c8264bc2d/1200/1200/False/the-power-of-your-subconscious-mind-ebook.jpg",price:"525"},
    {image:"https://miro.medium.com/1*m7Ef6BCO0Ye7H2wLhfQBSg.jpeg",price:"725"},
    {image:"https://m.media-amazon.com/images/I/61r8NKtnvrL._AC_UF1000,1000_QL80_.jpg",price:"625"}
       
]

function Book(props){
    const image=React.createElement("img",{src:props.image,height:"50px",width:"50px"})
    const h2=React.createElement("h2",{color:"pink"},"price:  "+props.price)
    const child=React.createElement("div",{className:"card"},[image,h2]);
    return child;
}


const bookdata=data.map((i)=>{
    return React.createElement("div",{className:"booklist"},Book(i))
})


ReactDOM.createRoot(document.getElementById("root")).render(bookdata);



