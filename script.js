$.ajax({
    url: 'https://data.cityofnewyork.us/resource/jvce-szsb.json',//The api for the mall
    dataType: 'json',
    success: function(data) {
        //console.log(data);
        var stores =[];
        //Prints out all the stores
        for(var i = 0; i<data.length; i++){
           console.log(data[i].store)
       }
    }
});
