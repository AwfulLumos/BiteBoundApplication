import { StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
// Medium card width: 70% of screen for comfortable viewing with more cards visible
const CARD_WIDTH = screenWidth * 0.70;

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 0,
    marginRight: 16,
    marginVertical: 8,
    width: CARD_WIDTH,
    shadowColor: '#562F00',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 2,
    borderColor: '#FFCE99',
    overflow: 'hidden',
  },
  cardContent: {
    flex: 1,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 0,
    padding: 12,
    paddingBottom: 8,
  },
  titleContainer: {
    flex: 1,
    marginRight: 6,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Oswald_700Bold',
    color: '#562F00',
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 13,
    fontFamily: 'NunitoSans_400Regular',
    color: '#FF9644',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFDF1',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FFCE99',
  },
  ratingIcon: {
    fontSize: 13,
    marginRight: 3,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Oswald_600SemiBold',
    color: '#562F00',
  },
  imageContainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
    marginHorizontal: 12,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageIcon: {
    fontSize: 40,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    paddingTop: 10,
  },
  reviews: {
    fontSize: 12,
    fontFamily: 'NunitoSans_400Regular',
    color: '#8B5A1A',
    flex: 1,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 11,
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
