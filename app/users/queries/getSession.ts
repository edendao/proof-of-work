import { Ctx } from "blitz"

export default async function getSession(_ = null, { session }: Ctx) {
  return session.$getPrivateData()
}
