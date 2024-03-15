import type { BaseApiImpl } from "~/services/base-api";

interface SomeServiceImpl {
  getTodos(params: Record<string, any>): Promise<any[]>;
}

interface Todos {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

export class SomeService implements SomeServiceImpl {
  constructor(private readonly http: BaseApiImpl) {
    this.http = http;
  }

  async getTodos(params: Record<string, any>) {
    return this.http.get<Todos[]>("/todos", {
      params: params,
    });
  }
}
