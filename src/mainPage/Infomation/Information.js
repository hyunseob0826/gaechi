import React, { useState } from 'react';
import './styles.css';
import Menu from '../menu'
import { datalist } from '../../data';


export default function Infomation() {

  //검색 상태 관리, 두개라서 각각의 변수를 만들어줌
  const [searchKeyword1, setSearchKeyword1] = useState('');
  const [searchKeyword2, setSearchKeyword2] = useState('');

  //카테고리의 상태관리 초기값은 year1, sal, region으로 설정. select..는 카테고리를 저장하는 상태,
  //set..은 select.. 값을 변경하는 함수 
  const [selectedCategory0, setSelectedCategory0] = useState('job');
  const [selectedCategory1, setSelectedCategory1] = useState('year');
  const numberOfOptions = 15;
  const [selectedCategory2, setSelectedCategory2] = useState('sal');
  const [selectedCategory3, setSelectedCategory3] = useState('region');

  //event객체에서 value를 읽어와 set... 함수 이용해서 select.. 상태 업데이트 함
  const handleCategoryChange0=(event)=>{
    setSelectedCategory0(event.target.value);
  }
  const handleCategoryChange1=(event)=>{
    setSelectedCategory1(event.target.value);
  }
  const handleCategoryChange2=(event)=>{
    setSelectedCategory2(event.target.value);
  }
  const handleCategoryChange3=(event)=>{
    setSelectedCategory3(event.target.value);
  }

    // 검색 기능
  const handleSearch1 = () => {
    console.log('Searching for:', searchKeyword1);
    // TODO: 기능 추가 예정
  };
  const handleSearch2 = () => {
    console.log('Searching for:', searchKeyword2);
    // TODO: 기능 추가 예정
  };

  console.log(datalist);

  return (
    <div className='Container'>

  <div>
    <div id = "topcontainer">
      <div id = "title">
        <h1>개취존중</h1>
      </div>
      <div id = "menu-container">
       <Menu/>
      </div>
    </div>
    </div>

      <div className='MenuContainer'>
        <label htmlFor='categoryjob' style={{fontWeight:'bold'}}>직무</label>
        <select
          className='categorySelect'
          id='categoryjob'
          value={selectedCategory0}
          onChange={handleCategoryChange0}
        >
          <option value="job">선택 안함</option>
          <option value="job1">매니저</option>
          <option value="job2">SE</option>
          <option value="job3">QAE</option>
          <option value="job4">SRE</option>
        </select>



        <form className='Form'>
          <input
            className="Input1"
            type='text'
            placeholder='기술 스택 검색'
            value={searchKeyword1}
            onChange={(e) => setSearchKeyword1(e.target.value)}
          />
          <button className="Button" type="button" onClick={handleSearch1}>
            검색
          </button>
        </form>

        <form className='Form'>
          <input
            className="Input2"
            type='text'
            placeholder='회사 이름 검색'
            value={searchKeyword2}
            onChange={(e) => setSearchKeyword2(e.target.value)}
          />
          <button className="Button" type="button" onClick={handleSearch2}>
            검색
          </button>
        </form>
      </div>
        

      {/* option을 추가해서 카테고리 버튼이 내려올 수 있도록 함 */}
      <div className='MenuContainer'>
        <div>
        <label htmlFor='category' style={{fontWeight:'bold'}}>경력</label>
          <select
            className='categorySelect'
            id='category'
            value={selectedCategory1}
            onChange={handleCategoryChange1}
            >
              <option value="year">없음</option>
              {[...Array(numberOfOptions).keys()].map((i) => (
              <option key={i} value={`year${i + 1}`}>{i + 1}년</option>
              ))}
              <option value="year16">15년 이상</option>
          </select>
          </div>

        <div>
          <label htmlFor='categorysal' style={{fontWeight:'bold'}}>연봉</label>
          <select
            className='CategorySelect'
            id='categorysal'
            value={selectedCategory2}
            onChange={handleCategoryChange2}
          >
            <option value="sal">선택 안함</option>
            {[...Array(9).keys()].map((i) => (
              <option key={i} value={`sal${(i + 2) * 1000}`}>
              {i === 8 ? `9000 이상` : `${(i + 2) * 1000} ~ ${(i + 3) * 1000}`}
              </option>
              ))}
          </select>
          </div>


          <div>
          <label htmlFor='categoryregion' style={{fontWeight:'bold'}}>지역</label>
          <select
            className='CategorySelect'
            id='categoryregion'
            value={selectedCategory3}
            onChange={handleCategoryChange3}
          >
            <option value="region1">선택 안함</option>
            <option value="region2">경기도</option>
            <option value="region3">강원도</option>
            <option value="region4">충청남도</option>
            <option value="region5">충청북도</option>
            <option value="region6">경상북도</option>
            <option value="region7">경상남도</option>
            <option value="region8">전라북도</option>
            <option value="region9">전라남도</option>
            <option value="region10">제주도</option>
          </select>
          </div>
          
      </div>


      {/* 구인공고 들을 볼 수 있는 하얀색 창 */}
      <div className='RectangleContainer'>
        <div className='ContentBox'>
          {
            datalist.map((info)=>{
              return(
                <div className='MiniContainer'>
                  <div className='Square'><img src={info.imgaddr}></img></div>
                  <div className='TextBox'>
                    <div>
                      회사 이름: {info.name}<br/>
                      {info.title}<br/>
                    </div>
                  </div>
                </div>

              );
            })
          }
          

        </div>

      </div>
    </div>
  );
};