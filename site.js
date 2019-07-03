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

  var star_link = "pics/star.png";
  var fun = false;

  //Book Object
  var the_subtle_art = new Book("covers/the_subtle_art.jpg","The Subtle Art of Not Giving a Fuck","Mark Manson",5,"self-improvement",1,1,"This book is a quick read that opposes most modern self-help. Although it's a little unconventional, <b>definitely</b> worth reading, there's some grade-A advice in here.");
  var the_worldly_philosophers = new Book("covers/worldly_philosophers.jpg","The Worldly Philosophers","Robert Heilbroner",4,"Academic",3,2,"This book was quite dense, but still entertaining. Its accounts of the great economic thinkers was truly fascinating, especially the ones I thought I understood.");
  var win_friends = new Book("covers/win_friends.jpg","How to Win Friends and Influence People","Dale Carnegie",4,"self-improvement",2,2,"This book explains ways to make positive impressions and make people like/want to help you. It made me think about my actions a little more consciously, which is cool.");
  var omu = new Book("covers/omu.jpg","Our Mathematical Universe","Max Tegmark",5,"Academic",3,2,"This astrophysics book is a challenging read, but I think the author does a great job explaining very complicated ideas and making them understandable. It was beyond fascinating.");
  var rdpd = new Book("covers/rdpd.jpg","Rich Dad Poor Dad","Robert Kiyosaki",4,"Financial",2,1,"This book is a pretty quick read. It's told through an interesting point of view and introduces the basics of investing in real estate and other things to build up 'passive income'.");
  var ira = new Book("covers/ira.jpg","The Truth About Retirement Plans and IRAs","Ric Edelman",4,"Financial",3,2,"This book is a great introduction and overview of the different types of retirement plans, the value to starting early, and the basics for how to invest in those plans. It's a great first step into long-term investing.");
  var mnd = new Book("covers/mnd.jpg","The Millionaire Next Door","Thomas J. Stanley",3,"Financial",1,2,"This book is a pretty easy read and it has a very interesting concept: that many millionaires become wealthy just by living frugally. It points out many big falsehoods about becoming wealthy.");
  var tmm = new Book("covers/tmm.jpg","Total Money Makeover","Dave Ramsey",5,"Financial",1,2,"This book highlights different money problems that people have and how to get out of them to improve your financial life. It is very well written and informative.");
  var random_walk = new Book("covers/random_walk.jpg","A Random Walk Down Wall Street","Burton G. Malkiel",3,"Financial",3,2,"I'll admit, took me a couple tries to get through this one, but it really was very interesting. It focuses on statistics and long-term trends of the market to support holding a diversified portfolio and not turning over often.");
  var pandp = new Book("covers/pandp.jpg","Pride and Prejudice","Jane Austen",4,"Fiction",2,2,"This was one of my favorite school reading books ever. I'm not sure what I liked about it so much, but I thoroughly enjoyed this novel about early 19th century English drama.");
  var phantom_tollbooth = new Book("covers/phantom_tollbooth.jpg","The Phantom Tollbooth","Norton Juster",5,"Fiction",1,1,"Warning: I haven't read this in a very very long time. Even so, this has stuck in my head since 5th grade, the wacky characters and storyline make this very short book worth checking out.");
  var freakonomics = new Book("covers/freakonomics.jpg","Freakonomics","Steven D. Levitt & Stephen J. Dubner",5,"Academic",1,2,"This book is a classic. It brilliantly paints connections between seemingly unrelated economic things and worldly events (think outliers). Very interesting!");
  var gtd = new Book("covers/gtd.jpg","Getting Things Done","David Allen",3,"Self-Improvement",3,2,"This book isn't the easiest read, but the system that it describes is quite effective. It gives advice on how to prioritize/organize better and, obviously, get things done.");
  var miserable = new Book("covers/miserable.jpg","How to Be Miserable","Randy J. Paterson",4,"Self-Improvement",2,1,"This book describes things that we all do that make us miserable. The idea is that it's much more practical to try to avoid misery than to pursue happiness directly.");
  var cherub = new Book("covers/cherub.jpg","Cherub (Series)","Robert Muchamore",5,"Fiction",1,2,"This is the only series I have read more than once. It's basically about British kids who become secret agents. (Disclaimer: I haven't read much fiction since middle school, so my recos might lack)");
  var factfulness = new Book("covers/factfulness.jpg","Factfulness","Hans Rosling",4,"Academic",2,2,"This book is another one that once you read it you think about so many everyday things differently. It discusses a lot of human psychology behind why we think things are worse than they really are.");
  var transcend = new Book("covers/transcend.jpg","Transcend: 9 Steps to Living Well Forever","Ray Kurzweil & Terry Grossman",4,"Academic",2,3,"This book is very interesting. It mostly focuses on optimistic predictions for the future of medicine combined with studied ways to live healthier and extend life.");
  var liars_poker = new Book("covers/liars_poker.jpg","Liar's Poker","Michael Lewis",5,"Financial",2,2,"A true story that was really fascinating and well-written. He tells about the bond trading industry in the 80's in a funny but informative way, quick read that's well worth the time.");

  //Book Lists
  var top_picks = ["TOP PICKS",the_subtle_art,freakonomics,liars_poker,the_worldly_philosophers,miserable,win_friends];
  var financial = ["FINANCIAL",ira,tmm,liars_poker,rdpd,random_walk,mnd];
  var academic = ["ACADEMIC",freakonomics,the_worldly_philosophers,transcend,omu,factfulness];
  var self_improvement = ["SELF-IMPROVEMENT",the_subtle_art,miserable,win_friends,gtd];
  var fiction = ["FICTION",pandp,cherub,phantom_tollbooth];

  function add_book(book) {
    var text = '<li><div class="book_img_container"><img class="book_img" src='+book.img_url+'></div><div class="book_title_container"><span class="centerer"></span><span class="book_title">'+book.title+'<br>By: '+book.author+'</span></div><div class="gap"></div><div class="stars_container"><span class="centerer"></span>'
    for(var i=0;i<book.rating;i++) {
      text += '<img class="stars" src='+star_link+'>';
    }
    text += '</div><div class="gap"></div><div class="review_container"><span class="centerer"></span><span class="review">'+book.description+'</span></div></li>'
    $("#top_picks_list").append(text);
  }

  function change_book_list (book_list) {
    $('#top_picks_list').empty();
    $('#list_header').text(book_list[0]);
    for(var i=1;i<book_list.length;i++) {
      add_book(book_list[i]);
    }
  }

  $('#fun_mode').click(function() {
    if(fun) {
      $('.stars').attr("src","pics/star.png");
      star_link = "pics/star.png";
      fun = false;
    }else {
      $('.stars').attr("src","pics/apple.png")
      star_link = "pics/apple.png";
      fun = true;
    }
  });

  //startup
  change_book_list(top_picks);

  //hover functions
  $('#fin_title').hover(function() {$('#financial_overlay').css("opacity",".3")},function(){$('#financial_overlay').css("opacity","0")});
  $('#aca_title').hover(function() {$('#academic_overlay').css("opacity",".3")},function(){$('#academic_overlay').css("opacity","0")});
  $('#si_title').hover(function() {$('#self_improvement_overlay').css("opacity",".3")},function(){$('#self_improvement_overlay').css("opacity","0")});
  $('#fic_title').hover(function() {$('#fiction_overlay').css("opacity",".3")},function(){$('#fiction_overlay').css("opacity","0")});
  $('#tp_title').hover(function() {$('#top_picks_overlay').css("opacity",".3")},function(){$('#top_picks_overlay').css("opacity","0")});

  //click functions
  $('#fin_title').click(function(){change_book_list(financial)});
  $('#aca_title').click(function(){change_book_list(academic)});
  $('#si_title').click(function(){change_book_list(self_improvement)});
  $('#fic_title').click(function(){change_book_list(fiction)});
  $('#tp_title').click(function(){change_book_list(top_picks)});
};
$(document).ready(main);
