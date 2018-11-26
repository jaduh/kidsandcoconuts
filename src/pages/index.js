import React from 'react'
import { Link } from 'gatsby'


import Layout from '../components/layout'
import Image from '../components/image'
import Menu from '../components/menu/Menu'
import "../Css/style.css"

const IndexPage = () => (
  <Layout>
  
<Menu />
      <div className='homepage-container'>
  <h1 className='titel-quote'>Wat je vooral moet weten is dat alles mogelijk is</h1>
  {/* <p className="onder-quote">Toegegeven. De wereld veroveren is met kinderen misschien iets ingewikkelder dan zonder. Maar om nu te zeggen dat het niet lukt, niet uitkomt of onogelijk is. Dat kan er bij ons niet in.</p>  */}


    <div className='grid-container'>


    <Link to="/page-2/"><div className='grid grid-links'></div></Link>
      
      <div className='grid grid-mid'></div>
      <div className='grid grid-rechts'></div>
    </div>
   </div>

<div className="uber-container">
<div className="container">
  <div className="een vlak">
  {/* <p>Toegegeven. De wereld veroveren is met kinderen misschien iets ingewikkelder dan zonder. Maar om nu te zeggen dat het niet lukt, uitkomt of onogelijk is. Dat kan er bij ons niet in.</p> */}
  </div>
  <div className="twee vlak"> </div>
  <div className="drie vlak"></div>
  <div className="vier vlak"> </div>
  <div className="vijf vlak"></div>
  <div className="zes vlak"> </div>
  <div className="zeven vlak"> </div>



</div>
  
</div>
  











    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
