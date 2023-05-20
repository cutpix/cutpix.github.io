export interface ApiParams {
  id?: string;
  status?: string;
  tasks?: Task[];
}

export interface CreateJobResponse {
  data?: ResponseData;
}

export interface ResponseData {
  id?: string;
  status?: string;
  tasks?: Task[];
}

export interface Task {
  id?: string;
  name?: string;
  operation?: string;
  status?: string;
  result?: OperationResult;
}

export interface OperationResult {
  files?: FileInfo[];
}

export interface FileInfo {
  filename?: string;
  url?: string;
}
