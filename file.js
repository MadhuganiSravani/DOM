// points for using form
//1.wrap every input tag inside the form.
//2.instead of using button, use button input with type submit.
//3.AddEventListener to form tag.
//4.Event name should be submit.
//5.Whenever you use form ,it will try to send the data to server in this process the page 
//reloads,to avoid it we will be using event.preventDefault();

document.querySelector("form").addEventListener('submit',toDoList);

function toDoList(){
    event.preventDefault();

    let itemName=document.querySelector("#name").value;
    let itemQty=document.querySelector("#qty").value;
    let itemPriority=document.querySelector("#Priority").value;


    let tr=document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText=itemName;
    let td2 = document.createElement("td");
    td2.innerText=itemQty;
     let td3 = document.createElement("td");
     td3.innerText=itemPriority; 
      
     tr.append(td1,td2,td3)
     document.querySelector("tbody").append(tr);
    
}