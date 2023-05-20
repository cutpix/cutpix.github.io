import CloudConvertApi from "../apis/cloudconvert-api";
import { ApiParams, CreateJobResponse } from "../interfaces";

export const createJob = ({ ...params }: ApiParams) => {
  return CloudConvertApi.get<CreateJobResponse>("/v2/jobs", { params });
};
