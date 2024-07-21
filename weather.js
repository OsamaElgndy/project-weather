const key = 'b8a3923f56fe44fd0bef4de8308255ef '
const ford = document.querySelector('form')
const vertiol = document.querySelector('.vertiol')
let nnn = document.querySelector('input')

const but = document.querySelector('button').addEventListener('click',(e) =>{
    const weather = document.querySelector('.weather')
    console.log(weather);
     weather.classList.toggle('toogle')
    ford.classList.toggle('toogle')
        nnn.value = ""
    vertiol.innerHTML=""
   
})
async function search(){

    
let vale = document.querySelector('input').value
const call = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${vale}&limit=5&appid=${key}`)
    const req = call.json().then(res=>{
        console.log(res);
        const loop = res.length

        if (loop > 1) {
            vertiol.innerHTML =""
            for (let index = 0; index < loop; index++) {
                const {name,lat,lon,country} = res[index]
                
                vertiol.innerHTML += `<li  onclick="elgendy()" id="item_data" data_lat=${lat} data_name=${name} data_lon=${lon}  > ${name} <span> ${country}</span></li>
          
                `
                
            }
            const item =document.querySelectorAll('#item_data')
            // 
            item.forEach((i)=>{
            
                i.addEventListener('click',(e) =>{
            weatherWork(e.target.attributes.data_lat, e.target.attributes.data_name , e.target.attributes.data_lon)
            
                })
            
            
            
          

        })
                
            
       
    
        }
    
    })



}

function load(){

    setTimeout(()=>{

        search()
        },500)

}

const input = document.querySelector('input').addEventListener("keyup",load)


function elgendy(){
  
    const weather = document.querySelector('.weather')
    console.log(weather);
     weather.classList.toggle('toogle')


    ford.classList.toggle('toogle')
    nnn.value = ""
vertiol.innerHTML=""
}

function weatherWork(lat , name , lon){
    const mark  = +lat.value - +lon.value
 document.querySelector('.degrees').innerHTML = Math.floor( lat.value / lon.value  + 30)+ "&deg; C"

 document.querySelector('.ctiy').innerHTML = name.value
document.querySelector('#lat').innerHTML = Math.floor( lat.value) 
document.querySelector('#lon').innerHTML = Math.floor( lon.value) +" %"
document.querySelector('#get').innerHTML = Math.floor(mark -3)
}