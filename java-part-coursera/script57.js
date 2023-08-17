// Event handling
document.addEventListener("DOMContentLoad",
function (event) {

    //Unobtrusive event binding
    document.querySelector("button")
    .addEventListener("click", function () {
        var self=this;
        var name="";

        //Call server to get the name
        $ajaxUtils
        .sendGetRequest("/java-part-coursera/name.txt",
        function (request) {
        self.name =request.responseText;
        console.log(self.name);
        });
        document.querySelector("#content")
        .innerHTML="<h2>Hello" +
        self.name +"!";
        
        
    });
    
}
);