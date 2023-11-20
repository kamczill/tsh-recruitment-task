type rating = 1 | 2 | 3 | 4 | 5;
type URL = `http://${string}` | `https://${string}`;

export type ProductCardProps = {
  active: boolean;
  description: string;
  id: string;
  image: URL;
  promo: boolean;
  rating: rating;
  name: string;
};
