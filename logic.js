function setOptimalSize() {
  try {
    const dpr = window.devicePixelRatio || 1;

		const scrollbarSize = originalScrollbarSizeTimesDpr / dpr;

    console.debug(`Detected scrollbar size: ${scrollbarSize}`);
    let baseRainbowSize;
    let newBackgroundSize;

		if (scrollbarSize > 0) {
			baseRainbowSize = scrollbarSize * (20 / 22);
		} else {
			baseRainbowSize = 16;
		}

    newBackgroundSize = scrollbarSize * 4;

    console.debug(`baseRainbowSize: ${baseRainbowSize}`);

    const N = Math.floor((baseRainbowSize * dpr) / 2);

    const newRainbowSize = ((N + 0.75) * 2) / dpr;

    console.debug(`newRainbowSize: ${newRainbowSize}`);

    console.debug(`newRainbowSize * dpr: ${newRainbowSize * dpr}`);

    document.documentElement.style.setProperty(
      '--rainbow-size',
      `${newRainbowSize}px`
    );

    document.documentElement.style.setProperty(
      '--scrollbar-size',
      `${scrollbarSize}px`
    );

    document.documentElement.style.setProperty(
      '--background-size',
      `${newBackgroundSize}px`
    );

    console.debug(`--background-size set to ${newBackgroundSize}`)

  } catch (error) {
    console.error('Nyan Cat Scrollbar: Failed to set optimal size.', error);
  }
}

const originalScrollbarSizeTimesDpr = 16 * (window.devicePixelRatio || 1);

setOptimalSize();

window.addEventListener('resize', setOptimalSize);
