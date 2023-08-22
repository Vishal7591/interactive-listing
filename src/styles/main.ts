import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#3060B0"
    },
    rowSection:{
      flex:1,
      flexDirection:"row"
    },
    votesSection: {
      flex: 1,
      alignItems: "flex-end",
      bottom: 20,
      right: 8
    },
    topMenu: {
      alignItems: "center",
      justifyContent: "center",
      height: 120,
      backgroundColor:"#c0c0c0",
      flexDirection: "column"
    },
    descriptionPanel: {
      flex: 5,
      paddingLeft:20,
      flexDirection: "column"
    },
    imageSection: {
      flex: 2,
      alignItems: "center",
      overflow:"hidden",
      justifyContent: "center"
    },
    imagePoster: {
      borderRadius: 20,
      height: "100%",
      width: "100%",
      resizeMode: "contain"
    },
    loading: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"#fff",
        opacity:0.8,
        color: "#000",
      },
      loadingText: {
        textAlign: "center",
        color: "#dcdcdc",
        fontSize: 15
      },
      screenLoadingText: {
        textAlign: "center",
        color: "#000",
        fontSize: 17
      },
      regularText: {
        color: "#fff",
        fontSize: 15,
      },
      noProductsFoundSection: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: "20%",
        flexDirection: "column"
      },
      boldText: {
        color: "#3060B0",
        fontSize: 15,
        fontWeight:"bold",
      },
      secondaryText:{
        color:"#00ffbf"
      },
      ratingsText:{
        color:"#ffd700"
      },
      productTile: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#000",
        padding: 5,
        marginVertical: 3,
        marginHorizontal: 5,
        height: 120,
        borderRadius: 10
      },
      ratingsSection:{
        flex: 1,
        justifyContent: "center",
        padding: 10,
        flexDirection: "column"
      },
      bannerSection: {
        flex: 2,
        justifyContent: "center",
        flexDirection: "row"
      },
      releasedSection: {
        flex: 1,
        justifyContent: "center",
        bottom: 20,
        alignItems: "center"
      },
      overviewSection: {
        flex: 1,
        marginTop: "10%",
        justifyContent: "center",
        paddingHorizontal: 10,
        flexDirection: "column"
      },
      priceSection: {
        flex: 1,
        justifyContent: "center",
        padding: 10,
        flexDirection: "column"
      },
      searchInput:{
        borderColor:"#4a4a4a",
        width:"90%",
        alignSelf:"center",
        borderWidth:1,
        borderRadius:5,
        height:45,
        marginTop:10,
        color:"#000",
        fontSize:17,
        paddingHorizontal:5
      }
  });