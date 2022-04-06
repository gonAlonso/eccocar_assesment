import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';

import ListCarousel from "./components/ListCarousel";
import DetailScreen from "./screens/DetailScreen";

//const customData = require('./Data.json');
const customData = require('./Data_marvel.json');

//global.data = customData
/*
global.config = {
  baseUrl: "https://gateway.marvel.com",
  topic: "/v1/public/characters",
  pubkey: "1a060481f3af6a9bfdf0b5960d25b6d9",
  privkey: "83df4475ebf7cbc494b78df907a495b28421ab19"
}*/

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <ListCarousel items={customData.data.items}/> 
      </SafeAreaProvider>
    );
  }
}
