const supportedLanguages = new Set(['zh', 'en', 'es'])

// If a translated screenshot uses a different filename, add only that path here.
// Screenshots that keep the standard image1.png, image2.png, ... names need no code change.
export const imageSourceOverrides = {
  tutorial: {
    zh: {},
    en: {},
    es: {
      1: '/tutorial/es/span_img1.png',
      2: '/tutorial/es/span_img2.png',
      3: '/tutorial/es/span_img3.png',
      4: '/tutorial/es/span_img4.png',
      5: '/tutorial/es/span_img5.png',
      6: '/tutorial/es/span_img6.png',
      7: '/tutorial/es/span_img7.png',
      8: '/tutorial/es/span_img8.png',
      9: '/tutorial/es/span_img9.png',
      10: '/tutorial/es/span_img10.png',
      11: '/tutorial/es/span_img11.png',
      12: '/tutorial/es/span_img12.png',
      13: '/tutorial/es/span_img13.png',
      14: '/tutorial/es/span_img14.png',
      15: '/tutorial/es/span_img15.png',
      16: '/tutorial/es/span_img16.png',
      17: '/tutorial/es/span_img17.png',
      18: '/tutorial/es/span_img18.png',
      19: '/tutorial/es/span_img19.png',
      20: '/tutorial/es/span_img20.png',
      21: '/tutorial/es/span_img21.png',
      22: '/tutorial/es/span_img22.png',
      23: '/tutorial/es/span_img23.png',
      24: '/tutorial/es/span_img24.png',
      25: '/tutorial/es/span_img25.png',
      26: '/tutorial/es/span_img26.png',
      27: '/tutorial/es/span_img27.png',
      28: '/tutorial/es/span_img28.png',
      29: '/tutorial/es/span_img29.png',
    },
  },
  driver: {
    zh: {},
    en: {},
    es: {
      1: '/driver/es/span_imag1.png',
      2: '/driver/es/span_imag2.png',
      3: '/driver/es/span_imag3.png',
      4: '/driver/es/span_imag4.png',
      5: '/driver/es/span_imag5.png',
      6: '/driver/es/span_imag6.png',
      7: '/driver/es/span_imag7.png',
      8: '/driver/es/span_imag8.png',
      9: '/driver/es/span_imag9.png',
      10: '/driver/es/span_imag10.png',
    },
  },
}

export const getLocalizedImageSource = (
  collection,
  number,
  language = 'zh',
  extension = 'png',
) => {
  const locale = supportedLanguages.has(language) ? language : 'zh'
  const filename = `image${number}.${extension}`
  const defaultSource = `/${collection}/${locale}/${filename}`
  const defaultFallback = `/${collection}/zh/${filename}`

  return {
    src: imageSourceOverrides[collection]?.[locale]?.[number] ?? defaultSource,
    fallbackSrc: imageSourceOverrides[collection]?.zh?.[number] ?? defaultFallback,
  }
}
