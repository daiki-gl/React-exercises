// import React from "react";

// const CreatePost = ({ user, setPosts }) => {
//   const [content, setContent] = React.useState("");
//   const [image, setImage] = React.useState(null);

//   function handleSubmit(e) {
//     e.preventDefault();
//     const post = { content, image, user };
//     setPosts(prevPosts => [post, ...prevPosts])
//   }
//   return (
//     <div>
//       <h1>Create New Post</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Add Post Content"
//           onChange={(e) => setContent(e.target.value)}
//         />
//         <input type="file" onChange={(e) => setImage(e.target.files[0])} />
//         <button type="submit">Submit Post</button>
//       </form>
//       {/* <p>{content}</p>
//       {image && <img src={URL.createObjectURL(image)} alt="upload" style={{height: 100, width: 200, objectFit: 'cover'}} />} */}
//     </div>
//   );
// };

// export default CreatePost;


/**
 * ====================================================================
 * Clear state out of our input
 * --- controlled component
 * We'll want the input to be controlled by its state
 */

//  import React from "react";

// const CreatePost = ({ user, setPosts }) => {
//   const [content, setContent] = React.useState("");
//   const [image, setImage] = React.useState(null);

//   const imageInputRef = React.useRef()

//   function handleSubmit(e) {
//     e.preventDefault();
//     if(!content && !image) {
//       return alert('Fields must not be empty')
//     }
//     const post = { content, image, user };
//     setPosts(prevPosts => [post, ...prevPosts])
//     setContent('')
//     setImage(null)
//     imageInputRef.current.value = ''
//   }
//   return (
//     <div>
//       <h1>Create New Post</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Add Post Content"
//           onChange={(e) => setContent(e.target.value)}
//           value={content}
//         />
//         <input type="file" onChange={(e) => setImage(e.target.files[0])} ref={imageInputRef} />
//         <button type="submit">Submit Post</button>
//       </form>
//       {/* <p>{content}</p>
//       {image && <img src={URL.createObjectURL(image)} alt="upload" style={{height: 100, width: 200, objectFit: 'cover'}} />} */}
//     </div>
//   );
// };

// export default CreatePost;

/**
 * ====================================================================
 *
 */

 import React from "react";
import { CreatePostButton, CreatePostContainer, CreatePostFileLabel, CreatePostForm, CreatePostHeader1, CreatePostInputFile, CreatePostInputText } from "./CreatePost.styled";

const CreatePost = ({ user, handleAddPost }) => {
  const [content, setContent] = React.useState("");
  const [image, setImage] = React.useState(null);

  const imageInputRef = React.useRef()

  function handleSubmit(e) {
    e.preventDefault();
    if(!content && !image) {
      return alert('Fields must not be empty')
    }
    const post = { content, image, user };
    handleAddPost(post)
    setContent('')
    setImage(null)
    imageInputRef.current.value = ''
  }
  return (
    <CreatePostContainer>
      <CreatePostHeader1>Create New Post</CreatePostHeader1>
      <CreatePostForm onSubmit={handleSubmit}>
        <CreatePostInputText
          type="text"
          placeholder="Add Post Content"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        {/*
          what is e.target.files
          - e.target.files is an array of files

          e.target.files[0] contains the first file in the array as a File object
          - a File object is a file that has been selected by the user
          - we can use this to display the image in our post

          explain ref={imageInputRef}
          - we want to be able to access the input element
          - we can do this by using a ref
          - we can then access the input element by using imageInputRef.current
          - we can then set the value of the input element to an empty string
        */}
        <CreatePostFileLabel htmlFor="file">Uplode Image</CreatePostFileLabel>
        <CreatePostInputFile id="file" type="file" onChange={(e) => setImage(e.target.files[0])} ref={imageInputRef} />
        <CreatePostButton type="submit">Submit Post</CreatePostButton>
      </CreatePostForm>
    </CreatePostContainer>
  );
};

export default CreatePost;
