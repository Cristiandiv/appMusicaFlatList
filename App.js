import { Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';


export default function App(){
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        As Mais Tocadas em 2021,22 e 23.
      </Text>
    <FlatList
    data={arrayDados}
    renderItem={({item})=>
    <SafeAreaView>
    <Text style={styles.textoMusica}> {item.musicas} </Text>
    </SafeAreaView>
    }
    />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00FA9A',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#FFFF00',
    padding: 8,
    borderRadius: 15,
  },
  textoMusica:{
    fontSize: 20,
    margin:10,
    textAlign:'center',
    backgroundColor:'#98FB98',
    borderRadius:10,
    padding:10,
  },
});

const arrayDados = [
  {musicas:'Calm Down - Selena Gomez, Rema'},
  {musicas:'As It Was - Harry Styles'},
  {musicas:'My Universe - Coldplay, BTS'},
  {musicas:'Blinding Lights - The Weeknd'},
  {musicas:'Watermelon Sugar - Harry Styles'},
  {musicas:'Save Your Tears - The Weeknd'},
  {musicas:'Stay - Kid Laroi, Justin Bieber'},
  {musicas:'I Like You - Post Malone, Doja Cat'},
  {musicas:'First Class - Jack Harlow'},
  {musicas:'Say So - Doja Cat'},
  {musicas:'Levitating - Dua Lipa'},
  {musicas:'Beggin - Maneskin'},
  {musicas:'METALI! - Baby Metal, Tom Morello'},
  {musicas:'Bones - Imagine Dragons'}
];