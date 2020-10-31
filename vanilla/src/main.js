const API_URL = 'http://localhost:6001/api/v1';

const modal = document.querySelector('.modal');
const commentsList = document.querySelector('.comments__list');

const closeModal = () => modal.classList.add('modal--closed');
const openModal = () => modal.classList.remove('modal--closed');

const createCommentElement = (author, comment, subject) => {
  const singleComment = document.createElement('div');
  singleComment.classList.add('single-comment');

  const avatar = document.createElement('img');
  avatar.src = './assets/batman.png';

  const commentSubject = document.createElement('h2');
  commentSubject.classList.add('single-comment__subject');
  commentSubject.innerHTML = subject;

  const commentBody = document.createElement('p');
  commentBody.classList.add('single-comment__body');
  commentBody.innerHTML = comment;

  const commentAuthor = document.createElement('p');
  commentAuthor.classList.add('single-comment__author');
  commentAuthor.innerHTML = `<span class="single-comment__author-name">${author}</span> replied`;

  const avatarWrapper = document.createElement('div');
  avatarWrapper.classList.add('single-comment__avatar');
  avatarWrapper.appendChild(avatar);

  const commentWrapper = document.createElement('div');
  commentWrapper.classList.add('single-comment__info');
  commentWrapper.appendChild(commentSubject);
  commentWrapper.appendChild(commentBody);
  commentWrapper.appendChild(commentAuthor);

  singleComment.appendChild(avatarWrapper);
  singleComment.appendChild(commentWrapper);

  return singleComment;
};

const postComment = () => {
  const name = document.querySelector('#name');
  const comment = document.querySelector('#comment');
  const subject = document.querySelector('#subject');
  
  const data = {
    comment: comment.value,
    author: name.value,
    subject: subject.value,
  };
  
  fetch(`${API_URL}/comment`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  
  const newComment = createCommentElement(data.author, data.comment, data.subject);
  commentsList.appendChild(newComment);
  closeModal();

  name.value = '';
  comment.value = '';
  subject.value = '';
};

const fetchComments = async () => {
  await fetch(`${API_URL}/comments`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(response => response.json())
  .then(data => {
    data.data.forEach(item => {
      const newComment = createCommentElement(item.author, item.comment, item.subject);
      commentsList.appendChild(newComment);
    });
  });
};

(() => {
  const toggle = document.querySelector('.modal__toggle');
  const close = document.querySelector('.modal__close');

  toggle.addEventListener('click', () => openModal());
  close.addEventListener('click', () => closeModal());

  localStorage.setItem('token', 'supersecrettoken');

  fetchComments();
})();

const submitButton = document.querySelector('.post-comment');
submitButton.addEventListener('click', () => postComment());

