import { useRef,useEffect } from 'react';
import { Image, StyleSheet, Text, View, Pressable, Animated   } from 'react-native';



const Cardd = ({usuario, cambiarAct, getUsr, dark}) => {
  const progress = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.spring(progress,{toValue:1, useNativeDriver: true, duration: 1000,}).start();
    Animated.spring(scale,{toValue:1, useNativeDriver: true, duration: 1000,}).start();
  }, [])

  const {id, first, last, active, gender } = usuario

  const cambiaractivo = (id) => {
    cambiarAct(id)
    console.log("Activo cambiado en onlonppress")
}
  return (
    
    <Animated.View style={dark? [styles.container, {opacity: progress, transform:[{scale}]}] : [styles.containerDia, {opacity: progress, transform:[{scale}]}]}>
        <Pressable onLongPress={() => {
          cambiaractivo(id);
          }}>
            <Image 
              source= {{uri: usuario.photo}} 
              style={active? styles.thumbnail : styles.thumbnailDes}
              />
        </Pressable> 
      <View style={styles.nombreCard}>
        {   (active)?
            <>
                <Text style={styles.textNombre}>{first}</Text>
                <Text style={styles.textNombre}>{last}</Text>
            </>
            :
            <Text style={styles.textNombre}>{
                (gender === 'male')?
                'Suspendido'
                :
                'Suspendida'
                }</Text>
        } 
      </View>
        
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#113D8E',
    alignItems: 'center',
    justifyContent: 'center',
    height:250,
    width:250,
    margin:10,
    borderRadius:20,
    borderWidth:2,
    borderColor:"white",

    shadowColor: "#fff",
    shadowOffset: {
	  width: 0,
	  height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  containerDia: {
    flex: 1,
    backgroundColor: '#11352A',
    alignItems: 'center',
    justifyContent: 'center',
    height:250,
    width:250,
    margin:10,
    borderRadius:20,
    borderWidth:2,
    borderColor:"white",

    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 6,
    },
    shadowOpacity: 0.58,
    shadowRadius: 7.49,

elevation: 7,
  },
  thumbnail: {
    width: 150,
    height: 150,
    borderRadius:30
  },
  thumbnailDes:{
    width: 150,
    height: 150,
    borderRadius:30,
    opacity:0.5
  },
  nombreCard:{
    marginTop:14,
    paddingTop:6,
    borderTopWidth:2,
    borderColor:"white",
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textNombre:{
    color:"white",
    fontSize: 20,
  },
});
export default Cardd