$(document).ready(function(){

        $('form').on("submit",function(e){
           
            var data = $('input').val();
            console.log(data);
            var url = "http://api.openweathermap.org/data/2.5/weather?q="+data+"&appid=d71fdc8de792b971fc967ffee8b4ac3d&units=metric";
            console.log(url);
            $.ajax({
                url: url,
                crossOrigin: true,
                type : "GET",
                dataType: "JSON",
                success : function(result){
                    $('.box').fadeOut('slow');
                    $('.data').delay(1000).fadeIn('slow');
                   // console.log(result.name);
                    console.log("Data successfull reteived");
                  var location = '<li style="list-style-type:none;">Location : '+result.name+'<li>';
                  var temp = '<li style="list-style-type:none;">Temperature : '+result.main.temp+' Celcius<li>';
                  var wind = '<li style="list-style-type:none;">Wind Speed : '+result.wind.speed+'<li>';
                  var humidity = '<li style="list-style-type:none;">Humidity : '+result.main.humidity+'%<li>';
                  var goback = '<a href = "weather.html">Go Back</a>';
                   $('.data').append('<ul style="list-style-type:none;">',location ,temp, humidity, wind,"</ul>");
                   $('.a').append(goback);
                },
                error: function(){
                    alert("Some Error Occured");
                }
            });
            e.preventDefault();
        });

});