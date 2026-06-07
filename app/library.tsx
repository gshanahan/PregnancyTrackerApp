import { Text, View } from "react-native";

const tips = [
  "Breathing techniques for labor",
  "How to support your partner emotionally",
  "What to pack for the hospital",
];

export default function Library() {
  return (
    <View style={{ flex: 1, padding: 20, gap: 16 }}>
      <Text style={{ fontSize: 24, color: "white" }}>
        Support Library
      </Text>

      {tips.map((t, i) => (
        <View key={i} style={card}>
          <Text style={{ color: "white" }}>{t}</Text>
        </View>
      ))}
    </View>
  );
}

const card = {
  backgroundColor: "#1e293b",
  padding: 16,
  borderRadius: 12,
  marginBottom: 10,
};