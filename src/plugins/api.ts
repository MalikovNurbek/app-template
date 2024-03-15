import { getApiInstances } from "~/config/api";
import { SomeService } from "~/services/some/some.service";
import { BaseApi } from "~/services/base-api";

export default defineNuxtPlugin((app) => {
  const { serverApiInstance } = getApiInstances(app.$config);
  const baseService = new BaseApi(serverApiInstance);

  return {
    provide: {
      someService: new SomeService(baseService),
    },
  };
});
