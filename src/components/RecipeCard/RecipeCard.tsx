import React from 'react';
import { View, Text, TouchableOpacity, Animated, Image, Dimensions } from 'react-native';
import { recipeCardStyles as styles } from '../../styles';
import { RecipeCardProps } from '../../types';

const { width: screenWidth } = Dimensions.get('window');
const CARD_WIDTH = screenWidth * 0.80;

export const RecipeCard: React.FC<RecipeCardProps> = ({
  title,
  subtitle,
  rating,
  reviews,
  imageIcon,
  imageUrl,
  buttonText,
  buttonAction,
  color,
  onPress,
}) => {
  const scaleAnim = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 5,
      tension: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={[{ transform: [{ scale: scaleAnim }] }, { width: CARD_WIDTH }]}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={onPress}
        style={styles.card}
      >
        <View style={styles.cardContent}>
          {/* Title and Rating */}
          <View style={styles.headerRow}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
            <View style={styles.ratingContainer}>
              <Text style={styles.ratingIcon}>⭐</Text>
              <Text style={styles.ratingText}>{rating}</Text>
            </View>
          </View>

          {/* Image */}
          <View style={styles.imageContainer}>
            {imageUrl ? (
              <Image 
                source={{ uri: imageUrl }} 
                style={styles.image}
                resizeMode="cover"
              />
            ) : (
              <Text style={styles.imageIcon}>{imageIcon || '🍽️'}</Text>
            )}
          </View>

          {/* Bottom Row */}
          <View style={styles.bottomRow}>
            {reviews && <Text style={styles.reviews}>{reviews}</Text>}
            <TouchableOpacity
              style={[styles.button, { backgroundColor: color }]}
              onPress={buttonAction}
            >
              <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};
