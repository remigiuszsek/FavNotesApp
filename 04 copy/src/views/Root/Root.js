import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./index.css";
import AppContext from "../../context";
import TwittersView from '../TwittersView/TwittersView'
import NotesView from '../NotesView/NotesView'
import ArticlesView from '../ArticlesView/ArticlesView'
import Header from '../../components/Header/Header'
import Modal from '../../components/Modal/Modal'



class Root extends React.Component {
  state = {
    twitter: [
      {
        title: 'Dan Abramov', 
        description: 'All users on MySpace will know that there are milions of people out there. Every day besides so many people joining.',
        link: 'https://twitter.com/dan_abramov',
        image: 'https://pbs.twimg.com/profile_images/1545194945161707520/rqkwPViA_400x400.jpg'
      },
      {
        title: 'Ryan Florence', 
        description: "It is a good idea to think of your PC as an office. It stores files, programs, pictures. This can be compared to an actual office's files, machines and decorations.",
        link: 'https://twitter.com/ryanflorence',
        image: 'https://pbs.twimg.com/profile_images/1344410501309030403/L2rNpO6h_400x400.jpg'
      },
      {
        title: 'Kent C. Dodds', 
        description: "I hate peeping Toms. For one thing they usually step all over the hedges and plants on the side of someone's house killing then and setting back the vegetation's gardener countless time and effort.",
        link: 'https://twitter.com/kentcdodds',
        image: 'https://pbs.twimg.com/profile_images/1529905780542959616/Ibwrp7VJ_400x400.jpg'
      },
      {
        title: 'Michael Jackson', 
        description: "Can you imagine what we will be downloading in another twenty years?",
        link: 'https://twitter.com/mjackson',
        image: 'https://pbs.twimg.com/profile_images/1529950053317505024/D2kf-q6Q_400x400.jpg'
      },
    ],
    article: [],
    note: [],
    isModalOpen: true,
  };

  addItem = (e, newItem) => {
    e.preventDefault();

    this.setState(prevState => ({
      [newItem.type]: [...prevState[newItem.type], newItem]
    }))
    
    this.closeModal()
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    })
  }

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    })
  }

  render() {

    const { isModalOpen } = this.state
    const contextElements = {
      ...this.state,
      addItem: this.addItem,
    }

    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <Header openModalFn={this.openModal} />
          <Routes>
            <Route path="/" element={<TwittersView />} />
            <Route path="articles" element={<ArticlesView />}/>
            <Route path="notes" element={<NotesView />}/>
            <Route path="notes/:id" element={<NotesView />}/>
          </Routes>
          { isModalOpen ? <Modal closeModalFn={this.closeModal} /> : null}
        </AppContext.Provider>
      </BrowserRouter>

    );
  }
}

export default Root;
