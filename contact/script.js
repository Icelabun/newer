function sendemail(event){
    console.log(document.getElementsByName("name"))
    const username = document.getElementsByName("name")[0].value
    const email = document.getElementsByName("email")[0].value
    const message = document.getElementById("message").value
    const link = document.createElement('a')
    link.href = "mailto:samuelnebiyu88@gmail.com?subject="+username+"&body="+encodeURIComponent(message)
link.target = "_blank"
link.click()
}

document.getElementById('submit').addEventListener('click', sendemail)