AFRAME.registerComponent("markerhandler", {

    init: async function(){
        this.el.addEventListener("markerFound", ()=>{
            console.log("Marker is found")
            this.handleMarkerFound()
        })

        this.el.addEventListener("markerLost", ()=>{
            console.log("Marker is lost")
            this.handleMarkerLost()
        })
    },
    handleMarkerFound:function(){
        var buttonDiv = document.getElementById("button-div")
        buttonDiv.style.display = "flex"
        var ratingButton = document.getElementById("rating-button")
        var orderButton = document.getElementById("order-button")

        ratingButton.addEventListener("click", function(){
            swal({
                icon: "warning",
                title: "Rate Pokemon",
                text: "work in progress",

            })

        })

        ratingButton.addEventListener("click", ()=>{
            swal({
                icon: "https://i.imgur.com/4NZ6uLY.jpg",
                title: "Thanks for the Rating",
                text: "Your rating will be kept",

            })

        })

    },
    handleMarkerLost:function(){
        var buttonDiv = document.getElementById("button-div")
        buttonDiv.style.display = "none"
    },

})