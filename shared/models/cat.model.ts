type CatImage = {
  id?: string;
  width: number;
  height: number;
  url: string;
};

export type Cat = {
  id: string | number;
  name: string;
  image: CatImage;
  temperament: string;
  description: string;
  origin?: string; // "Egypt", "Greece",
};
