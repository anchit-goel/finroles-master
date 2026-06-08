import * as React from 'react';

export interface Toast {
  id: string;
  title?: string;
  description?: string;
  variant?: 'default' | 'destructive' | 'success';
}

type ActionType =
  | { type: 'ADD_TOAST'; toast: Toast }
  | { type: 'DISMISS_TOAST'; toastId: string };

const TOAST_LIMIT = 5;
let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

interface State {
  toasts: Toast[];
}

const reducer = (state: State, action: ActionType): State => {
  switch (action.type) {
    case 'ADD_TOAST':
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case 'DISMISS_TOAST':
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
  }
};

const listeners: Array<(state: State) => void> = [];

let memoryState: State = { toasts: [] };

function dispatch(action: ActionType) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}

export function toast({ ...props }: Omit<Toast, 'id'>) {
  const id = genId();

  const dismiss = () => dispatch({ type: 'DISMISS_TOAST', toastId: id });

  dispatch({
    type: 'ADD_TOAST',
    toast: {
      ...props,
      id,
    },
  });

  // Automatically dismiss after 5 seconds
  setTimeout(dismiss, 5000);

  return {
    id,
    dismiss,
  };
}

export function useToast() {
  const [state, setState] = React.useState<State>(memoryState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, []);

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => {
      if (toastId) {
        dispatch({ type: 'DISMISS_TOAST', toastId });
      } else {
        memoryState.toasts.forEach((t) => {
          dispatch({ type: 'DISMISS_TOAST', toastId: t.id });
        });
      }
    },
  };
}
