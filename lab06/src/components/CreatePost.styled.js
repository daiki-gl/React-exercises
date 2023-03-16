import styled from 'styled-components'

export const CreatePostContainer = styled.div`
  width: calc(100% - 60px);
  margin: 0 auto;
  padding: 30px;
`

export const CreatePostHeader1 = styled.h1`
  width: 100%;
  max-width: 1200px;
  margin-inline: auto;
  color: #4caf50;
  margin-bottom: 30px;
  padding-left: 15px;
  border-left: 5px solid #4caf50;
`

export const CreatePostForm = styled.form`
  width: 100%;
  max-width: 1200px;
  margin-inline: auto;
`

export const CreatePostInputText = styled.input.attrs({ type: 'text' })`
  display: block;
  width: 50%;
  max-width: 800px;
  padding: 10px 5px;
  border: none;
  border-bottom: 1px solid #000;
  font-size: 18px;
  outline: none;
  transition: all 0.3s ease-in-out;
  &:focus {
    border-color: #4caf50;
  }
`

export const CreatePostInputFile = styled.input.attrs({ type: 'file' })`
  display: none;
`

export const CreatePostFileLabel = styled.label`
  display: block;
  width: calc(50% - 80px);
  max-width: 800px;
  margin: 40px 0;
  padding: 20px 40px;
  text-align: center;
  border: 2px dotted #707070;
  color: #707070;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: #fff;
    background-color: #4caf50;
    border-color: #fff;
  }
`
export const CreatePostButton = styled.button`
  width: 50%;
  max-width: 800px;
  position: relative;
  padding: 15px 30px;
  background: #4caf50;
  color: #fff;
  font-size: 16px;
  border: none;
  border: 2px solid #4caf50;
  outline: 2px solid #fff;
  transition: outline-offset 0.2s ease;
  cursor: pointer;

  &:hover {
    outline: 2px solid #fff;
    outline-offset: -8px;
  }
`
