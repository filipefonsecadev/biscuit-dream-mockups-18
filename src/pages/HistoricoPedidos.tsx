import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Package, Calendar, CreditCard, ArrowLeft } from 'lucide-react';
import { useUser } from '@/context/UserContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HistoricoPedidos = () => {
  const { user, isLoggedIn, orders } = useUser();

  if (!isLoggedIn || !user) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="font-handlee text-3xl font-bold mb-4">Acesso Negado</h1>
          <p className="text-muted-foreground mb-6">Faça login para ver seus pedidos</p>
          <Button asChild><Link to="/login">Fazer Login</Link></Button>
        </div>
        <Footer />
      </div>
    );
  }

  const getStatusBadge = (status: string) => {
    const statusMap = {
      'pending': { label: 'Pendente', variant: 'secondary' as const },
      'processing': { label: 'Produzindo', variant: 'default' as const },
      'shipped': { label: 'Enviado', variant: 'outline' as const },
      'delivered': { label: 'Entregue', variant: 'default' as const },
      'cancelled': { label: 'Cancelado', variant: 'destructive' as const }
    };
    
    const statusInfo = statusMap[status as keyof typeof statusMap] || statusMap.pending;
    return <Badge variant={statusInfo.variant}>{statusInfo.label}</Badge>;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <Button asChild variant="ghost" size="sm">
            <Link to="/meu-perfil" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar ao Perfil
            </Link>
          </Button>
        </div>

        <h1 className="font-handlee text-3xl font-bold mb-8">Histórico de Pedidos</h1>

        {orders.length > 0 ? (
          <div className="space-y-6">
            {orders.map((order) => (
              <Card key={order.id} className="hover:shadow-artisan transition-artisan">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Package className="h-5 w-5" />
                        Pedido #{order.id}
                      </CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(order.date).toLocaleDateString('pt-BR')}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2">
                      {getStatusBadge(order.status)}
                      <span className="font-bold text-lg text-primary">
                        R$ {order.total.toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Produtos</h4>
                    <div className="space-y-2">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-muted-foreground">Qtd: {item.quantity}</p>
                            {item.customization && (
                              <p className="text-sm text-muted-foreground">{item.customization}</p>
                            )}
                          </div>
                          <span className="font-semibold">
                            R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Endereço de Entrega</h4>
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <p>{order.address.street}, {order.address.number}</p>
                      {order.address.complement && <p>{order.address.complement}</p>}
                      <p>{order.address.neighborhood} - {order.address.city}/{order.address.state}</p>
                      <p>CEP: {order.address.zipCode}</p>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button variant="outline">Ver Detalhes</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <Package className="h-12 w-12 text-muted-foreground" />
            </div>
            <h2 className="font-handlee text-2xl font-bold mb-4">Nenhum pedido encontrado</h2>
            <p className="text-muted-foreground mb-6">Você ainda não fez nenhum pedido conosco</p>
            <Button asChild>
              <Link to="/categoria/decoracao">Explorar Produtos</Link>
            </Button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default HistoricoPedidos;