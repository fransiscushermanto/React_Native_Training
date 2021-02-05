import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {useAppRating} from './useAppRating';
import {BottomSheet} from 'react-native-elements';
import StarRating from './StarRating';
import {IconClose, SwitzerlandFlag} from './Icons';
import MoliReactionComponent from './MoliReactionComponent';

interface IUserRateDialogProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

function UserRate({show, setShow}: IUserRateDialogProps) {
  const satisfactionJSON = {
    good: [
      {id: 1, label: 'Money arrived faster', active: false},
      {id: 2, label: 'Competitive rate', active: false},
      {id: 3, label: 'Easy to use', active: false},
      {id: 4, label: 'Clear informations', active: false},
      {id: 5, label: 'Excellen customer service', active: false},
    ],
    bad: [
      {id: 1, label: 'Kamu Jelek', active: false},
      {id: 2, label: 'Kamu Bau', active: false},
      {id: 3, label: 'Kamu Garing', active: false},
      {id: 4, label: 'Kamu Gk Keren', active: false},
      {id: 5, label: 'Kamu Gk Gaul', active: false},
    ],
    neutral: [
      {id: 1, label: 'Kamu Biasa aja', active: false},
      {id: 2, label: 'Kamu Gk Wangi Gk Bau', active: false},
      {id: 3, label: 'Kamu Lembek', active: false},
      {id: 4, label: 'Kamu 1/2 Keren', active: false},
      {id: 5, label: 'Kamu 1/2 Gaul', active: false},
    ],
  };

  const {
    rating,
    onRatingClick,
    satisfactionItems,
    onSelectSatisfaction,
  } = useAppRating(5, satisfactionJSON);

  return (
    <>
      <BottomSheet modalProps={{}} isVisible={show}>
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
              <MoliReactionComponent rating={rating} />
            </View>
            <View style={styles.topLevelStarRatingWrapper}>
              <View style={styles.starRatingWrapper}>
                <StarRating
                  onStarClick={onRatingClick}
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{marginBottom: 30}}
                  value={rating}
                  maxValue={5}
                />
              </View>
            </View>
          </View>
          <View style={styles.userSatisfactionWrapper}>
            <View>
              <Text style={styles.userSatisfactionTitle}>
                Tell us what makes you satisfied
              </Text>
            </View>
            <View style={styles.satisfactionItemWrapper}>
              {satisfactionItems &&
                satisfactionItems.map((satisfactionItem) => {
                  function satisfactionBorderStyle(active: boolean = false) {
                    return {
                      ...styles.satisfactionItem,
                      borderColor: active ? '#30A6FF' : '#C9D4DB',
                    };
                  }

                  function satisfactionFontStyle(active: boolean = false) {
                    return {
                      fontFamily: active ? 'Exo2-SemiBold' : 'Exo2-Regular',
                    };
                  }
                  return (
                    <TouchableOpacity
                      onPress={() => onSelectSatisfaction(satisfactionItem.id)}
                      style={satisfactionBorderStyle(satisfactionItem.active)}
                      key={satisfactionItem.id}>
                      <Text style={satisfactionFontStyle()}>
                        {satisfactionItem.label}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
            </View>
          </View>

          <View style={styles.submitButtonWrapper}>
            <TouchableOpacity
              onPress={() =>
                ToastAndroid.show(
                  `${
                    satisfactionItems.filter(
                      (satisfactionItem) => satisfactionItem.active === true,
                    ).length > 0
                      ? satisfactionItems
                          .filter(
                            (satisfactionItem) =>
                              satisfactionItem.active === true,
                          )
                          .map((satisfactionItem) => satisfactionItem.id)

                          .join(', ')
                      : 'Nothing Selected'
                  }`,
                  ToastAndroid.SHORT,
                )
              }
              style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Submit</Text>
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
    marginBottom: 31,
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
    paddingHorizontal: 13,
  },
  transactionIconFlagWrapper: {
    maxWidth: 32,
    width: 32,
    maxHeight: 32,
    height: 32,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    marginRight: 15,
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
  satisfactionItem: {
    borderStyle: 'solid',
    marginRight: 18,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 3,
    marginBottom: 12,
    borderRadius: 13.5,
  },
  satisfactionItemWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  submitButton: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#30A6FF',
    height: 50,
    borderRadius: 6,
  },
  submitButtonText: {
    fontFamily: 'Exo2-Bold',
    color: '#FFFFFF',
    fontSize: 17,
  },
  submitButtonWrapper: {width: '100%'},
  topLevelStarRatingWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UserRate;
