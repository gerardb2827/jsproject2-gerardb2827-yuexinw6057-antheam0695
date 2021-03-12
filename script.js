//Goal: Make user choose from number so that they can access it 

$.ajax({
    url: 'https://data.cityofnewyork.us/resource/jvce-szsb.json',//The api for the mall
    dataType: 'json',
    success: function(data) {
        //pick # 0-39
        var answer = 39;
        //prompt("What categories would you like to look for? Choose a number 0-39")
        //console.log(data);
        var stores = [];//Holds stores
        var types = [];//Holds categories
        
        //Prints out all the stores
        for(var i = 0; i < data.length; i++){

          var currentStore = data[i].store
          if(!stores.includes(currentStore)){
              stores.push(currentStore); //Holds all the stores in the mall in an array
          }//prints out the categories


          var currentType = data[i].type
          if(!types.includes(currentType)){
              types.push(currentType); //Holds all the stores in the mall in an array
          }
          
           if(data[i].type == "Furniture"){
               console.log(data[i].store)
          }

       }//loop end
       
       //user input used as a type of category for store
        
        var userChoice = (types[answer])
        console.log(userChoice)
        
       
        
        //We want type to look for store with = type
      
        //console.log(stores + types)

          //console.log(types);
          //List stores with that type
          
       }
      
        

    });

