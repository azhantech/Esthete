import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';
import Dropdown from '../../component/Dropdown';
import Input from '../../component/Input';
import CustomText from '../../component/Text';
import Button from '../../component/Button';
import {icons} from '../../Assets/Images';
import styles from './styles';
import {navigate} from '../../Utils/navigation';

const {width} = Dimensions.get('window');

const packages = [
  {id: '1', name: 'Basic Bundle'},
  {id: '2', name: 'Standard Bundle'},
  {id: '3', name: 'Premium Bundle'},
];

const OnBoarding = () => {
  const [currentPackageIndex, setCurrentPackageIndex] = useState(0);

  const purchaseBundle = () => navigate('PaymentScreen');

  const onScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentPackageIndex(index);
  };

  const renderPackage = ({item}: any) => (
    <View style={styles.packageContainer}>
      <View style={{width: '100%'}}>
        {item.id > 1 && (
          <CustomText style={styles.priceInfo}>{'Save 20%'}</CustomText>
        )}
      </View>

      <Input label="Includes" placeholder="Access To 1 Paid Group" />

      {item.id != 3 && (
        <Dropdown
          label="Select Group"
          placeholder="$ 2.00 / Monthly / $ 10.00 / Yearly"
        />
      )}

      <View style={styles.groupList}>
        {item.id == 2 && (
          <TouchableOpacity activeOpacity={0.7} style={styles.tag}>
            <Image source={icons.cross} />
            <Text style={styles.removeGroup}>Group 1</Text>
          </TouchableOpacity>
        )}

        {item.id == 2 && (
          <TouchableOpacity activeOpacity={0.7} style={styles.tag}>
            <Image source={icons.cross} />
            <Text style={styles.removeGroup}>Group 2</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  const renderDots = () => {
    return (
      <View style={styles.dotsContainer}>
        {packages.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentPackageIndex === index
                ? styles.activeDot
                : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <CustomText weight="bold" style={styles.header}>
          Group Bundles
        </CustomText>
        <CustomText weight="bold" style={styles.subHeader}>
          {packages[currentPackageIndex].name}
        </CustomText>
      </View>

      <FlatList
        data={packages}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        keyExtractor={item => item.id}
        renderItem={renderPackage}
        style={styles.flatList}
        snapToInterval={width} // Adjusts snapping to full screen width
        decelerationRate="fast" // Smooth scrolling for better UX
      />

      <Button
        text={'Purchase Bundle'}
        onPress={purchaseBundle}
        style={styles.mainBtn}
      />

      <View>{renderDots()}</View>
    </View>
  );
};

export default OnBoarding;
