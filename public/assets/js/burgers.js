// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devour").on("click", function(event) {
        var id = $(this).data("id");

        var newDevourState = {
            devoured: 1
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function() {
                location.reload();
            }
        );
    });

    $(".createBurger").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            name: $("#br").val().trim()
        };

        console.log("name being grabbed from submit: " + newBurger);
        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("new burger made");
                location.reload();
                console.log("location reloaded");
            }
        );
    });
});
