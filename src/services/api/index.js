import SanctumAxios from "@/services/axios/SanctumAxios";

export async function csrfToken() {
  return await SanctumAxios.get("");
}
