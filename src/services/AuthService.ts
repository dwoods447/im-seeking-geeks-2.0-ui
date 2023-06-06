import defaultAxios from '@/plugins/axios'

export default {
  signIn<T>(formData: T) {
    return defaultAxios.post('/login', formData)
  },
  signUp<T>(formData: T) {
    return defaultAxios.post('/register', formData)
  },
  //   signOut(formData) {
  //     return api.post('/api/logout', formData)
  //   },
  checkEmailUnique(email: string) {
    return defaultAxios.post('/check/email/unique', { email: email })
  },
  checkUserNameUnique(username: string) {
    return defaultAxios.post('/check/username/unique', { username: username })
  },
  forgotPassword(resetData: { email: string }) {
    return defaultAxios.post('/user/password/reset', resetData)
  },
  updatePassword(updatePassworData: { password: string }) {
    return defaultAxios.post(`/user/update/password`, updatePassworData)
  },
  setTokenHeader() {
    let token = localStorage.getItem('token')
    if (token) {
      token = JSON.parse(token)
      defaultAxios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    }
  
  }
}
