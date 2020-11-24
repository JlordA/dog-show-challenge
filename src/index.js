document.addEventListener('DOMContentLoaded', () => {
    const url = "http://localhost:3000/dogs"

    const tableBody = document.querySelector("#table-body")








    fetch(url)
    .then(r => r.json())
    .then(dogArr => {
        dogArr.forEach(dog => {

            renderDog(dog)
        });
    })

    function renderDog(dog){

        const dogTr = document.createElement("tr")
        dogTr.dataset.id = dog.id

        const dogName = document.createElement("td")
        const dogBreed = document.createElement("td")
        const dogSex = document.createElement("td")
        const editDogBtn = document.createElement("button")
        editDogBtn.textContent = "Edit Doggo"

        dogName.textContent = dog.name
        dogBreed.textContent = dog.breed
        dogSex.textContent = dog.sex

        dogTr.append(dogName, dogBreed, dogSex, editDogBtn)

        tableBody.append(dogTr)

    }
















    // end 
})