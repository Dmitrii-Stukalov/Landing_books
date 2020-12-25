const toggleClass = element => {
    document.querySelectorAll('.testimonial-pics img').forEach(element => element.classList.remove('active'))
    element.classList.toggle('active')

    document.querySelectorAll('.testimonial').forEach(element => element.classList.remove('active'))
    document.getElementById(element.alt).classList.toggle('active')
}


function initMap() {
    const uluru = {lat: 59.869705, lng: 30.308029}
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: uluru,
    })

    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    })
}


mybutton = document.getElementById("myBtn")
window.onscroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block"
    } else {
        mybutton.style.display = "none"
    }
}

const topFunction = () => {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
}