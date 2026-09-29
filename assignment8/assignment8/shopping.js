

window.onload = pageLoad;

function pageLoad()
{
  let xhr = new XMLHttpRequest(); 
    xhr.open("GET", "cloth.json"); 
    xhr.onload = function() { 
        var jsdata = JSON.parse(xhr.responseText);
        console.log(jsdata);
        showData(jsdata);
    }; 
    xhr.onerror = function() { alert("ERROR!"); }; 
    xhr.send();
}

function showData(data){
    let showdiv = document.querySelectorAll("#layer div");
   

    for (let i = 0; i < data.length; i++) {
        let img = document.createElement("img");
        img.src = data[i].img;
        img.style.width = "100%";
        img.style.height = "300px";
        img.style.objectFit = "cover";

        let brand = document.createElement("p");
        brand.innerText = data[i].brand;


        let price = document.createElement("p");
        price.innerText = "Price: " + data[i].price + " Baht";

        showdiv[i].appendChild(img);
        showdiv[i].appendChild(brand);
        showdiv[i].appendChild(price);


        
    }
}