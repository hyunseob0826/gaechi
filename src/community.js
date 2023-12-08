import  './community.css' ;
import React, {Component, useEffect, useState} from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from 'html-react-parser'
import  Axios  from 'axios';
import Menu from './menu';



export default function Community() {
  const [writeContent, setWriteContent] = useState({
    title: '',
    content: ''
  })

  const [viewContent, setviewContent] = useState([]);

  useEffect(()=>{
    Axios.get('http://localhost:8000/api/get').then((response)=>{
      setviewContent(response.data);
    })
  }, [viewContent])//랜더링 다시할려고 viewcontent

  const submitReview = ()=>{
    Axios.post('http://localhost:8000/api/insert', {
      title: writeContent.title,
      content: writeContent.content
    }).then(()=>{
      alert('등록 성공')
    })
  }

  const getValue = e => {
    const { name, value } = e.target;
    setWriteContent({
      ...writeContent,
      [name]: value
    })
    console.log(writeContent)
  };
  return(
  <div>
    <div id = "topcontainer">
      <div id = "title">
        <h1>개취존중</h1>
      </div>
      <div id = "menu-container">
       <Menu/>
      </div>
    </div>
    
    <h1 id = 'community-title'>개발자 커뮤니티</h1>
    <div className='community_conatiner'>
      {viewContent.map(element =>
        <div>
          <h2>{element.title}</h2>
          <div>
            {ReactHtmlParser(element.content)}
          </div>
        </div>
        )}
    </div>
    <div className='form_wrapper'>
      <input className='title_input' type='text' placeholder='제목' onChange={getValue} name='title'/>
      <CKEditor
        editor={ClassicEditor}
        data=""
        onReady={editor => {
          console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
            console.log({ event, editor, data });
            setWriteContent({
              ...writeContent,
              content: data
            })
          }}
        onBlur={(event, editor) => {
          console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
          console.log('Focus.', editor);
        }}
      />
    </div>
    <div id = 'submit-button-container'>
    <button className='submit-button'
      onClick={submitReview}
      >입력</button>
    </div>
  </div>
  );
};

  

 
 