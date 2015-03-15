var formattedName = HTMLheaderName.replace("%data%", "Robert Hutto");
var formattedRole = HTMLheaderRole.replace("%data%", "Software Engineer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
