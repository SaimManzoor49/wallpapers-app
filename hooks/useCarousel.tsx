export interface ICarouselItem {
  image: string;
  title: string;
}
export function useCarousel(): ICarouselItem[] {
  return [
    {
      image:
        "https://ideogram.ai/assets/image/lossless/response/_dPDx_wyS1umQUYJlMeASA",
      title: "In the face",
    },
    {
      image:
        "https://ideogram.ai/assets/progressive-image/balanced/response/bekB4EXSQDmDZqRcxk1_0g",
      title: "In the sky",
    },

    {
      image:
        "https://ideogram.ai/assets/progressive-image/balanced/response/dzDUveNvTk29oy2Zdnj6zw",
      title: "On the road",
    },
    {
      image:
        "https://ideogram.ai/assets/progressive-image/balanced/response/BTZ4A6G3QyKHlmAv4el01w",
      title: "Falling",
    },
  ];
}
