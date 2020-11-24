document.addEventListener('DOMContentLoaded', () => {
    const url = "http://localhost:3000/dogs"

    const tableBody = document.querySelector("#table-body")
    const dogForm = document.querySelector("#dog-form")

    // function resetDogForm(event){
    //     event.preventDefault()
    //     dogForm.name.value = ""
    //     dogForm.breed.value = ""
    //     dogForm.sex.value = ""
        
    // }


    // maybe function go here
    function renderAllDogs(){
        tableBody.innerHTML = ''
        fetch(url)
        .then(r => r.json())
        .then(dogArr => {
            dogArr.forEach(dog => {
    
                renderDog(dog)
            });
        })

    }

    renderAllDogs()



    function renderDog(dog){

        const dogTr = document.createElement("tr")
        dogTr.dataset.id = dog.id

        const dogName = document.createElement("td")
        const dogBreed = document.createElement("td")
        const dogSex = document.createElement("td")
        const editDogBtn = document.createElement("button")
        editDogBtn.textContent = "Edit Doggo"
        editDogBtn.id = dog.id

        dogName.textContent = dog.name
        dogBreed.textContent = dog.breed
        dogSex.textContent = dog.sex

        dogTr.append(dogName, dogBreed, dogSex, editDogBtn)

        tableBody.append(dogTr)



        editDogBtn.addEventListener("click", function(e){

            dogForm.name.value = dog.name
            dogForm.breed.value = dog.breed
            dogForm.sex.value = dog.sex
            
            editDog(dog)
        })
        
        function editDog(dog){
            
            const id = dog.id
            
            
            submitBtn = document.querySelector("#dog-submit")
            // debugger
            
            dogForm.addEventListener("click", function(e){
                // debugger
                if(e.target.tagName === "INPUT"){
                    e.preventDefault()
                    
                    const dogObj = {
                        name: dogForm.name.value,
                        breed: dogForm.breed.value,
                        sex: dogForm.sex.value
                    }
                    // debugger
                    fetch(`${url}/${id}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(dogObj),
                        })
                        .then(response => response.json())
                        .then(data => {
                        console.log('Success:', data);
                         renderAllDogs(data)
                        //  resetDogForm()
                        
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
                    // debugger
                   
                    
                    // e.target.reset()
                    
                }
                
            })

            // submitBtn.addEventListener("click", function(e){
                
            // })
            
            
                
        }

    
        
    }










    // icebox 

    // editDogBtn.addEventListener("click", editDog)

    // function editDog(event){
    //     // debugger
    //     if(event.target.tagName === 'BUTTON'){
    //         const id = event.target.id
    //         console.log(id)

            // fetch(`${url}/${id}`, {
            // method: 'PATCH', // or 'PUT'
            // headers: {
            //     'Content-Type': 'application/json',
            // },
            // body: JSON.stringify(data),
            // })
            // .then(response => response.json())
            // .then(data => {
            // console.log('Success:', data);
            // })
            // .catch((error) => {
            // console.error('Error:', error);
            // });
    //     }

    //     dogForm.name.value = dog.name
    //     dogForm.breed.value = dog.breed
    //     dogForm.sex.value = dog.sex

    // }
    















    // end 
})