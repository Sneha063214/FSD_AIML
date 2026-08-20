const element =document.getElementById("data")
const URL="https://dummyjson.com/products?limit=100&skip=5"

async function loadPrducts(){
    try{
      const res= await fetch(URL)
      const data =await res.json();
      console.log("Data= ",data.products);
      let row="";
      data.products.map((i,index)=>{
        row+=`
        <tr>
        <td>${index+1}</td>
        <td>${i.title}</td>
        <td>${i.category}</td>
        <td>${i.price}</td>
        <td>${i.rating}</td>
        <td>${i.stock}</td>
        <td><img src=${i.images[0]} height="150px" width="150px"></td>
        <td><img src=${i.meta.qrCode}height="150px" width="150px"></td>
        </tr>

        `
        
      })
      element.innerHTML+=row;
      
    }
    catch(err){
        console.log("error: ",err);
        element.innerHTML+=`<h1> not found </h1>`;
    }


}

loadPrducts();