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
};
$(document).ready(main);
