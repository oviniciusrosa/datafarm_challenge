export interface IQueue {
  id?: number;
  endpoint: string;
  httpMethod: "post" | "put" | "patch" | "delete";
  data: string;
}
