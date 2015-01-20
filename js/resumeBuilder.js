

var bio = {
    "name": "Walter Miller",
    "role": "Web Developer",
    "contacts": {
        "mobile": "706-766-1926",
        "email": "walter.millerm@gmail.com",
        "github": "tc1492",
        "twitter": "@tc1492",
        "location": "Rome, Georgia"
    },
    "welcomeMessage": "Welcome to my resume. Thank you for your consideration!",
    "skills": [
            "HTML","CSS","Javascript","jQuery"
            ],
    "biopic": "images/head.jpg",

}


var work = {
    "jobs": [ 

    {        
        "employer": "AT&T",
        "title": "IT",
        "location": "Cedartown, Georgia",
        "dates": "2004 to current",
        "description": "Lucem manet duo sanae ero vis lus. Si gi re illam spero donum ab. Ei certo co mundo ii ullum manum in. Habentem machinam si supponit id habuerim at. Hae terea verae cur creet rum satis eodem ego. Mem iis habeatur importat sub sufficit. Concipio cognosco potestis facultas ii supponam ac. "
     
    },
    {
        "employer": "ShadeTree Solutions Inc.",
        "title": "Computer Technician",
        "location": "Silver Creek, Georgia",
        "dates": "1999 to 2004",
        "description": "Lucem manet duo sanae ero vis lus. Si gi re illam spero donum ab. Ei certo co mundo ii ullum manum in. Habentem machinam si supponit id habuerim at. Hae terea verae cur creet rum satis eodem ego. Mem iis habeatur importat sub sufficit. Concipio cognosco potestis facultas ii supponam ac. "

    },
    {
        "employer": "First Brands Inc.",
        "title": "Intern Computer Technician",
        "location": "Cartersville, Georgia",
        "dates": "1995 to 1998",
        "description": "Lucem manet duo sanae ero vis lus. Si gi re illam spero donum ab. Ei certo co mundo ii ullum manum in. Habentem machinam si supponit id habuerim at. Hae terea verae cur creet rum satis eodem ego. Mem iis habeatur importat sub sufficit. Concipio cognosco potestis facultas ii supponam ac. "

    }
    ]
}

var education = {
    "schools": "array of objects with",
    "name": "string",
    "location": "string",
    "degree": "string",
    "majors": "array of strings",
    "dates": "integer (graduation date)",
    "url": "string",
    "onlineCourses": {
        "title": "string",
        "school": "string",
        "date": "integer (date finished)",
        "url": "string"
    }
}



var projects = {
    "projects": {
        "title": "Udacity Mug",
        "dates": "December 2014",
        "description": "This is my first project with Udacity",
        "images": "images/mug.png",
    }
}


var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);


var formattedMobile= HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location); 

var formattedBioPic = HTMLbioPic.replace("%data%",bio.biopic);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);

$("#header").append(formattedBioPic);



for(i in bio.skills) {

   if(i == 0){
        $("#header").append(HTMLskillsStart);
   }

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkill); 

}

function displayWork() {
    for (i in work.jobs) {

        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle); 

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(formattedDates); 

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry:last").append(formattedLocation); 

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedDescription); 

    }
}

displayWork();

projects.display = function() {

    //for(i in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects.title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects.dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDiscription = HTMLprojectDescription.replace("%data%", projects.projects.description);
        $(".project-entry:last").append(formattedDiscription);

        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects.images);
        $(".project-entry:last").append(formattedImage);

    //}
}

projects.display();

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}

$('#main').append(internationalizeButton);

$("#mapDiv").append(googleMap);

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y)
});

