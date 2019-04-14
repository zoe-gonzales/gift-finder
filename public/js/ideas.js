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

});