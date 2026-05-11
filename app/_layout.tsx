import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "home"}} />

      <Stack.Screen name="=:explore_flexbox" options={{ title: "home"}} />

      <Stack.Screen name="=:explore_grid_layout" options={{ title: "home"}} />

      <Stack.Screen name="=:fullWidthColumn" options={{ title: "home"}} />

    </Stack>
  );
}
