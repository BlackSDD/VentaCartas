import { ActivityIndicator } from 'react-native';
import CategoriesScreen from './src/screens/CategoriesScreen'
import { useFonts} from 'expo-font'
import ProductsByCategoryScream from './src/screens/ProductsByCategoryScreen'
import { useState } from 'react';


export default function App() {

  const [categorySelected, setCategorySelected] = useState('')

  const [FontLoad] = useFonts({
    'Arimo-Regular': require('./assets/fonts/Arimo-Regular.ttf'),
    'Arimo-Bold': require('./assets/fonts/Arimo-Bold.ttf'),
    'Arimo-BoldItalic': require('./assets/fonts/Arimo-BoldItalic.ttf'),
    'Arimo-Italic': require('./assets/fonts/Arimo-Italic.ttf'),
    'Arimo-Medium': require('./assets/fonts/Arimo-Medium.ttf'),
    'Arimo-MediumItalic': require('./assets/fonts/Arimo-MediumItalic.ttf'),
    'Arimo-SemiBold': require('./assets/fonts/Arimo-SemiBold.ttf'),
    'Arimo-SemiBoldItalic': require('./assets/fonts/Arimo-SemiBoldItalic.ttf')
  })

  if(!FontLoad) return <ActivityIndicator/>

  const onSelectCategory = (category) => {
    setCategorySelected(category)
  }

  return (
    <>{
        categorySelected ? <ProductsByCategoryScream category={categorySelected} /> : <CategoriesScreen onSelectCategoryEvent={onSelectCategory}/>
      }
    </>
  );
}