import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true
});

export const connectAPI = {
    getUsers(pageSize: number, currentPage: number) {
        return instance.get(`/users?count=${pageSize}&page=${currentPage}`)
            .then(res=>res.data)
    },
    getProfile(userID: string | number) {
        return instance.get(`/profile/${userID}`)
            .then(res=>res.data)
    },
    authMe(){
        return instance.get('/auth/me')
            .then(res=>res.data)
    },
    followUser(userID: number){
        return instance.post(`/follow/${userID}`)
            .then(res=>res.data)
    },
    unfollowUser(userID: number){
        return instance.delete(`/follow/${userID}`)
            .then(res=>res.data)
    },
}