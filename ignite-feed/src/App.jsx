import { useState } from 'react'
import { Header } from './components/Header/Header';
import './global.css';
import styles from './App.module.css';
import {Post} from './components/Post/Post';
import { Sidebar } from './components/SideBar/Sidebar';
export function App() {

  return (
    <div className="App">
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
      
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

