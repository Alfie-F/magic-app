import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container
      }
    >
      <Text style={styles.text}>This will eventually be an app that generates magic cards using the scryfall api! For now I am refamiliarising myself with expo</Text>
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
