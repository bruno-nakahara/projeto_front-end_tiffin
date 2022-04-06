import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Math.round(Dimensions.get('window').width);

const style = StyleSheet.create({
  container: {
    width: deviceWidth,
    height: 90,
    backgroundColor: '#202024',
    justifyContent: 'center',
    paddingBottom: 20,
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 10,
  },
  filterStyle: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    borderRadius: 12,
  },
});

export default style;
