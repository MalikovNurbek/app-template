import { useAppState } from "utils/useAppState";
import type { Notify } from "components/ui/notify";
const [getNotifies, setNotifies] = useAppState<Notify[]>("notifies", () => []);

const removeNotify = () => {
  const notifies = getNotifies().value;
  notifies.shift();
  setNotifies(notifies);
};

const notify = (notify: Omit<Notify, "id">) => {
  const notifies = getNotifies().value;
  const timerId = setTimeout(() => removeNotify(), 3000);

  notifies.push({ ...notify, id: timerId });

  setNotifies(notifies);
};

export { getNotifies, notify };
