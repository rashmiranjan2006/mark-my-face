import * as React from "react";

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;

const ToastContext = React.createContext();

let count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
};

const toastTimeouts = new Map();

const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};

function toastReducer(state, action) {
  switch (action.type) {
    case actionTypes.ADD_TOAST:
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };
    case actionTypes.UPDATE_TOAST:
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      };
    case actionTypes.DISMISS_TOAST:
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toastId ? { ...t, open: false } : t
        ),
      };
    case actionTypes.REMOVE_TOAST:
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
    default:
      return state;
  }
}

export function ToastProvider({ children }) {
  const [state, dispatch] = React.useReducer(toastReducer, { toasts: [] });

  const addToast = (toast) => {
    const id = genId();
    dispatch({ type: actionTypes.ADD_TOAST, toast: { ...toast, id, open: true } });
    addToRemoveQueue(id);
    return id;
  };

  const updateToast = (toast) => {
    dispatch({ type: actionTypes.UPDATE_TOAST, toast });
  };

  const dismissToast = (toastId) => {
    dispatch({ type: actionTypes.DISMISS_TOAST, toastId });
  };

  const removeToast = (toastId) => {
    dispatch({ type: actionTypes.REMOVE_TOAST, toastId });
  };

  const value = {
    toasts: state.toasts,
    addToast,
    updateToast,
    dismissToast,
    removeToast,
  };

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
}

export function useToast() {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
