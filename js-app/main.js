const url = "https://localhost:5001/api/beanvariety/";
const coffeeUrl = "https://localhost:5001/api/Coffee";

const contentTarget = document.querySelector("#coffee")

const saveButton = document.querySelector("#saveBean")

const editButton = document.querySelector("#editBean")

const deleteButton = document.querrySelector("#deleteBean")

saveButton.addEventListener("click", () => {
    
        let name = document.querySelector("#beanName").value
        let region = document.querySelector("#region").value
        let note = document.querySelector("#notes").value

       
            const newBean = {
                name,
                region,
                note
            

            }
            
            console.log(newBean)
            addBeanVariety(newBean);
    

})

editButton.addEventListener("click", () => {
    
        
        let name = document.querySelector("#beanName").value
        let region = document.querySelector("#region").value
        let note = document.querySelector("#notes").value

       
            const newBean = {
                name,
                region,
                note
            

            }
            
            console.log(newBean)
            addBeanVariety(newBean);
    

})

const button = document.querySelector("#run-button");
button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            beanVarieties.forEach(b => contentTarget.innerHTML += b.name)
            
    getAllCoffee()
        .then(coffees => {
            console.log(coffees)
            
            
            
        });
        })
});

function getAllBeanVarieties() {
    return fetch(url).then(resp => resp.json());
}

function getAllCoffee() {
    return fetch(coffeeUrl).then(resp => resp.json());
}




function addBeanVariety(bean) {
    return fetch(url, {method: "POST", headers: { "Content-Type": "application/json"}, body: JSON.stringify(bean)})

}

function editBean(beanId) {
    return fetch(url, {method: "PATCH", header: { "Content-Type": "application/json"}, body: JSON.stringify(bean)})
}

function deleteBean(beanId) {
    return fetch(url, {method: "DELETE", header: { "Content-Type": "application/json"}, body: JSON.stringify(bean)})
}





