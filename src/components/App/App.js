import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>My first React app</h1>
        <h2 className={styles.subtitle}>A simple to-do app,with lists, columns and cards</h2>
        <List title={['Things to do', <sup key='1'>soon!</sup>]}
          /* <p> I'm planning on doing these things sooner than later!</p> */
          titleText={"/src/images/space.png"}
          titleColumn1={'Animals'}
          titleColumn2={'Planets'}
          titleColumn3={'Minerals'} />
      </main>
    )
  }
}

export default App;
