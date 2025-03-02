import React, {useState} from 'react';
import {styles} from './styles';
import {ScreenWrapper} from '../../component/ScreenWrapper';
import RecommendationCard from '../../component/RecommendationCard';
import CustomText from '../../component/Text';
import {Image, TouchableOpacity, View} from 'react-native';
import Button from '../../component/Button';
import {dummyImages, icons} from '../../Assets/Images';
import colors from '../../Utils/colors';
import {useGetProductsByIdQuery} from '../../Redux/Services/User';

const item = {
  true: {
    id: '1',
    image: dummyImages.product_1,
    type: 'Face Peel',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  false: {
    id: '1',
    image: dummyImages.product_1,
    type: 'Face Peel',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    brand: 'Brand A',
    purchase_link: 'www.abc.com',
    recommendation_on: 'Profile Questionnaire',
  },
};

const radioStep1 = [
  {
    id: '1',
    question: 'How Satisfied Are You With The Product Packaging?',
    options: [
      {
        id: '1',
        option: 'Very Satisfied',
        isSelected: true,
      },
      {
        id: '2',
        option: 'Satisfied',
        isSelected: false,
      },
      {
        id: '3',
        option: 'Neutral',
        isSelected: false,
      },
      {
        id: '4',
        option: 'Dissatisfied',
        isSelected: false,
      },
    ],
  },
  {
    id: '2',
    question: 'How Would You Rate The Of The Product?',
    options: [
      {
        id: '1',
        option: 'Loved It',
        isSelected: true,
      },
      {
        id: '2',
        option: 'Liked It',
        isSelected: false,
      },
      {
        id: '3',
        option: 'Neutral',
        isSelected: false,
      },
      {
        id: '4',
        option: 'Disliked It',
        isSelected: false,
      },
    ],
  },
  {
    id: '3',
    question: 'How Did You Find The Hydration Level Of This Product?',
    options: [
      {
        id: '1',
        option: 'Hydrating',
        isSelected: true,
      },
      {
        id: '2',
        option: 'Moisturizing',
        isSelected: false,
      },
      {
        id: '3',
        option: 'Lightweight',
        isSelected: false,
      },
      {
        id: '4',
        option: 'Disliked It',
        isSelected: false,
      },
    ],
  },
];

const radioStep2 = [
  {
    id: '1',
    question: 'Did This Product Cause Any Irritation Or Breakouts?',
    options: [
      {
        id: '1',
        option: 'Gentle',
        isSelected: true,
      },
      {
        id: '2',
        option: 'Suitable For Sensitive Skin',
        isSelected: false,
      },
      {
        id: '3',
        option: 'Non-Irritating',
        isSelected: false,
      },
      {
        id: '4',
        option: 'Not Suitable For Sensitive Skin',
        isSelected: false,
      },
    ],
  },
  {
    id: '2',
    question: 'How Would You Rate The Of This Product?',
    options: [
      {
        id: '1',
        option: 'Lightweight',
        isSelected: true,
      },
      {
        id: '2',
        option: 'Creamy',
        isSelected: false,
      },
      {
        id: '3',
        option: 'Gel',
        isSelected: false,
      },
      {
        id: '4',
        option: 'Dry',
        isSelected: false,
      },
    ],
  },
  {
    id: '3',
    question: 'How Effective Was This Product In Reducing Acne?',
    options: [
      {
        id: '1',
        option: 'Anti-Acne',
        isSelected: true,
      },
      {
        id: '2',
        option: 'Blemish Control',
        isSelected: false,
      },
      {
        id: '3',
        option: 'Oil-Free',
        isSelected: false,
      },
      {
        id: '4',
        option: 'Oily',
        isSelected: false,
      },
    ],
  },
];

const radioStep3 = [
  {
    id: '1',
    question: 'Did You Find This Product Suitable For Your Skin Type?',
    options: [
      {
        id: '1',
        option: 'For Oily Skin',
        isSelected: true,
      },
      {
        id: '2',
        option: 'For Combination Skin',
        isSelected: false,
      },
      {
        id: '3',
        option: 'For Dry Skin',
        isSelected: false,
      },
      {
        id: '4',
        option: 'For Normal Skin',
        isSelected: false,
      },
    ],
  },
  {
    id: '2',
    question: 'How Well Did This Product Absorb Your Skin?',
    options: [
      {
        id: '1',
        option: 'Heavy',
        isSelected: true,
      },
      {
        id: '2',
        option: 'Fast-Absorbing',
        isSelected: false,
      },
      {
        id: '3',
        option: 'Greasy',
        isSelected: false,
      },
      {
        id: '4',
        option: 'Non-Greasy',
        isSelected: false,
      },
    ],
  },
  {
    id: '3',
    question: 'What Will Be This Products’ Overall Rating?',
    rating: true,
    options: [
      {
        id: '1',
        option: icons.star_5,
        isSelected: true,
      },
      {
        id: '2',
        option: icons.star_4,
        isSelected: false,
      },
      {
        id: '3',
        option: icons.star_3,
        isSelected: false,
      },
      {
        id: '4',
        option: icons.star_2,
        isSelected: false,
      },
      {
        id: '5',
        option: icons.star_1,
        isSelected: false,
      },
    ],
  },
];

const SavedProductDetail = ({route}: any) => {
  const [submittingFeedback, setSubmittingFeedback] = useState(false);
  const [step, setStep] = useState(0);
  const productID = route?.params?.item;
  console.log('productID', productID);
  const {data, isLoading, isError} = useGetProductsByIdQuery({
    id: productID?._id,
  });
  console.log('data', data?.data);
  const renderRadioOptions = (item: any) => (
    <TouchableOpacity activeOpacity={0.7} style={styles.radio_item}>
      <View
        key={item.id}
        style={[
          styles.dot,
          item.isSelected && {backgroundColor: colors.primary},
        ]}
      />
      <CustomText style={styles.option}>{item.option}</CustomText>
    </TouchableOpacity>
  );

  const renderRadioRating = (item: any) => (
    <TouchableOpacity activeOpacity={0.7} style={styles.rating_item}>
      <View
        key={item.id}
        style={[
          styles.dot,
          item.isSelected && {backgroundColor: colors.primary},
        ]}
      />
      <Image source={item.option} style={styles.image} />
    </TouchableOpacity>
  );

  const renderRadioCard = (item: any) => (
    <View key={item.id} style={styles.radio_card}>
      <CustomText weight="semiBold">{item?.question}</CustomText>
      {item?.rating ? (
        <View style={styles.rating_container}>
          {item?.options?.map(renderRadioRating)}
        </View>
      ) : (
        <View style={styles.options_container}>
          {item?.options?.map(renderRadioOptions)}
        </View>
      )}
    </View>
  );

  const handleSteps = () => {
    if (step == 0) {
      setSubmittingFeedback(true);
    } else if (step == 3) {
      setSubmittingFeedback(false);
    }
    setStep(prev => prev + 1);
  };

  const renderSteps = {
    1: radioStep1.map(renderRadioCard),
    2: radioStep2.map(renderRadioCard),
    3: radioStep3.map(renderRadioCard),
  };

  const renderFullButtonText = {
    0: 'Submit Feedback',
    1: 'Next',
  };

  const renderSmallButtonText = {
    2: 'Next',
    3: 'Submit',
  };

  const renderButtons = () =>
    step < 2 ? (
      <View style={styles.button_view}>
        <Button
          text={renderFullButtonText[step as keyof typeof renderFullButtonText]}
          onPress={handleSteps}
        />
      </View>
    ) : step <= 3 ? (
      <View style={styles.button_view}>
        <Button
          text="Previous"
          style={styles.prevButton}
          onPress={() => setStep(prev => prev - 1)}
        />
        <Button
          text={
            renderSmallButtonText[step as keyof typeof renderSmallButtonText]
          }
          style={styles.nextButton}
          textStyle={styles.nextButtonText}
          onPress={handleSteps}
        />
      </View>
    ) : null;

  return (
    <ScreenWrapper mainContainerStyles={styles.container}>
      <RecommendationCard item={data?.data} />

      {submittingFeedback ? (
        renderSteps[step as keyof typeof renderSteps]
      ) : (
        <View style={styles.content_view}>
          <CustomText weight="semiBold" style={styles.label}>
            Ingredients
          </CustomText>
          <CustomText style={styles.value}>
            {data?.data?.ingredients}
          </CustomText>
          <CustomText weight="semiBold" style={styles.label}>
            Benefits
          </CustomText>
          <CustomText style={styles.value}>{data?.data?.benefits}</CustomText>
        </View>
      )}
      {renderButtons()}
    </ScreenWrapper>
  );
};

export default SavedProductDetail;
