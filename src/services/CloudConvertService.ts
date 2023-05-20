import CloudConvertApi from "../apis/CloudConvertApi";

export const getAllWebHooks = ({ ...params }: API_Params) => {
  return CloudConvertApi.get<Response>("/webhooks", { params });
};
