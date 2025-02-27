import { Text, Image, Pressable, StyleSheet, View, ScrollView, Button } from 'react-native'
import React from 'react'

const images = {
  1: require('../img/img-1.jpg'),
  2: require('../img/img-2.jpg'),
  3: require('../img/img-3.jpg'),
  4: require('../img/img-4.jpg'),
  5: require('../img/img-5.jpg'),
  6: require('../img/img-6.jpg'),
  7: require('../img/img-7.jpg'),
  8: require('../img/img-8.jpg'),
  9: require('../img/img-9.jpg'),
  10: require('../img/img-10.jpg'),
  11: require('../img/img-11.jpg'),
  12: require('../img/img-12.jpg'),
  13: require('../img/img-13.jpg'),
  14: require('../img/img-14.jpg'),
  15: require('../img/img-15.jpg'),
  16: require('../img/img-16.jpg'),
  17: require('../img/img-17.jpg'),
  18: require('../img/img-18.jpg'),
  19: require('../img/img-19.jpg'),
  20: require('../img/img-20.jpg'),
  21: require('../img/img-21.jpg'),
  22: require('../img/img-22.jpg'),
  23: require('../img/img-23.jpg'),
  24: require('../img/img-24.jpg'),
  25: require('../img/img-25.jpg'),
  26: require('../img/img-26.jpg'),
  27: require('../img/img-27.jpg'),
}

