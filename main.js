function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 23.567619641501377, lng: 87.29866731812979},
        zoom: 14,
        mapId: '1cf394bcd4e863dc'
      });

      new google.maps.Marker({
        position: {lat: 23.57166474956445, lng: 87.31532924298692}, 
        map,
        title: "My location",
        icon: {
          url: "super-mario.png"
        },
        animation: google.maps.Animation.DROP,
        
      });
    
}
