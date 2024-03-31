/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  BottomNavigation as Screens,
  PaperProvider,
  Text,
} from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ChatsScreen from './src/screens/chats';
import { NativeRouter, Route, Routes } from 'react-router-native';
import ChatScreen from './src/screens/chat';

interface NavRoutes {
  key: string;
  title: string;
  focusedIcon: string;
}

function App(): React.JSX.Element {
  const [index, setIndex] = useState(0);
  const [routes] = useState<NavRoutes[]>([
    { key: 'chats', title: 'Chats', focusedIcon: 'chat' },
    { key: 'calls', title: 'Calls', focusedIcon: 'video' },
    { key: 'people', title: 'People', focusedIcon: 'account' },
    { key: 'stories', title: 'Stories', focusedIcon: 'book' },
  ]);

  const renderScene = Screens.SceneMap({
    chats: () => <ChatsScreen />,
    calls: () => <Text>Calls</Text>,
    people: () => <Text>People</Text>,
    stories: () => <Text>Stories</Text>,
  });

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NativeRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Screens
                  navigationState={{ index, routes }}
                  onIndexChange={setIndex}
                  renderScene={renderScene}
                />
              }
            />
            <Route path="/chat/:chatId" element={<ChatScreen />} />
          </Routes>
        </NativeRouter>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default App;
