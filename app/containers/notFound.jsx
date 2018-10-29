import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../components/Header'
import BigText from '../components/BigText'
//import './app.css'

const NotFound = () => (
<div>
    <Header/>
    <BigText header='Whoa there!!' text='It seems that whatever you where searching for did not exist... unless of course you were looking for this page, in which case, congrats... you found it! :)' />
</div>
);

export default NotFound;