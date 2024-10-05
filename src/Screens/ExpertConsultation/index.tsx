import React, {useState} from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {ScreenWrapper} from '../../component/ScreenWrapper';
import {dummyImages} from '../../Assets/Images';
import CustomText from '../../component/Text';

const ExpertConsultation = () => {
  const [accept, setAccept] = useState<boolean>(false);

  const renderItem = () => {
    return (
      <TouchableOpacity activeOpacity={0.7} style={styles.renderItem}>
        <Image source={dummyImages.consultation} style={styles.image} />
        <CustomText weight="semiBold" style={styles.title}>
          Andien
        </CustomText>
        <CustomText style={styles.detailsTxt}>
          Lorem Ipsum is simply dummy text of the printing and sit typesetting.
        </CustomText>
        <CustomText weight="semiBold" style={styles.book_now}>
          Book Now
        </CustomText>
      </TouchableOpacity>
    );
  };

  const renderSeperator = () => <View style={styles.seperator} />;
  console.log(accept);

  return (
    <ScreenWrapper mainContainerStyles={styles.container}>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8]}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeperator}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      />
      {!accept && (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setAccept(prev => !prev)}
          style={styles.touchable_container}>
          <View style={styles.note_container}>
            <CustomText weight="semiBold" style={styles.note}>
              By Clicking On 'Book Now,' It Will Take You To The Website Where
              The Product Will Be Available."
            </CustomText>
          </View>
        </TouchableOpacity>
      )}
    </ScreenWrapper>
  );
};

export default ExpertConsultation;
