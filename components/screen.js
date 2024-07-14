import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

const HomeScreen = ({navigation}) => {
    const onPress = () => {
        navigation.navigate('Herbs')
    }
  return (
        <View style={styles.container}>
            <View style={styles.sectionLogo}>
                <Image
                    source={require('../assets/lru.png')}
                    style={styles.image}
                    />
                </View>
            <View style={styles.sectionTitle}>
                <Text style={styles.title}>สมุนไพรเมืองเลย:คู่มือท้องถิ่น</Text>
            </View>
            <View style={styles.section}>
            <Pressable onPress={onPress}>
                <Image
                source={require('../assets/cover_01.jpg')}
                style={styles.imageCover}
                />
            </Pressable>
            </View>
            <View style={styles.sectionPink}>
                <Text style={styles.subtitle}>คณะวิทยาศาสตร์และเทคโนโลยี</Text>
                <Text style={styles.subtitle}>มหาวิทยาลัยราชภัฏเลย</Text>
            </View>
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0CA7FF',
  },
  section: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0CA7FF',
  },
  sectionLogo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0CA7FF',
  },
  sectionTitle: {
    marginTop: 0,
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0CA7FF',
  },
  sectionPink: {
    height: 100, // กำหนดความสูงเป็น 100 พิกเซล
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'hotpink',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  image: {
    width: 120,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  imageCover: {
    width: 390,
    height: 250,
    resizeMode: 'contain',
    borderRadius: 10,
    margin: 15,  // เพิ่ม margin เพื่อให้ห่างจากขอบ
  },
});

export default HomeScreen;