import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import store from './Store/ReduxStore.jsx';
import { Provider } from 'react-redux';
import { PageLayout } from './Components/PageLayout.jsx';
import { BrowserRouter } from 'react-router-dom';





ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={store}>
    <PageLayout>
    <App />
    </PageLayout>
    </Provider>
    </BrowserRouter>
  
)
