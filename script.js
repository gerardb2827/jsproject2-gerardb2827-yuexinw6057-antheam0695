$.ajax({
    url: 'https://data.cityofnewyork.us/resource/jvce-szsb.json',//The api for the mall
    dataType: 'json',
    success: function(data) {
        console.log(data);
    }
});
