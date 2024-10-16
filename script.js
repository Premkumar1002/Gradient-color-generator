document.addEventListener('DOMContentLoaded', function () {
    const color1 = document.getElementById('color1');
    const color2 = document.getElementById('color2');
    const direction = document.getElementById('direction');
    const gradientPreview = document.getElementById('gradient-preview');
    const cssCode = document.getElementById('css-code');
    const refreshButton = document.getElementById('refresh');
    const copyButton = document.getElementById('copy');

    // Function to set gradient and update color inputs
    function setGradient() {
        const gradient = `linear-gradient(${direction.value}, ${color1.value}, ${color2.value})`;
        
        // Update the gradient preview
        gradientPreview.style.background = gradient;
        
        // Update the CSS code textarea content
        cssCode.value = `background: ${gradient};`;

        // Update the background of color input fields to reflect the selected color
        color1.style.backgroundColor = color1.value;
        color2.style.backgroundColor = color2.value;

        // Apply the gradient as background in the code box
        cssCode.style.background = gradient;
        cssCode.style.color = 'white';  // Set text color to white for contrast
    }

    // Initial gradient setup
    setGradient();

    // Event listeners for changing the colors or direction
    color1.addEventListener('input', setGradient);
    color2.addEventListener('input', setGradient);
    direction.addEventListener('change', setGradient);

    // Refresh colors (random colors)
    refreshButton.addEventListener('click', function () {
        color1.value = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        color2.value = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        setGradient();
    });

    // Copy CSS code to clipboard
    copyButton.addEventListener('click', function () {
        cssCode.select();
        document.execCommand('copy');
        alert('CSS code copied to clipboard!');
    });
});
