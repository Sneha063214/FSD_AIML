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

export default Book