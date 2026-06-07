import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Dashboard() {
  return (
    <View style={{ flex: 1, padding: 20, gap: 16 }}>
      <Text style={{ fontSize: 28, fontWeight: "600", color: "white" }}>
        Pregnancy Dashboard
      </Text>

      <Text style={{ color: "#94a3b8" }}>
        Week 28 • Due in 89 days
      </Text>

      <View style={{ marginTop: 20, gap: 12 }}>
        <Link href="/appointments" asChild>
          <Pressable style={card}>
            <Text style={title}>Appointments</Text>
            <Text style={sub}>Next visit + questions</Text>
          </Pressable>
        </Link>

        <Link href="/bag" asChild>
          <Pressable style={card}>
            <Text style={title}>Hospital Bag</Text>
            <Text style={sub}>Packing progress</Text>
          </Pressable>
        </Link>

        <Link href="/contractions" asChild>
          <Pressable style={card}>
            <Text style={title}>Contraction Timer</Text>
            <Text style={sub}>Track labor timing</Text>
          </Pressable>
        </Link>

        <Link href="/library" asChild>
          <Pressable style={card}>
            <Text style={title}>Support Library</Text>
            <Text style={sub}>Guides & tips</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const card = {
  padding: 16,
  borderRadius: 12,
  backgroundColor: "#1e293b",
};

const title = {
  color: "white",
  fontSize: 18,
  fontWeight: "600",
};

const sub = {
  color: "#94a3b8",
  marginTop: 4,
};