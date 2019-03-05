$.get("https://newsapi.org/v2/everything?q=bitcoin&from=2019-02-05&sortBy=publishedAt&apiKey=a0666f27d2174950a410dc6e03e18149",
 function(results){
  console.log(results);

  results.articles.forEach(function(result){
    let html='<article class="article"><section class="featuredImage"><img src="'+result.urlToImage+'" alt="" /></section>'
    +'<section class="articleContent" ><a href="#" onclick="'+myFunction()+'" ><h3>'+result.title+'</h3></a>'
    +'<h6>Lifestyle</h6></section><section class="impressions">526</section><div class="clearfix"></div>'
    +'</article>'
    $('#main').append(html)

     
  })
})




function myFunction() {

  $.get("https://newsapi.org/v2/everything?q=bitcoin&from=2019-02-05&sortBy=publishedAt&apiKey=a0666f27d2174950a410dc6e03e18149",
  function(results){
   console.log(results);
 
   results.articles.forEach(function(result){
     let html='<a href="#" class="closePopUp">X</a><div class="container" ><h1>'+result.title+'</h1>'
       +'<p>'+result.content+'</p>'
       +'<a href="#" class="popUpAction" target="_blank">Read more from source</a></div>'
    
       $('#popUp').append(html) 
   })
 })

  var popup = document.getElementById("popUp");
  popup.classList.toggle("show");
}