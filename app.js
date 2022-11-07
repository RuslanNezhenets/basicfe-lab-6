function getUser() {
    return fetch("https://randomuser.me/api/")
        .then((response) => response.json())
        .then((data) => creatUser(data.results[0]))
}

$("#btn").click(() => {
    getUser()
})

function creatUser(profile){
    const user = $("<div class='user'></div>")
    const description = $("<div class='description'></div>")
    user.append(`<img class="img" src="${profile.picture.large}" alt="Аватарка"/>`)
    description.append(`<div><b>Сотовий: </b>${profile.cell}</div>`)
    description.append(`<div><b>Країна: </b>${profile.location.country}</div>`)
    description.append(`<div><b>Поштовий індекс: </b>${profile.location.postcode}</div>`)
    description.append(`<b>Телефон: </b>${profile.phone}`)
    user.append(description)
    $('#users').append(user)
}