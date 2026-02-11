import { StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
// Optimized card width: 78% of screen for better viewing with multiple cards
const CARD_WIDTH = screenWidth * 0.78;

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 18,
    marginRight: 20,
    marginVertical: 8,
    width: CARD_WIDTH,
    minWidth: CARD_WIDTH,
    maxWidth: CARD_WIDTH,
    shadowColor: '#562F00',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 15,
    elevation: 8,
    borderWidth: 2,
    borderColor: '#FFCE99',
  },
  cardContent: {
    flex: 1,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 14,
  },
  titleContainer: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Oswald_600SemiBold',
    color: '#562F00',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    fontFamily: 'NunitoSans_400Regular',
    color: '#8B5A1A',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFDF1',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#FFCE99',
  },
  ratingIcon: {
    fontSize: 14,
    marginRight: 4,
  },
  ratingText: {
    fontSize: 13,
    fontWeight: 'bold',
    fontFamily: 'Oswald_600SemiBold',
    color: '#562F00',
  },
  imageContainer: {
    backgroundColor: '#FFFDF1',
    borderRadius: 18,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageIcon: {
    fontSize: 48,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  reviews: {
    fontSize: 12,
    fontFamily: 'NunitoSans_400Regular',
    color: '#8B5A1A',
    flex: 1,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 24,
    shadowColor: '#562F00',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Oswald_600SemiBold',
    letterSpacing: 0.5,
  },
});
