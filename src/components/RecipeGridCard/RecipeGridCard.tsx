import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
const CARD_WIDTH = (screenWidth - 48) / 2; // 16px padding on each side + 16px gap

interface RecipeGridCardProps {
  title: string;
  subtitle: string;
  rating: string;
  reviews?: string;
  imageUrl?: string;
  onPress?: () => void;
}

export const RecipeGridCard: React.FC<RecipeGridCardProps> = ({
  title,
  subtitle,
  rating,
  reviews,
  imageUrl,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={styles.card}
    >
      {/* Header with Title and Rating */}
      <View style={styles.headerRow}>
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={2}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <View style={styles.ratingBadge}>
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
          <View style={styles.imagePlaceholder}>
            <Text style={styles.imageIcon}>🍽️</Text>
          </View>
        )}
      </View>

      {/* Footer with Reviews and Button */}
      <View style={styles.footer}>
        {reviews && <Text style={styles.reviews} numberOfLines={1}>{reviews}</Text>}
        <TouchableOpacity style={styles.viewButton} onPress={onPress}>
          <Text style={styles.viewButtonText}>View Recipe</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#FFCE99',
    overflow: 'hidden',
    shadowColor: '#562F00',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 12,
    paddingBottom: 8,
  },
  titleContainer: {
    flex: 1,
    marginRight: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Oswald_700Bold',
    color: '#562F00',
    lineHeight: 20,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    fontFamily: 'NunitoSans_400Regular',
    color: '#FF9644',
    fontWeight: '500',
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFDF1',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FFCE99',
  },
  ratingIcon: {
    fontSize: 12,
    marginRight: 3,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: '700',
    fontFamily: 'Oswald_600SemiBold',
    color: '#562F00',
  },
  imageContainer: {
    height: 110,
    marginHorizontal: 12,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#F5F5F5',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imagePlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageIcon: {
    fontSize: 36,
  },
  footer: {
    padding: 12,
    paddingTop: 10,
  },
  reviews: {
    fontSize: 12,
    fontFamily: 'NunitoSans_400Regular',
    color: '#8B5A1A',
    marginBottom: 8,
  },
  viewButton: {
    backgroundColor: '#FF9644',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignItems: 'center',
  },
  viewButtonText: {
    fontSize: 13,
    fontWeight: '600',
    fontFamily: 'Oswald_600SemiBold',
    color: '#FFFFFF',
  },
});

export default RecipeGridCard;
