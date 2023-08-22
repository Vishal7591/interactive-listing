import React, {useState, useEffect} from 'react';
import {fetchProducts} from '../../slice/productSlice';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from '../../styles/main';
import {Placeholder} from '../Placeholder';
import {Product} from '../../types/item/itemTypes';
import {
  View,
  Text,
  RefreshControl,
  Platform,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
  ActivityIndicator,
} from 'react-native';

export const List: React.FC = ({navigation}: any) => {
  const dispatch = useDispatch<any>();
  const [products, setProducts] = useState<Product[]>([]);
  const [productsCopy, setProductsCopy] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [refreshing, setRefreshing] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const data = dispatch(fetchProducts());
    data.then((response: any) => {
      setProducts(response.payload);
      setProductsCopy(response.payload);
      setLoading(false);
    });
  }, [dispatch]);

  useEffect(() => {
    setLoading(true);
    const data = dispatch(fetchProducts());
    data.then((response: any) => {
      setProducts(response.payload);
      setLoading(false);
      setRefreshing(false);
    });
  }, [refreshing]);

  const handleSearch = (searchKeyword: string) => {
    setSearchTerm(searchKeyword);
    if (searchKeyword.length < 1) {
      setProducts(productsCopy);
    } else {
      let searchedData: Product[] = [];
      for (let i = 0; i < productsCopy.length; i++) {
        searchedData = productsCopy.filter((item: Product) =>
          item.title
            ?.toLocaleLowerCase()
            .includes(searchKeyword.toLocaleLowerCase()),
        );
      }
      setProducts(searchedData);
    }
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.topMenu}>
        <Text
          style={[
            styles.boldText,
            {
              fontSize: 17,
              paddingTop: Platform.OS === 'android' ? 5 : 0,
            },
          ]}>
          {'😃 '}
          TOP PRODUCTS AROUND YOU
        </Text>
        <TextInput
          style={styles.searchInput}
          keyboardType="default"
          returnKeyType="done"
          placeholder="Search for a product..."
          maxLength={50}
          value={searchTerm}
          placeholderTextColor="#9b9b9b"
          onChangeText={handleSearch}
        />
      </View>
      <View style={styles.container}>
        {products && products.length < 1 && <Placeholder />}
        <FlatList
          data={products}
          keyExtractor={(item: any) => item.id}
          nestedScrollEnabled={true}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => setRefreshing(true)}
            />
          }
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={styles.productTile}
                activeOpacity={1}
                onPress={() =>
                  navigation.navigate('Details', {
                    productData: item,
                  })
                }>
                <View style={styles.imageSection}>
                  <Image
                    style={styles.imagePoster}
                    source={{
                      uri: item.thumbnail,
                    }}
                  />
                </View>
                <View style={styles.descriptionPanel}>
                  <View style={{flex: 1, paddingTop: 5}}>
                    <Text
                      style={[
                        styles.boldText,
                        styles.secondaryText,
                        {fontSize: 17},
                      ]}>
                      {item.title}
                    </Text>
                  </View>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <Text style={styles.regularText}>Price -</Text>
                    <Text
                      style={[
                        styles.regularText,
                        {textDecorationLine: 'line-through'},
                      ]}>
                      {` ${item.price} €`}
                    </Text>
                    <Text
                      style={[
                        styles.boldText,
                        styles.ratingsText,
                        {paddingLeft: 10},
                      ]}>
                      {`${
                        item.price &&
                        item.discountPercentage &&
                        (
                          item.price -
                          (item.discountPercentage / 100) * item.price
                        ).toFixed(2)
                      } €`}
                    </Text>
                  </View>
                  <View style={{flex: 1}}>
                    <Text style={[styles.boldText, styles.ratingsText]}>
                      {`Ratings - ${item.rating} \u2B50`}
                    </Text>
                  </View>
                  <View style={styles.rowSection}>
                    <View style={styles.rowSection}>
                      <Text style={styles.regularText}>
                        {item.stock} items left in stock
                      </Text>
                    </View>
                    <Text style={styles.regularText}></Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
        {loading && (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color="#000" />
            <Text style={[styles.screenLoadingText]}>Please Wait...</Text>
          </View>
        )}
      </View>
    </View>
  );
};