const detail = {
  1: 'ไม้ล้มลุกหลายปี ลำต้นใต้ดินสั้น ใบเป็นกอหนา ใบเรียวยาว แบน ไม่มีก้านใบ แผ่นใบด้านบนสีเขียวเข้ม แผ่นใบด้านล่างสีเขียวหม่น ขอบใบเรียบ ปลายใบแหลมถึงมน ดอกเป็นช่อ ดอกย่อยจำนวนมาก  ดอกย่อยอยู่เป็นกลุ่ม บางกลุ่มมี 2-3 ดอก บางครั้งพบดอกเดียว กลีบดอก 5 กลีบ สีขาวหรือขาวเขียวตอนปลายกลีบ รูปขอบขนาน หรือรูปรี  เมล็ดรูปรี',
  2: 'ไม้ล้มลุก ลำต้นมีขนนุ่ม ใบเป็นใบเดี่ยวเรียงรอบโคนต้นใกล้ผิวดิน รูปไข่หรือรูปไข่กลับ มีใบขนาดเล็กติดที่กิ่งเรียงแบบสลับ ฐานใบแหลม ปลายใบมน ขอบใบเรียบหรือเป็นคลื่น ผิวใบทั้งสองด้านมีขนยาว ดอกแบบช่อกระจุกแน่น  ออกที่ปลายยอด ช่อดอกอัดกันแน่น  แต่ละช่อมี 4 ดอก ใบประดับช่อดอก  มี  3 ใบ รูปไข่ แพปพัส มี 5-6 เส้น มีขนนุ่ม กลีบดอกสีม่วงอ่อน ผลแบบผลแห้ง เมล็ดอ่อน รูปทรงกระบอก',
  3: 'เป็นไม้พุ่ม เปลือกไม้สีน้ำตาลอ่อนผิวเรียบ ลำต้นสีน้ำตาลอ่อน ใบเป็นใบเดี่ยว เรียงสลับ โคนใบสอบแหลม ปลายใบแหลม ขอบใบจักฟันเลื่อย ใบอ่อนมีขน ใบแก่แผ่นใบด้านบนมีสีเขียวเข้ม ดอกช่อออกตามปลายยอด และซอกใบ ดอกสีเขียวอ่อนหรือเหลืองมีกลิ่นหอม กลีบเลี้ยงสีเขียว ผลทรงกลม ใน 1 ผล แบ่งออกเป็น 3 พู ผลอ่อนเป็นสีเขียว ผลแก่เป็นสีเหลือง แตก',
  4: 'เป็นไม้เถารอเลื้อย เนื้อไม้แข็ง เปลือกลำต้นสีเทา เรียบ เนื้อไม้มีวงปีสีน้ำตาลเข้ม เรียงกันประมาณ 7 ชั้น ใบเดี่ยว เรียงตรงกันข้าม ใบรูปรี ขอบใบมน โคนใบมน ปลายใบมน ดอกเป็นช่อกระจุก ออกตามซอกใบ กลีบดอกมี 5 กลีบ กลีบดอกสีเหลืองอมเขียวหรือเหลือง ผลสด รูปกลม ถึงรี ผิวเกลี้ยง ผลอ่อนสีเขียว เมื่อสุกมีสีส้มแดง',
  5: 'พืชล้มลุก มักขึ้นเป็นกอ ลำต้นกลมสีแดง ไม่แตกกิ่งก้านสาขา ใบเดี่ยว ออกเวียนสลับรอบลำต้น แผ่นใบรูปรีแกมรูปขอบขนาน ปลายใบแหลม โคนใบมน กาบใบอวบสีเขียว หรือสีน้ำตาลแดงโอบรอบลำต้น ขอบใบเรียบ หลังใบเรียบเป็นมัน ท้องใบมีขนนุ่ม เนื้อใบหนา ดอกช่อ ออกที่ปลายยอด กลีบดอกสีขาว เป็นรูปปากแตร ใจกลางดอกมีสีเหลืองอ่อน ดอกบานไม่พร้อมกัน กลีบดอกโคนเชื่อมติดกันเป็นรูปกรวย ปลายแผ่บานออกเป็นรูปปากแตร บางและย่น กลีบเลี้ยงสีแดงเข้ม ผลรูปขอบขนานแกมรูปสามเหลี่ยม แห้งแล้วแตก',
  6: 'ไม้ล้มลุก ลำต้นเป็นเหง้าใต้ดิน หัวกลม สีดำหรือน้ำตาลแก่ มีกลิ่นหอม ลำต้นเหนือดิน มีขนาด เล็กเรียว เป็นเหลี่ยม มีสีเขียวแก่ ใบ มีขนาดเล็กยาวเรียว ออกเวียนรอบโคนต้น ใบขอบขนาน ปลายแหลมทู่ กลางใบเป็นสันร่อง พื้นที่ผิวใบเกลี้ยงมัน มีสีเขียวเข้ม ดอกออกเป็นช่อ ขนาดเล็ก ออกบริเวณปลายต้นเหนือดิน ช่อมีใบประดับ ประมาณ 2-4 ใบ กางออกอยู่ฐานช่อดอก ดอกย่อยไม่มีก้าน ดอกมีสีน้ำตาล ผลเป็นรูปเหลี่ยม มีสีน้ำตาล หรือสีดำ',
  7: 'ไม้ต้น ผลัดใบ ใบเดี่ยว เรียงสลับ ใบรูปขอบขนาน รูปไข่หรือรูปหอก โคนใบและปลายใบแหลมหรือมน ขอบใบจักเป็นซี่ฟันไม่สม่ำเสมอ ใบแก่ค่อนข้างเกลี้ยง หลังใบเรียบสีเขียวเข้ม ท้องใบมีขนไม่มากดอกช่อ แยกเพศอยู่รวมต้นหรือต่างต้น ดอกเพศผู้กลีบเลี้ยง 5 กลีบ กลีบดอก 5 กลีบ มีขนแน่น ดอกเพศเมีย กลีบเลี้ยงและกลีบดอก ขนาดเล็กสีเหลืองหรือเหลืองเขียว ผลแห้งแตก รูปค่อนข้างกลม มี 3 พู แตกเป็น 3 ซีก',
  8: 'ไม้ล้มลุก อายุปีเดียว ลำต้นสีเขียวมีขนกระจายเต็มลำต้น ใบเดี่ยวเรียงแบบสลับ รูปไข่ โคนใบมนโคนใบ ขอบใบเป็นคลื่น แผ่นใบมีขน ดอกสีขาวออกเป็นช่อ ที่ปลายยอด ดอกที่โคนบานก่อนที่ปลายช่อปลายช่อดอกโค้งลงเหมือนงวงช้าง เป็นดอกสมบูรณ์เพส เรียงเวียนบนแกนช่อดอกทางด้านเดียว กลีบดอกเชื่อมกันเป็นรูประฆัง ผลขนาดเล็ก เนื้อแข็งมี 2 พู เชื่อมติดกัน แต่ละพูมี 2 เมล็ด',
  9: 'ไม้ยืนต้น ลำต้นเปลาตรง เปลือกสีเทาอมน้ำตาล แตก ใบเดี่ยว เรียงเวียน โคนใบมนปลายเป็นติ่งแหลม ขอบใบเรียบ ผิวใบด้านบนเขียวเข้มเป็นมัน ด้านล่างมักจะมีนวลสีเขียวเทา ดอกช่อออกตามซอกใบ หรือปลายกิ่ง ดอกมีสีเขียวอมเขียวอ่อน มีกลีบเลี้ยง 5 กลีบ กลีบดอก 5 กลีบ มีเกสรตัวผู้อยู่ 10 อัน ผล เป็นผลสด แบบผลผนังชั้นในแข็ง ผลอ่อนสีเขียว เมื่อแก่จะเป็นสีเหลืองอมเขียว เมล็ด 1 เมล็ด',
  10: 'ไม้พุ่ม เปลือกต้นเรียบสีน้ำตาลอ่อน กิ่งอ่อนและยอดอ่อนเป็นเหลี่ยม ใบ เป็นใบเดี่ยว ออกเรียงตรงข้ามกัน บางข้อมี 3-4 ใบ เรียงรอบข้อ รูปรียาว โคนใบสอบ ปลายใบเป็นติ่งสั้น ขอบใบจักเป็นฟันเลื่อยช่วงกลางขอบใบไปจนถึงปลายใบ แผ่นใบเรียบสีเขียวเข้มเป็นมัน ก้านใบสั้น ดอก ออกเป็นช่อตามซอกใบและปลายยอด  ดอกสีม่วงอ่อนอมฟ้า กลีบดอกเชื่อมติดกันเป็นหลอดสั้น ปลายแยกเป็น 5 แฉก มีขนาดไม่เท่ากัน ผล รูปค่อนข้างกลม ผิวเรียบเป็นมัน ผลอ่อนสีเขียว แก่เป็นสีดำ เมล็ดเดี่ยว รูปกลมรี สีดำ',
  11: 'ไม้พุ่ม เกลี้ยงหรือมีขนนิกหน่อย ใบเป็นใบประกอบแบบขนนก 1-3 ชั้น ปลายใบคี่ ใบย่อยออกเป็นคู่ตรงข้าม หูใบรูปไข่กลับ โคนใบสอบมน ปลายใบแหลม ขอบใบหยักมน ลังใบและท้องใบเป็นลอนตามแนวเส้นใบ ใบอ่อนมักมีสีแดงเข้ม ดอกออกเป็นช่อตั้งขึ้น ตามซอกใบ ดอกย่อยมีจำนวนมาก ดอกตูมรูปทรงกลมสีแดงเข้มพอบานมีสีขาว กลีบเลี้ยงเชื่อมติดกันที่โคน ปลายแยกเป็นแฉกแหลม 5 แฉก กลีบดอก 5 กลีบ เชื่อมติดกันที่โคน ผลกลม แป้น ผิวบาง มีเนื้อนุ่ม ผลอ่อนมีสีเขียวพอแก่จัดมีสีแดงเข้มจนถึงสีม่วงดำ',
  12: 'ไม้ต้น ผลัดใบ เรือนยอดเป็นพุ่มกลมแน่นทึบ โดยมากลำต้นมักเตี้ย กิ่งก้านสาขามาก เปลือกหนา แตกล่อนเป็นแผ่นๆ เปลือกสีเทา ใบเดี่ยว ออกเรียงเวียนกันตามปลายกิ่ง รูปไข่กลับ กว้าง ปลายใบมน โคนใบสอบ แผ่นใบบางและเหนียว ขอบใบหยักเล็กน้อย เส้นแขนง ใบข้างละ 9-15 เส้น ใบแก่ก่อนร่วงเป็นสีแสด ดอก สีขาว มีกลิ่นหอม	อ่อนๆ ออกเป็นช่อแบบช่อกระจุกละ 2-3 ดอก กลีบเลี้ยง 4 กลีบ กลีบดอก 4 กลีบ สีขาวหลุดร่วงง่าย  ผลแบบผลมีเนื้อในหนึ่งถึงหลายเมล็ดรูปกลม อวบน้ำ เมล็ดจำนวนมากมีเยื่อหุ้ม',
  13: 'ไม้ต้นผลัดใบ เปลือกต้นสีเทาหรือเทาออกเหลือง เกลี้ยงหรืออาจจะมีจุดสีดำติดที่ลำต้น ใบเดี่ยว เรียงตรงข้าม ผิวมันเรียบ สีเขียวเข้ม รูปไข่ รูปรี ค่อนข้างกว้างหรือกลม โคนใบสอบ ปลายใบมน ขอบใบเรียบ เส้นใบชัดเจน ดอกช่อออกตามปลายกิ่ง สีเขียวแกมขาว กลีบเลี้ยง 5 กลีบ กลีบดอกเป็นหลอดปลายแยกเป็น 5 กลีบ ผลผลกลม ผิวเกลี้ยงเป็นมัน ผลสุกมีสีเหลือง',
  14: 'ไม้ต้นขนาดเล็ก ผลัดใบ ลำต้นคดงอ เปลือกสีเทาปนน้ำตาล แตกเป็นร่องลึกตามยาว ใบเดี่ยว เรียงสลับ มักพบเรียงชิดกันเป็นกลุ่ม ที่ปลายกิ่ง ใบรูปไข่กลับแกมรูปขอบขนานหรือรูปใบหอก โคนใบมน ปลายใบแหลมถึงเรียวแหลม หรือป้าน ขอบใบแหลมซี่ฟันละเอียด ดอกสีเหลืองสด ออกเป็นช่อแบบช่อกระจุกตามกิ่งและปลายกิ่งที่ไม่มีใบ กลีบเลี้ยง 5 กลีบ กลีบดอก   5-8 กลีบ เกสรเพศผู้จำนวนมาก รังไข่เหนือวงกลีบ  ผลสด แบบผลผนังชั้นในแข็ง ผลค่อนข้างกลมรูปขอบขนานปลายมน ฐานรองดอกและกลีบเลี้ยงเปลี่ยนเป็นสีแดง เมล็ดสีดำทรงไข่',
  15: 'ไม้พุ่มขนาดเล็ก แตกกิ่งก้านเล็กน้อย ลำต้นสีเขียวอมน้ำตาลเข้ม ไม่มีขน ใบประกอบแบบขนนกปลายคี่ เรียงสลับ ใบย่อย 3-7 ใบ รูปไข่แกมวงรีขอบขนาน โคนใบแหลม ปลายใบแหลม ขอบใบหยักฟันเลื่อยตื้น แผ่นใบมัน สีเขียวเข้ม มีจุดน้ำมันกระจาย เมื่อส่องดูจะมองเห็นจุดโปร่งแสงเล็กๆ กระจายทั่วทั้งใบ ดอกช่อ ออกที่ปลายกิ่ง กลีบดอกสีขาวแกมเหลือง รังไข่เหนือวงกลีบ ผลสดรูปกลมรี ผลอ่อนสีเขียว เริ่มแก่จะส้มและแดง',
  16: 'เป็นไม้เถาขนาดเล็ก มีขนนุ่มสีขาวรอบเถามีรากสะสมอาหารใต้ดินอวบสีขาว ใบเดี่ยว ขอบใบเรียบ โคนใบมน ปลายใบแหลม มีขนละเอียดปกคลุมทั้งสองด้าน มีกลิ่นเหม็นเขียว ดอกดอกออกเป็นช่อตามง่ามใบ ก้านช่อดอกและผลมีขนสั้นๆปกคลุมหนาแน่น ออกดอกเป็นช่อที่ยอด และตามซอกใบ ดอกย่อยหลายดอก กลีบดอกด้านนอกสีขาวอมม่วง มีขนสีขาวปกคลุม ด้านในสีม่วงเข้ม กลีบดอกรูปกรวยปลายแยกเป็น 5 แฉกสีขาว ผลรูปไข่หรือกลม แบน',
  17: 'ไม้ยืนต้น ใบดกหนาทึบ ลำต้นและกิ่งก้านสีน้ำตาลแดง มีขนนุ่มๆ เหมือนกำมะหยี่สีน้ำตาลแดงปกคลุมทั่วไป โคนต้นและกิ่งมีหนามใหญ่แหลม ใบเดี่ยว เรียงตรงข้าม รูปวงรีหรือรูปไข่กลับ ผิวใบมีขนทั้งสองด้าน มีหูใบอยู่ระหว่างก้านใบ โคนใบมน ปลายใบมย หลังใบเรียบ ท้องใบมีขนสีขาวปกคลุม ขอบใบเรียบ ก้านใบมีขนสีขาว  ดอกช่อ ออกที่ซอกใบใกล้ปลายกิ่ง ดอกย่อยสีเขียวอ่อน กลีบดอกมี 5 กลีบ  โคนกลีบดอกติดกัน กลีบดอกรูปกลม เกสรตัวผู้เป็นเส้นติดกับกลีบดอกวางสับหว่างกลีบดอก ผลสดรูปกลม มี ผิวเรียบ ปลายผลมีกลีบเลี้ยงติดอยู่',
  18: 'ไม้ต้นผลัดใบขนาดกลาง เปลือกสีเทาร่อน มีน้ำยางสีเหลือง กิ่งอ่อนมีขน ใบเดี่ยว เรียงตรงข้าม รูปรีหรือรูปขอบขนาน แกมรูปไข่ ปลายใบแหลมหรือมน โคนใบมน ขอบใบเรียบ เห็นเส้นใบชัดเจน ดอกเดี่ยว ออกตามซอกใบ สีเหลือง มีกลิ่นหอม เปลี่ยนเป็นสีซีดหรือขาวนวลเมื่อร่วง กลีบดอก 5 กลีบ โคนกลีบรวมกันเป็นหลอด  ผลรูปรีหรือขอบขนาน ผลแห้งไม่แตก สีน้ำตาลเข้ม',
  19: 'เป็นไม้ยืนต้น เปลือกไม้สีเทา ผิวเรียบ ลำต้นเป็นสีเทา ใบเดี่ยว ใบรูปไข่กลับ ขอบขนาน โคนใบกลม ปลายใบมน ขอบใบเรียบ ผิวใบด้านบนสีเขียวเข้ม ผิวใบด้านล่างสีเขียวอ่อน ดอกเดี่ยว ออกดอกที่ปลายกิ่ง ดอกขนาดใหญ่ กลีบเลี้ยงสีเขียว กลีบดอกสีขาวเปลี่ยนเป็นสีเหลืองเมื่อจะร่วง เชื่อมติดกันเป็นรูปกรวย กลิ่นหอม ดลีบดอก 5 กลีบ ผลสด รูปวงรีแกมขอบขนาน สีน้ำตาลแกมเขียว เปลือกแข็งมีกลีบเลี้ยงติดอยู่',
  20: 'ไม้ยืนต้นผลัดใบ เปลือกสีเทาอมน้ำตาล ลำต้นมักคดงอ แตกเป็นสะเก็ดเล็กตามยาวของลำต้น ใบเดี่ยวเรียงตรงข้ามสลับตั้งฉาก รูปไข่กลับหรือรูปไข่แกมรูปขอบขนาน โคนใบสอบแหลม ปลายใบแหลมหรือเป็นติ่งแหลม ขอบใบเรียบ ผิวใบด้านบนมีขนสากประปราย ด้านล่างมีขนนุ่มหนา ดอกช่อกระจุกแน่นติดกันตามปลายกิ่งหรือซอกใบ สีขาวมีกลิ่นหอมกลีบเลี้ยงเชื่อมติดกัน โคนกลีบดอกเชื่อมติดกัน ปลายแยกเป็น 5 แฉก เกสรเพศผู้มี 5 อัน โผล่ตั้งตรงพ้นหลอดกลีบดอกขึ้นมา ผลรูปกลมหรือบิดเบี้ยว ผลรวมสีเขียว ผลเป็นปุ่มปมเนื้อด้านในสีขาวมีน้ำมาก เมล็ดสีดำ',
  21: 'ไม้ต้นผลัดใบ ลำต้นคดหรือเปลาตรง เปลือกลำต้นสีเทาอมเหลือง เปลือกหลุดเป็นแผ่นเล็ก ๆ  ใบเดี่ยว ออกเรียงตรงข้ามสลับตั้งฉาก ใบรูปไข่ รูปขอบขนาน รูปรี หรือรูปรี โคนใบมนหรือสอบแหลม ปลายใบมน ขอบใบเรียบ หูใบ หลังใบเกลี้ยง ส่วนด้านล่างมีขน ช่อดอกแบบช่อกระจุกแน่น ออกตามปลายกิ่ง ใบประดับขนาดใหญ่ลักษณะคล้ายใบ ติดบนก้านช่อด้านล่าง ดอกย่อยจำนวนมาก มีกลิ่นหอม กลีบเลี้ยงเชื่อมติดกันรูปถ้วย ปลายจักรูปสามเหลี่ยมตื้นๆ หรือปลายตัด กลีบดอกสีเหลืองนวล เชื่อมติดกันเป็นหลอด มีขนหนาแน่นด้านใน ปลายแยกเป็น 5 แฉก โคนด้านในมีขน เกสรเพศผู้ 5 อัน ผล ขนาดเล็ก ผิวแข็งอัดรวมกันเป็นก้อนกลม ผลแห้งแตก เมล็ดมีปีก',
  22: 'ไม้ต้นขนาดเล็ก ลำต้นแตกตื้น เปลือกลำต้นสีเทา ตามลำต้นและกิ่งก้านมีหนามแหลมแข็ง ขึ้นรวมกันเป็นกลุ่มๆ กระจายทั่วลำต้น ใบเดี่ยว เรียงเวียนสลับ รูปรีแกมรูปไข่หรือรูปขอบขนาน โคนใบสอบแหลม ปลายใบแหลม ขอบใบเรียบ ใบเหนียว หลังใบเรียบ เป็นมัน สีเขียวเข้ม ดอกช่อ ออกจากลำต้น และซอกใบ ช่อดอกอัดแน่นรูปทรงกระบอก ช่อดอกแยกเพศหรือสมบูรณ์เพศอยู่ร่วมต้น ดอกมีขนาดเล็ก กลีบรวม 5 กลีบ ซ้อนเหลื่อมกัน สีเขียวแกมเหลือง ก้านดอกย่อยสั้นมาก ดอกเพศเมียไม่มีก้านดอก ดอกมีขนาดใหญ่กว่าดอกเพศผู้ ผลสดสีเขียว',
  23: 'ไม้พุ่มแกมเถา ลำต้นสีเหลืองเทา ลำต้นมีรอยแตกตื้น ลำต้นและกิ่งก้านมีหนามแหลม มีรอยนูนเห็นได้ชัดเจนที่โคนหนาม ใบประกอบขนนกปลายคี่ เรียงสลับ แกนกลางเป็นปีกแคบ มีสันด้านบน ใบย่อยเป็นรูปไข่แกมรูปใบหอก โคนใบแหลม ปลายแหลม ขอบใบหยักมน มีครีบตรงก้านใบ ใบอ่อนยอดอ่อนมีสีแดง ดอกช่อมีสีขาว ดอกออกเป็นช่อกระจุกออกที่ซอกใบใกล้ปลายกิ่ง กลีบดอกด้านนอกสีแดงอมม่วง ด้านในสีนวล ผลสดกลม มีเมล็ดเดียวแข็ง',
  24: 'ไม้ล้มลุกมีเหง้าสั้น ลำต้นเหนือดินสูง 20-40 เซนติเมตร ใบเดี่ยว เรียงสลับ รูปขอบขนาน ปลายใบรูปลิ่ม โคนใบแหลม ขอบใบเรียบ ผิวเกลี้ยงหรือมีขนสั้นนุ่ม ช่อดอกแบบช่อเชิงลด รูปทรงกระบอก ใบประดับสีแดงเข้มหรือสีชมพูอ่อนปนขาว ส่วนใบประดับที่โคนช่อดอกรองรับดอกสีเขียว สีเหลือง หลอดกลีบเลี้ยงยาวประมาณ 1 เซนติเมตร หลอดกลีบดอก ยาว 1-2 เซนติเมตร มีขน แฉกบนรูปรีแฉกข้างแคบกว่าเล็กน้อย กลีบปากรูปไข่กลับสีเหลือง ปลายแยกเป็น 2 พู เกสรเพศผู้ทีเป็นหมันรูปไข่กลับหรือรูปรี สีเหลืองมีขนสั้น เกสรเพศผู้ที่สมบูรณ์มีจุดสีแดงจำนวนมาก โคนอับเรณูเรียวแหลมเป็นเดือย 2 อันโค้งเข้าหากัน เกสรเพศเมียมีรังไข่ใต้วงกลีบมีขนสั้นหนาแน่น ผลรูปไข่มีขนหนาแน่น',
  25: 'ไม้ล้มลุก เหง้าสั้นมาก ลำต้นเหนือดินสูง 20-40 ซม. แผ่นใบมีรูปรี ผิวใบเกลี้ยงทั้ง 2 ด้าน โคนใบรูปลิ่มหรือมน ปลายใบเรียวแหลม ดอกช่อ ช่อดดอกออกที่ปลาย ดอกย่อยจำนวนมาก ช่อดอกยาว 3.5-8 เซนติเมตร ใบประดับสีเขียว ใบประดับส่วนยอด สีขาว กลีบดอกมีสีขาว เกสรเพศผู้ที่ไม่สามารถสร้างละอองเรณูรูปไข่กลับ มีสีขาวล้วนหรือมีแต้มสีม่วงหรือน้ำเงินที่ส่วนปลาย ขอบหยักเป็นคลื่น กลีบปาก รูปไข่กลับ มีสีขาว ส่วนปลายแต้มสีน้ำเงินขอบหยักเป็นชายครุย ปลายแยก 2 แฉก อับเรณูไม่มีเดือย รังไข่ค่อนข้างกลม ยาวประมาณ 2 มม. สีขาว ผิวเกลี้ยง',
  26: 'ใบเป็นใบประกอบแบบขนนกชั้นเดียว มีใบย่อย 3 ใบ ออกเรียงสลับ ลักษณะของใบย่อยที่ปลายเป็นรูปไข่ รูปไข่กลับ หรือรูปไข่แกมรูปใบหอก ปลายใบมีติ่งแหลม โคนใบกลม ส่วนขอบใบเรียบ ส่วนใบย่อยที่อยู่ด้านข้างเป็นรูปไข่แกมสี่เหลี่ยม รูปไข่กลับ หรือรูปไข่กลับแกมรูปวงรี ปลายใบมน โคนใบเบี้ยว ส่วนขอบใบเรียบดอกเป็นช่อแยกแขนงบริเวณซอกใบ ยาวประมาณ 10-20 เซนติเมตร ดอกย่อยมีจำนวนมาก ใบประดับเป็นรูปไข่แกมขอบขนาน กลีบเลี้ยง 4 กลีบ กลีบดอกเป็นสีชมพูแกมขาว เกสรเพศผู้ 10 อัน เชื่อมกันเป็นสองกลุ่ม เกสรเพศเมีย รังไข่มีขนสีน้ำตาลหนาแน่น ผลเป็นฝักแบน คล้ายปีก รูปขอบขนาน ขนาดกว้างประมาณ 2.5-4 เซนติเมตร และยาวประมาณ 8-10 เซนติเมตร มีขนละเอียดสีน้ำตาล ภายในมีเมล็ด 1 เมล็ด ลักษณะของเมล็ดเป็นรูปไข่',
  27: 'ไม้พุ่ม กิ่งมีขนสั้น สีขาวอมน้ำตาลหนาแน่น ใบเดี่ยว เรียงตรงข้าม รูปขอบขนานถึงรูปใบหอก ปลายใบมน โคนใบรูปลิ่ม ขอบใบจักฟันเลื่อย ผิวใบด้านบนมีขนสั้นสีขาวอมน้ำตาลกระจายทั่วแผ่นใบ และขนสั้นขึ้นบริเวณเส้นใบ ก้านใบ สั้นมาก ช่อดอก แบบช่อแยกแขนง ออกที่ปลายยอด กลีบเลี้ยงรูปถ้วย หลอดกลีบดอก ยาว 1.4-1.5 มม. แฉกกลีบเลี้ยง มี 5 แฉก ขนาดใกล้เคียงกัน รูปไข่ ปลายมน ขอบเรียบมีขนสั้น กลีบดอก สีเหลืองอ่อน แฉกกลีบดอก มี 4 แฉก เกสรเพศผู้มี 4 อัน ขนาดใกล้เคียงกัน เกสรเพศเมีย มีรังไข่รูปกลม มีรอยเว้าตื้น ผิวเกลี้ยง ผลย่อย รูปไข่'
}

