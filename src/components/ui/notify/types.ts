export type TypeNotify = "success" | "error" | "warning";

export interface Types {
  id: number;
  message: string;
  type: TypeNotify;
}
