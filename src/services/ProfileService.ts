import defaultAxios from '@/plugins/axios'

export default {
  getUserDetails(userId: string) {
    const user = { userId: userId }
    return defaultAxios.post('/view/user', user)
  },
  getRandomUsersInAuthUsersPostalCode() {
    return defaultAxios.get('/view/random/users')
  },
  basicUserSearch<T>(userSearchCriteria: T) {
    return defaultAxios.post('/general/search', userSearchCriteria)
  },
  advancedUserSearch<T>(userSearchCriteria: T) {
    return defaultAxios.post('/advanced/search', userSearchCriteria)
  },
  updateUserProfile<T>(userData: T) {
    return defaultAxios.post('/user/update/userprofile', userData)
  }
  //   addUserToBlockList(userToAdd) {
  //     return defaultAxios.post('/api/user/block/add', userToAdd)
  //   },
  //   removeUserFromBlockList(userToRemove) {
  //     return defaultAxios.post('/api/user/block/remove', userToRemove)
  //   },
  //   addUserToFavoriteList(userToAdd) {
  //     return defaultAxios.post('/api/add/favorites', userToAdd)
  //   },
  //   removeUserFromFavoriteList(userToRemove) {
  //     return defaultAxios.post('/api/remove/favorites', userToRemove)
  //   },
  //   getUserProfileViews() {
  //     return defaultAxios.get('/api/profile/views')
  //   },
  //   getUsersInFavoriteList() {
  //     return defaultAxios.get('/api/user-list/favorites')
  //   },
  //   getUserInBlockList() {
  //     return defaultAxios.get('/api/user-list/blocked')
  //   },
  //   deleteUserProfile() {
  //     return defaultAxios.post('/api/remove/user')
  //   },
  //   getUserForMatchMaker() {
  //     return defaultAxios.get('/api/user/matchmaker')
  //   },
  //   addUserToUserMatches(userProfileId: string) {
  //     return defaultAxios.post('/api/add-user/matchlist', userProfileId)
  //   },
  //   uploadImg(file) {
  //     const formData = new FormData()
  //     formData.append('image', file.image, file.image.name)
  //     return defaultAxios.post(`/api/image/upload`, formData)
  //   },
  //   removeUploadedImg(imageId) {
  //     return defaultAxios.post(`/api/remove/image/upload`, imageId)
  //   }
}
