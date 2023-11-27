// Wrap the code in a window load event
window.onload = function() {
    // Get all elements with the class 'clickable-div'
    var clickableLogos = document.querySelectorAll('.clickableLogo');
    var clickableSignIn = document.querySelectorAll('.clickableSignIn');
	var clickableAddMember = document.querySelectorAll('.clickableAddMember');
	var clickableStaffPortal = document.querySelectorAll('.clickableStaffPortal');
    var clickableStaffButton = document.querySelectorAll('.staffButton');

    // Add a click event listener to each element
    clickableLogos.forEach(function(div) {
        div.addEventListener('click', function() {
            var documentFile = 'Index.html';

            // Construct the full path to the document
            var documentPath = documentFile;

            // Redirect to the document
            window.location.href = documentPath;
        });
    });
                
    clickableSignIn.forEach(function(div) {
        div.addEventListener('click', function() {
            var documentFile = 'signIn.html';

            // Construct the full path to the document
            var documentPath = documentFile;

            // Redirect to the document
            window.location.href = documentPath;
        });
    });

	
	clickableStaffButton.forEach(function(div) {
        div.addEventListener('click', function() {
            var documentFile = 'staffSignIn.html';

            // Construct the full path to the document
            var documentPath = documentFile;

            // Redirect to the document
            window.location.href = documentPath;
        });
    });

    clickableAddMember.forEach(function(div) {
        div.addEventListener('click', function() {
            var documentFile = 'addStaff.html';

            // Construct the full path to the document
            var documentPath = documentFile;

            // Redirect to the document
            window.location.href = documentPath;
        });
    });
	
	clickableStaffPortal.forEach(function(div) {
        div.addEventListener('click', function() {
            var documentFile = 'staffIndex.html';

            // Construct the full path to the document
            var documentPath = documentFile;

            // Redirect to the document
            window.location.href = documentPath;
        });
    });

    function updateDateTime() {
        const currentDateElement = document.getElementById('currentDate');
        const currentDate = new Date();

        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
        const formattedDate = currentDate.toLocaleDateString('en-US', options);

        currentDateElement.textContent = formattedDate;
    }

    // Update date and time every second
        setInterval(updateDateTime, 1000);

    // Initial call to display date/time immediately
        updateDateTime();
};