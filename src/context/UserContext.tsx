import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  addresses: Address[];
}

interface Address {
  id: string;
  name: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  category: string;
  customization?: string;
}

interface Order {
  id: string;
  date: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total: number;
  items: CartItem[];
  address: Address;
}

interface UserContextType {
  user: User | null;
  cart: CartItem[];
  orders: Order[];
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (userData: Omit<User, 'id' | 'addresses'>) => Promise<boolean>;
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  updateCartQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartItemCount: () => number;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

// Usuário de teste Ana Silva
const TEST_USER: User = {
  id: '1',
  name: 'Ana Silva',
  email: 'ana.silva@email.com',
  phone: '(11) 99999-9999',
  addresses: [
    {
      id: '1',
      name: 'Casa',
      street: 'Rua das Flores',
      number: '123',
      complement: 'Apt 45',
      neighborhood: 'Jardim Primavera',
      city: 'São Paulo',
      state: 'SP',
      zipCode: '01234-567'
    }
  ]
};

// Pedidos de exemplo para Ana Silva
const TEST_ORDERS: Order[] = [
  {
    id: 'PED001',
    date: '2024-06-15',
    status: 'delivered',
    total: 89.90,
    items: [
      {
        id: '1',
        name: 'Topo de Bolo Casal',
        price: 45.00,
        quantity: 1,
        image: '/api/placeholder/200/200',
        category: 'casamento',
        customization: 'Vestido branco, terno azul'
      },
      {
        id: '2',
        name: 'Lembrancinha Coração',
        price: 4.50,
        quantity: 10,
        image: '/api/placeholder/200/200',
        category: 'casamento'
      }
    ],
    address: TEST_USER.addresses[0]
  },
  {
    id: 'PED002',
    date: '2024-06-28',
    status: 'processing',
    total: 125.50,
    items: [
      {
        id: '3',
        name: 'Kit Festa Infantil',
        price: 125.50,
        quantity: 1,
        image: '/api/placeholder/200/200',
        category: 'infantil',
        customization: 'Tema Unicórnio, nome: Sofia'
      }
    ],
    address: TEST_USER.addresses[0]
  }
];

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orders] = useState<Order[]>(TEST_ORDERS);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simula login - aceita qualquer senha para o email da Ana Silva
    if (email === 'ana.silva@email.com') {
      setUser(TEST_USER);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    setCart([]);
  };

  const register = async (userData: Omit<User, 'id' | 'addresses'>): Promise<boolean> => {
    // Simula registro
    const newUser: User = {
      ...userData,
      id: Date.now().toString(),
      addresses: []
    };
    setUser(newUser);
    return true;
  };

  const addToCart = (item: CartItem) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      }
      return [...prevCart, item];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  const updateCartQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartItemCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const value: UserContextType = {
    user,
    cart,
    orders,
    isLoggedIn: !!user,
    login,
    logout,
    register,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    getCartTotal,
    getCartItemCount
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}