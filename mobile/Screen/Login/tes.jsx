// import {
//   Collapse,
//   CollapseHeader,
//   CollapseBody,
//   AccordionList,
// } from 'accordion-collapse-react-native';
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
const tes = () => {
  return (
    <View style={styles.container}>
      <Collapse>
        <CollapseHeader>
          <View style={{borderWidth: 1, borderColor: 'grey'}}>
            <Text style={styles.textHeader}>Status Pengajuan KPR</Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <View
            style={{
              flexDirection: 'row',
              borderLeftWidth: 1,
              borderRightWidth: 1,
              borderBottomWidth: 1,
              borderColor: 'grey',
            }}>
            <Image
              source={require('../../Image/iconCard.png')}
              style={styles.imgCard}
            />
            <View>
              <Text style={styles.textBody}>Kamu belum mengajukan KPR.</Text>
              <Text style={styles.textBody}>
                Yuk, Wujudkan rumah idamanmu bersama Bank Muamalat.
              </Text>
              <View style={{alignItems: 'flex-end', paddingVertical: 10}}>
                <TouchableOpacity
                  style={{
                    borderRadius: 9,
                    paddingVertical: 10,
                    alignItems: 'flex-start',
                    backgroundColor: '#500878',
                    justifyContent: 'flex-end',
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      // alignItems: 'flex-end',
                      color: 'white',
                    }}>
                    Ajukan Sekarang
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </CollapseBody>
      </Collapse>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  lpIklan: {
    // position: 'absolute',
    // flex: 1,
    height: 400,
    width: null,
    // top: 91,
  },
  cardCont: {
    borderRadius: 5,
    height: 328,
    flex: 1,
    borderWidth: 1,
    // paddingBottom: 20,
  },
  cardHeaderCont: {
    height: 33,
    borderBottomWidth: 1,
  },
  textHeader: {
    fontSize: 25,
    color: '#500878',
    marginTop: 4,
    marginLeft: 11,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  textBody: {
    fontSize: 20,
    marginTop: 12,
    width: 500,
    // marginBottom: 12,
  },
  cardBody: {
    flexDirection: 'row',
    marginTop: 12,
  },
  imgCard: {
    width: 49,
    height: 49,
    marginTop: 12,
    marginLeft: 11,
    marginRight: 22,
  },
  btnCard: {
    paddingTop: 5,
    paddingLeft: 20,
    color: '#ffffff',
    borderRadius: 10,
  },
  cardkedua: {
    height: 33,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 15,
  },
  cardketiga: {
    height: 368,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 15,
  },
  imgCard3: {
    height: 300,
    width: null,
  },
});
export default tes;
