import React from "react";
import { Animated, Easing, SectionList, StatusBar, StyleSheet, Text, TouchableOpacity, View,ScrollView } from "react-native";

const Eases = () => {
  let opacity = new Animated.Value(0);

  const animate = easing => {
    opacity.setValue(0);
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1200,
      easing
    }).start();
  };

  const size = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 80]
  });

  const animatedStyles = [
    styles.box,
    {
      opacity,
      width: size,
      height: size
    }
  ];

  return (
    
     <View style={styles.container}>
      <StatusBar hidden={true} />
      <Text style={styles.title}>
        Selecciona la animacion que quieres ver
      </Text>
      <View style={styles.boxContainer}>
        <Animated.View style={animatedStyles} />
      </View>
      
      <SectionList
        style={styles.list}
        sections={SECTIONS}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => animate(item.easing)}
            style={styles.listRow}
          >
            <Text style={styles.listRow} >{item.title}</Text>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.listHeader}>{title}</Text>
        )}
      />
    </View> 
  );
};

const SECTIONS = [
  {
    title: "Animaciones predefinidas",
    data: [
      { title: "Bounce", easing: Easing.bounce },
      { title: "Ease", easing: Easing.ease },
      { title: "Elastic", easing: Easing.elastic(4) }
    ]
  },
  {
    title: "Funciones estandar",
    data: [
      { title: "Linear", easing: Easing.linear },
      { title: "Quad", easing: Easing.quad },
      { title: "Cubic", easing: Easing.cubic }
    ]
  },
  {
    title: "Funciones adicionales",
    data: [
      {
        title: "Bezier",
        easing: Easing.bezier(0, 2, 1, -1)
      },
      { title: "Circle", easing: Easing.circle },
      { title: "Sin", easing: Easing.sin },
      { title: "Exp", easing: Easing.exp }
    ]
  },
  {
    title: "Combinaciones",
    data: [
      {
        title: "In + Bounce",
        easing: Easing.in(Easing.bounce)
      },
      {
        title: "Out + Exp",
        easing: Easing.out(Easing.exp)
      },
      {
        title: "InOut + Elastic",
        easing: Easing.inOut(Easing.elastic(1))
      }
    ]
  }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#34054F",
    width:"100%"
  },
  title: {
    marginTop: 10,
    textAlign: "center",
    color: "white"
  },
  boxContainer: {
    height: 160,
    alignItems: "center"
  },
  box: {
    marginTop: 32,
    borderRadius: 4,
    backgroundColor: "#7800FF"
  },
  list: {
    backgroundColor: "#180258",
    color:"#fff"
  },
  listHeader: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#710687',
    color: "#fff",
    fontSize: 12,
    textTransform: "uppercase"
  },
  listRow: {
    padding: 8,
    color:"#fff"
  }
});

export default Eases;