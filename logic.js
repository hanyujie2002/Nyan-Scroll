let originalScrollbarSizeTimesDpr;

function setOptimalSize() {
  try {
    const dpr = window.devicePixelRatio || 1;
    const scrollbarSize = originalScrollbarSizeTimesDpr / dpr;

    console.debug(`Applying scrollbar size: ${scrollbarSize}px`);
    let baseRainbowSize;
    let newBackgroundSize;

    if (scrollbarSize > 0) {
      baseRainbowSize = scrollbarSize * (20 / 22);
    } else {
      baseRainbowSize = 16;
    }

    newBackgroundSize = scrollbarSize * 4;

    const N = Math.floor((baseRainbowSize * dpr) / 2);
    const newRainbowSize = ((N + 0.75) * 2) / dpr;

    document.documentElement.style.setProperty('--rainbow-size', `${newRainbowSize}px`);
    document.documentElement.style.setProperty('--scrollbar-size', `${scrollbarSize}px`);
    document.documentElement.style.setProperty('--background-size', `${newBackgroundSize}px`);

    console.debug(`--scrollbar-size set to ${scrollbarSize}`);
    console.debug(`--background-size set to ${newBackgroundSize}`);

  } catch (error) {
    console.error('Nyan Cat Scrollbar: Failed to set optimal size.', error);
  }
}

// Initial load of the scrollbar size
chrome.storage.local.get('scrollbarSize', (data) => {
  const size = data.scrollbarSize || 16; // Default size is 16px

  originalScrollbarSizeTimesDpr = size * (window.devicePixelRatio || 1);
  console.log(`Loaded scrollbar size from storage: ${originalScrollbarSizeTimesDpr}px`);
  setOptimalSize();
});

// Listen for changes in storage (e.g., from the popup)
// chrome.storage.onChanged.addListener((changes, namespace) => {
//   if (namespace === 'local' && changes.scrollbarSize) {
//     const newSize = changes.scrollbarSize.newValue;
//     setOptimalSize(newSize);
//   }
// });

window.addEventListener('resize', () => {
  setOptimalSize();
});
