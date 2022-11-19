module.exports=getDate;

function getDate()
{
var today = new Date();

const options={
    weekday:"long",
    day:"numeric",
    month:"long"
};

var day=today.toLocaleDateString("en-us",options);
return day;
}