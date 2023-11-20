import  './App.css' ;
import Menu from './Menu'
import styled from "styled-components";

const MuUl = styled.ul``;
const MyLi = styled.li`
  font-size: 20px
`;

const MyBlueLi = styled(MyLi)`
  color:Blue
`;

const ReactButton = props => {
  console.log(props);
  return <button className={props.className}>{props.children}</button>
}

const ReactLargeButton = styled(ReactButton)`
  font-size: 50px
`;

function App(){
  return(
    <div>
      <h4 className='aaa'>Menu</h4>
      <Menu link="/" name="Home" />
      <Menu link="/" name="Board" />
      <Menu link="/" name="Contact" />
      <div>Home</div>
      <MuUl>
        <MyLi>List 1</MyLi>
        <MyLi>List 2</MyLi>
        <MyLi>List 3</MyLi>
        <MyLi>List 4</MyLi>
        <MyBlueLi>List 5</MyBlueLi>
      </MuUl>
      <ReactButton>React</ReactButton>
      <ReactLargeButton>Large</ReactLargeButton>
    </div>
  )
}

export default App;