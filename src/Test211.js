import React, {Component} from 'react';
class Test211 extends Component{
    render(){
        return(
        <div className="Test211">
            <h1>개취 게시판 작성</h1>
            <div className="Borad_container">
                <h2>제목</h2>
                <div>
                    내용
                </div>
            </div>
            <div className="Wirte_container">
                <input className="Title_input" type='text' placeholder="제목" />
                <textarea className="text_area" placeholder="내용"></textarea>
            </div>
            <button className="Wirte_button">입력</button>
        </div>
        )
    }
}

export default Test211;