import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>tatuin</Text>
      <StatusBar style="auto" />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -34.6037389,
          longitude: -58.3815704
        }}
      >
        <Marker
          coordinate={{
            latitude: -34.6037389,
            longitude: -58.3815704
          }}
          title={"El Obelisco"}
          description={"El monumento de Porteñolandia"}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
