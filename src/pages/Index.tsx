import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Heart, Gift, Sparkles } from 'lucide-react';
import { useUser } from '@/context/UserContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import heroBanner from '@/assets/hero-banner.jpg';
import productWedding from '@/assets/product-wedding.jpg';
import productDecoration from '@/assets/product-decoration.jpg';
import productBaby from '@/assets/product-baby.jpg';
import productChristmas from '@/assets/product-christmas.jpg';

const Index = () => {
  const { addToCart } = useUser();

  const featuredProducts = [
    {
      id: '1',
      name: 'Topo de Bolo Casal Personalizado',
      price: 45.00,
      originalPrice: 55.00,
      image: productWedding,
      category: 'casamento',
      rating: 5,
      isNew: false,
      isBestSeller: true
    },
    {
      id: '2',
      name: 'Kit Decoração Infantil',
      price: 89.90,
      image: productBaby,
      category: 'infantil',
      rating: 5,
      isNew: true,
      isBestSeller: false
    },
    {
      id: '3',
      name: 'Enfeites de Mesa Personalizados',
      price: 32.00,
      image: productDecoration,
      category: 'decoracao',
      rating: 4,
      isNew: false,
      isBestSeller: true
    },
    {
      id: '4',
      name: 'Coleção Natal Encantado',
      price: 67.50,
      originalPrice: 85.00,
      image: productChristmas,
      category: 'natal',
      rating: 5,
      isNew: false,
      isBestSeller: false
    }
  ];

  const newProducts = [
    {
      id: '5',
      name: 'Lembrancinha Borboleta',
      price: 8.50,
      image: productDecoration,
      category: 'lembrancinha'
    },
    {
      id: '6',
      name: 'Porta-Retrato Floral',
      price: 28.90,
      image: productDecoration,
      category: 'decoracao'
    },
    {
      id: '7',
      name: 'Mini Jardim Encantado',
      price: 42.00,
      image: productDecoration,
      category: 'decoracao'
    }
  ];

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
      category: product.category
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBanner})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-lg text-white space-y-6">
            <h1 className="font-handlee text-4xl md:text-6xl font-bold leading-tight">
              Descubra Nossos Artesanatos
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Peças únicas em biscuit feitas com amor e dedicação especialmente para você!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-warm font-semibold"
              >
                <Link to="/categoria/decoracao">Ver Produtos</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <Link to="/categoria/personalizados">Personalizados</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-artisan-yellow/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-handlee text-xl font-bold">Feito com Amor</h3>
              <p className="text-muted-foreground">
                Cada peça é criada com carinho e atenção aos detalhes
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-handlee text-xl font-bold">Personalização</h3>
              <p className="text-muted-foreground">
                Personalizamos suas peças do jeito que você sonhou
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-promo rounded-full flex items-center justify-center mx-auto">
                <Gift className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-handlee text-xl font-bold">Presentes Únicos</h3>
              <p className="text-muted-foreground">
                O presente perfeito para momentos especiais
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-handlee text-3xl md:text-4xl font-bold text-foreground mb-4">
              Produtos em Destaque
            </h2>
            <p className="text-muted-foreground text-lg">
              Nossas peças mais queridas pelos clientes
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-artisan transition-artisan overflow-hidden">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-artisan"
                  />
                  <div className="absolute top-2 left-2 flex flex-col gap-1">
                    {product.isNew && (
                      <Badge className="bg-accent text-accent-foreground">Novo</Badge>
                    )}
                    {product.isBestSeller && (
                      <Badge className="bg-promo text-promo-foreground">Mais Vendido</Badge>
                    )}
                    {product.originalPrice && (
                      <Badge variant="destructive">Promoção</Badge>
                    )}
                  </div>
                </div>
                <CardContent className="p-4 space-y-3">
                  <h3 className="font-semibold line-clamp-2">{product.name}</h3>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-lg text-primary">
                          R$ {product.price.toFixed(2).replace('.', ',')}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm line-through text-muted-foreground">
                            R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="flex-1"
                      onClick={() => handleAddToCart(product)}
                    >
                      Adicionar
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <Link to={`/produto/${product.id}`}>Ver</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link to="/categoria/decoracao">Ver Todos os Produtos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* New Products */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-handlee text-3xl md:text-4xl font-bold text-foreground mb-4">
              Novidades
            </h2>
            <p className="text-muted-foreground text-lg">
              Confira nossas criações mais recentes
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-artisan transition-artisan overflow-hidden">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-artisan"
                  />
                  <Badge className="absolute top-2 left-2 bg-accent text-accent-foreground">
                    Novo
                  </Badge>
                </div>
                <CardContent className="p-4 space-y-3">
                  <h3 className="font-semibold">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg text-primary">
                      R$ {product.price.toFixed(2).replace('.', ',')}
                    </span>
                    <Button 
                      size="sm"
                      onClick={() => handleAddToCart(product)}
                    >
                      Adicionar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-handlee text-3xl md:text-4xl font-bold text-foreground mb-4">
              Inspirações
            </h2>
            <p className="text-muted-foreground text-lg">
              Veja como nossos produtos podem alegrar seus momentos especiais
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden group cursor-pointer hover:shadow-artisan transition-artisan">
              <div className="relative h-64">
                <img 
                  src={productWedding} 
                  alt="Casamentos"
                  className="w-full h-full object-cover group-hover:scale-105 transition-artisan"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-handlee text-xl font-bold">Casamentos</h3>
                  <p className="text-sm opacity-90">Momentos únicos e especiais</p>
                </div>
              </div>
            </Card>
            
            <Card className="overflow-hidden group cursor-pointer hover:shadow-artisan transition-artisan">
              <div className="relative h-64">
                <img 
                  src={productBaby} 
                  alt="Festas Infantis"
                  className="w-full h-full object-cover group-hover:scale-105 transition-artisan"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-handlee text-xl font-bold">Festas Infantis</h3>
                  <p className="text-sm opacity-90">Alegria e diversão garantidas</p>
                </div>
              </div>
            </Card>
            
            <Card className="overflow-hidden group cursor-pointer hover:shadow-artisan transition-artisan">
              <div className="relative h-64">
                <img 
                  src={productDecoration} 
                  alt="Decoração"
                  className="w-full h-full object-cover group-hover:scale-105 transition-artisan"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-handlee text-xl font-bold">Decoração</h3>
                  <p className="text-sm opacity-90">Charme para seu lar</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );

};

export default Index;
