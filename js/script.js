$(document).ready(function() {
	
	if (Modernizr.cssanimations) {
		
		$("h1").prepend('<a href="#">Watch</a> ')
		
		$("#scene-01").append('<div id="bg-01"><img src="images/01-bg.jpg" alt=""><div id="fan-01"><div id="bg-fan"><img src="images/01-bg-fan.png" alt=""></div><div id="fan-blade"><img src="images/01-fan-blade.png" alt=""></div></div></div><div id="man-01"><img src="images/01-man.png" alt=""></div><div id="blk-curtain"></div>');
		
		$("#scene-02").append('<h1 id="title-02"><span>Jeffrey</span> Zeldman</h1><div id="bg-02"><img src="images/02-bg.jpg" alt=""></div><div id="r-shadow"><img src="images/02-r-shadow.png" alt=""></div><div id="l-shadow"><img src="images/02-l-shadow.png" alt=""></div><div id="r-leg-02"><div id="r-foot-02"><img src="images/02-r-foot.png" alt=""></div><div id="r-shin-02"><img src="images/02-r-leg.png" alt=""></div></div><div id="l-leg-02"><div id="l-foot-tip"><img src="images/02-l-foot-tip.png" alt=""></div><div id="l-foot-02"><img src="images/02-l-foot.png" alt=""></div><div id="l-shin-02"><img src="images/02-l-leg.png" alt=""></div></div>');
		
		$("#scene-03").append('<h1 id="title-03"><span>Sarah</span> Parmenter</h1><div id="bg-03"><img src="images/03-bg.jpg" alt=""></div><div id="legs-03"><img src="images/03-legs.png" alt=""></div><div id="multi-slats-03"><img src="images/03-slats-multi.png" alt=""></div><div id="single-slat-03"><img src="images/03-slats-single.png" alt=""></div><div id="shadow-03"><img src="images/03-suitcase-shadow.png" alt=""></div><div id="suitcase-03"><img src="images/03-suitcase.png" alt=""></div><div id="arm-03"><img src="images/03-arm.png" alt=""></div>');

	 $("#scene-04").append('<h1 id="title-04"><span>Jason</span> Santa Maria</h1><div id="bg-04"><img src="images/04-bg.jpg" alt=""></div><div id="ad-a"><a href="http://hardboiledwebdesign.com"><img src="images/04-ad-a.jpg" alt="" title="Hardboiled Web Design"></a></div><div id="ad-b"><img src="images/04-ad-b.jpg" alt=""></div><div id="ad-c"><img src="images/04-ad-c.jpg" alt=""></div>');
		
	$("#scene-05").append('<div id="bg-05"><img src="images/05-bg.jpg"></div><div id="fan-05"><div id="bg-fan-05"><img src="images/01-bg-fan.png" alt=""></div><div id="fan-blade-05"><img src="images/01-fan-blade.png" alt=""></div></div><div id="shade-a-05"><img src="images/05-shade-a.png" alt=""></div><div id="shade-b-05"><img src="images/05-shade-b.png" alt=""></div><div id="shade-c-05"><img src="images/05-shade-c.png" alt=""></div><div id="blinds-a-05"><img src="images/05-blinds-a.png" alt=""></div><div id="blinds-b-05"><img src="images/05-blinds-b.png" alt=""></div><div id="books-05"><img src="images/05-books.png" alt=""></div><div id="lines-05"><img src="images/05-lines.png" alt=""></div><div id="desk-shadow-05"><img src="images/05-desk-shadow.png" alt=""></div><div id="desk-top-05"><img src="images/05-desk-top.png" alt=""></div><div id="desk-side-05"><img src="images/05-desk-side.png" alt=""></div><div id="desk-front-05"><img src="images/05-desk-front.png" alt=""></div><div id="desk-legs-05"><img src="images/05-desk-legs.png" alt=""></div><div id="lamp-05"><img src="images/05-lamp.png" alt=""></div><div id="chair-a-05"><div id="chair-shadow-a-05"><img src="images/05-chair-shadow-a.png" alt=""></div><div id="chair-slice-a-1-05"><img src="images/05-chair-slice-a-1.png" alt=""></div><div id="chair-slice-a-2-05"><img src="images/05-chair-slice-a-2.png" alt=""></div><div id="chair-slice-a-3-05"><img src="images/05-chair-slice-a-3.png" alt=""></div></div><div id="chair-b-05"><div id="chair-shadow-b-05"><img src="images/05-chair-shadow-b.png" alt=""></div><div id="chair-slice-b-1-05"><img src="images/05-chair-slice-b-1.png" alt=""></div><div id="chair-slice-b-2-05"><img src="images/05-chair-slice-b-2.png" alt=""></div><div id="chair-slice-b-3-05"><img src="images/05-chair-slice-b-3.png" alt=""></div></div><div id="lights-a-05"><img src="images/05-lights-a.png" alt=""></div><div id="lights-b-05"><img src="images/05-lights-b.png" alt=""></div><div id="lights-c-05"><img src="images/05-lights-c.png" alt=""></div><div id="lights-d-05"><img src="images/05-lights-d.png" alt=""></div><div id="man-05"><img src="images/05-man.png" alt=""></div><div id="suitcase-05"><img src="images/05-suitcase.png" alt=""></div><div id="ads-a-05"><img src="images/04-ad-a.jpg" alt=""></div><div id="ads-b-05"><img src="images/04-ad-b.jpg" alt=""></div><div id="ads-c-05"><img src="images/04-ad-c.jpg" alt=""></div>');	
	
	$("#scene-06").append('<div id="bg-06"><img src="images/06-bg.jpg" alt=""></div><div id="man-06"><img src="images/06-man.png" alt=""></div><div id="blk-curtain-06"></div>');

 $("#scene-07").append('<h1 id="title-07"><span>Luke</span> Wroblewski</h1><div id="bg-07"><img src="images/07-bg.jpg" alt=""></div><div id="bldg-07"><img class="mask" src="images/07-control-full.jpg" alt=""></div><div id="man-07"><img src="images/07-man.png" alt=""></div>');

 $("#scene-08").append('<h1 id="title-08-a"><span>Eric</span> Meyer</h1><h1 id="title-08-b"><span>Jeremy</span> Keith</h1><div id="bg-08"><img src="images/08-bg.jpg" alt=""></div><div id="man-08"><img src="images/08-man.png" alt=""></div>');

 $("#scene-09").append('<h1 id="title-09-a"><em>And</em><br><span>Aarron</span> Walter</h1><h1 id="title-09-b"><em>Casting by</em><br><span>Alexa</span> Andrzejewski <em>&amp;</em><br><span>Jeffrey</span> Veen</h1><div id="bg-09"><img src="images/09-bg.jpg" alt=""></div><div id="man-09"><img src="images/09-man.png" alt=""></div>');

 $("#scene-10").append('<h1 id="title-10-a"><em>Editor</em><br><span>Anthony</span> Calzadilla</h1><h1 id="title-10-b"><em>Production Designer</em><br><span>Andy</span> Clarke</h1><div id="bg-10"><img src="images/10-bg.jpg" alt=""></div><div id="man-10"><img src="images/10-man.png" alt=""></div>');

 $("#scene-11").append('<h1 id="title-11-a"><em>Opening Night Party</em><br><span>(mt)</span> Media Temple</h1><div id="bg-11"><img src="images/11-bg.jpg" alt=""></div><div id="man-11"><img src="images/11-man.png" alt=""></div>');

 $("#scene-12").append('<div id="bg-12"><img src="images/12-bg.jpg" alt=""></div><div id="man-12"><img src="images/12-man.png" alt=""></div>');

 $("#scene-13").append('<h1><em>Produced by</em><br><span>Anthony</span> Calzadilla</h1><div id="bldg-blk"><div id="bg-13a"><img src="images/13a-bg.jpg" alt=""></div><div id="bg-13b"><img src="images/13b-bg.jpg" alt=""></div</div><div id="man-13"><img src="images/13-man.png" alt=""></div>');

 $("#scene-14").append('<h1><em>Executive Producer</em>&nbsp;<span>Andy</span> Clarke</h1><div id="bg-14"><img src="images/14-bg.jpg" alt=""></div>');

 $("#scene-15").append('<div id="bg-15"><img src="images/15-bg.jpg" alt=""></div><div id="man-15"><img src="images/15-man.png" alt=""></div>');

 $("#scene-16").append('<h1 id="title-16-a"><span class="title-mad">Mad</span><span class="title-men">manimation</span></h1><div id="bg-16"><img src="images/06-bg.jpg" alt=""></div><div id="man-16"><img src="images/16-man.png" alt=""></div>'); } 
	
	
		$("h1 a").click(function() {
	    var li = $('#animation li');

	    var delays = [4500,2000,2400,2200,5000,3000,3000,3800,2800,3000,2500,1800,1800,1800,3000,14000];

	    function sumPrev(array, index){
	        var sum = 0;
	        for(var i = 0; i < index; i++){
	            sum += array[i];
	        }
	        return sum;
	    }

	    li.each(function(i){
	        setTimeout(function($ele){
	            $ele.addClass("go").siblings().removeClass("go");
	        }, sumPrev(delays, i), $(this));
	    });
	});

});///ENDERS GAME///


	
		