const properties = {
  1: '-',
  2: 'ทั้งต้นต้มดื่มบำรุงกำลัง แก้ไข้แก้ไอ',
  3: 'รักษาเบาหวาน',
  4: 'ใช้เนื้อไม้เป็นยาระบาย ขับลม ใบใวนเป็นยาสูบ แก้ริดสีดวงจมูก',
  5: 'รากหรือเหง้าต้มดื่มแก้ความดันต่ำ บำรุงกำลัง ขับปัสสาวะ',
  6: 'เหง้าเข้ายาใช้บำรุงกำลัง โดยมีน้ำผึ้ง  บอระเพ็ด ปั้นเป็นลูกกอน วันละเม็ด',
  7: 'ใบ แก้ท้องเสีย บำรุงโลหิต ใบใช้รวมกับใบหนาดต้มอาบแก้ผื่นคัน',
  8: 'ทั้งต้น แก้ผื่นคันตามร่างกาย',
  9: 'เนื้อไม้ตากแห้ง ต้ม แก้ไอ',
  10: 'ใบรักษาริดสีดวงทวาร  แผลอักเสบ',
  11: 'รากรักษามะเร็ง ใบพอกศีรษะแก้วิงเวียน',
  12: 'รสฝาดสมานแผล แก้ปวดท้อง',
  13: 'เนื้อไม้รวมกับไม้มะตูม และตูมจัง ใช้ขับลม เมล็ดยาเบื่อ',
  14: 'ใช้เนื้อไม้  เป็นยาบำรุงกำลัง แก้ประดงเส้น',
  15: 'ใช้ใบแช่น้ำล้างตา หยอดตา แก้ตาฟาง',
  16: 'ใบแก้วิงเวียน',
  17: 'แก่น ต้มน้ำดื่มแก้ปวดเมื่อย  เป็นยาละลายลิ่มเลือด',
  18: 'เนื้อไม้นำไปเข้ายารักษาโรคได้ ต้มน้ำดื่ม แก้บิด เป็นยาบำรุงกำลัง',
  19: 'เนื้อไม้ของราก หรือลำต้น  ฝนดื่มแก้เบื่อเมา เบื่อเห็ด',
  20: 'รากเข้ายากับชนิดอื่น รักษาโรคเบาหวาน',
  21: 'ใช้เปลือกแก้ปวดฟันเหงือกบวม',
  22: 'เนื้อไม้แห้งบด ทำเป็นแคปซูล บำรุงน้ำนม สำหรับสตรีหลังคลอด ทำให้ประจำเดือนมาปกติ',
  23: 'ใช้ลูกดิบสดมาบดพอกเพื่อฆ่าเชื้อรา น้ำกัดเท้า รากเข้าตำรับยาแก้ลำไส้อักเสบ',
  24: 'ดอกอ่อน ขับลม',
  25: 'เหง้าแก้ปวดเมื่อย',
  26: 'รักษาสตรีหลังคลอดบุตร   รักษากระเพาะอาหาร',
  27: 'เป็นยารักษามดลูก   เข้ายาเพื่อรักษามะเร็ง'
}

