import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

// Import screens
import Tabs from "./navigation/tabs";
import BookDetail from "./screens/BookDetail";
import AdventureDetail from "./screens/AdventureDetail";
import ExplorePage from "./screens/ExplorePage";
import GenreDetail from "./screens/GenreDetail";

// Import components (if needed in App.js or elsewhere)
import BookCard from './components/BookCard';
import GenreDescription from './components/GenreDescription';
import GenreFilter from './components/GenreFilter';
import GenreHeader from './components/GenreHeader';
import GenreInfo from './components/GenreInfo';
import GenreStatsComponent from './components/GenreStatsComponent';
import LineDivider from './components/LineDivider';
import NotificationBell from './components/NotificationBell';
import RelatedGenres from './components/RelatedGenres';
import ReviewList from './components/ReviewList';
import SearchBar from './components/SearchBar';
import TopBooksCarousel from './components/TopBooksCarousel';
import UserProfile from './components/UserProfile';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent"
    }
}

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Home'}
            >
                {/* Tabs */}
                <Stack.Screen name="Home" component={Tabs} />

                {/* Screens */}
                <Stack.Screen name="BookDetail" component={BookDetail} />
                <Stack.Screen name="AdventureDetail" component={AdventureDetail} />
                <Stack.Screen name="ExplorePage" component={ExplorePage} />
                <Stack.Screen name="GenreDetail" component={GenreDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;
