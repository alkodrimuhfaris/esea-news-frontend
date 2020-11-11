import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Form, Button, Label, Textarea} from 'native-base';
import Comment from '../components/Comment';

export default function Article() {
  const [comment, setComment] = useState('');
  const sendComment = () => {
    console.log(comment);
  };

  return (
    <View style={styles.parent}>
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
            uri:
              'http://52.200.32.180:8800/Uploads/4-picture-1604837018384.jpg',
          }}
          style={styles.picture}
        />
        <Text style={styles.caption}>
          Gambar: {'Biota sungai mati akibat pencemaran di Sungai Cileungsi'}.
        </Text>
        <Text style={styles.article}>
          Kepala Perwakilan Ombudsman RI Perwakilan Jakarta Raya Teguh P Nugroho
          menemukan hal tersebut ketika melakukan sidak ke beberapa titik
          terkait pencemaran Sungai Cileungsi. Sidak ini merupakan bagian dari
          proses monitoring tindakan korektif Laporan Akhir Hasil Pemeriksaan
          (LAHP) Pencemaran Sungai Cileungsi awal tahun 2019 yang lalu. Sidak
          tersebut dilakukan di beberapa titik yang ditengarai sebagai awal mula
          terjadinya pencemaran yaitu Jembatan Wika, Jembatan Narogong di
          wilayah perbatasan Kabupaten Bogor dan Kota Bekasi, serta Jembatan
          Pocong. “Di titik terakhir kami menemukan ratusan ikan sapu-sapu mati
          di satu titik saja. Selain itu, air Sungai Cileungsi menghitam, berbau
          dan berbusa. Ikan sapu-sapu yang biasanya cukup tahan dengan polutan
          dari limbah domestik, ini bisa menjadi indikasi beratnya pencemaran
          yang terjadi di Sungai Cileungsi dan ditengarai berasal dari limbah
          kimia yang dihasilkan pabrik-pabrik di wilayah tersebut," ujarnya
          dalam keterangan resmi yang diterima Bisnis, Rabu (28/8/2019). “Untuk
          memastikan tingkat pencemaran Sungai Cileungsi, kami akan meminta data
          pemeriksaan kondisi air terakhir dari DLH Kabupaten Bogor dan DLH Kota
          Bekasi, serta mengecek keakuratan hasil pemeriksaan tersebut ke
          Laboratorium yang melakukan pengecekan," tambah Teguh. Selain
          melakukan pemeriksaan di sungai, Teguh dan jajarannya melakukan
          pemeriksaan terhadap dua IPAl (Instalasi Pengolahan Air Limbah) di dua
          perusahaan yang menurut DLH Kabupaten Bogor telah mengalami perubahan
          sejak LAHP Ombudsman Jakarta Raya diberikan. “Kami menemukan, adanya
          ketidaksesuaian standar paling minimum dalam proses pengolahan limbah
          di salah satu perusahaan yang kami datangi," sambungnya. Temuan
          Ombudsman, misalnya menunjukan pengolahan limbah B3 padat yang
          dibiarkan berserakan di gedung pabrik yang diperiksa, ada kebocoran di
          IPAL, dan tidak tersedianya informasi hasil pemeriksaan limbah
          terakhir. Tahun lalu, Ombudsman Jakarta Raya menemukan 54 perusahaan
          yang bermasalah dengan perizinan khususnya terkait pembuangan limbah
          di sepanjang Sungai Cileungsi. Sebagai tindakan korektif, DLH
          Kabupaten Bogor kemudian membenahi pengawasan perizinan IPAL
          perusahaan-perusahaan tersebut, 17 di antaranya dinyatakan sudah clean
          and clear. “Namun saat kami melakukan pengecekan kemarin, jelas kami
          menemukan adanya pertidaksesuaian antara dokumen clean and clear DLH
          kabupaten Bogor dengan fakta di lapangan” tutur Teguh. Berdasarkan
          temuan di lapangan tersebut, Teguh beranggapan DLH Kabupaten Bogor
          sudah tidak mampu menangani masalah pencemaran Sungai Cileungsi
          tersebut. “Selain temuan di lapangan, kami juga menemukan fakta bahwa
          para pelaku kejahatan lingkungan tahun sebelumnya yang diajukan ke
          proses hukum hanya dijerat dengan Perda, tidak dengan Undang-Undang No
          32 tahun 2009 tentang Perlindungan dan Pengelolaan Lingkungan Hidup,”
          tegas Teguh. Kejahatan lingkungan berat seharusnya dijerat dengan
          pasal 1 angka 14 Undang-Undang No. 32 tahun 2009 tentang Perlindungan
          dan Pengelolaan Lingkungan Hidup dengan ancaman maksimal penjara tiga
          tahun dan denda Rp3 miliar. Selain perusahaan pencemar lingkungan yang
          akan ditindak, pengawas lingkungan hidup yang lalai melaksanakan tugas
          juga bisa dijerat pasal Pidana dalam Undang-undang yang sama. Menurut
          Teguh, maladminitrasi dalam pengawasan lingkungan implikasinya pidana,
          bukan hanya tindakan korektif. Sebab, dalam undang-undang dijelaskan
          kelalaian lembaga pengawas lingkungan hidup juga merupakan tindak
          pidana. Namun, nyatanya dalam kasus ini, pelaku kejahatan lingkungan
          hanya dikenai Tindak Pidana Ringan (Tipiring) dengan hukuman berupa
          denda sebesar Rp15 juta. “Melihat dampak kerugian yang ditimbulkan
          akibat pencemaran Sungai Cileungsi ini, tidak hanya kematian biota
          Sungai Cileungsi, tapi juga bau menyengat yang harus ‘dinikmati’ warga
          di sepanjang jalur Sungai Cileungsi," ungkap Teguh lagi. Terlebih,
          akibat hal ini PDAM Tirta Patriot Kota Bekasi tidak dapat menjadikan
          air baku Sungai Cileungsi, yang saat melintasi Kota Bekasi menjadi
          Sungai Bekasi, sebagai bahan baku air minum lagi. Sehingga pelayanan
          publik terhadap penyediaan air bersih bagi warga Kota Bekasi
          terganggu. Berdasarkan kondisi tersebut, Ombudsman Jakarta Raya akan
          menindaklanjuti LAHP yang telah disampaiakan sebelumnya. Dalam LAHP
          tersebut dinyatakan jika DLH Kabupaten Bogor tidak mampu menjadi
          leading sector penangan pencemaran sungai Cileungsi, penanganannya
          akan dialihkan ke DLH dan jajaran Pemrov Jabar. "Kami akan melakukan
          pemanggilan kepada DLH Kabupaten Bogor, DLH Provinsi Jabar, dan Ditjen
          Gakkum KLHK untuk menindaklanjuti ini. Jika diperlukan, kami akan
          meminta kesiapan dari Gubernur Jabar terkait dengan penanganan
          pencemaran ini, karena ini sudah lintas Kabupaten/Kota,” tegas Teguh.
          Selain pemanggilan pihak-pihak tersebut, Ombudsman Jakarta Raya juga
          akan meminta keterangan dari DLH Kota Bekasi sebagai penanggung jawab
          tata kelola Sungai Cileungsi di hilir dan PDAM Tirta Patriot selaku
          pemberi layanan air bersih di Kota Bekasi. Ombudsman juga akan
          berkoordinasi dengan Mabes Polri dan Polda Jabar terkait penindakan
          para pelaku kejahatan lingkungan secara lebih tegas dengan UU
          No.39/2009.
        </Text>

        <View style={styles.authorWrapper}>
          <View style={styles.authorContainer}>
            <TouchableOpacity>
              <Image
                source={{
                  uri:
                    'http://52.200.32.180:8080/Uploads/2-product_image-1603966940378.jpg',
                }}
                style={styles.authorProfpic}
              />
            </TouchableOpacity>
            <Text style={styles.authorName}>{'Author Name'}</Text>
            <Text style={styles.authorBio}>{'Author Bio'}</Text>
          </View>
        </View>

        <View style={styles.btnWrap}>
          <Form style={styles.commentPost}>
            <Label style={styles.labelTxt}>Comment</Label>
            <Textarea
              placeholder="Write your comment here"
              onChangeText={(e) => setComment(e)}
              style={styles.input}
              value={comment}
              block
            />
          </Form>
          <View style={styles.btnWrapper}>
            <Button onPress={() => sendComment()} style={styles.btnComment}>
              <Text style={styles.btnTxtComment}>COMMENT</Text>
            </Button>
          </View>
        </View>

        <View style={styles.commentWrap}>
          <ScrollView style={styles.commentContainer}>
            {[...Array(5)].map((_item, index) => {
              return (
                <View key={index} style={styles.templateWrapper}>
                  <Comment />
                </View>
              );
            })}
          </ScrollView>
          <TouchableOpacity style={styles.loadCommentWrapper}>
            <Text style={styles.labelTxt}>Load more comments...</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    alignItems: 'center',
  },
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
    borderColor: '#084F6C',
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
  authorWrapper: {
    width: '100%',
    marginBottom: 50,
    backgroundColor: '#084F6C',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  authorContainer: {
    width: '80%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  authorProfpic: {
    height: 70,
    width: 70,
    borderRadius: 70,
  },
  authorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  authorBio: {
    fontSize: 14,
    color: 'white',
  },
  btnWrap: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  commentWrap: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 50,
  },
  commentPost: {
    width: '90%',
    height: 100,
    marginTop: 5,
    marginBottom: 5,
  },
  labelTxt: {
    fontSize: 14,
    color: '#1F271B',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#084F6C',
    marginTop: 5,
    marginBottom: 5,
  },
  btnWrapper: {
    width: '90%',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },
  btnComment: {
    borderRadius: 50,
    alignItems: 'center',
    padding: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#145C9E',
  },
  btnTxtComment: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  templateWrapper: {
    marginTop: 5,
    marginBottom: 5,
    width: '100%',
    alignItems: 'center',
  },
  commentContainer: {
    width: '90%',
    height: 'auto',
    marginBottom: 30,
  },
  loadCommentWrapper: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
