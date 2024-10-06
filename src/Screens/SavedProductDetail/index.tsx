import React, {useState} from 'react';
import {styles} from './styles';
import {ScreenWrapper} from '../../component/ScreenWrapper';
import RecommendationCard from '../../component/RecommendationCard';
import CustomText from '../../component/Text';
import {View} from 'react-native';
import Button from '../../component/Button';
import {dummyImages} from '../../Assets/Images';

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

const SavedProductDetail = ({route}: any) => {
  const [submittingFeedback, setSubmittingFeedback] = useState(false);

  const renderRadioCard = () => (
    <View>
      <CustomText></CustomText>
    </View>
  );

  return (
    <ScreenWrapper mainContainerStyles={styles.container}>
      <RecommendationCard item={item[submittingFeedback]} />

      <View style={styles.content_view}>
        <CustomText weight="semiBold" style={styles.label}>
          Ingredients
        </CustomText>
        <CustomText style={styles.value}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </CustomText>
        <CustomText style={styles.value}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </CustomText>
        <CustomText weight="semiBold" style={styles.label}>
          Benefits
        </CustomText>
        <CustomText style={styles.value}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </CustomText>

        <View style={styles.button_view}>
          <Button
            text="Submit Feedback"
            onPress={() => setSubmittingFeedback(true)}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SavedProductDetail;
