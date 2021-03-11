$.ajax({
    url: 'https://data.cityofnewyork.us/resource/jvce-szsb.json',//The api for the mall
    dataType: 'json',
    success: function(data) {
        var answer = 1;
        //prompt("What catagories would you like to look for?: ")
        //console.log(data);
        var stores =[];//Holds stores
        var types = [];//Holds catagories 
        
        //Prints out all the stores
        for(var i = 0; i<data.length; i++){
           //console.log(data[i].store)

          var currentStore = data[i].store
          if(!stores.includes(currentStore)){
              stores.push(currentStore); //Holds all the stores in the mall in an array
          }//prints out the catagories
          


          var currentType = data[i].type

          if(!types.includes(currentType)){
              types.push(currentType); //Holds all the stores in the mall in an array
          }
          //user input used as a type of catagory for store
          
          
          //List stores with that type
          
          
       }//loop end
      
        console.log( types)
    }
    
});
