//Goal: Make user choose from number so that they can access it 

$.ajax({
    url: 'https://data.cityofnewyork.us/resource/jvce-szsb.json',//The api for the mall
    dataType: 'json',
    success: function(data) {
        //pick # 0-39
        var answer = prompt("What type of product are you looking for? Choose a number between 0-39(These correspond to a different store product)");
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
          
          if(data[i].type == userChoice){//Supposed to take the the choice and if the type matches it prints out the store
              var storeChoice = (data[i].store);
          }

       }//loop end
       
       //user input used as a type of category for store
        var userChoice = types[answer]
        // var storeChoice = data.store;
        
        document.write("You have selected "+userChoice+", you should go to "+storeChoice)
        
       
       }
      
        

    });
