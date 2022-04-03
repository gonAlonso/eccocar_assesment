import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import FlatListCarousel from "./components/ListCarousel";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <FlatListCarousel/>
      </SafeAreaProvider>
    );
    return (
      <SafeAreaProvider>
        //<Navigation colorScheme={colorScheme} />
        <FlatListCarousel/>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
