// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import ProductForm from "./components/ProductForm"; 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductForm from "./components/ProductForm"; 

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Hi, My name is Aanchal!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" exact element={<ProductForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
