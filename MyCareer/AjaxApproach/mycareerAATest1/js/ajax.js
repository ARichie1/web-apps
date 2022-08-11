// MAIN NAVIGATION AJAX CALL START===================================================//
var http = new XMLHttpRequest();
http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200){
        var response = http.responseText;
        let newTraits = JSON.parse(response)
        console.log(newTraits.personalities['p1']);
        console.log(newTraits.careerArray);
        console.log(newTraits.dictionary['direct']);
        }
// MAIN NAVIGATION READYSTATE AND STATUS CHECK END.    
}
// MAIN NAVIGATION ONREADYSTATE FUNCTION END.
http.open('GET','js/traits.json', true);
http.send();
// MAIN NAVIGATION AJAX CALL END===================================================//
