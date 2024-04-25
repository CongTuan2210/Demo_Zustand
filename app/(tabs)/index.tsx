import {
  FlatList,
  StyleSheet,
  View,
  Text,
  Image,
  ListRenderItem,
  TouchableOpacity,
} from "react-native";
import data from "@/assets/data.json";
import { Ionicons } from "@expo/vector-icons";
import useCartStore from "@/store/CartStore";
import { Product } from "@/store/interface";

export default function TabOneScreen() {
  const { reduceProduct, addProduct } = useCartStore();

  const renderItem: ListRenderItem<any> = ({ item }) => (
    <View style={styles.cartItemContainer}>
      <Image style={styles.cartItemImage} source={{ uri: item.image }} />
      <View style={styles.itemContainer}>
        <Text style={styles.cartItemName}>{item.title}</Text>
        <Text>Price: ${item.price}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => reduceProduct(item)} style={{ padding: 10 }}>
          <Ionicons name="remove" size={20} color="#000" />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => addProduct(item)} style={{ padding: 10 }}>
          <Ionicons name="add" size={20} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  cartItemContainer: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  cartItemImage: {
    width: 50,
    height: 50,
  },
  itemContainer: {
    flex: 1,
  },
  cartItemName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
