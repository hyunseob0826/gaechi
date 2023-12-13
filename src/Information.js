
import  '../src/mainLib/main.css' ;
import React, { useState } from 'react';
import styled from 'styled-components';
import Menu from './menu';

const Container = styled.div`
  background-color: lightgray;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
//-----상단 버튼 컨테이너----
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;


//-------- 상단 버튼---------
// $는 js 표현식, 삼항 연산자를 사용해서 props 값에 따라서 하늘색 또는 남색으로 변환됨
const Button = styled.button`
  margin: 0 5px;
  padding: 10px 15px;
  font-weight: bold;
  font-size: 21px;
  color: ${(props) => (props.active ? 'skyblue' : 'navy')};
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:after {
    content: "|";
    margin-left: 40px;
    color: navy;
  }

  &:last-child:after {
    content: none;
  }
`;

// 검색 폼과 검색 버튼의 스타일---------------
const formStyle = {
  display: 'flex',
  alignItems: 'center',
  borderRadius:'10px',
};

const inputStyle={
  marginLeft: '15px',
  borderRadius: '5px',
  border: '1.25px solid black',
  height: '25px',
}

const buttonStyle = {
  marginLeft: 'auto',
  marginRight: '50px',
  borderRadius: '7px',
  border: '1.5px solid black',
};
//--------------카테고리 컨테이너----------------
// &는 정의된 컨테이너 안의 직접적으로 div 안에 있는 자식들을 의미 .
const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  & > div {
    margin-right: 50px; 
  }
  & > div:last-child {
    margin-right: 0;
  }
`;

const StyledLabel = styled.label`
  margin-right: 10px;
`;

const OptionButton = styled.button`
  margin: 0 10px;
  padding: 10px 15px;
  font-size: 17px;
  color: black;
  border: 1.25px solid black;
  background-color: white;
  cursor: pointer;
  border-radius: 7px;
`;

const RectangleContainer = styled.div`
  background-color: white;
  border-radius: 15px;
  margin: 30px 20px;
  padding: 20px;
  box-sizing: border-box;
  width: calc(100% - 40px);
  max-width: 800px;
  flex-grow: 1;
`;



export default function Information() {
  //버튼 상태 관리.
  const [activeButton, setActiveButton] = useState(null);
  //검색 상태 관리, 두개라서 각각의 변수를 만들어줌
  const [searchKeyword1, setSearchKeyword1] = useState('');
  const [searchKeyword2, setSearchKeyword2] = useState('');

  //카테고리의 상태관리 초기값은 year1, sal, region으로 설정. select..는 카테고리를 저장하는 상태,
  //set..은 select.. 값을 변경하는 함수 
  const [selectedCategory1, setSelectedCategory1] = useState('year1');
  const numberOfOptions = 15;
  const [selectedCategory2, setSelectedCategory2] = useState('sal');
  const [selectedCategory3, setSelectedCategory3] = useState('region');

  //event객체에서 value를 읽어와 set... 함수 이용해서 select.. 상태 업데이트 함
  const handleCategoryChange1=(event)=>{
    setSelectedCategory1(event.target.value);
  }
  const handleCategoryChange2=(event)=>{
    setSelectedCategory2(event.target.value);
  }
  const handleCategoryChange3=(event)=>{
    setSelectedCategory3(event.target.value);
  }

    // 검색 기능 추가
  const handleSearch1 = () => {
    console.log('Searching for:', searchKeyword1);
    // TODO: 기능 추가 예정
  };
  const handleSearch2 = () => {
    console.log('Searching for:', searchKeyword2);
    // TODO: 기능 추가 예정
  };

  const handleButtonClick = (buttonName) => {
    // 홈 버튼을 눌렀을 때만 상태 업데이트, 아직 다른 페이지가 없어서 연결은 못함.
    if (['HOME', 'COMMUNITY', 'INFORMATION', 'INSPECTION'].includes(buttonName)) {
      setActiveButton(buttonName);
    }
  };

  return (
    <Container>
      <div id = "topcontainer">
    <div id = "title">
     <h1>개취존중</h1>
    </div>

    <div id = "menu-container">
      <Menu/>
    </div>
   </div>

      <MenuContainer>
        {/* 이 직무 버튼 옵션버튼으로 바꿔야함 */}
        <OptionButton onClick={() => handleButtonClick('직무')}>
          직무
        </OptionButton>
        <form style={formStyle}>
          <input
            style={inputStyle}
            type='text'
            placeholder='기술 스택 검색'
            value={searchKeyword1}
            onChange={(e) => setSearchKeyword1(e.target.value)}
          />
          <button style={buttonStyle} type="button" onClick={handleSearch1}>
            검색
          </button>
        </form>
        <form style={formStyle}>
          <input
            style={inputStyle}
            type='text'
            placeholder='회사 이름 검색'
            value={searchKeyword2}
            onChange={(e) => setSearchKeyword2(e.target.value)}
          />
          <button style={buttonStyle} type="button" onClick={handleSearch2}>
            검색
          </button>
        </form>
      </MenuContainer>
        

       {/* option을 추가해서 카테고리 버튼이 내려올 수 있도록 함 */}
      <MenuContainer>
        <div>
        <StyledLabel htmlFor='category' style={{fontWeight:'bold'}}>경력</StyledLabel>
          <select
            id='category'
            value={selectedCategory1}
            onChange={handleCategoryChange1}
            >
              <option value="year1">없음</option>
              {[...Array(numberOfOptions).keys()].map((i) =>(
                <option key={i} value={'year${i+1}'}>{i+1}년</option>
              ))}
              <option value="year16">15년 이상</option>
          </select>
          </div>

        <div>
          <StyledLabel htmlFor='categorysal' style={{fontWeight:'bold'}}>연봉</StyledLabel>
          <select
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
          <StyledLabel htmlFor='categoryregion' style={{fontWeight:'bold'}}>지역</StyledLabel>
          <select
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
          
      </MenuContainer>


      {/* 구인공고 들을 볼 수 있는 하얀색 창 */}
      <RectangleContainer>
        {/* 큰 네모 상자에 내용 추가 예정*/}
      </RectangleContainer>
    </Container>
  );
};

