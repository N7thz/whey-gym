import { api } from "./api"
import type { GetResponse, Training } from "@/@types"

export async function FindManyTrainigsByUserId() {

    const { data } = await api.get<GetResponse<Training>>("/trainings")

    return data
}
