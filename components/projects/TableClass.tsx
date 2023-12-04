import React, { Component } from 'react';

interface TableClassProps {
  data: {
    column1: string[];
    column2: string[];
    column3: string[];
  };
}

class TableClass extends Component<TableClassProps> {
  render() {
    const { data } = this.props;

    return (
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
        {Object.keys(data).map((column, index) => (
          <div key={index} style={styles.column}>
            <h2>{`Columna ${index + 1}`}</h2>
            <ul style={styles.list}>
              {data[column].map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

const styles = {
  column: {
    border: '1px solid #ddd',
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
};

export default TableClass;