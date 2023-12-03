import React, { useState, useEffect } from 'react';
import { CommentSection } from 'react-comments-section';
import 'react-comments-section/dist/index.css';

interface DataProps{
  userId: string
  comId: string
  avatarUrl: string
  userProfile?: string
  fullName: string
  text: string
  replies: any
  commentId: string
}

const CommentSectionComponent = () => {
  const [comments, setComments] = useState<DataProps[]>([]);

  const generateAnonymousUser = () => ({
    userId: `someAnon1`,
    comId: `comment_${Math.floor(Math.random() * 1000)}`,
    fullName: 'Usuario Anónimo',
    avatarUrl: 'https://ibb.co/7pN4Mq2',
  });

  const handleAddComment = (data: DataProps) => {

  }

  return (
    <CommentSection
      logIn={{
        loginLink: 'http://noLogin/',
        signupLink: 'http://noSignup/'
      }}
      currentUser={null}
      commentData={comments}
      onSubmitAction={handleAddComment}
    />
  );
};

export default CommentSectionComponent;


//   useEffect(() => {
//     // Fetch comments on component mount
//     fetchComments();
//   }, []);

//   const fetchComments = async () => {
//     try {
//       const response = await fetch('https://psa-proyecto.onrender.com/comments');
//       const data = await response.json();
//       setComments(data);
//     } catch (error) {
//       console.error('Error fetching comments:', error);
//     }
//   };


//   const handleAddComment = async (newComment) => {
//     try {
//       const anonymousUser = generateAnonymousUser();

//       await fetch('https://psa-proyecto.onrender.com/comments', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           ...anonymousUser,
//           text: newComment.text,
//         }),
//       });

//       // After adding a comment, fetch the updated list
//       fetchComments();
//     } catch (error) {
//       console.error('Error adding comment:', error);
//     }
//   };