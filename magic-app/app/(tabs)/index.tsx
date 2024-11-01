import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Image } from 'expo-image';
import ImageViewer from "@/components/imageViewer"
import Button from '@/components/Button';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

const PlaceholderImage = {uri: 'https://cards.scryfall.io/large/front/6/e/6e47afb8-72ee-4649-9f8a-db25bb64fbe4.jpg?1562612354'}

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  };

  return (
    <View style={styles.container}>
       <View style={styles.imageContainer}>
       <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>
      <View style={styles.footerContainer}>
      <Button theme="primary" label="Choose a photo" onPress={pickImageAsync}/>
        <Button label="Use this photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffba',
    alignItems: 'center',
    justifyContent: 'center',
  },
   image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
    paddingTop: 6,
    // paddingBottom: 28
    marginBottom: 120
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
})
