import React, {useState, useEffect, useMemo} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {styles} from '../../styles/main';
import {Heading} from '../Heading';
import {Product} from '../../types/item/itemTypes';

export const Details: React.FC = ({route, navigation}: any) => {
  const [productDetails, setProductDetails] = useState<Product>({} as Product);

  const {productData} = route.params;
  const calculation = useMemo(
    () =>
      discountCalculation(productData.price, productData.discountPercentage),
    [productData.price, productData.discountPercentage],
  );

  useEffect(() => {
    setProductDetails(productData);
  }, []);

  useEffect(() => {
    navigation.setOptions({
      title: productData.title,
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#000',
      },
    });
  }, [navigation]);

  return (
    <View style={{flex: 1}}>
      <ScrollView style={[styles.container]}>
        <View style={componentStyles.titleSection}>
          <View style={styles.bannerSection}>
            <View style={componentStyles.posterSection}>
              <Image
                style={componentStyles.imagePoster}
                source={{
                  uri: `${productDetails.thumbnail}`,
                }}
              />
            </View>
          </View>
          <View style={styles.releasedSection}>
            <Text style={[styles.boldText, styles.ratingsText, {fontSize: 18}]}>
              {productDetails.title}
            </Text>
          </View>
        </View>

        <View style={styles.overviewSection}>
          <Heading text={'Overview'} />
          <Text style={[styles.regularText, {fontSize: 16}]}>
            {productDetails.description}
          </Text>
        </View>
        <View style={styles.priceSection}>
          <Heading text={'Offer Price'} />
          <View style={{flexDirection: 'row'}}>
            <Text
              style={[
                styles.regularText,
                {fontSize: 16, textDecorationLine: 'line-through'},
              ]}>
              {` ${productDetails.price} €`}
            </Text>
            <Text
              style={[
                styles.boldText,
                styles.ratingsText,
                {paddingLeft: 10, fontSize: 16},
              ]}>
              {`${calculation} €`}
            </Text>
          </View>
        </View>
        <View style={styles.ratingsSection}>
          <Heading text={'Ratings'} />
          <View style={{flex: 1, flexDirection: 'row', paddingVertical: 5}}>
            <Text
              style={[styles.regularText, styles.ratingsText, {fontSize: 16}]}>
              {`Rated ${productDetails.rating} \u2B50 in ${productDetails.category} category`}
            </Text>
          </View>
        </View>
        <View style={[styles.overviewSection, {marginTop: 0}]}>
          <Heading text={'Manufacturer'} />
          <Text style={[styles.regularText, {fontSize: 16}]}>
            {productDetails.brand}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const discountCalculation = (price: number, discount: number) => {
  return (price - (discount / 100) * price).toFixed(2);
};

const componentStyles = StyleSheet.create({
  posterSection: {
    paddingTop: '1%',
    alignContent: 'center',
    padding: 5,
  },
  titleSection: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    backgroundColor: '#000',
  },
  imagePoster: {
    height: 240,
    width: 240,
    resizeMode: 'contain',
  },
});
