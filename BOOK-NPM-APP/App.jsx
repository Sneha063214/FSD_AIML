import Book from "./Book"
const kitties=[
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6PF8mzkitnkpHw3h9tQIlhVCxLWAHo4VbJDbe36b5-Q&s=10",price:30000000},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6PF8mzkitnkpHw3h9tQIlhVCxLWAHo4VbJDbe36b5-Q&s=10",price:2000000},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6PF8mzkitnkpHw3h9tQIlhVCxLWAHo4VbJDbe36b5-Q&s=10",price:4000000}
    
     
]
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

export default App