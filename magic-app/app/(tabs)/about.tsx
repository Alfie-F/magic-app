import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container
      }
    >
      <Text style={styles.text}>Magic The Appening</Text>
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
  text: {
    color: '#000',
  },
})
