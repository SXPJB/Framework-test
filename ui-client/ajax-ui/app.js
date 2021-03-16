let urlBase = 'http://localhost:3000/user'
let tbody = document.getElementById('tbody')
let name = document.getElementById('name')
let surname = document.getElementById('surname')
let datebrith = document.getElementById('dateBirth')
let gender = document.getElementById('gender')
let buttonSave=document.getElementById('button')

const formatDate = (date) => {
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()

    if (month < 10) {
        return `${day}-0${month}-${year}`
    } else {
        return `${day}-${month}-${year}`
    }
}

const onSubmit = () => {
    let data={
        name:name.value,
        surname:surname.value,
        datebrith:datebrith.value,
        gender:gender.value
    }
    $.ajax({
        method:'POST',
        url:`${urlBase}/insert`,
        data:data
    }).done((res)=>{
        if(res.success){
            Swal.fire(
                'Good job!',
                res.message,
                'success'
            )
            getAllUser()
            cleanFields()
        }
    })
}

buttonSave.addEventListener('click',onSubmit)

const getAllUser = () => {
    tbody.innerHTML=''
    $.ajax(`${urlBase}/getAll`).done((data) => {
        if (data.success) {
            data.data.map(d => {
                tbody.innerHTML += `
                <tr>
                    <td scope="row">${d.id}</td>
                    <td>${d.name}</td>
                    <td>${d.surname}</td>
                    <td>${formatDate(new Date(d.datebrith))}</td>
                    <td>${d.gender}</td>
                </tr>
            `
            })
        }
    })
}

const cleanFields=()=>{
    name.value=''
    surname.value=''
    datebrith.value=''
    gender.value=''
}

getAllUser()


