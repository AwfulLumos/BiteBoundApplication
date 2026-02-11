export interface RecipeCardProps {
  title: string;
  subtitle: string;
  rating: string;
  reviews?: string;
  imageIcon?: string;
  imageUrl?: string;
  buttonText: string;
  buttonAction?: () => void;
  color: string;
  onPress?: () => void;
}
