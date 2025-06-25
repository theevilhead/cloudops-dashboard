import { useNotification } from "@/hooks/use-notification";
import { toast } from "sonner"
export function NotificationProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const onNotificationReceive = (event: any) => {
    const { data } = event;

    const { type } = data;

    if (type === "warning") {
      toast.warning(data.message);
      return;
    }

    if (type === "error") {
      toast.error(data.message);
      return;
    }

    toast(data.message);
  };

  useNotification(onNotificationReceive);

  return (
    <div>
      {children}
    </div>
  );
}