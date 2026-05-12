(function () {
  var form = document.getElementById("witness-form");
  var status = document.getElementById("form-status");

  if (!form || !status) {
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var submitButton = form.querySelector('button[type="submit"]');
    var endpoint = form.getAttribute("action");
    var formData = new FormData(form);

    // Replace YOUR_FORM_ID in index.html with your real Formspree form ID.
    status.textContent = "Submitting statement...";
    status.className = "form-status";

    if (submitButton) {
      submitButton.disabled = true;
    }

    fetch(endpoint, {
      method: "POST",
      body: formData,
      headers: {
        "Accept": "application/json"
      }
    })
      .then(function (response) {
        if (response.ok) {
          form.reset();
          status.textContent = "Statement received. Thank you for helping us reopen the case.";
          status.className = "form-status success";
          return;
        }

        status.textContent = "Submission failed. Please try again later.";
        status.className = "form-status error";
      })
      .catch(function () {
        status.textContent = "Connection error. Please try again later.";
        status.className = "form-status error";
      })
      .finally(function () {
        if (submitButton) {
          submitButton.disabled = false;
        }
      });
  });
}());
