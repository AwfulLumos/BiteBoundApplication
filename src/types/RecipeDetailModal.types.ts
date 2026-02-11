export interface Recipe {
  title: string;
  subtitle: string;
  rating: string;
  reviews: string;
  imageUrl: string;
  prepTime?: string;
  cookTime?: string;
  servings?: string;
  description?: string;
  ingredients?: string[];
  instructions?: string[];
}

export interface RecipeDetailModalProps {
  visible: boolean;
  onClose: () => void;
  recipe: Recipe | null;
}
