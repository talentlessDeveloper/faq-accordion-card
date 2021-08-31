const accordion__questions = document.querySelectorAll(".accordion__question");

accordion__questions.forEach((question) => {
  question.addEventListener("click", () => {
    let accordion__collapse = question.nextElementSibling;

    if (!question.classList.contains("collapsing")) {
      // Open acordion item

      if (!question.classList.contains("open")) {
        // set display accordion__collapse from none to block to calculate it's height

        accordion__collapse.style.display = "block";
        let accordion__collapse__height = accordion__collapse.clientHeight;

        // set the accordion__collapse height to the clientHeight

        // set the display back to default

        // give it a little bit of delay

        setTimeout(() => {
          accordion__collapse.style.height = accordion__collapse__height + "px";

          accordion__collapse.style.display = "";
        }, 1);

        // then add the collapsing class

        accordion__collapse.classList = "accordion__collapse collapsing";

        //set a delay and add the open class

        setTimeout(() => {
          accordion__collapse.classList = "accordion__collapse open";
        }, 250);
      }
      //Closed accordion item
      else {
        accordion__collapse.classList = "accordion__collapse collapsing";

        //set the height back to 0px;

        setTimeout(() => {
          accordion__collapse.style.height = "0px";
        }, 1);

        // set the delay

        setTimeout(() => {
          accordion__collapse.classList = "accordion__collapse collapse";
          accordion__collapse.style.height = "";
        }, 250);
      }
    }

    question.classList.toggle("open");
  });
});
