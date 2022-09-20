namespace UserApi {
  interface User {
    id: number,
    name: string,
    age?: string,
    password: string,
    authList?: Record<string, string[]>
  }
}