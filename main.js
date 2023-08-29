    /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
    function myFunction() {
        var x = document.getElementById("nav-bar");
        if (x.className === "container") {
          x.className += " responsive";
        } else {
          x.className = "container";
        }
      }