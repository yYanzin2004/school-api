containers = document.querySelectorAll(".containers");
containerEffect = document.querySelectorAll(".effect");
let click = false;

containers.forEach((element, index) => {
  element.addEventListener("click", function () {
    element.classList.add("clicked");
    if (element.classList.contains("container-active")) {
    }
    containers.forEach((element2, index2) => {
      if (element != element2) {
        element2.classList.remove("clicked");
        element2.classList.remove("container-active");
        containerEffect[index2].classList.remove("effect-active");
      }
    });
  });
  element.addEventListener("mouseenter", function () {
    element.classList.add("container-active");
    containerEffect[index].classList.add("effect-active");
  });
  element.addEventListener("mouseleave", function () {
    if (element.classList.contains("clicked")) {
    } else {
      element.classList.remove("container-active");
      containerEffect[index].classList.remove("effect-active");
    }
  });
});
