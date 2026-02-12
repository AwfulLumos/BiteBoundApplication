import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions, Animated, Image } from 'react-native';
import { Sidebar, MenuItem, RecipeCard, QuickStat, RecipeDetailModal, Recipe, ScreenHeader } from '../components';
import RecipesScreen from './RecipesScreen';
import { homeScreenStyles as styles } from '../styles';

const { width } = Dimensions.get('window');

// Example usage of Sidebar component
const HomeScreen: React.FC = () => {
  const [activeSidebarItem, setActiveSidebarItem] = useState('home');
  const [showSidebar, setShowSidebar] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<'home' | 'recipes'>('home');
  const sidebarAnim = React.useRef(new Animated.Value(-280)).current;

  // Recipe data
  const featuredRecipes: Recipe[] = [
    {
      title: "Pasta Carbonara",
      subtitle: "Italian",
      rating: "4.8",
      reviews: "324 Reviews",
      imageUrl: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&h=300&fit=crop",
      prepTime: "15 min",
      cookTime: "20 min",
      servings: "4",
      description: "Classic Italian pasta dish with eggs, cheese, and crispy pancetta. Rich, creamy, and utterly delicious!",
      ingredients: [
        "400g spaghetti",
        "4 large eggs",
        "100g Pecorino Romano cheese, grated",
        "200g pancetta, diced",
        "Freshly ground black pepper",
        "Salt to taste"
      ],
      instructions: [
        "Bring a large pot of salted water to boil",
        "Cook pasta according to package instructions until al dente",
        "Meanwhile, cook pancetta in a large skillet until crispy",
        "Beat eggs with grated cheese in a bowl",
        "Reserve 1 cup pasta water, then drain pasta",
        "Toss hot pasta with pancetta, remove from heat",
        "Quickly mix in egg mixture, adding pasta water to create creamy sauce",
        "Season with black pepper and serve immediately"
      ]
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
      description: "Aromatic and flavorful Indian chicken curry with a rich, spiced tomato-based sauce.",
      ingredients: [
        "800g chicken thighs, cut into pieces",
        "2 onions, finely chopped",
        "4 cloves garlic, minced",
        "2 tbsp curry powder",
        "1 can coconut milk",
        "400g crushed tomatoes",
        "Fresh cilantro for garnish"
      ],
      instructions: [
        "Heat oil in a large pot over medium heat",
        "Add onions and cook until golden brown",
        "Add garlic and curry powder, cook for 1 minute",
        "Add chicken pieces and brown on all sides",
        "Pour in coconut milk and crushed tomatoes",
        "Simmer for 30 minutes until chicken is cooked through",
        "Garnish with fresh cilantro and serve with rice"
      ]
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
    },
    {
      title: "Beef Tacos",
      subtitle: "Mexican",
      rating: "4.7",
      reviews: "389 Reviews",
      imageUrl: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop",
      prepTime: "10 min",
      cookTime: "15 min",
      servings: "4",
    },
    {
      title: "Caesar Salad",
      subtitle: "American",
      rating: "4.5",
      reviews: "298 Reviews",
      imageUrl: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop",
      prepTime: "15 min",
      cookTime: "0 min",
      servings: "2",
    }
  ];

  // Sidebar menu items
  const sidebarMenuItems: MenuItem[] = [
    { id: 'home', label: 'Home' },
    { id: 'recipes', label: 'Recipes', badge: '17' },
    { id: 'favorites', label: 'Favorites', badge: '5' },
    { id: 'categories', label: 'Categories', badge: '10' },
    { id: 'shopping-list', label: 'Shopping List', badge: '3' },
    { id: 'settings', label: 'Settings' },
  ];

  const handleSidebarItemPress = (itemId: string) => {
    setActiveSidebarItem(itemId);
    console.log('Sidebar item pressed:', itemId);
    
    // Navigate based on sidebar item
    if (itemId === 'recipes') {
      setCurrentScreen('recipes');
      toggleSidebar(); // Close sidebar after navigation
    } else if (itemId === 'home') {
      setCurrentScreen('home');
      toggleSidebar();
    }
    // Add more navigation logic for other items here
  };

  const toggleSidebar = () => {
    Animated.timing(sidebarAnim, {
      toValue: showSidebar ? -280 : 0,
      duration: 350,
      useNativeDriver: false,
    }).start();
    setShowSidebar(!showSidebar);
  };

  const handleCardPress = (recipe: Recipe) => {
    console.log('Recipe pressed:', recipe.title);
    setSelectedRecipe(recipe);
    setModalVisible(true);
  };

  const handleCategoryPress = (categoryName: string) => {
    console.log('Category pressed:', categoryName);
    setActiveSidebarItem(categoryName);
    // Add navigation logic to category browse screen
  };

  const handleModalClose = () => {
    setModalVisible(false);
    setTimeout(() => {
      setSelectedRecipe(null);
    }, 300); // Wait for modal animation to complete
  };

  return (
    <View style={styles.container}>
      {/* Overlay when sidebar is open */}
      {showSidebar && (
        <TouchableOpacity 
          style={styles.overlay} 
          activeOpacity={1} 
          onPress={toggleSidebar}
        />
      )}

      {/* Sidebar - Slides in from left */}
      <Animated.View
        style={[
          styles.sidebarContainer,
          { left: sidebarAnim }
        ]}
      >
        <Sidebar
          menuItems={sidebarMenuItems}
          onItemPress={handleSidebarItemPress}
          activeItem={activeSidebarItem}
          headerTitle="Bite Bound"
        />
      </Animated.View>

      {/* Main content area */}
      <View style={styles.mainContent}>
        {currentScreen === 'recipes' ? (
          // Recipes Screen
          <RecipesScreen 
            onBack={() => setCurrentScreen('home')} 
            onMenuPress={toggleSidebar}
          />
        ) : (
          // Home Screen Content
          <>
        {/* Header with menu toggle */}
        <ScreenHeader
          title="Home"
          subtitle="Welcome back Chef!"
          onMenuPress={toggleSidebar}
          showLogo={true}
          logoSource={require('../../assets/Logos/BiteBoundLogo.jpg')}
        />

        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Featured Recipes Section - Horizontal Scroll */}
          <View style={styles.sectionContainer}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Featured Recipes</Text>
              <Text style={styles.sectionSubtitle}>Sorted by popularity ↓</Text>
            </View>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.horizontalScroll}
            >
              {featuredRecipes.map((recipe, index) => (
                <RecipeCard
                  key={index}
                  title={recipe.title}
                  subtitle={recipe.subtitle}
                  rating={recipe.rating}
                  reviews={recipe.reviews}
                  imageUrl={recipe.imageUrl}
                  buttonText="View"
                  color="#FF9644"
                    onPress={() => handleCardPress(recipe)}
                    buttonAction={() => handleCardPress(recipe)}
                />
              ))}
            </ScrollView>
          </View>

          {/* Popular Categories Section - Horizontal Scroll */}
          <View style={styles.sectionContainer}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Popular Categories</Text>
              <Text style={styles.sectionSubtitle}>Sorted by higher rating ↓</Text>
            </View>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.horizontalScroll}
            >
              <RecipeCard
                title="Breakfast"
                subtitle="Morning Meals"
                rating="4.8"
                reviews="848 Recipes"
                imageUrl="https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=300&fit=crop"
                buttonText="Browse"
                color="#562F00"
                onPress={() => handleCategoryPress('breakfast')}
              />
              <RecipeCard
                title="Desserts"
                subtitle="Sweet Treats"
                rating="4.7"
                reviews="663 Recipes"
                imageUrl="https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop"
                buttonText="Browse"
                color="#562F00"
                onPress={() => handleCategoryPress('desserts')}
              />
              <RecipeCard
                title="Vegetarian"
                subtitle="Plant-Based"
                rating="4.9"
                reviews="521 Recipes"
                imageUrl="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
                buttonText="Browse"
                color="#562F00"
                onPress={() => handleCategoryPress('vegetarian')}
              />
              <RecipeCard
                title="Seafood"
                subtitle="Ocean Delights"
                rating="4.8"
                reviews="445 Recipes"
                imageUrl="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"
                buttonText="Browse"
                color="#562F00"
                onPress={() => handleCategoryPress('seafood')}
              />
              <RecipeCard
                title="Appetizers"
                subtitle="Starters & Snacks"
                rating="4.6"
                reviews="732 Recipes"
                imageUrl="https://images.unsplash.com/photo-1541529086526-db283c563270?w=400&h=300&fit=crop"
                buttonText="Browse"
                color="#562F00"
                onPress={() => handleCategoryPress('appetizers')}
              />
            </ScrollView>
          </View>

          {/* Quick Actions Section - Vertical */}
          <View style={styles.sectionContainer}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>⚡ Quick Actions</Text>
            </View>
            
            <View style={styles.statsContainer}>
              <QuickStat label="Total Recipes" value="17" icon="📖" color="#FF9644" />
              <QuickStat label="Favorites" value="5" icon="❤️" color="#FFCE99" />
              <QuickStat label="Categories" value="10" icon="📂" color="#FF9644" />
              <QuickStat label="Shopping List" value="3" icon="🛒" color="#FFCE99" />
            </View>
          </View>
        </ScrollView>
        </>
        )}
      </View>

      {/* Recipe Detail Modal */}
      <RecipeDetailModal
        visible={modalVisible}
        onClose={handleModalClose}
        recipe={selectedRecipe}
      />
    </View>
  );
};

export default HomeScreen;
