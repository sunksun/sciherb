import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Dimensions, SafeAreaView, Button, Pressable } from 'react-native';

const { width } = Dimensions.get('window');

const Herbs = ({ navigation }) => {
  const onPressItem = (id, name) => {
    navigation.navigate('Item', { id: id, name: name })
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/cover_01.jpg')}
            style={styles.coverImage}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.heading}>สมุนไพรเมืองเลย: คู่มือท้องถิ่น</Text>

          <Pressable onPress={() => onPressItem(1, 'แฝกหอม')}>
          <View style={styles.twoColumnContainer}>
            <View style={styles.imageColumn}>
              <Image
                source={require('../img/img-1.jpg')}
                style={styles.herbImage}
              />
            </View>
            <View style={styles.textColumn}>
              <Text style={styles.paragraphBold}>
              แฝกหอม
              </Text>
              <Text style={styles.paragraph}>
                ชื่อวิทยาศาสตร์ : Ophiopogon intermedius D.Don 
              </Text>
              <Text style={styles.paragraph}>
                วงศ์ : Asparagaceae 
              </Text>
            </View>
          </View>
          </Pressable>

          <Pressable onPress={() => onPressItem(2, 'โด่ไม่รู้ล้ม')}>
          <View style={styles.twoColumnContainer}>
            <View style={styles.imageColumn}>
              <Image
                source={require('../img/img-2.jpg')}
                style={styles.herbImage}
              />
            </View>
            <View style={styles.textColumn}>
              <Text style={styles.paragraphBold}>
              โด่ไม่รู้ล้ม
              </Text>
              <Text style={styles.paragraph}>
                ชื่อวิทยาศาสตร์ : Elephantopus scaber L. 
              </Text>
              <Text style={styles.paragraph}>
                วงศ์ : Asteraceae 
              </Text>
            </View>
          </View>
          </Pressable>

          <Pressable onPress={() => onPressItem(3, 'ป่าช้าหมอง')}>
          <View style={styles.twoColumnContainer}>
            <View style={styles.imageColumn}>
              <Image
                source={require('../img/img-3.jpg')}
                style={styles.herbImage}
              />
            </View>
            <View style={styles.textColumn}>
              <Text style={styles.paragraphBold}>
              ป่าช้าหมอง
              </Text>
              <Text style={styles.paragraph}>
                ชื่อวิทยาศาสตร์ : Gymnanthemum extensum Steetz 
              </Text>
              <Text style={styles.paragraph}>
                วงศ์ : Asteraceae 
              </Text>
            </View>
          </View>
          </Pressable>

          <Pressable onPress={() => onPressItem(4, 'กำแพงเจ็ดชั้น')}>
          <View style={styles.twoColumnContainer}>
            <View style={styles.imageColumn}>
              <Image
                source={require('../img/img-4.jpg')}
                style={styles.herbImage}
              />
            </View>
            <View style={styles.textColumn}>
              <Text style={styles.paragraphBold}>
              กำแพงเจ็ดชั้น
              </Text>
              <Text style={styles.paragraph}>
                ชื่อวิทยาศาสตร์ : Salacia chinensis L. 
              </Text>
              <Text style={styles.paragraph}>
                วงศ์ : Celastraceae 
              </Text>
            </View>
          </View>
          </Pressable>

          <Pressable onPress={() => onPressItem(5, 'เอื้องหมายนา')}>
          <View style={styles.twoColumnContainer}>
            <View style={styles.imageColumn}>
              <Image
                source={require('../img/img-5.jpg')}
                style={styles.herbImage}
              />
            </View>
            <View style={styles.textColumn}>
              <Text style={styles.paragraphBold}>
              เอื้องหมายนา
              </Text>
              <Text style={styles.paragraph}>
                ชื่อวิทยาศาสตร์ : Cheilocostus speciosus (J.Koenig) C.D.Specht 
              </Text>
              <Text style={styles.paragraph}>
                วงศ์ : Costaceae 
              </Text>
            </View>
          </View>
          </Pressable>

          <Pressable onPress={() => onPressItem(6, 'หญ้าแห้วหมู')}>
          <View style={styles.twoColumnContainer}>
            <View style={styles.imageColumn}>
              <Image
                source={require('../img/img-6.jpg')}
                style={styles.herbImage}
              />
            </View>
            <View style={styles.textColumn}>
              <Text style={styles.paragraphBold}>
              หญ้าแห้วหมู
              </Text>
              <Text style={styles.paragraph}>
                ชื่อวิทยาศาสตร์ : Cyperrus rotundus L. 
              </Text>
              <Text style={styles.paragraph}>
                วงศ์ : Cyperaceae 
              </Text>
            </View>
          </View>
          </Pressable>

          <Pressable onPress={() => onPressItem(7, 'เปล้าใหญ่')}>
          <View style={styles.twoColumnContainer}>
            <View style={styles.imageColumn}>
              <Image
                source={require('../img/img-7.jpg')}
                style={styles.herbImage}
              />
            </View>
            <View style={styles.textColumn}>
              <Text style={styles.paragraphBold}>
              เปล้าใหญ่
              </Text>
              <Text style={styles.paragraph}>
                ชื่อวิทยาศาสตร์ : Croton roxburghii N.P. Balaker. 
              </Text>
              <Text style={styles.paragraph}>
                วงศ์ : Euphorbiaceae 
              </Text>
            </View>
          </View>
          </Pressable>

          <Pressable onPress={() => onPressItem(8, 'หญ้างวงช้าง')}>
          <View style={styles.twoColumnContainer}>
            <View style={styles.imageColumn}>
              <Image
                source={require('../img/img-8.jpg')}
                style={styles.herbImage}
              />
            </View>
            <View style={styles.textColumn}>
              <Text style={styles.paragraphBold}>
              หญ้างวงช้าง
              </Text>
              <Text style={styles.paragraph}>
                ชื่อวิทยาศาสตร์ : Heliotropium indicum L 
              </Text>
              <Text style={styles.paragraph}>
                วงศ์ : Boraginaceae 
              </Text>
            </View>
          </View>
          </Pressable>

          <Pressable onPress={() => onPressItem(9, 'กระบก')}>
          <View style={styles.twoColumnContainer}>
            <View style={styles.imageColumn}>
              <Image
                source={require('../img/img-9.jpg')}
                style={styles.herbImage}
              />
            </View>
            <View style={styles.textColumn}>
              <Text style={styles.paragraphBold}>
              กระบก
              </Text>
              <Text style={styles.paragraph}>
                ชื่อวิทยาศาสตร์ : Irvingia malayana Oliv. ex A.W.Benn. 
              </Text>
              <Text style={styles.paragraph}>
                วงศ์ : Irvingiaceae 
              </Text>
            </View>
          </View>
          </Pressable>

          <Pressable onPress={() => onPressItem(10, 'อัคคีทวาร')}>
          <View style={styles.twoColumnContainer}>
            <View style={styles.imageColumn}>
              <Image
                source={require('../img/img-10.jpg')}
                style={styles.herbImage}
              />
            </View>
            <View style={styles.textColumn}>
              <Text style={styles.paragraphBold}>
              อัคคีทวาร
              </Text>
              <Text style={styles.paragraph}>
                ชื่อวิทยาศาสตร์ : Rotheca serrata (L.) Steane & Mabb. 
              </Text>
              <Text style={styles.paragraph}>
                วงศ์ : Lamiaceae 
              </Text>
            </View>
          </View>
          </Pressable>

          <Pressable onPress={() => onPressItem(11, 'กระตังใบ')}>
          <View style={styles.twoColumnContainer}>
            <View style={styles.imageColumn}>
              <Image
                source={require('../img/img-11.jpg')}
                style={styles.herbImage}
              />
            </View>
            <View style={styles.textColumn}>
              <Text style={styles.paragraphBold}>
              กระตังใบ
              </Text>
              <Text style={styles.paragraph}>
                ชื่อวิทยาศาสตร์ : Leea indica (Burm.f) Merr. 
              </Text>
              <Text style={styles.paragraph}>
                วงศ์ : Leeaceae 
              </Text>
            </View>
          </View>
          </Pressable>

          <Pressable onPress={() => onPressItem(12, 'กระโดน')}>
          <View style={styles.twoColumnContainer}>
            <View style={styles.imageColumn}>
              <Image
                source={require('../img/img-12.jpg')}
                style={styles.herbImage}
              />
            </View>
            <View style={styles.textColumn}>
              <Text style={styles.paragraphBold}>
              กระโดน
              </Text>
              <Text style={styles.paragraph}>
                ชื่อวิทยาศาสตร์ : Careya arborea Roxb 
              </Text>
              <Text style={styles.paragraph}>
                วงศ์ : Lecythidaceae 
              </Text>
            </View>
          </View>
          </Pressable>

          <Pressable onPress={() => onPressItem(13, 'ตูมกา')}>
          <View style={styles.twoColumnContainer}>
            <View style={styles.imageColumn}>
              <Image
                source={require('../img/img-13.jpg')}
                style={styles.herbImage}
              />
            </View>
            <View style={styles.textColumn}>
              <Text style={styles.paragraphBold}>
              ตูมกา
              </Text>
              <Text style={styles.paragraph}>
                ชื่อวิทยาศาสตร์ : Strychnos nux-blanda A.W.Hill 
              </Text>
              <Text style={styles.paragraph}>
                วงศ์ : Loganiaceae 
              </Text>
            </View>
          </View>
          </Pressable>

          <Pressable onPress={() => onPressItem(14, 'ช้างน้าว')}>
          <View style={styles.twoColumnContainer}>
            <View style={styles.imageColumn}>
              <Image
                source={require('../img/img-14.jpg')}
                style={styles.herbImage}
              />
            </View>
            <View style={styles.textColumn}>
              <Text style={styles.paragraphBold}>
              ช้างน้าว
              </Text>
              <Text style={styles.paragraph}>
                ชื่อวิทยาศาสตร์ : Ochna integerrima (Lour.) Merr. 
              </Text>
              <Text style={styles.paragraph}>
                วงศ์ : Ochnaceae 
              </Text>
            </View>
          </View>
          </Pressable>

          <Pressable onPress={() => onPressItem(15, 'ส่องฟ้า')}>
          <View style={styles.twoColumnContainer}>
            <View style={styles.imageColumn}>
              <Image
                source={require('../img/img-15.jpg')}
                style={styles.herbImage}
              />
            </View>
            <View style={styles.textColumn}>
              <Text style={styles.paragraphBold}>
              ส่องฟ้า
              </Text>
              <Text style={styles.paragraph}>
                ชื่อวิทยาศาสตร์ : Clausena wallichii Oliv. 
              </Text>
              <Text style={styles.paragraph}>
                วงศ์ : Rutaceae 
              </Text>
            </View>
          </View>
          </Pressable>

          <Pressable onPress={() => onPressItem(16, 'ตูดหมูตูดหมา')}>
          <View style={styles.twoColumnContainer}>
            <View style={styles.imageColumn}>
              <Image
                source={require('../img/img-16.jpg')}
                style={styles.herbImage}
              />
            </View>
            <View style={styles.textColumn}>
              <Text style={styles.paragraphBold}>
              ตูดหมูตูดหมา
              </Text>
              <Text style={styles.paragraph}>
                ชื่อวิทยาศาสตร์ : Paederia  linearis Hook.f. 
              </Text>
              <Text style={styles.paragraph}>
                วงศ์ : Rubiaceae 
              </Text>
            </View>
          </View>
          </Pressable>

          <Pressable onPress={() => onPressItem(17, 'มะคังแดง')}>
          <View style={styles.twoColumnContainer}>
            <View style={styles.imageColumn}>
              <Image
                source={require('../img/img-17.jpg')}
                style={styles.herbImage}
              />
            </View>
            <View style={styles.textColumn}>
              <Text style={styles.paragraphBold}>
              มะคังแดง
              </Text>
              <Text style={styles.paragraph}>
                ชื่อวิทยาศาสตร์ : Dioecrescis erythroclada (Kurz) Tirveng. 
              </Text>
              <Text style={styles.paragraph}>
                วงศ์ : Rubiaceae 
              </Text>
            </View>
          </View>
          </Pressable>

          <Pressable onPress={() => onPressItem(18, 'คำมอกหลวง')}>
          <View style={styles.twoColumnContainer}>
            <View style={styles.imageColumn}>
              <Image
                source={require('../img/img-18.jpg')}
                style={styles.herbImage}
              />
            </View>
            <View style={styles.textColumn}>
              <Text style={styles.paragraphBold}>
              คำมอกหลวง
              </Text>
              <Text style={styles.paragraph}>
                ชื่อวิทยาศาสตร์ : Gardenia sootepensis Hutch. 
              </Text>
              <Text style={styles.paragraph}>
                วงศ์ : Rubiaceae 
              </Text>
            </View>
          </View>
          </Pressable>

          <Pressable onPress={() => onPressItem(19, 'สีดาโคก ไข่เน่าน้ย')}>
          <View style={styles.twoColumnContainer}>
            <View style={styles.imageColumn}>
              <Image
                source={require('../img/img-19.jpg')}
                style={styles.herbImage}
              />
            </View>
            <View style={styles.textColumn}>
              <Text style={styles.paragraphBold}>
              สีดาโคก ไข่เน่าน้ย
              </Text>
              <Text style={styles.paragraph}>
                ชื่อวิทยาศาสตร์ : Gardenia obtusifolia Roxb. ex Hook.f. 
              </Text>
              <Text style={styles.paragraph}>
                วงศ์ : Rubiaceae 
              </Text>
            </View>
          </View>
          </Pressable>

          <Pressable onPress={() => onPressItem(20, 'ยอป่า')}>
          <View style={styles.twoColumnContainer}>
            <View style={styles.imageColumn}>
              <Image
                source={require('../img/img-20.jpg')}
                style={styles.herbImage}
              />
            </View>
            <View style={styles.textColumn}>
              <Text style={styles.paragraphBold}>
              ยอป่า
              </Text>
              <Text style={styles.paragraph}>
                ชื่อวิทยาศาสตร์ : Morinda coreia Buch.-Ham. 
              </Text>
              <Text style={styles.paragraph}>
                วงศ์ : Rubiaceae 
              </Text>
            </View>
          </View>
          </Pressable>

          <Pressable onPress={() => onPressItem(21, 'กระทุ่มนา')}>
          <View style={styles.twoColumnContainer}>
            <View style={styles.imageColumn}>
              <Image
                source={require('../img/img-21.jpg')}
                style={styles.herbImage}
              />
            </View>
            <View style={styles.textColumn}>
              <Text style={styles.paragraphBold}>
              กระทุ่มนา
              </Text>
              <Text style={styles.paragraph}>
                ชื่อวิทยาศาสตร์ : Mitragyna hirsuta Havil. 
              </Text>
              <Text style={styles.paragraph}>
                วงศ์ : Rubiaceae 
              </Text>
            </View>
          </View>
          </Pressable>

          <Pressable onPress={() => onPressItem(22, 'เหมือดคน')}>
          <View style={styles.twoColumnContainer}>
            <View style={styles.imageColumn}>
              <Image
                source={require('../img/img-22.jpg')}
                style={styles.herbImage}
              />
            </View>
            <View style={styles.textColumn}>
              <Text style={styles.paragraphBold}>
              เหมือดคน
              </Text>
              <Text style={styles.paragraph}>
                ชื่อวิทยาศาสตร์ : Scleropyrum pentandrum (Dennst.) Mabb. 
              </Text>
              <Text style={styles.paragraph}>
                วงศ์ : Santalaceae 
              </Text>
            </View>
          </View>
          </Pressable>

          <Pressable onPress={() => onPressItem(23, 'คนทา')}>
          <View style={styles.twoColumnContainer}>
            <View style={styles.imageColumn}>
              <Image
                source={require('../img/img-23.jpg')}
                style={styles.herbImage}
              />
            </View>
            <View style={styles.textColumn}>
              <Text style={styles.paragraphBold}>
              คนทา
              </Text>
              <Text style={styles.paragraph}>
                ชื่อวิทยาศาสตร์ : Harrisonia perforata Merr. 
              </Text>
              <Text style={styles.paragraph}>
                วงศ์ : Simaroubaceae 
              </Text>
            </View>
          </View>
          </Pressable>

          <Pressable onPress={() => onPressItem(24, 'กระเจียว')}>
          <View style={styles.twoColumnContainer}>
            <View style={styles.imageColumn}>
              <Image
                source={require('../img/img-24.jpg')}
                style={styles.herbImage}
              />
            </View>
            <View style={styles.textColumn}>
              <Text style={styles.paragraphBold}>
              กระเจียว
              </Text>
              <Text style={styles.paragraph}>
                ชื่อวิทยาศาสตร์ : Curcuma angustifolia Roxb. 
              </Text>
              <Text style={styles.paragraph}>
                วงศ์ : Zingiberaceaea 
              </Text>
            </View>
          </View>
          </Pressable>

          <Pressable onPress={() => onPressItem(25, 'กระเจียวขาว')}>
          <View style={styles.twoColumnContainer}>
            <View style={styles.imageColumn}>
              <Image
                source={require('../img/img-25.jpg')}
                style={styles.herbImage}
              />
            </View>
            <View style={styles.textColumn}>
              <Text style={styles.paragraphBold}>
              กระเจียวขาว
              </Text>
              <Text style={styles.paragraph}>
                ชื่อวิทยาศาสตร์ : Curcuma parviflora Wall. 
              </Text>
              <Text style={styles.paragraph}>
                วงศ์ : Zingiberaceaea 
              </Text>
            </View>
          </View>
          </Pressable>

          <Pressable onPress={() => onPressItem(26, 'เถาพันซ้าย')}>
          <View style={styles.twoColumnContainer}>
            <View style={styles.imageColumn}>
              <Image
                source={require('../img/img-26.jpg')}
                style={styles.herbImage}
              />
            </View>
            <View style={styles.textColumn}>
              <Text style={styles.paragraphBold}>
              เถาพันซ้าย
              </Text>
              <Text style={styles.paragraph}>
                ชื่อวิทยาศาสตร์ : Spatholobus parviflorus (Roxb.ex DC.) Kuntze 
              </Text>
              <Text style={styles.paragraph}>
                วงศ์ : Fabaceae 
              </Text>
            </View>
          </View>
          </Pressable>

          <Pressable onPress={() => onPressItem(27, 'ข้าวเย็นใต้')}>
          <View style={styles.twoColumnContainer}>
            <View style={styles.imageColumn}>
              <Image
                source={require('../img/img-27.jpg')}
                style={styles.herbImage}
              />
            </View>
            <View style={styles.textColumn}>
              <Text style={styles.paragraphBold}>
              ข้าวเย็นใต้
              </Text>
              <Text style={styles.paragraph}>
                ชื่อวิทยาศาสตร์ : Premna herbacea Roxb. 
              </Text>
              <Text style={styles.paragraph}>
                วงศ์ : Fabaceae 
              </Text>
            </View>
          </View>
          </Pressable>

          {/* เพิ่มปุ่มย้อนกลับไปหน้าแรก */}
          <Button title="กลับหน้าแรก" onPress={() => navigation.navigate('HomeScreen')} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  imageContainer: {
    marginTop: 10,
  },
  coverImage: {
    width: width,
    height: 200,
    resizeMode: 'cover',
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  twoColumnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15, // เพิ่มระยะห่างด้านล่างเพื่อปุ่มไม่ติดกับข้อความ
  },
  imageColumn: {
    width: '30%', // ปรับขนาดของคอลัมน์รูปภาพ
    marginRight: 0, // ลบ margin ระหว่างคอลัมน์
  },
  textColumn: {
    flex: 1, // ให้ข้อความใช้พื้นที่ที่เหลือทั้งหมด
    paddingLeft: 2, // เพิ่มระยะห่างเล็กน้อยระหว่างรูปภาพและข้อความ
    marginTop:4,
  },
  herbImage: {
    width: 100,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  paragraph: {
    fontSize: 12,
    lineHeight: 14,
    marginBottom: 10,
  },
  paragraphBold: {
    fontSize: 12,
    lineHeight: 14,
    marginBottom: 10,
    fontWeight: 'bold', // เพิ่มสไตล์ตัวหนา
  },
});

export default Herbs;
