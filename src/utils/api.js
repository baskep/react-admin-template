import service from '@/utils/request'

export async function login(params) {
  const result = await service({ method: 'post', url: 'login', data: params })
  return result
}
