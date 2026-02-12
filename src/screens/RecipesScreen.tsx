import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
  Modal,
} from 'react-native';
import { RecipeGridCard, RecipeDetailModal, Recipe, ScreenHeader } from '../components';
import { recipesScreenStyles as styles } from '../styles';

interface RecipesScreenProps {
  onBack?: () => void;
  onMenuPress?: () => void;
}

export const RecipesScreen: React.FC<RecipesScreenProps> = ({ onBack, onMenuPress }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [filterVisible, setFilterVisible] = useState(false);

  // Sample recipes data
  const allRecipes: Recipe[] = [
    {
      title: "Pasta Carbonara",
      subtitle: "Italian",
      rating: "4.8",
      reviews: "324 Reviews",
      imageUrl: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&h=300&fit=crop",
      prepTime: "15 min",
      cookTime: "20 min",
      servings: "4",
      description: "Classic Italian pasta dish with eggs, cheese, and crispy pancetta.",
      ingredients: ["400g spaghetti", "4 large eggs", "100g Pecorino Romano cheese", "200g pancetta"],
      instructions: ["Boil pasta", "Cook pancetta", "Mix eggs with cheese", "Combine all ingredients"]
    },
    {
      title: "Chicken Curry",
      subtitle: "Indian",
      rating: "4.6",
      reviews: "256 Reviews",
      imageUrl: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop",
      prepTime: "20 min",
      cookTime: "40 min",
      servings: "6",
      description: "Aromatic Indian chicken curry with rich spices.",
      ingredients: ["800g chicken", "2 onions", "4 cloves garlic", "2 tbsp curry powder"],
      instructions: ["Cook onions", "Add spices", "Add chicken", "Simmer"]
    },
    {
      title: "Sushi Roll",
      subtitle: "Japanese",
      rating: "4.9",
      reviews: "412 Reviews",
      imageUrl: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
      prepTime: "30 min",
      cookTime: "20 min",
      servings: "4",
      description: "Fresh and delicious homemade sushi rolls.",
      ingredients: ["Sushi rice", "Nori sheets", "Fresh fish", "Vegetables"],
      instructions: ["Cook rice", "Prepare fillings", "Roll sushi", "Slice and serve"]
    },
    {
      title: "Caesar Salad",
      subtitle: "American",
      rating: "4.5",
      reviews: "189 Reviews",
      imageUrl: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop",
      prepTime: "15 min",
      cookTime: "0 min",
      servings: "4",
      description: "Classic Caesar salad with homemade dressing.",
      ingredients: ["Romaine lettuce", "Parmesan cheese", "Croutons", "Caesar dressing"],
      instructions: ["Chop lettuce", "Make dressing", "Add toppings", "Toss and serve"]
    },
    {
      title: "Beef Tacos",
      subtitle: "Mexican",
      rating: "4.7",
      reviews: "298 Reviews",
      imageUrl: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=300&fit=crop",
      prepTime: "15 min",
      cookTime: "15 min",
      servings: "4",
      description: "Flavorful beef tacos with fresh toppings.",
      ingredients: ["Ground beef", "Taco shells", "Lettuce", "Tomatoes", "Cheese"],
      instructions: ["Cook beef", "Season", "Warm shells", "Assemble tacos"]
    },
    {
      title: "Pad Thai",
      subtitle: "Thai",
      rating: "4.8",
      reviews: "345 Reviews",
      imageUrl: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400&h=300&fit=crop",
      prepTime: "20 min",
      cookTime: "15 min",
      servings: "4",
      description: "Traditional Thai stir-fried noodles with tangy sauce.",
      ingredients: ["Rice noodles", "Shrimp", "Eggs", "Peanuts", "Bean sprouts"],
      instructions: ["Soak noodles", "Stir fry ingredients", "Add sauce", "Garnish"]
    },
  ];

  const categories = ['All', 'Italian', 'Indian', 'Japanese', 'American', 'Mexican', 'Thai'];

  // Filter recipes based on search and category
  const filteredRecipes = allRecipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         recipe.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || recipe.subtitle === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleRecipePress = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
    setTimeout(() => {
      setSelectedRecipe(null);
    }, 300);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <ScreenHeader
        title="All Recipes"
        subtitle={`${filteredRecipes.length} recipes available`}
        onMenuPress={onMenuPress || (() => {})}
      />

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search recipes..."
          placeholderTextColor="#A57C52"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={() => setSearchQuery('')} style={styles.clearButton}>
            <Text style={styles.clearButtonText}>✕</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Category Filter Button */}
      <TouchableOpacity 
        style={styles.filterButton}
        onPress={() => setFilterVisible(true)}
      >
        <Text style={styles.filterButtonText}>
          {selectedCategory === 'All' ? 'Filter by Category' : `Category: ${selectedCategory}`}
        </Text>
        <Text style={styles.filterButtonIcon}>▼</Text>
      </TouchableOpacity>

      {/* Recipes Grid */}
      <FlatList
        data={filteredRecipes}
        keyExtractor={(item, index) => `${item.title}-${index}`}
        numColumns={2}
        contentContainerStyle={styles.recipeGrid}
        columnWrapperStyle={styles.recipeRow}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <RecipeGridCard
            title={item.title}
            subtitle={item.subtitle}
            rating={item.rating}
            reviews={item.reviews}
            imageUrl={item.imageUrl}
            onPress={() => handleRecipePress(item)}
          />
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>🍽️</Text>
            <Text style={styles.emptyText}>No recipes found</Text>
            <Text style={styles.emptySubtext}>Try adjusting your search or filters</Text>
          </View>
        )}
      />

      {/* Recipe Detail Modal */}
      <RecipeDetailModal
        visible={modalVisible}
        onClose={handleModalClose}
        recipe={selectedRecipe}
      />

      {/* Category Filter Modal */}
      <Modal
        visible={filterVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setFilterVisible(false)}
      >
        <TouchableOpacity 
          style={styles.filterModalOverlay}
          activeOpacity={1}
          onPress={() => setFilterVisible(false)}
        >
          <View style={styles.filterModalContent}>
            <Text style={styles.filterModalTitle}>Select Category</Text>
            {categories.map((category) => (
              <TouchableOpacity
                key={category}
                style={[
                  styles.filterOption,
                  selectedCategory === category && styles.filterOptionActive
                ]}
                onPress={() => {
                  setSelectedCategory(category);
                  setFilterVisible(false);
                }}
              >
                <Text
                  style={[
                    styles.filterOptionText,
                    selectedCategory === category && styles.filterOptionTextActive
                  ]}
                >
                  {category}
                </Text>
                {selectedCategory === category && (
                  <Text style={styles.filterCheckmark}>✓</Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default RecipesScreen;
