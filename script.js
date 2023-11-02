function checkIfFilled() {
  var fields = Array.from(document.querySelectorAll("input-field"));

  fields.forEach((x) => {
    for (var i = 0; i < x.length; i++) {
      if ((x[i].value = "")) {
        x[i].style.backgroundColor = "#f52447";
      } else {
        x[i].style.backgroundColor = "#24f54b";
      }
    }
  });
}
