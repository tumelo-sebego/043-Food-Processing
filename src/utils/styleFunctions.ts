export const updateFontSize = (selector: string, baseFontSize: number = 6.5) => {
  const element = document.querySelector(selector) as HTMLElement;
  if (!element) return;

  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

  let fontSize: number;

  // The logic is based on the original HeroSection component.
  // The font sizes at different breakpoints are derived from the baseFontSize.
  // Original values: 6.5, 6, 5.5, 4.5, 3.8, 3.2
  if (vw >= 1400) {
    fontSize = Math.min(baseFontSize, vw * 0.04);
  } else if (vw >= 1200) {
    fontSize = Math.min(baseFontSize - 0.5, vw * 0.038);
  } else if (vw >= 992) {
    fontSize = Math.min(baseFontSize - 1.0, vw * 0.036);
  } else if (vw >= 768) {
    fontSize = Math.min(baseFontSize - 2.0, vw * 0.034);
  } else if (vw >= 576) {
    fontSize = Math.min(baseFontSize - 2.7, vw * 0.048);
  } else {
    fontSize = Math.min(baseFontSize - 3.3, vw * 0.055);
  }

  element.style.fontSize = `${fontSize}rem`;
}

export const updateProductTitleFontSize = (selector: string) => {
  const element = document.querySelector(selector) as HTMLElement;
  if (!element) return;

  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  if (vw < 768) {
    element.style.fontSize = '2.7rem';
  } else {
    element.style.fontSize = '5rem';
  }
};

export const updateLocationTitleFontSize = (selector: string) => {
  const element = document.querySelector(selector) as HTMLElement;
  if (!element) return;

  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  if (vw < 768) {
    element.style.fontSize = '2.7rem';
  } else {
    element.style.fontSize = '5rem';
  }
};