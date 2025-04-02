document.addEventListener("DOMContentLoaded", function(){

    const form = document.getElementById("github-form")
   
    const ul = document.getElementById("user-list")




    function searchForUser(){


        form.addEventListener('submit', function(e){

            e.preventDefault()

            const search = document.getElementById("search").value.trim()

            fetch(`https://api.github.com/search/users?q=${search}`)
            .then(resp => resp.json())
            .then(users => {

                ul.innerHTML = ""

                users.items.forEach(user => {

                    let li = document.createElement("li")

                    li.innerHTML += `

                    <p>${user.login}</p>
                    <img src= ${user.avatar_url} alt = "${user.login}" width="100px" height = "100px"><br>
                    <button><a href="${user.html_url}">View Profile</a></button>

                    
                    
                    `

                    ul.appendChild(li)





                })



            })

        })





    }
    
    searchForUser()


})