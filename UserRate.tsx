import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {BottomSheet} from 'react-native-elements';
import {IconClose, SwitzerlandFlag, GoodReview, StarOff, StarOn} from './Icons';

interface IUserRateDialogProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

function UserRate({show, setShow}: IUserRateDialogProps) {
  const [rating, setRating] = useState<Array<any>>([
    {
      id: 1,
      active: false,
    },
    {
      id: 2,
      active: false,
    },
    {
      id: 3,
      active: false,
    },
    {
      id: 4,
      active: false,
    },
    {
      id: 5,
      active: false,
    },
  ]);

  const [satisfactionItems, setSatisfactionItems] = useState<Array<any>>([
    {id: 1, label: 'Money arrived faster', active: false},
    {id: 2, label: 'Competitive rate', active: false},
    {id: 3, label: 'Easy to use', active: false},
    {id: 4, label: 'Clear informations', active: false},
    {id: 5, label: 'Excellen customer service', active: false},
  ]);

  const onRatingClick = (id) => {
    const temp = [...rating];
    setRating(
      temp.map((item) => {
        return {
          id: item.id,
          active: id <= 1 && item.active ? false : item.id <= id ? true : false,
        };
      }),
    );
  };

  const onSelectSatisfaction = (id) => {
    setSatisfactionItems((prev) =>
      prev.map((item) => {
        return {
          id: item.id,
          label: item.label,
          active: item.id === id ? !item.active : item.active,
        };
      }),
    );
  };

  return (
    <>
      <BottomSheet isVisible={show}>
        <View style={styles.container}>
          <View style={styles.closeWrapper}>
            <TouchableOpacity onPress={() => setShow(false)}>
              <IconClose />
            </TouchableOpacity>
          </View>
          <View style={styles.textStatusWrapper}>
            <Text style={styles.textStatus}>Transaction Success</Text>
          </View>
          <View style={styles.transactionInfoWrapper}>
            <View style={styles.transactionIconFlagWrapper}>
              <SwitzerlandFlag />
            </View>
            <View style={styles.transactionDetailInfoWrapper}>
              <Text style={styles.fontRegular}>Sheilla Anastarum</Text>
              <Text style={styles.transactionValue}>5,000 EUR</Text>
            </View>
            <View style={styles.transactionDateWrapper}>
              <Text style={styles.fontRegular}>23 June</Text>
            </View>
          </View>
          <View style={styles.transactionReviewBodyWrapper}>
            <Text style={styles.transactionBodyTitle}>
              How's your transaction experience?
            </Text>
            <View style={styles.ratingMascotIcon}>
              <GoodReview />
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={styles.starRatingWrapper}>
                {rating.map((item) => {
                  const itemStyle = {marginRight: item.id < 5 ? 18 : 0};
                  return (
                    <TouchableOpacity
                      onPress={() => onRatingClick(item.id)}
                      style={itemStyle}
                      key={item.id}>
                      {item.active ? <StarOn /> : <StarOff />}
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          </View>
          <View style={styles.userSatisfactionWrapper}>
            <View>
              <Text style={styles.userSatisfactionTitle}>
                Tell us what makes you satisfied
              </Text>
            </View>
            <View
              style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
              {satisfactionItems.map((satisfactionItem) => {
                return (
                  <TouchableOpacity
                    onPress={() => onSelectSatisfaction(satisfactionItem.id)}
                    style={{
                      border: 1,
                      borderStyle: 'solid',
                      borderColor: satisfactionItem.active
                        ? '#30A6FF'
                        : '#C9D4DB',
                      marginRight: 18,
                      borderWidth: 1,
                      paddingHorizontal: 12,
                      paddingVertical: 3,
                      marginBottom: 12,
                      borderRadius: 13.5,
                    }}
                    key={satisfactionItem.id}>
                    <Text
                      style={{
                        fontFamily: satisfactionItem.active
                          ? 'Exo2-SemiBold'
                          : 'Exo2-Regular',
                      }}>
                      {satisfactionItem.label}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
          <View style={{width: '100%'}}>
            <TouchableOpacity
              onPress={() =>
                ToastAndroid.show(
                  `${
                    satisfactionItems.filter((item) => item.active === true)
                      .length > 0
                      ? satisfactionItems
                          .filter((item) => item.active === true)
                          .map((item) => item.label)
                          .join(', ')
                      : 'Selected nothing'
                  }`,
                  ToastAndroid.SHORT,
                )
              }
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#30A6FF',
                height: 50,
                borderRadius: 6,
              }}>
              <Text
                style={{
                  fontFamily: 'Exo2-Bold',
                  color: '#FFFFFF',
                  fontSize: 17,
                }}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
  },
  closeButton: {
    width: 20,
    height: 20,
  },
  closeWrapper: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 17,
    paddingHorizontal: 17,
  },
  textStatusWrapper: {
    width: '100%',
    marginBottom: 12,
  },
  textStatus: {
    color: '#0AE4AF',
    fontFamily: 'Exo2-SemiBold',
  },
  transactionInfoWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 13,
    marginBottom: 28,
  },
  transactionIconFlagWrapper: {
    maxWidth: 32,
    width: 32,
    maxHeight: 32,
    height: 32,
    display: 'flex',
    justifyContent: 'center',
    marginVertical: 5,
    marginRight: 15,
  },
  transactionDetailInfoWrapper: {
    display: 'flex',
    flex: 1,
  },
  transactionValue: {
    fontFamily: 'Exo2-Thin',
    color: '#21252e',
    fontSize: 13,
  },
  transactionDateWrapper: {
    display: 'flex',
  },
  fontRegular: {
    fontFamily: 'Exo2-Regular',
    color: '#2E4865',
    fontSize: 13,
  },
  transactionReviewBodyWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 31,
  },
  transactionBodyTitle: {
    fontFamily: 'Exo2-SemiBold',
    letterSpacing: -0.5,
    fontSize: 15,
    marginBottom: 24,
  },
  starRatingWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  userSatisfactionWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: 38,
  },
  userSatisfactionTitle: {
    fontFamily: 'Exo2-SemiBold',
    marginBottom: 16,
  },
  ratingMascotIcon: {
    marginBottom: 19,
  },
});

export default UserRate;
