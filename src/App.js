//import React from 'react';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/customer'

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '홍길동',
  'birth': '991231',
  'gender': '남',
  'job': '학생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '가나다',
    'birth': '991131',
    'gender': '남',
    'job': '학생'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '홍길동2',
    'birth': '991222',
    'gender': '남',
    'job': '학생'
  }
      
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birth={c.birth}
                gender={c.gender}
                job={c.job}
              />
            )
          })
        }
      </div>
    );
  }
}

export default App;
