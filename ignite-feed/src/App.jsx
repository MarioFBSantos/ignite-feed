import { useState } from 'react'
import { Header } from './components/Header/Header';
import './global.css';
import styles from './App.module.css';
import {Post} from './components/Post/Post';
export function App() {

  return (
    <div className="App">
      <Header/>
      <div className={styles.wrapper}>
        <aside>
          sidebar
        </aside>
        <main>
          <Post
             author="Mario"
             content="idk"
          />
        </main>
      </div>
    </div>
  )
}

