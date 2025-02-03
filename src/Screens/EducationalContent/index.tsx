import React, {useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {ScreenWrapper} from '../../component/ScreenWrapper';
import Button from '../../component/Button';
import CircleImage from '../../component/CircularImage';
import CustomText from '../../component/Text';
import styles from './styles';
import HorizontalVideoCard from '../../component/HorizontalVideoCard';
import {navigate} from '../../Utils/navigation';
import {useGetAllEducationContentQuery} from '../../Redux/Services/User';
import colors from '../../Utils/colors';

const EducationalContent = () => {
  const [selectedSkinConcerns, setSelectedSkinConcerns] = useState([]);
  const {data, isLoading, isError} = useGetAllEducationContentQuery({});

  const handleSelect = id => {
    setSelectedSkinConcerns(prev => {
      if (prev.includes(id)) {
        return prev.filter(val => val !== id);
      }
      return [...prev, id];
    });
  };

  const renderVideos = ({item}: any) => <HorizontalVideoCard item={item} />;

  const renderSeperator = () => <View style={styles.seperator} />;

  if (isLoading) {
    return (
      <View style={styles.loading_container}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <ScreenWrapper mainContainerStyles={styles.container}>
      <CustomText style={styles.sectionTitle}>Recent Articles</CustomText>
      <View style={styles.items_wrapper}>
        {data?.articles?.map((item, index) => {
          return (
            <View key={item.id} style={{width: '30%'}}>
              <CircleImage
                image={{
                  uri: `http://projectstagingzone.com:18001/${item.imageUrl}`,
                }}
                // isSelected={selectedSkinConcerns.includes(item.id)}
                // onPress={() => handleSelect(item.id)}
                onPress={() => navigate('ArticleDetail', {id: item?._id})}
              />
            </View>
          );
        })}
      </View>

      <Button
        text="View All Articles"
        style={styles.button}
        onPress={() => navigate('Articles')}
      />

      <CustomText style={styles.sectionTitle}>Videos</CustomText>
      <View style={styles.horizontal_list_Container}>
        <FlatList
          data={data?.videos ?? []}
          horizontal
          keyExtractor={item => item.id}
          contentContainerStyle={styles.content_container}
          renderItem={renderVideos}
          ItemSeparatorComponent={renderSeperator}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <Button
        text="View All Videos"
        style={styles.button}
        onPress={() => navigate('Videos')}
      />
    </ScreenWrapper>
  );
};

export default EducationalContent;
