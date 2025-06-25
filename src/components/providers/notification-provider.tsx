import { useNotification } from "@/hooks/use-notification";
import { toast } from "sonner"
export function NotificationProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const onNotificationReceive = (event: { data: { type: string, message: string } }) => {
    const { data } = event;

    const { type, message } = data;

    if (type === "warning") {
      toast.warning(message);
      return;
    }

    if (type === "error") {
      toast.error(message);
      return;
    }

    toast(message);
  };

  useNotification(onNotificationReceive);

  return (
    <div>
      {children}
    </div>
  );
}