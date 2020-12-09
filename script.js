$('#weather').click(function() {

    $.ajax({
        url: "libs/php/getCountryInfo.php",
        type: 'POST',
        dataType: 'json',

        success: function(result) {

            console.log(result);
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // your error code
        }
    }); 


});

$('#earthquakes').click(function() {

    $.ajax({
        url: "libs/php/getCountryInfo.php",
        type: 'POST',
        dataType: 'json',

        success: function(result) {

            console.log(result);
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // your error code
        }
    }); 


});

$('#countryInfo').click(function() {

    $.ajax({
        url: "libs/php/getCountryInfo.php",
        type: 'POST',
        dataType: 'json',

        success: function(result) {

            console.log(result);
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // your error code
        }
    }); 


});