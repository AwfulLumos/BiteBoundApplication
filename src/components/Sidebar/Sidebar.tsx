import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import { SidebarProps, MenuItem } from '../../types';
import { sidebarStyles as styles } from '../../styles';

const Sidebar: React.FC<SidebarProps> = ({ 
  menuItems, 
  onItemPress, 
  activeItem,
  headerTitle = 'Menu',
  headerComponent
}) => {
  const renderMenuItem = (item: MenuItem) => {
    const isActive = activeItem === item.id;
    
    return (
      <TouchableOpacity
        key={item.id}
        style={[styles.menuItem, isActive && styles.menuItemActive]}
        onPress={() => onItemPress(item.id)}
        activeOpacity={0.7}
      >
        {item.icon && <View style={styles.iconContainer}>{item.icon}</View>}
        <Text style={[styles.menuItemText, isActive && styles.menuItemTextActive]}>
          {item.label}
        </Text>
        {item.badge && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{item.badge}</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {headerComponent || (
          <View style={styles.logoContainer}>
            <Image 
              source={require('../../../assets/Logos/BiteBoundLogo.jpg')} 
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.headerTitle}>{headerTitle}</Text>
          </View>
        )}
      </View>
      
      <ScrollView style={styles.menuContainer} showsVerticalScrollIndicator={false}>
        {menuItems.map(renderMenuItem)}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Sidebar;
