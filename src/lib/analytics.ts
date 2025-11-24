// Funções de analytics tipadas para uso no React

declare global {
  interface Window {
    beginCheckout: () => void;
    purchaseApproved: (valor: number, transacao: string) => void;
    viewUpsell: () => void;
    acceptUpsell: () => void;
    rejectUpsell: () => void;
    signupEvent: () => void;
    loginEvent: () => void;
  }
}

export const analytics = {
  beginCheckout: () => {
    if (typeof window !== 'undefined' && window.beginCheckout) {
      window.beginCheckout();
    }
  },
  
  purchaseApproved: (valor: number, transacao: string) => {
    if (typeof window !== 'undefined' && window.purchaseApproved) {
      window.purchaseApproved(valor, transacao);
    }
  },
  
  viewUpsell: () => {
    if (typeof window !== 'undefined' && window.viewUpsell) {
      window.viewUpsell();
    }
  },
  
  acceptUpsell: () => {
    if (typeof window !== 'undefined' && window.acceptUpsell) {
      window.acceptUpsell();
    }
  },
  
  rejectUpsell: () => {
    if (typeof window !== 'undefined' && window.rejectUpsell) {
      window.rejectUpsell();
    }
  },
  
  signup: () => {
    if (typeof window !== 'undefined' && window.signupEvent) {
      window.signupEvent();
    }
  },
  
  login: () => {
    if (typeof window !== 'undefined' && window.loginEvent) {
      window.loginEvent();
    }
  }
};
