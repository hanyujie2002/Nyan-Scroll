const sizeSlider = document.getElementById('scrollbarSize');
const sizeValueLabel = document.getElementById('sizeValue');

// Load the saved size and initialize the slider
chrome.storage.local.get('scrollbarSize', (data) => {
    const currentSize = data.scrollbarSize || 16; // Default to 16px
    sizeSlider.value = currentSize;
    sizeValueLabel.textContent = currentSize;
});

// Listen for changes on the slider
sizeSlider.addEventListener('input', (event) => {
    const newSize = event.target.value;
    sizeValueLabel.textContent = newSize;
    console.debug(`Slider changed to: ${newSize}px`);
    chrome.storage.local.set({ scrollbarSize: newSize });
});
