function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id != null) {
        resolve({ id, name: 'Alice' }); // 유저 객체로 반환
      } else {
        reject(new Error('유저 로드 실패'));
      }
    }, 300);
  });
}


function fetchPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId != null) resolve([{ id: 1, title: '첫 글', userId }]);
      else reject(new Error('게시글 로드 실패'));
    }, 400);
  });
}

async function loadUserThenPost(id){
    try{
        const user = await fetchUser(id);
        console.log('로드 성공', user);
    
        const post = await fetchPosts(user.id);
        console.log('게시글 작성 성공', post)
    
    }catch(error){
        console.error('실패', error.message);
    }
}

loadUserThenPost(123);