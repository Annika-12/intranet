import React, {useState} from 'react';
import { View, ScrollView, Section ,Text, Button, StyleSheet, FlatList, Image } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

const Projects = ({navigation}) => {
  const [items, setItems] = React.useState([
    { name: 'TURQUOISE', code: '#1abc9c', date: '1.Januar 2021', client:'Heller'},
    { name: 'EMERALD', code: '#2ecc71', date: '1.Januar 2021' ,client:'Heller'},
    { name: 'PETER RIVER', code: '#3498db', date: '1.Januar 2021' ,client:'Heller'},
    { name: 'AMETHYST', code: '#9b59b6', date: '1.Januar 2021' ,client:'Heller'},
    { name: 'WET ASPHALT', code: '#34495e', date: '1.Januar 2021' ,client:'Heller'},
    { name: 'GREEN SEA', code: '#16a085' , date: '1.Januar 2021',client:'Heller'},
    { name: 'NEPHRITIS', code: '#27ae60' , date: '1.Januar 2021',client:'Heller'},
    { name: 'BELIZE HOLE', code: '#2980b9', date: '1.Januar 2021',client:'Heller' },
    { name: 'WISTERIA', code: '#8e44ad' , date: '1.Januar 2021',client:'Heller'},
    { name: 'MIDNIGHT BLUE', code: '#2c3e50', date: '1.Januar 2021' ,client:'Heller'},
    { name: 'SUN FLOWER', code: '#f1c40f' , date: '1.Januar 2021',client:'Heller'},
  ]);
    return (
        <FlatGrid
          itemDimension={130}
          data={items}
          style={styles.gridView}
          // staticDimension={300}
          // fixed
          spacing={10}
          renderItem={({ item }) => (
            <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
              <Text style={styles.itemImg}>Bild</Text>
              <View style={styles.itemContent} >
                <Text style={styles.itemDate}>{item.date}</Text>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemClient}>{item.client}</Text>
                <Text style={styles.itemCode}>{item.code}</Text>
              </View>
            </View>
          )}
        />
    );
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    borderRadius: 5,
    height: 180,
  },
  itemContent: {
    padding: 10,
  },
  itemDate: {
    fontSize: 12,
  },
  itemName: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  itemImg: {
    backgroundColor: 'grey',
    fontSize: 25,
    height: '30%',
    textAlign: 'center',
  },

});

export default Projects;