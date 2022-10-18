import './homeBody.css'
import { useState, useEffect } from 'react'

const HomeBody = () => {
  const [userData, setUserData] = useState([])

  const data = [
    {
      siteName: 'Facebook',
      url: 'www.facebook.com',
      sector: 'Social Media',
      userName: 'ssmraok',
      sitePassword: 'abcdXYZ',
      notes: '',
    },
    {
      siteName: 'YouTube',
      url: 'www.youtube.com',
      sector: 'Social Media',
      userName: 'ssmraok',
      sitePassword: 'abcd123',
      notes: '',
    },
    {
      siteName: 'Linkdin',
      url: 'www.linkdin.com',
      sector: 'Social Media',
      userName: 'ssmraok',
      sitePassword: 'abcd123',
      notes: '',
    },
  ]

  if (localStorage.getItem('user Data') === null) {
    localStorage.setItem('user Data', JSON.stringify(data))
  }

  const previousData = JSON.parse(localStorage.getItem('user Data') || '[]')

  console.log(previousData)

  return (
    <div className="homeBodyContainer">
      <div className="homeBodyHeader">
        <div className="headerBodyTitle">Sites</div>
        <div className="headerBodyOptions">
          <div className="headerSearch">
            <input type="text" className="searchbar" placeholder="Search" />
            <img
              src={require('../../assets/icons/search.png')}
              alt="search"
              className="searchbarIcn"
            />
          </div>
          <div className="headerAddButton">
            <img src={require('../../assets/icons/add_btn.png')} alt="add" />
          </div>
        </div>
      </div>
      <div className="homeBodyCount">
        <div className="socialMedia">Social Media</div>
        <div className="socialMediaCount">07</div>
        <div className="socialMediaDropDown">
          <img src={require('../../assets/icons/Path Copy.png')} alt="add" />
        </div>
      </div>
      <div className="homeBodyContainerBox">
        <div className="homeBodyContents">
          {JSON.stringify(previousData) === '[]' ? (
            <div className="homeBodyEmpty">
              <div>Please Click on the “+” symbol to add sites</div>
            </div>
          ) : (
            'hii'
          )}
        </div>
      </div>
    </div>
  )
}

export default HomeBody
