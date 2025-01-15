# Image Optimization Tool

This project provides a simple tool for uploading and optimizing images. It supports previewing optimized versions of an image at different quality levels to choose the most suitable one.

## Features

- Upload an image from your device.
- Automatically checks if the image size exceeds 2MB.
- Generates optimized previews at different quality levels (75%, 50%, and 25%).
- Allows the user to select an optimized version.


## How It Works

1. **Upload an Image**
   - Users can upload an image using the file input.
   - If the image size exceeds 2MB, optimization options are displayed.

2. **Optimize Image**
   - The tool generates three optimized previews of the image at quality levels of 75%, 50%, and 25%.

3. **Select Optimized Image**
   - Users can select one of the optimized versions by clicking on the preview. The selected image is highlighted with a blue border.

4. **Confirm Selection**
   - After selecting an image, users can confirm their choice by clicking the "Choose" button.

## Technologies Used

- HTML
- CSS
- JavaScript

## How to Use

1. Clone or download this repository.
2. Open `index.html` in your browser.
3. Upload an image and follow the instructions.

## Code Explanation

### index.html

- Provides the structure of the application, including the file input form and preview container.

### style.css

- Defines the layout and styling of the application.
- Ensures the previews are properly aligned and highlighted.

### script.js

- Handles image upload, optimization, and preview generation.
- Uses the HTML5 Canvas API to resize and compress images.
- Allows users to select and confirm an optimized image.
