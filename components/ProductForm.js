import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const [product, setProduct] = useState({
    productId: '',
    productName: '',
    productCategory: '',
    supplier: '',
    price: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const newProduct = { ...product };
    addProduct(newProduct);
    setProduct({
      productId: '',
      productName: '',
      productCategory: '',
      supplier: '',
      price: '',
    });
  };

  return (
    <View>
      <Text>Add a new product:</Text>
      <TextInput
        placeholder="Product ID"
        name="productId"
        value={product.productId}
        onChangeText={handleChange}
      />
      <TextInput
        placeholder="Product Name"
        name="productName"
        value={product.productName}
        onChangeText={handleChange}
      />
      <TextInput
        placeholder="Product Category"
        name="productCategory"
        value={product.productCategory}
        onChangeText={handleChange}
      />
      <TextInput
        placeholder="Supplier"
        name="supplier"
        value={product.supplier}
        onChangeText={handleChange}
      />
      <TextInput
        placeholder="Price"
        name="price"
        value={product.price}
        onChangeText={handleChange}
      />
      <Button title="Add Product" onPress={handleSubmit} />
    </View>
  
  );