/*global $*/
var main=function(){
  function Book(url, tit, aut, rate, genre, dens, len, desc) {
    this.img_url = url;
    this.title = tit;
    this.author = aut;
    this.rating = rate;
    this.genre = genre;
    this.density = dens;
    this.length = len;
    this.description = desc;
  }

  var the_subtle_art = new Book("/home/the_subtle_art.jpg","The Subtle Art of Not Giving a Fuck","Mark Manson",5,"self-improvement",1,1,"This self-improvement book is a quick read, under 200 pages and not too dense. <b>Definitely</b> worth reading, although it's a little unconventional, there are some grade-A lessons in here.");
  var the_worldly_philosophers = new Book("/home/worldly_philosophers.jpg","The Worldly Philosophers: ...","Robert Heilbroner",3,"Academic",3,2,"This book on economic theory was quite dense, but still entertaining. The accounts of the great men of economic theory was truly fascinating, especially about the ones that I thought I understood.")
  
  function add_top_pick(book) {
    $("#top_picks_list").append('<li><div class="book_img_container"><img class="book_img" src='+book.url+'></div><div class="book_title_container"><span class="centerer"></span><span class="book_title">'+book.title+'<br>By: '+book.author+'</span></div><div class="gap"></div><div class="stars_container"><span class="centerer"></span><img class="stars" src="/home/apple.png"><img class="stars" src="/home/apple.png"><img class="stars" src="/home/apple.png"><img class="stars" src="/home/apple.png"><img class="stars" src="/home/apple.png"></div><div class="gap"></div><div class="review_container"><span class="centerer"></span><span class="review">'+book.description+'</span></div></li>')
  }

  $("#test").click(function() {
    add_top_pick();
  });
};
$(document).ready(main);
