encouragement = [
	{
		"quote" : "",
		"attribute" : ""
	},
	// Happy
	{
		"quote" : "Hope and curiosity about the future seemed better than guarantees. The unknown was always so attractive to me.",
		"attribute" : "Hedy Lamarr",
		"wikipedia" : "http://en.wikipedia.org/wiki/Hedy_Lamarr"
	},
	// Sad
	{
		"quote" : "Even if I am a girl, even if people think I can't do it, I should not lose hope.",
		"attribute" : "Malala Yousafzai",
		"wikipedia" : "http://en.wikipedia.org/wiki/Malala_Yousafzai"
	},
	// Hesitant
	{
		"quote" : "I always did something I was a little not ready to do. I think that’s how you grow.",
		"attribute" : "Marissa Mayer",
		"wikipedia" : "http://en.wikipedia.org/wiki/Marissa_Mayer"
	},
	// Alone
	{
		"quote" : "There is a special place in hell for women who don't help other women.",
		"attribute" : "Madeleine Albright",
		"wikipedia" : "http://en.wikipedia.org/wiki/Madeleine_Albright"
	},
	// Afraid
	{
		"quote" : "You'll never know what you're capable of if you don't try.",
		"attribute" : "Sheryl Sandberg",
		"wikipedia" : "http://en.wikipedia.org/wiki/Sheryl_Sandberg"
	},
	// Badass
	{
		"quote" : "Always aim high, work hard, and care deeply about what you believe in. And, when you stumble, keep faith. And, when you’re knocked down, get right back up and never listen to anyone who says you can’t or shouldn’t go on.",
		"attribute" : "Hillary Clinton",
		"wikipedia" : "http://en.wikipedia.org/wiki/Hillary_Rodham_Clinton"
	},
	// Stupid
	{
		"quote" : "Don't feel stupid if you don't like what everyone else pretends to love.",
		"attribute" : "Emma Watson",
		"wikipedia" : "http://en.wikipedia.org/wiki/Emma_Watson"
	},
	// Confused
	{
		"quote" : "I never am really satisfied that I understand anything; because ... my comprehension can only be an infinitesimal fraction of all I want to understand about the many connections and relations which occur to me, how the matter in question was first thought of or arrived at.",
		"attribute" : "Ada Lovelace",
		"wikipedia" : "http://en.wikipedia.org/wiki/Ada_Lovelace"
	},
	// Girl power
	{
		"quote" : "Other women who are killing it should motivate you, thrill you, challenge you and inspire you rather than threaten you and make you feel like you’re immediately being compared to them.",
		"attribute" : "Taylor Swift",
		"wikipedia" : "http://en.wikipedia.org/wiki/Taylor_Swift"
	},
	// Pump me up
	{
		"quote" : "It is much harder work, but sometimes you have to take destiny into your own hands. It forces you to think about what your strengths really are, and once you find them, you can showcase them, and no one can stop you.",
		"attribute" : "Mindy Kaling",
		"wikipedia" : "http://en.wikipedia.org/wiki/Mindy_Kaling"
	},
	// Need a little boost
	{
		"quote" : "The world would be a better place if more engineers, like me, hated technology. The stuff I design, if I’m successful, nobody will ever notice.",
		"attribute" : "Radia Perlman",
		"wikipedia" : "http://en.wikipedia.org/wiki/Radia_Perlman"
	},
	// Want to cry
	{
		"quote" : "Some people say, “Never let them see you cry.” I say, if you’re so mad you could just cry, then cry. It terrifies everyone.",
		"attribute" : "Tina Fey",
		"wikipedia" : "http://en.wikipedia.org/wiki/Tina_Fey"
	},
	// Imposter syndrome
	{
		"quote" : "A ship in port is safe, but that is not what ships are for. Sail out to sea and do new things.",
		"attribute" : "Grace Hopper",
		"wikipedia" : "http://en.wikipedia.org/wiki/Grace_Hopper"
	},
	// Just do you
	{
		"quote" : "I felt like it was time to set up my future, so I set a goal. My goal was independence.",
		"attribute" : "Beyoncé",
		"wikipedia" : "http://en.wikipedia.org/wiki/Beyonc%C3%A9"
	},
	// Who run the world
	{
		"quote" : "Girls.",
		"attribute" : "Beyoncé",
		"wikipedia" : "http://en.wikipedia.org/wiki/Beyonc%C3%A9"
	}
]

$("select").change(function(){
	var selection = $(this).find(':selected').data('quote');
	var output = encouragement[selection];
	var quote = output.quote;
	var attribute = output.attribute;
	var link = output.wikipedia;

	$('.words-to-live-by h2').text(quote);
	$('.words-to-live-by a').text(attribute);
	$('.words-to-live-by a').attr('href',link);
});

// Social Media buttons
!function(d,s,id) {
	var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
	if(!d.getElementById(id)){
		js=d.createElement(s);
		js.id=id;
		js.src=p+'://platform.twitter.com/widgets.js';
		fjs.parentNode.insertBefore(js,fjs);
	}
}(document, 'script', 'twitter-wjs');

(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));



