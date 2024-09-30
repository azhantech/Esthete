import {FC, memo} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import styles from './style';

import colors from '../../Utils/colors';

import {ITabBar} from '../../Interfaces';
import {icons} from '../../Assets/Images';

const TabBar: FC<ITabBar> = ({navigation, descriptors, state}) => {
  return (
    <View style={[styles.bar]}>
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
          icon = icons.home;
          name = 'Home';
        } else if (route.name === 'ProductRecommendation') {
          icon = icons.notification;
          name = 'Cart';
        } else if (route.name === 'Forum') {
          icon = icons.forum;
          name = 'Profile';
        } else if (route.name === 'ProfileScreen') {
          icon = icons.profile;
          name = 'Profile';
        }

        return (
          <TouchableOpacity
            style={styles.item}
            onPress={onPress}
            onLongPress={onLongPress}>
            {isFocused ? (
              <View style={styles.selected_view}>
                <Image
                  source={icon}
                  style={[
                    styles.icon,
                    {
                      height: '50%',
                      width: '50%',
                      tintColor: colors.white,
                    },
                  ]}
                />
              </View>
            ) : (
              <Image
                source={icon}
                style={[
                  styles.icon,
                  {
                    tintColor: colors.black,
                  },
                ]}
              />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default memo(TabBar);
