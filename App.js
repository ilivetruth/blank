import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, useColorScheme, useTheme } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { LightCustomTheme, DarkCustomTheme } from "./components/theme";

export default function App() {
  const colorScheme = useColorScheme();

  const theme = colorScheme === "dark" ? DarkCustomTheme : LightCustomTheme;
  const { colors } = useTheme();

  return (
    <PaperProvider theme={theme}>
      <View
        style={[styles.container, { backgroundColor: colors.backgroundColor }]}
      >
        <Text style={{ color: colors.text }}>
          Open up App.js to start working on your app!
        </Text>
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
