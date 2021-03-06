import {StyleSheet} from "react-native"
export default theme = StyleSheet.create({
	body:{
		flex:1,
		alignItems:"center",
		flexDirection:"column",
		backgroundColor:"#2675B8",
		justifyContent:"center",
	},
	button:{
		paddingTop:20,
		paddingLeft:50,
		paddingRight:50,
		paddingBottom:20,
		marginTop:10,
		width:200,
		backgroundColor:"#FFF",
		flexDirection:"column",
		justifyContent:"center",
		alignItems:"center",
	},
	buttonText:{
		fontSize:18,
		fontWeight:"bold",
		textAlign:"center",
	},
	LoginText:{
		justifyContent:"flex-start",
		color:'#c3c3c3',
		fontWeight:'bold',
	},
	Login:{
		paddingTop:20,
		paddingLeft:50,
		paddingRight:50,
		paddingBottom:20,
		marginTop:10,
		width:200,
		backgroundColor:"#0379D9",
		flexDirection:"column",
		justifyContent:"center",
		alignItems:"center",
	},
	container: {
    flex: 1,
    padding: 12,
    flexDirection: 'column',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
	newsletterRow: {
		paddingTop:18,
		paddingBottom:18,
	},
});
