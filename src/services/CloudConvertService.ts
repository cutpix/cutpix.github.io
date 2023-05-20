import CloudConvertApi from "../apis/CloudConvertApi";

export const getAllWebHooks = ({ ...params }: any) => {
  return CloudConvertApi.get<Response>("/webhooks", { params });
};
