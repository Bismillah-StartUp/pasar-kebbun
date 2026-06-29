import { RiNotification2Line } from 'react-icons/ri';

interface NotificationBannerProps {
  title: string;
  message: string;
  timeAgo: string;
}

export function NotificationBanner({ title, message, timeAgo }: NotificationBannerProps) {
  return (
    <div className="flex items-center justify-between px-5 py-4 bg-amber-50/60 border border-amber-100 rounded-2xl text-sm">
      <div className="flex items-center gap-3 text-slate-700">
        <div className="p-2 bg-amber-100/50 rounded-xl text-amber-600">
          <RiNotification2Line className="w-4 h-4" />
        </div>
        <p>
          <span className="font-bold text-slate-800">{title}</span> {message}
        </p>
      </div>
      <span className="text-xs text-slate-400 font-medium">{timeAgo}</span>
    </div>
  );
}
