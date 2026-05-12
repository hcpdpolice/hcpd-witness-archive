(function () {
  var intro = document.getElementById("intro-sequence");
  var introSkip = document.getElementById("intro-skip");
  var form = document.getElementById("witness-form");
  var status = document.getElementById("form-status");
  var introDismissed = false;

  function dismissIntro() {
    if (!intro || introDismissed) {
      return;
    }

    introDismissed = true;
    document.body.classList.remove("intro-running");
    document.body.classList.add("intro-complete");
    intro.classList.add("is-dismissed");

    window.setTimeout(function () {
      if (intro && intro.parentNode) {
        intro.parentNode.removeChild(intro);
      }
    }, 520);
  }

  if (intro) {
    document.body.classList.add("intro-running");

    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      dismissIntro();
    } else {
      window.setTimeout(dismissIntro, 5400);
      intro.addEventListener("animationend", function (event) {
        if (event.animationName === "introExit") {
          dismissIntro();
        }
      });
    }
  }

  if (introSkip) {
    introSkip.addEventListener("click", dismissIntro);
  }

  if (!form || !status) {
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var submitButton = form.querySelector('button[type="submit"]');
    var endpoint = form.getAttribute("action");
    var formData = new FormData(form);

    // To change the Formspree destination, edit the form action in index.html.
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
