import React from 'react'
import { PostBox, PostImage, PostName, PostText } from './Post.styled'

const Post = ({ image, content, user}) => {
  console.log(image)
  return (
    <PostBox>
      {image && (
        <PostImage
          src={URL.createObjectURL(image)}
          alt="post-cover"
          // style={{ height: 100, width: 200, objectFit: "cover" }}
        />
      )}
      <PostText>{content}</PostText>
      <PostName>{user}</PostName>
    </PostBox>
  )
}

export default Post