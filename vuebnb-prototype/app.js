var app = new Vue({
    el: '#app',
    data: {
        title: sample.title,
        address: sample.address,
        about: sample.about,
        amenities: sample.amenities,
        prices: sample.prices,
        headerImageStyle: {   'background-image': 'url(sample/header.jpg)' },
        contracted: true, 
        modalOpen: false
    },
    watch: {
        modalOpen: function(){
            var className = 'modal-open'
            if(this.modalOpen){
                document.body.classList.add(className);
            }else{
                document.body.classList.remove(className);
            }
        }
    }
   
});