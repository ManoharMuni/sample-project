import {Component} from 'react'
import 'react-data-grid/lib/styles.css';

import DataGrid from 'react-data-grid';
import './index.css'

const initialColumns = [
  { key: 'id', name: 'ID', shouldFilterVisible: true},
  { key: 'name', name: 'Name' ,shouldFilterVisible: true},
  { key: 'age', name: 'Age',shouldFilterVisible: true},
  { key: 'education', name: 'Education',shouldFilterVisible: true},
  { key: 'place', name: 'Place',shouldFilterVisible: true}
];

const initialRows = [
  { id: 0, name: 'Manohar', age: 23, education: "Degree", place: 'vizianagaram', shouldFilterVisible: true},
  { id: 1, name : 'Durga', age:24, education: "Degree", place: 'vizianagaram', shouldFilterVisible: true},
  {id: 2, name: 'Naveen', age:21, education: "B.Tech", place: "vizianagaram", shouldFilterVisible: true}
];

class Table extends Component {
    state = {columns: initialColumns, rows : initialRows}
    
    render() {
        const {columns, rows} = this.state
        
        return (
        <div style = {{height:500, width:"80%"}} className = "app-container">
            <DataGrid columns={columns} rows={rows} />;
        </div>
        )
    }
  
}

export default Table