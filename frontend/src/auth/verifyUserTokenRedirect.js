import api from '../http/index';

const verifyUserTokenRedirect = (token) => {
  if (token !== null) {
    api.post('/api/user/verifyToken', {
      token
    })
      .then(res => {
        if (res.status === 200) window.location.href = '/'
      })
      .catch(e => {
        console.log(e);
      })
  }

}

export default verifyUserTokenRedirect;