const Item = ({ navigation, route}) => {
    return (
        <ScrollView>
        <View style={styles.middle} >
            <Image source={ images[route.params.id] } style={styles.image390} />
            <Text style={{ fontWeight: 'bold', fontSize: 24, padding: 10, textAlign: 'center' }}>
              { route.params.name }
            </Text>
            <Text style={{ fontWeight: 'bold', fontSize: 20, padding: 10 }}>
              ลักษณะทางพฤกษศาสตร์
            </Text>
            <Text style={styles.text}>
              { detail[route.params.id] }
            </Text>
    
            <Text style={{ fontWeight: 'bold', fontSize: 20, padding: 10 }}>
            สรรพคุณ
            </Text>
            <Text style={styles.text}>
            { properties[route.params.id] }
            </Text>

            {/* เพิ่มปุ่มย้อนกลับไปหน้าแรก */}
            <Button title="ย้อนกลับ" onPress={() => navigation.navigate('Herbs')} />
        </View>
          
        </ScrollView>
      )
    }
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        padding: 20,
        margin: 10,
      },
      headerText: {
      padding: 1,
      flex: 0.10,
      backgroundColor: '#FFFFFF',
      },
      image390: {
        width: 380, // ปรับขนาดของรูปภาพตามที่คุณต้องการ
        height: 250, // ปรับขนาดของรูปภาพตามที่คุณต้องการ
        borderRadius: 10,
      },
      image120: {
        width: 120, // ปรับขนาดของรูปภาพตามที่คุณต้องการ
        height: 100, // ปรับขนาดของรูปภาพตามที่คุณต้องการ
        borderRadius: 10,
      },
      middle: {
        padding: 5,
        flex: 0.40,
        backgroundColor: '#FFFFFF',
        marginTop: 0,
        },
      text: {
        fontSize: 20,
        padding: 10,
      },
    });

export default Item