# QR-generator
## Overview
This QR Code Generator is a Node.js application that converts user-provided URLs into QR code images. It uses Inquirer.js for interactive user input, qr-image for QR code generation, and fs for file handling.

## Features
- **Interactive CLI**: Prompts users to input a URL.
- **QR Code Generation**: Converts the URL into a QR code image.
- **File Management**: Saves the QR code as a PNG file and the URL as a text file.

## Technologies Used
- JavaScript
- Node.js
- Inquirer.js
- qr-image
- fs (File System)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/qr-code-generator.git
    cd qr-code-generator
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

## Usage

1. Run the application:
    ```sh
    node index.js
    ```

2. Follow the prompt to enter your URL.

The QR code image will be saved as `qr_img.png` and the URL as `URL.txt`.
