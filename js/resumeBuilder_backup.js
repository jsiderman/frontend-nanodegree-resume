// $("#main").append(["Jonathan Siderman"]);

var awesomeThoughts = "I am Jonathan Siderman and I am Awesome!";

var age = 30;

var funThoughts = 
	awesomeThoughts.replace("Awesome", "Fun");

//$("#main").append(funThoughts);

var name = "Jonathan Siderman";
var role = "Front-End Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);

//var skills = 
//["awesomeness", "programming", "teaching", "JS"];

//$("#main").append(skills[0]);

var bio = {
	"name" : "Jonathan Siderman",
	"role" : "Front-End Web Developer",
	"email" : "jonsiderman@gmail.com",
	"bioPic" : "images/me.jpg",
	"welcomeMessage" : "MESSAGE",
	"skills" : "SKILLS"
};

var work = {};
work.position = "My Current Position";
work.employer = "My Employer";
work.yearsWorked = "18";
work.city = "My City";

//var education = {};
//education["name"] = "My School";
//education["years"] = "18";
//education["city"] = "My City";

var education = {
	"schools": [
		{
			"name" : "School Name",
			"city" : "School City, CA, US",
			"degree" : "My Degree",
			"major" : ["Major", "Minor"]
		},
		{
			"name" : "Udacity",
			"city" : "Udacity, US",
			"degree" : "Nanodegree",
			"major" : "Front-End Web Development"
		}
	]	
}


$("#main").append(bio.name + "<br>" + bio.role + "<br>" + bio.email + "<br><img src=" + bio.bioPic + "><br>" + bio.welcomeMessage + "<br>" + bio.skills + "<br><br>");

$("#main").append(work["position"]);
$("#main").append(education.name);

