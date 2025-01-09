import { toast } from 'sonner';

export const useNotify = () => {
  const error = (message: string) => toast.error(message, {
    duration: Infinity,
    cancel: {
      label: 'x',
      onClick: () => {
        toast.dismiss();
      },
    },
  });
  const info = (message: string, dismiss: boolean = false) => toast.info(message, {
    duration: 5000,
    cancel: dismiss
      ? { label: 'x', onClick: () => toast.dismiss() }
      : undefined,
  });
  const success = (message: string, dismiss: boolean = false) => toast.success(message, {
    duration: 5000,
    cancel: dismiss
      ? { label: 'x', onClick: () => toast.dismiss() }
      : undefined,
  });
  const loading = (message: string, dismiss: boolean = false) => toast.loading(message, {
    duration: Infinity,
    cancel: dismiss
      ? { label: 'x', onClick: () => toast.dismiss() }
      : undefined,
  });

  const dismiss = (id: string | number) => toast.dismiss(id);

  return {
    error, info, success, loading, dismiss,
  };
};
