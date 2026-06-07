import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function Contractions() {
  const [active, setActive] = useState(false);

  return (
    <View style={{ flex: 1, padding: 20, gap: 16 }}>
      <Text style={{ fontSize: 24, color: "white" }}>
        Contraction Timer
      </Text>

      <Pressable
        onPress={() => setActive(!active)}
        style={{
          padding: 20,
          borderRadius: 12,
          backgroundColor: active ? "#ef4444" : "#22c55e",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 18 }}>
          {active ? "Stop Contraction" : "Start Contraction"}
        </Text>
      </Pressable>

      <Text style={{ color: "#94a3b8" }}>
        Logged contractions will appear here.
      </Text>
    </View>
  );
}