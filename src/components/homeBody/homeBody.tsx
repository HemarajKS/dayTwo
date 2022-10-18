import './homeBody.css'

const HomeBody = () => {
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
          <div className="homeBodyEmpty">
            <div>Please Click on the “+” symbol to add sites</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBody
