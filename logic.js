function setOptimalRainbowHeight() {
  try {
    const dpr = window.devicePixelRatio || 1;
    const originalHeight = 14;

    const N = Math.floor((originalHeight * dpr) / 2);

    const newHeight = ((N + 0.75) * 2) / dpr;

    document.documentElement.style.setProperty(
      '--rainbow-vert-height',
      `${newHeight}px`
    );
  } catch (error) {
    console.error('Nyan Cat Scrollbar: Failed to set optimal height.', error);
  }
}

setOptimalRainbowHeight();

window.addEventListener('resize', setOptimalRainbowHeight);
