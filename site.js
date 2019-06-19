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

  var star_link = "/home/star.png";
  var fun = false;

  var the_subtle_art = new Book("/home/the_subtle_art.jpg","The Subtle Art of Not Giving a Fuck","Mark Manson",5,"self-improvement",1,1,"This self-improvement book is a quick read, under 200 pages and not too dense. <b>Definitely</b> worth reading, although it's a little unconventional, there's some grade-A advice in here.");
  var the_worldly_philosophers = new Book("/home/worldly_philosophers.jpg","The Worldly Philosophers: ...","Robert Heilbroner",4,"Academic",3,2,"This book on economic theory was quite dense, but still entertaining. The accounts of the great men of economic theory was truly fascinating, especially the ones I thought I already knew.");
  var win_friends = new Book("/home/win_friends.jpg","How to Win Friends and Influence People","Dale Carnegie",4,"self-improvement",2,2,"This book outlines and explains ways to make positive impressions and make people like/want to help you. It makes you think about your actions a little more consciously, which is cool.");
  var top_picks = [the_subtle_art,the_worldly_philosophers,win_friends];
  
  function add_top_pick(book) {
    var text = '<li><div class="book_img_container"><img class="book_img" src='+book.img_url+'></div><div class="book_title_container"><span class="centerer"></span><span class="book_title">'+book.title+'<br>By: '+book.author+'</span></div><div class="gap"></div><div class="stars_container"><span class="centerer"></span>'
    for(var i=0;i<book.rating;i++) {
      text += '<img class="stars" src='+star_link+'>';
    }
    text += '</div><div class="gap"></div><div class="review_container"><span class="centerer"></span><span class="review">'+book.description+'</span></div></li>'
    $("#top_picks_list").append(text);
  }
  
  for(var book of top_picks) {
    add_top_pick(book);
  }
  
  $('#fun_mode').click(function() {
    if(fun) {
      $('.stars').attr("src","/home/star.png");
      fun = false;
    }else {
      $('.stars').attr("src","/home/apple.png")
      fun = true;
    }
  });
  
  $('#financial_genre').hover(function() {$('#financial_overlay').css("opacity",".3")},function(){$('#financial_overlay').css("opacity","0")});
  $('#academic_genre').hover(function() {$('#academic_overlay').css("opacity",".3")},function(){$('#academic_overlay').css("opacity","0")});
  $('#self_improvement_genre').hover(function() {$('#self_improvement_overlay').css("opacity",".3")},function(){$('#self_improvement_overlay').css("opacity","0")});
  $('#fiction_genre').hover(function() {$('#fiction_overlay').css("opacity",".3")},function(){$('#fiction_overlay').css("opacity","0")});
};
$(document).ready(main);
