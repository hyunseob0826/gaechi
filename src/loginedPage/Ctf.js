import React, { useState } from 'react';
import Menu from './menu'


const Ctf = () => {
  // 전공 검색
  const [searchKeyword, setSearchKeyword] = useState('');

  // 검색 기능
  const handleSearch = () => {
    console.log('검색어:', searchKeyword);
    // TODO: 기능 추가 예정
  };

  return (
    <div className='Container0'>
      <div id = "topcontainer">
    <div id = "title">
     <h1>개취존중</h1>
    </div>

    <div id = "menu-container">
    <Menu></Menu>
    </div>
   </div>

      <div className='SearchContainer'>
        <form className="Form">
          <input
            className="Input"
            type="text"
            placeholder="전공 검색"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
          <button className="Button" type="button" onClick={handleSearch}>
            검색
          </button>
        </form>
      </div>
      
      <div className="CtfContainer">
        <div className="ContentCard">
          <div className='title'>자격증: ~~자격증</div>
          <div className='content'>
            자격증에 대한 내용<br/>
            자격증에 대한 내용<br/>
            자격증에 대한 내용<br/>
            자격증에 대한 내용<br/>
          </div>
        </div>
        <div className="ContentCard"></div>
        <div className="ContentCard"></div>
        <div className="ContentCard"></div>
        <div className="ContentCard"></div>
        <div className="ContentCard"></div>
        <div className="ContentCard"></div>
        <div className="ContentCard"></div>
      </div>
    </div>
  );
};


export default Ctf;
