

// Import the necessary libraries
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

// Prompt the user to enter a URL
inquirer
  .prompt([
    {
      message: "Type in your url:",
      name: "URL",
    },
  ])
  .then((answers) => {
    // Get the URL that the user entered
    const url = answers.URL;

    // Generate a QR code image from the URL
    const qr_svg = qr.image(url);

    // Save the QR code image to a file named "qr_img.png"
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    // Save the URL as a text file named "URL.txt"
    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("The file has been saved");
    });
  })
  .catch((error) => {
    // If there is an error, handle it here
    if (error.isTtyError) {
      // If the error is related to terminal input/output, handle it here
    } else {
      // Otherwise, handle the error here
    }
  });