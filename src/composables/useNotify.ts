import { useAppState } from "utils/useAppState";
import type { Types } from "components/ui/notify";
const [getNotifies, setNotifies] = useAppState<Types[]>("notifies", () => []);

const removeNotify = () => {
  const notifies = getNotifies().value;
  notifies.shift();
  setNotifies(notifies);
};

const notify = (notify: Omit<Types, "id">) => {
  const notifies = getNotifies().value;
  const timerId = setTimeout(() => removeNotify(), 3000);

  notifies.push({ ...notify, id: timerId });

  setNotifies(notifies);
};

export { getNotifies, notify };
