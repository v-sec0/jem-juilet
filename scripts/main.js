$(function () {
  console.log("Ready to rumble!");

  // Looking to validate example UX
  function checkQuery() {
    // Establishing vairable for form.
    const $searchform = $("#exampleUXForm");

    // Looking for #exampleUXForm and checking it's validity
    $searchform.on("submit", function (event) {
      if (!this.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        //Preventing refresh
        event.preventDefault();
        // Assigning variables for further showcase
        const $distroName = $("#distroName").val();
        const $distroRelease = $("#distroRelease").val();
        const $distroMonth = $("#distroMonth").val();
        const $distroYear = $("#distroYear").val();

        // Gettings vars for items to be changed in dummy console
        const $consoleDistro = $("#distroEnteredName");
        const $consoleRelease = $("#distroEnteredRelease");
        const $consoleDate = $("#distroEnteredDate");
        const $consoleFirst = $("#distroQueryFirst");
        const $consoleLast = $("#distroQueryLast");

        // Updating values to match what was queried
        // Distro Name
        $consoleDistro.text($distroName);
        // Release
        $consoleRelease.text($distroRelease);
        // Date
        $consoleDate.text($distroMonth + "/" + $distroYear);

        // Editing and getting values for non specific searches
        var firstThree = $distroName.substring(0, 4);
        $consoleFirst.text(firstThree);

        var lastThree = $distroName.substring($distroName.length - 4);
        $consoleLast.text(lastThree);
      }

      $(this).addClass("was-validated");
    });
  }

  // Activating function
  checkQuery();
});
