    
     const API_KEY =  `3265874a2c77ae4a04bb96236a642d2f` 
     const form = document.querySelector("form")
     const search = document.querySelector("#search")
     const weather = document.querySelector("#weather")
      

   
    
    const IMG_URL = ` http://openweathermap.org/img/wn/10d@2x.png

    `

    const getweather = async (city)=> {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        const response  =  await fetch (url) ;
       
        const data = await response.json();
         return  showweather(data);
       
    }
    const showweather  =(data)=>{
        console.log(data);
        weather.innerHTML= ` 
         <div>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
    </div>
    <div>
     <h2>${data.main.temp}  </h2>
    <h4>${data.weather[0].main}  </h4>
    </div>`

    }
   

    

        
    
 
    form.addEventListener(
        "submit",
        function (event){
            getweather( search.value);
          
        event.preventDefault();
        form.reset()

             
        }
    

      
    )
   

  
 
    