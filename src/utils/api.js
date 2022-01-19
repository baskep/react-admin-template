import service from '@/utils/request'

export async function login(param) {
  const result = await service({ method: 'post', url: 'login', data: param })
  return result
}

export async function modifyUserInfo(param) {
  const result = await service({ method: 'post', url: 'user/info', data: param })
  return result
}
