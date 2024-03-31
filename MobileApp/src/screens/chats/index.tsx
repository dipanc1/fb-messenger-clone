import { Pressable, StyleSheet, View } from 'react-native';
import { Avatar, Text } from 'react-native-paper';
import { useNavigate } from 'react-router-native';

const ChatsScreen = () => {
  const navigate = useNavigate();

  const friends = [
    { id: 1, name: 'Jatt' },
    { id: 2, name: 'Moosa' },
    { id: 3, name: 'John' },
  ];

  return (
    <View style={styles.container}>
      {friends.map(f => (
        <Pressable
          key={f.id}
          onPress={() => {
            navigate(`/chat/${f.id}`);
          }}>
          <View style={styles.friend}>
            <Avatar.Image
              size={72}
              style={styles.profilePic}
              source={{
                uri: `https://randomuser.me/api/portraits/men/${f.id}.jpg`,
              }}
            />
            <View>
              <Text>{f.name}</Text>
              <Text>This was the last message | Sun</Text>
            </View>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  friend: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  profilePic: {
    marginRight: 8,
  },
});

export default ChatsScreen;
