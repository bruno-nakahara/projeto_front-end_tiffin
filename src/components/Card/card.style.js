import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Math.round(Dimensions.get('window').width);
const radius = 20;

const styles = StyleSheet.create({
  container: {
    width: deviceWidth - 25,
    backgroundColor: '#202024',
    borderRadius: 20,
    marginTop: 25,
    marginBottom: 25,
    borderColor: '#F2F2F2',
    borderWidth: 2,

    shadowColor: '#FFF',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.75,
    shadowRadius: 8,
    elevation: 4,
  },
  imageStyle: {
    height: 100,
    width: deviceWidth - 25,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    opacity: 0.85,
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: '700',
  },
  categoryStyle: {
    fontSize: 12,
    fontWeight: '200',
  },
  descriptionStyle: {
    fontSize: 16,
    fontWeight: '400',
  },
  infoStyle: {
    marginLeft: 10,
    marginVertical: 5,
  },
  iconLabelStyle: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  infoContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 10,
  },
  buttonsContainerStyle: {
    flexDirection: 'row',
  },
});

export default styles;
