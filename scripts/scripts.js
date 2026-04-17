$(function () {
  // Initialize slider
  $("#intensity-slider").slider({
    min: 1,
    max: 10,
    value: 5,
    slide: function (event, ui) {
      $("#intensity-value").text(ui.value);
    },
  });

  // Form submission handler
  $("#alienForm").on("submit", function (event) {
    event.preventDefault();

    // Collect form data
    const formData = $(this).serializeArray();
    formData.push({
      name: "intensity",
      value: $("#intensity-slider").slider("value"),
    });

    // Simple alert to show data (replace with actual processing)
    let message = "Alien Sighting Report Submitted:\n";
    formData.forEach((field) => {
      message += `${field.name}: ${field.value}\n`;
    });
    alert(message);
  });
});
