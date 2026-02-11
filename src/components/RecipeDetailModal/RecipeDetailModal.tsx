import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import { RecipeDetailModalProps } from '../../types';
import { recipeDetailModalStyles as styles } from '../../styles';

const { width } = Dimensions.get('window');

export const RecipeDetailModal: React.FC<RecipeDetailModalProps> = ({
  visible,
  onClose,
  recipe,
}) => {
  if (!recipe) return null;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          {/* Header with Close Button */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Recipe Details</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>✕</Text>
            </TouchableOpacity>
          </View>

          <ScrollView 
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            {/* Recipe Image */}
            <Image 
              source={{ uri: recipe.imageUrl }} 
              style={styles.recipeImage}
              resizeMode="cover"
            />

            {/* Recipe Title and Info */}
            <View style={styles.infoContainer}>
              <Text style={styles.recipeTitle}>{recipe.title}</Text>
              <Text style={styles.recipeSubtitle}>{recipe.subtitle}</Text>
              
              <View style={styles.ratingContainer}>
                <Text style={styles.ratingText}>⭐ {recipe.rating}</Text>
                <Text style={styles.reviewsText}>({recipe.reviews})</Text>
              </View>
            </View>

            {/* Quick Stats */}
            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Text style={styles.statIcon}>⏱️</Text>
                <Text style={styles.statLabel}>Prep Time</Text>
                <Text style={styles.statValue}>{recipe.prepTime || '30 min'}</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statIcon}>🍳</Text>
                <Text style={styles.statLabel}>Cook Time</Text>
                <Text style={styles.statValue}>{recipe.cookTime || '45 min'}</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statIcon}>👥</Text>
                <Text style={styles.statLabel}>Servings</Text>
                <Text style={styles.statValue}>{recipe.servings || '4'}</Text>
              </View>
            </View>

            {/* Description */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Description</Text>
              <Text style={styles.description}>
                {recipe.description || 'A delicious and easy-to-make recipe that will impress your family and friends. Perfect for any occasion!'}
              </Text>
            </View>

            {/* Ingredients */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Ingredients</Text>
              {(recipe.ingredients || [
                '2 cups pasta',
                '4 eggs',
                '1 cup parmesan cheese',
                '200g pancetta',
                'Black pepper to taste',
                'Salt to taste'
              ]).map((ingredient: string, index: number) => (
                <View key={index} style={styles.listItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.listText}>{ingredient}</Text>
                </View>
              ))}
            </View>

            {/* Instructions */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Instructions</Text>
              {(recipe.instructions || [
                'Bring a large pot of salted water to boil',
                'Cook pasta according to package instructions',
                'Meanwhile, cook pancetta until crispy',
                'Beat eggs with parmesan cheese',
                'Drain pasta and mix with egg mixture',
                'Add pancetta and serve immediately'
              ]).map((instruction: string, index: number) => (
                <View key={index} style={styles.instructionItem}>
                  <View style={styles.stepNumber}>
                    <Text style={styles.stepNumberText}>{index + 1}</Text>
                  </View>
                  <Text style={styles.instructionText}>{instruction}</Text>
                </View>
              ))}
            </View>

            {/* Action Buttons */}
            <View style={styles.actionButtons}>
              <TouchableOpacity style={styles.favoriteButton}>
                <Text style={styles.favoriteButtonText}>Add to Favorites</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.startButton}>
                <Text style={styles.startButtonText}>Start Cooking</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};
