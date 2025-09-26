function setOptimalRainbowSize() {
  try {
		const vertScrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
		const horizScrollbarHeight = window.innerHeight - document.documentElement.clientHeight;
		const scrollbarSize = Math.max(vertScrollbarWidth, horizScrollbarHeight);

    console.debug(`Detected scrollbar size: ${scrollbarSize}`);
    let baseSize;

		if (scrollbarSize > 0) {
			baseSize = scrollbarSize * (20 / 22);
		} else {
			baseSize = 15;
		}

    console.debug(`baseSize: ${baseSize}`);

    const dpr = window.devicePixelRatio || 1;

    const N = Math.floor((baseSize * dpr) / 2);

    const newSize = ((N + 0.75) * 2) / dpr;

    console.debug(`newSize: ${newSize}`);

    console.debug(`newSize * dpr: ${newSize * dpr}`);

    document.documentElement.style.setProperty(
      '--rainbow-size',
      `${newSize}px`
    );
  } catch (error) {
    console.error('Nyan Cat Scrollbar: Failed to set optimal size.', error);
  }
}

setOptimalRainbowSize();

window.addEventListener('resize', setOptimalRainbowSize);
