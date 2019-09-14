import axios from 'axios'

export default {
  api: '',
  lib: '',
  init(api) {
    this.api = api;
  },
  createLib(lib) {
    this.lib = lib
  },
  GetWords(lpXis, lpYis, lpCis) {
    return axios({
      method: "post",
      url: this.api,
      data: {
        lib: this.lib,
        lpXis: lpXis,
        lpYis: lpYis,
        lpCis: lpCis
      }
    })
  }
}