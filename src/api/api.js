import { httpsAdmin,httpsNoLoading } from "./config";

export const userServ = {
  login: (values) => httpsNoLoading.post("/auth/signin", values),
  signup: (values) => httpsNoLoading.post("/auth/signup", values),
  getUsersPage: (index) =>
    httpsAdmin.get(`/users/phan-trang-tim-kiem?pageIndex=${index}&pageSize=10`),
  getUserByID: (id) => httpsAdmin.get(`/users/${id}`),
  createNewUser: (user) => httpsAdmin.post("/users", user),
  deleteUser: (id) => httpsAdmin.delete(`/users/?id=${id}`),
  updateUser: (userUpdate) =>
    httpsAdmin.put(`/users/${userUpdate.id}`, userUpdate),
  searchUser: (key) => httpsAdmin.get(`users/search/${key}`),
  updateAvatar: (avatar) => httpsAdmin.post(`users/upload-avatar`, avatar),
};

export const roomServ = {
  getAllRooms: () => httpsAdmin.get("/phong-thue"),
  createRoom: (data) => httpsAdmin.post("/phong-thue", data),
  uploadPhotoRoom: (id, photo) =>
    httpsAdmin.post(`/phong-thue/upload-hinh-phong?maPhong=${id}`, photo),
  deleteRoom: (id) => httpsAdmin.delete(`/phong-thue/${id}`),
  updateRoom: (data) => httpsAdmin.put(`/phong-thue/${data.id}`, data),
};

export const locationServ = {
  getAllLocations: () => httpsAdmin.get("/vi-tri"),
  getLocationByID: (id) => httpsAdmin.get(`/vi-tri/${id}`),
  createLocation: (data) => httpsAdmin.post("/vi-tri", data),
  updateLocation: (data) => httpsAdmin.put(`/vi-tri/${data.id}`, data),

  deleteLocation: (id) => httpsAdmin.delete(`/vi-tri/${id}`),
  uploadPhotoLocation: (id, photo) =>
    httpsAdmin.post(`/vi-tri/upload-hinh-vitri?maViTri=${id}`, photo),
};

export const bookingSer = {
  getAllBookings: () => httpsAdmin.get("/dat-phong"),
  deleteBooking: (id) => httpsAdmin.delete(`/dat-phong/${id}`),
};
