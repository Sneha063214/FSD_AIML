// import App from "./App";
const kitties=[
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6PF8mzkitnkpHw3h9tQIlhVCxLWAHo4VbJDbe36b5-Q&s=10",price:30000000},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6PF8mzkitnkpHw3h9tQIlhVCxLWAHo4VbJDbe36b5-Q&s=10",price:2000000},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6PF8mzkitnkpHw3h9tQIlhVCxLWAHo4VbJDbe36b5-Q&s=10",price:4000000}
    
     
]

function Book({props}){
    console.log("book running")
 return (
    <div className="card">
        <img src={props.img} alt="" width="200px" height="200px" />

        <h1>{props.price}</h1>
        <button className="but">add to cart</button>
    </div>
 )
}


function App(){
    console.log("app is running")
    return(
    //     <div className="cart">
    //         <BOOK/>
    //         <BOOK/>
    //         <BOOK/>
    //  </div>
    
        kitties.map((i)=>{
            return <Book props={i}/>
        })
    
    )    
}







const parent=document.getElementById("root");
const root=ReactDOM.createRoot(parent);
root.render(<App/>)
