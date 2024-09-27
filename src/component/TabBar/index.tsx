import { FC, memo } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import styles from './style';

import colors from '../../Utils/colors';

import { ITabBar } from '../../Interfaces';
import { icons } from '../../Assets/Images';

const TabBar: FC<ITabBar> = ({ navigation, descriptors, state }) => {
  return (
    <View style={[styles.bar]} >
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        let icon;
        let name;
        if (route.name === 'HomeNavigator') {
          icon = icons.Home;
          name = 'Home';
        } else if (route.name === 'GroupListScreen') {
          icon = icons.group;
          name = 'Cart';
        } else if (route.name === 'ProfileScreen') {
          icon = icons.profile;
          name = 'Profile';
        } else if (route.name === 'GroupBundles') {
          icon = icons.subscription;
          name = 'Subscription';
        }
        // GroupBundles
        // else if (route.name === 'MenuNavigator') {
        //   icon = icons.menu;
        //   name = 'menu';
        // }

        return (
          <TouchableOpacity
            style={styles.item}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Image
              source={icon}
              style={[
                styles.icon,
                {
                  tintColor: isFocused ? colors.selectionColor : colors.black,
                },
              ]}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default memo(TabBar);
