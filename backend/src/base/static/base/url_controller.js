console.log("url_controller loaded in - base.html extend in index.html");
const warumich_text = {
    'moin': "moinsen!"
}
//get all .querystring_firma divs
querystring_firma = document.querySelectorAll(".querystring_firma");
querystring_firma_warumich = document.querySelector(".querystring_firma_warumich");

//if one of the companies is in querystring -> change text to company
queryString_job = GetUrlValue('job');

/**
 * if there is a url value for job -> iterate each querystring_firma class and replace the 
 * content with the name of the company
 */
if(queryString_job){
    querystring_firma.forEach(element => { //each _firma div
            element.innerHTML = queryString_job;
    });
}

/**
 * get the text for a given company and replace it in querystring_firm_warumich class,
 * does nothing if there is no key' for the querystring job:
 */
/*
if(queryString_job){
    var gettxt = get_warumich_text(queryString_job);
    if(gettxt){
        querystring_firma_warumich.innerHTML = gettxt;
    }
}
*/

function get_warumich_text(querystr){
    //checks if there is a text for the given querystring,
    //if it isnt- return false, else return the text for the company
    if(querystr in warumich_text){
        for(property in warumich_text){
            if(property == querystr)
            {   
                console.log("!!"+property);
                return warumich_text[property];
            }
        }
    }else{
        return false;
    }
}

function GetUrlValue(VarSearch){
    //gets ther url value of a queryystring for any given value: 
    //alert(GetUrlValue('job')); for ?job=otto -> otto
    //window.location = whole query ? string- substr removes first character
    var SearchString = window.location.search.substring(1);
    var VariableArray = SearchString.split('&');
    for(var i = 0; i < VariableArray.length; i++){
        var KeyValuePair = VariableArray[i].split('=');
        if(KeyValuePair[0] == VarSearch){
            return KeyValuePair[1];
        }
    }
}