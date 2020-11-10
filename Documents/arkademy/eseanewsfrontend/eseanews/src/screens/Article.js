/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {Input, Card, Form, Item, Button, Label, Textarea} from 'native-base';
import logo from './src/assets/icons/esea.png';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPencilAlt, faChevronRight} from '@fortawesome/free-solid-svg-icons';

export default function Article() {
  return (
    <ScrollView vertical style={styles.container}>
      <View style={styles.wrap}>
        <Text style={styles.title}>
          Ikan Sapu-Sapu Mati Indikasi Beratnya Pencemaran di Kali Cileungsi
        </Text>
      </View>
      <View style={styles.detailWrap}>
        <Text style={styles.detail}>Author: {'author'}</Text>
        <Text style={styles.detail}>Posted on: {'2020-11-10'}</Text>
      </View>
      <Image
        source={{
          uri: 'http://52.200.32.180:8800/Uploads/4-picture-1604837018384.jpg',
        }}
        style={styles.picture}
      />
      <Text style={styles.caption}>
        Gambar: {'Biota sungai mati akibat pencemaran di Sungai Cileungsi'}.
      </Text>
      <Text style={styles.article}>
        Kepala Perwakilan Ombudsman RI Perwakilan Jakarta Raya Teguh P Nugroho
        menemukan hal tersebut ketika melakukan sidak ke beberapa titik terkait
        pencemaran Sungai Cileungsi. Sidak ini merupakan bagian dari proses
        monitoring tindakan korektif Laporan Akhir Hasil Pemeriksaan (LAHP)
        Pencemaran Sungai Cileungsi awal tahun 2019 yang lalu. Sidak tersebut
        dilakukan di beberapa titik yang ditengarai sebagai awal mula terjadinya
        pencemaran yaitu Jembatan Wika, Jembatan Narogong di wilayah perbatasan
        Kabupaten Bogor dan Kota Bekasi, serta Jembatan Pocong. “Di titik
        terakhir kami menemukan ratusan ikan sapu-sapu mati di satu titik saja.
        Selain itu, air Sungai Cileungsi menghitam, berbau dan berbusa. Ikan
        sapu-sapu yang biasanya cukup tahan dengan polutan dari limbah domestik,
        ini bisa menjadi indikasi beratnya pencemaran yang terjadi di Sungai
        Cileungsi dan ditengarai berasal dari limbah kimia yang dihasilkan
        pabrik-pabrik di wilayah tersebut," ujarnya dalam keterangan resmi yang
        diterima Bisnis, Rabu (28/8/2019). “Untuk memastikan tingkat pencemaran
        Sungai Cileungsi, kami akan meminta data pemeriksaan kondisi air
        terakhir dari DLH Kabupaten Bogor dan DLH Kota Bekasi, serta mengecek
        keakuratan hasil pemeriksaan tersebut ke Laboratorium yang melakukan
        pengecekan," tambah Teguh. Selain melakukan pemeriksaan di sungai, Teguh
        dan jajarannya melakukan pemeriksaan terhadap dua IPAl (Instalasi
        Pengolahan Air Limbah) di dua perusahaan yang menurut DLH Kabupaten
        Bogor telah mengalami perubahan sejak LAHP Ombudsman Jakarta Raya
        diberikan. “Kami menemukan, adanya ketidaksesuaian standar paling
        minimum dalam proses pengolahan limbah di salah satu perusahaan yang
        kami datangi," sambungnya. Temuan Ombudsman, misalnya menunjukan
        pengolahan limbah B3 padat yang dibiarkan berserakan di gedung pabrik
        yang diperiksa, ada kebocoran di IPAL, dan tidak tersedianya informasi
        hasil pemeriksaan limbah terakhir. Tahun lalu, Ombudsman Jakarta Raya
        menemukan 54 perusahaan yang bermasalah dengan perizinan khususnya
        terkait pembuangan limbah di sepanjang Sungai Cileungsi. Sebagai
        tindakan korektif, DLH Kabupaten Bogor kemudian membenahi pengawasan
        perizinan IPAL perusahaan-perusahaan tersebut, 17 di antaranya
        dinyatakan sudah clean and clear. “Namun saat kami melakukan pengecekan
        kemarin, jelas kami menemukan adanya pertidaksesuaian antara dokumen
        clean and clear DLH kabupaten Bogor dengan fakta di lapangan” tutur
        Teguh. Berdasarkan temuan di lapangan tersebut, Teguh beranggapan DLH
        Kabupaten Bogor sudah tidak mampu menangani masalah pencemaran Sungai
        Cileungsi tersebut. “Selain temuan di lapangan, kami juga menemukan
        fakta bahwa para pelaku kejahatan lingkungan tahun sebelumnya yang
        diajukan ke proses hukum hanya dijerat dengan Perda, tidak dengan
        Undang-Undang No 32 tahun 2009 tentang Perlindungan dan Pengelolaan
        Lingkungan Hidup,” tegas Teguh. Kejahatan lingkungan berat seharusnya
        dijerat dengan pasal 1 angka 14 Undang-Undang No. 32 tahun 2009 tentang
        Perlindungan dan Pengelolaan Lingkungan Hidup dengan ancaman maksimal
        penjara tiga tahun dan denda Rp3 miliar. Selain perusahaan pencemar
        lingkungan yang akan ditindak, pengawas lingkungan hidup yang lalai
        melaksanakan tugas juga bisa dijerat pasal Pidana dalam Undang-undang
        yang sama. Menurut Teguh, maladminitrasi dalam pengawasan lingkungan
        implikasinya pidana, bukan hanya tindakan korektif. Sebab, dalam
        undang-undang dijelaskan kelalaian lembaga pengawas lingkungan hidup
        juga merupakan tindak pidana. Namun, nyatanya dalam kasus ini, pelaku
        kejahatan lingkungan hanya dikenai Tindak Pidana Ringan (Tipiring)
        dengan hukuman berupa denda sebesar Rp15 juta. “Melihat dampak kerugian
        yang ditimbulkan akibat pencemaran Sungai Cileungsi ini, tidak hanya
        kematian biota Sungai Cileungsi, tapi juga bau menyengat yang harus
        ‘dinikmati’ warga di sepanjang jalur Sungai Cileungsi," ungkap Teguh
        lagi. Terlebih, akibat hal ini PDAM Tirta Patriot Kota Bekasi tidak
        dapat menjadikan air baku Sungai Cileungsi, yang saat melintasi Kota
        Bekasi menjadi Sungai Bekasi, sebagai bahan baku air minum lagi.
        Sehingga pelayanan publik terhadap penyediaan air bersih bagi warga Kota
        Bekasi terganggu. Berdasarkan kondisi tersebut, Ombudsman Jakarta Raya
        akan menindaklanjuti LAHP yang telah disampaiakan sebelumnya. Dalam LAHP
        tersebut dinyatakan jika DLH Kabupaten Bogor tidak mampu menjadi leading
        sector penangan pencemaran sungai Cileungsi, penanganannya akan
        dialihkan ke DLH dan jajaran Pemrov Jabar. "Kami akan melakukan
        pemanggilan kepada DLH Kabupaten Bogor, DLH Provinsi Jabar, dan Ditjen
        Gakkum KLHK untuk menindaklanjuti ini. Jika diperlukan, kami akan
        meminta kesiapan dari Gubernur Jabar terkait dengan penanganan
        pencemaran ini, karena ini sudah lintas Kabupaten/Kota,” tegas Teguh.
        Selain pemanggilan pihak-pihak tersebut, Ombudsman Jakarta Raya juga
        akan meminta keterangan dari DLH Kota Bekasi sebagai penanggung jawab
        tata kelola Sungai Cileungsi di hilir dan PDAM Tirta Patriot selaku
        pemberi layanan air bersih di Kota Bekasi. Ombudsman juga akan
        berkoordinasi dengan Mabes Polri dan Polda Jabar terkait penindakan para
        pelaku kejahatan lingkungan secara lebih tegas dengan UU No.39/2009.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative',
  },
  wrap: {
    margin: '5%',
  },
  title: {
    color: '#1F271B',
    fontSize: 28,
    fontWeight: 'bold',
  },
  detailWrap: {
    flexDirection: 'row',
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingTop: '2%',
    paddingBottom: '2%',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#1F271B',
    marginBottom: 10,
  },
  detail: {
    marginRight: 10,
    color: '#1F271B',
  },
  picture: {
    width: '100%',
    height: 200,
  },
  caption: {
    marginTop: 5,
    marginBottom: 10,
    marginLeft: '5%',
    marginRight: '5%',
    fontSize: 12,
    color: '#5A6868',
  },
  article: {
    fontSize: 14,
    color: '#1F271B',
    marginTop: 10,
    marginBottom: 30,
    marginLeft: '5%',
    marginRight: '5%',
  },
  commentBox: {
    height: 100,
    borderRadius: 5,
  },
});
