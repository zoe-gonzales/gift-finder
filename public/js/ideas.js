$(document).ready(function(){
    $("#survey").addClass("d-none");
    $(".submit-btn").addClass("d-none");

    function moveSurvey(){
        var survey = $("#survey");
        survey.removeClass("d-none");
        $(".submit-btn").removeClass("d-none");
        $("#content").replaceWith(survey);
    }

    setTimeout(moveSurvey, 4000);

    $("#add-idea").on("submit", function(event){
        event.preventDefault();

        var name = $("#add-idea [name=gift-name]").val().trim();
        var category = $("#add-idea [name=category]").val();
        var homemade = $("#add-idea [name=homemade]").val();
        var price = $("#add-idea [name=price]").val();

        var newIdea = {};

        if (!name){
            $("#message").text("Please complete all fields.");
        } else {
            newIdea.gift_name = name;
            newIdea.category = category;
            newIdea.price = price;
        }

        if (homemade === "No"){
            newIdea.isHomemade = 0;
        } else newIdea.isHomemade = 1;
        
        $.ajax("/add", {
            method: "POST",
            data: newIdea
        }).then(function(){
            location.reload();
        });
    });

    $("#survey").on("submit", function(event){
        event.preventDefault();
        $("#ideas").empty();

        var ideaRequest = {};
        var interests = [];

        $(".form-check input[type='checkbox']:checked").each((_, {value}) => {
            interests.push(value);
        });

        var homemade = $("#survey [name=homemade]:checked").val();

        var price = $("#survey [name=price]:checked").val();

        if (!interests || !homemade || !homemade){
            $("#validateInput").text("Please select at least one option for each.");
        } else {
            ideaRequest.category = interests;
            ideaRequest.isHomemade = homemade;
            ideaRequest.price = price;
        }

        $.ajax("/request", {
            method: "POST",
            data: ideaRequest
        }).then(function(results){

            var label = $("<div>");
            label.addClass("h4 suggestions-title");
            label.text("Your Suggestions");
            $("#ideas").append(label);

            if (results.length === 0){
                var noResults = $("<p>");
                noResults.addClass("giftIdea");
                noResults.text("It looks like your search didn't return results.");
                $("#ideas").append(noResults);
            } else {
                results.forEach(gift => {
                    var idea = $("<p>");
                    idea.addClass("giftIdea");
                    idea.text(gift.gift_name);
                    $("#ideas").append(idea);
                });
            }
        });
    });
});