
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {
  	title: 'Express',
  	todos : [
	  	{ 	description: "Buy eggs",
	  		due : new Date(new Date().getTime() + 24 * 0 * 60 * 1000),
	  		done : false
	  	},
	  	{	description : "Write next blog post",
	  		due : new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
	  		done : false
	  	},
	  	{	description : "Build todo list app",
	  		due : new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
	  		done : true
	  	},
  	]
  });
};