import styled from 'styled-components'

export const PostBox = styled.div`
  width: 100%;
  background: #ececec;
  overflow: hidden;
  padding-bottom: 20px;
  transition: all 0.3s;

  &:hover {
    img {
      scale: 1;
    }

    box-shadow: 0 1px 4px rgb(0, 0, 0, 0.2);
  }
`

export const PostImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  object-position: center;
  scale: 1.1;
  transition: scale 0.3s;
  margin-bottom: 10px;
`

export const PostText = styled.p`
  font-weight: bold;
  font-size: 18px;
  margin: 20px 10px 10px;
`

export const PostName = styled.div`
  font-size: 14px;
  margin: 20px 10px 10px;
`
