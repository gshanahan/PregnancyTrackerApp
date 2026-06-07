import { Pressable, Text, TextInput, View } from "react-native";

export default function Appointments() {
  return (
    <View style={{ flex: 1, padding: 20, gap: 16 }}>
      <Text style={{ fontSize: 24, color: "white" }}>
        Appointments
      </Text>

      <View style={box}>
        <Text style={label}>Next Appointment</Text>
        <Text style={value}>June 12 — Dr. Smith</Text>
      </View>

      <Text style={{ color: "white", marginTop: 10 }}>
        Questions to ask:
      </Text>

      <TextInput
        placeholder="Add a question..."
        placeholderTextColor="#64748b"
        style={input}
      />

      <Pressable style={button}>
        <Text style={{ color: "white" }}>Add Question</Text>
      </Pressable>
    </View>
  );
}

const box = {
  backgroundColor: "#1e293b",
  padding: 16,
  borderRadius: 12,
};

const label = {
  color: "#94a3b8",
};

const value = {
  color: "white",
  marginTop: 4,
};

const input = {
  backgroundColor: "#0f172a",
  padding: 12,
  borderRadius: 10,
  color: "white",
  marginTop: 10,
};

const button = {
  backgroundColor: "#2563eb",
  padding: 12,
  borderRadius: 10,
  alignItems: "center",
};