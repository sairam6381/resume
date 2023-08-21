document.addEventListener("DOMContentLoaded", function () {
  const downloadButton = document.getElementById("downloadButton");

  downloadButton.addEventListener("click", function () {
    console.log("Button clicked"); // Add a log message to check if the button click is being registered

    const resumeUrl = "assets/Sairam_resume.pdf";

    console.log("Creating anchor element"); // Log a message before creating the anchor element

    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Sairam_resume.pdf";

    console.log("Dispatching click event"); // Log a message before dispatching the click event
    link.click();
  });
});
