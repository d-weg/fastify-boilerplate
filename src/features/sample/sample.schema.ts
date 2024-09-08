import { s } from "ajv-ts";
import { BaseRequest } from "../../types";

export const sampleBody = s.object({
    Teste: s.string()
})


export type SampleRequest = BaseRequest<s.infer<typeof sampleBody>>
