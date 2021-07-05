function updateMap(){
    fetch("https://corona.lmao.ninja/v3/covid-19/countries/")
    .then(response => response.json())
    .then(rsp=>{
        console.log(rsp);
        rsp.forEach(element => {
            latitude=element.countryInfo.lat;
            longitude=element.countryInfo.long;

            cases=element.cases;
            if(cases>255){
                color="rgb(255,0,0)";
            }
            else{
                color=`rgb(${cases},0,0)`;
            }

            new mapboxgl.Marker({
                draggable: false, 
                color:color
            })
                .setLngLat([longitude, latitude])
                .addTo(map);


                var location=[longitude,latitude];

                var popup=new mapboxgl.Popup({offset : 50}).setText(` ${element.country}  ⬞  `  + 
                ` Confirmed Cases : ${element.cases} ◾ Deaths: ${element.deaths} ◾ Active: ${element.active} ◾ Recovered: ${element.recovered} ◾ Critical: ${element.critical} ◾ Today Cases: ${element.todayCases} ◾ Today Deaths: ${element.todayDeaths}`, 
                )


                var elem=document.createElement('div');
                elem.id='pointer';

                new mapboxgl.Marker(elem)
                .setLngLat(location)
                .setPopup(popup)
                .addTo(map);

            
        });
    })
}
updateMap();

function UpdateMap1(){
    fetch('https://corona.lmao.ninja/v3/covid-19/all')
    .then(res => {
        return res.json()}) 
    .then(data => {
        console.log(data);
        console.log(data.cases);
    })
}
UpdateMap1();