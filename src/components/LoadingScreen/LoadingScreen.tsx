import React from 'react';
import { View, ActivityIndicator, Text, Image } from 'react-native';
import { LoadingScreenProps } from '../../types';
import { loadingScreenStyles as styles } from '../../styles';

const LoadingScreen: React.FC<LoadingScreenProps> = ({ 
  message = 'Loading...', 
  size = 'large',
  color = '#FF9644'
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image 
          source={require('../../../assets/Logos/BiteBoundLogo.jpg')} 
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>
      <ActivityIndicator size={size} color={color} style={styles.spinner} />
      {message && <Text style={styles.message}>{message}</Text>}
    </View>
  );
};

export default LoadingScreen;
