import type { NotificationProps } from "./NotificationTypes"

export function Notification({ notification, onClose }: NotificationProps) {
    if (!notification) return null;

    return (
        <div className="fixed top-8 right-6 w-60 sm:w-80 bg-white border border-red-200 shadow-xl rounded-xl p-4">
            <div>
                <h4 className="font-semibold text-sm">Server error:</h4>
                <p className="text-sm opacity-90 mt-1">{notification}</p>
            </div>
            <button
                onClick={onClose}
                className="absolute top-2 right-4 text-gray-400 hover:text-gray-600 transition cursor-pointer"
            >
                ✕
            </button>
        </div>
    )
}


