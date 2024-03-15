export type TypeNotify = "success" | "error" | "warning";

export interface Notify {
  id: number;
  message: string;
  type: TypeNotify;
}
