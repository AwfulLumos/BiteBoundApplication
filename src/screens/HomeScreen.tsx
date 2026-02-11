import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions, Animated, Image } from 'react-native';
import { Sidebar, MenuItem, RecipeCard, QuickStat } from '../components';
import { homeScreenStyles as styles } from '../styles';

const { width } = Dimensions.get('window');

// Example usage of Sidebar component
const HomeScreen: React.FC = () => {
  const [activeSidebarItem, setActiveSidebarItem] = useState('home');
  const [showSidebar, setShowSidebar] = useState(false);
  const burgerAnim = React.useRef(new Animated.Value(0)).current;
  const sidebarAnim = React.useRef(new Animated.Value(-280)).current;

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
    // Add navigation logic here
  };

  const toggleSidebar = () => {
    const toValue = showSidebar ? 0 : 1;
    Animated.timing(burgerAnim, {
      toValue,
      duration: 350,
      useNativeDriver: true,
    }).start();
    Animated.timing(sidebarAnim, {
      toValue: showSidebar ? -280 : 0,
      duration: 350,
      useNativeDriver: false,
    }).start();
    setShowSidebar(!showSidebar);
  };

  const handleCardPress = (cardName: string) => {
    console.log('Card pressed:', cardName);
    setActiveSidebarItem(cardName);
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
        {/* Header with menu toggle */}
        <View style={styles.header}>
          <TouchableOpacity onPress={toggleSidebar} style={styles.menuButton}>
            <Animated.View
              style={[
                styles.hamburgerContainer,
                {
                  transform: [
                    {
                      rotate: burgerAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', '90deg'],
                      }),
                    },
                    {
                      scale: burgerAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 1.1],
                      }),
                    },
                  ],
                },
              ]}
            >
              <View style={styles.hamburgerLine} />
              <View style={styles.hamburgerLine} />
              <View style={styles.hamburgerLine} />
            </Animated.View>
          </TouchableOpacity>
          <View style={styles.headerContent}>
            <View style={styles.headerTitleRow}>
              <Image 
                source={require('../../assets/Logos/BiteBoundLogo.jpg')} 
                style={styles.headerLogo}
                resizeMode="contain"
              />
              <View>
                <Text style={styles.headerTitle}>Dashboard</Text>
                <Text style={styles.headerSubtitle}>Welcome back Chef!</Text>
              </View>
            </View>
          </View>
        </View>

        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Featured Recipes Section - Horizontal Scroll */}
          <View style={styles.sectionContainer}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>🌟 Featured Recipes</Text>
              <Text style={styles.sectionSubtitle}>Sorted by popularity ↓</Text>
            </View>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.horizontalScroll}
            >
              <RecipeCard
                title="Pasta Carbonara"
                subtitle="Italian"
                rating="4.8"
                reviews="324 Reviews"
                imageUrl="https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&h=300&fit=crop"
                buttonText="View"
                color="#FF9644"
                onPress={() => handleCardPress('carbonara')}
              />
              <RecipeCard
                title="Chicken Curry"
                subtitle="Indian"
                rating="4.6"
                reviews="256 Reviews"
                imageUrl="https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop"
                buttonText="View"
                color="#FF9644"
                onPress={() => handleCardPress('curry')}
              />
              <RecipeCard
                title="Sushi Roll"
                subtitle="Japanese"
                rating="4.9"
                reviews="412 Reviews"
                imageUrl="https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop"
                buttonText="View"
                color="#FF9644"
                onPress={() => handleCardPress('sushi')}
              />
              <RecipeCard
                title="Beef Tacos"
                subtitle="Mexican"
                rating="4.7"
                reviews="389 Reviews"
                imageUrl="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
                buttonText="View"
                color="#FF9644"
                onPress={() => handleCardPress('tacos')}
              />
              <RecipeCard
                title="Caesar Salad"
                subtitle="American"
                rating="4.5"
                reviews="298 Reviews"
                imageUrl="https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop"
                buttonText="View"
                color="#FF9644"
                onPress={() => handleCardPress('caesar')}
              />
            </ScrollView>
          </View>

          {/* Popular Categories Section - Horizontal Scroll */}
          <View style={styles.sectionContainer}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>🔥 Popular Categories</Text>
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
                onPress={() => handleCardPress('breakfast')}
              />
              <RecipeCard
                title="Desserts"
                subtitle="Sweet Treats"
                rating="4.7"
                reviews="663 Recipes"
                imageUrl="https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop"
                buttonText="Browse"
                color="#562F00"
                onPress={() => handleCardPress('desserts')}
              />
              <RecipeCard
                title="Vegetarian"
                subtitle="Plant-Based"
                rating="4.9"
                reviews="521 Recipes"
                imageUrl="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
                buttonText="Browse"
                color="#562F00"
                onPress={() => handleCardPress('vegetarian')}
              />
              <RecipeCard
                title="Seafood"
                subtitle="Ocean Delights"
                rating="4.8"
                reviews="445 Recipes"
                imageUrl="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"
                buttonText="Browse"
                color="#562F00"
                onPress={() => handleCardPress('seafood')}
              />
              <RecipeCard
                title="Appetizers"
                subtitle="Starters & Snacks"
                rating="4.6"
                reviews="732 Recipes"
                imageUrl="https://images.unsplash.com/photo-1541529086526-db283c563270?w=400&h=300&fit=crop"
                buttonText="Browse"
                color="#562F00"
                onPress={() => handleCardPress('appetizers')}
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
      </View>
    </View>
  );
};

export default HomeScreen;
