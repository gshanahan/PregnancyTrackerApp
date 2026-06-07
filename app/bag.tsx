import { Pressable, Text, View } from "react-native";

const items = [
  { name: "Phone Charger", packed: true },
  { name: "Snacks", packed: false },
  { name: "Toiletries", packed: false },
];

export default function Bag() {
  return (
    <View style={{ flex: 1, padding: 20, gap: 16 }}>
      <Text style={{ fontSize: 24, color: "white" }}>
        Hospital Bag
      </Text>

      {items.map((item, i) => (
        <View key={i} style={row}>
          <Text style={{ color: "white" }}>
            {item.name}
          </Text>

          <Text style={{ color: item.packed ? "#22c55e" : "#f87171" }}>
            {item.packed ? "Packed" : "Missing"}
          </Text>
        </View>
      ))}

      <Pressable style={button}>
        <Text style={{ color: "white" }}>Add Item</Text>
      </Pressable>
    </View>
  );
}

const row = {
  flexDirection: "row",
  justifyContent: "space-between",
  padding: 14,
  backgroundColor: "#1e293b",
  borderRadius: 10,
  marginBottom: 10,
};

const button = {
  backgroundColor: "#2563eb",
  padding: 12,
  borderRadius: 10,
  alignItems: "center",
  marginTop: 10,
};