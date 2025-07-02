import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Timer, Gift, Percent } from 'lucide-react';
import { useUser } from '@/context/UserContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import productWedding from '@/assets/product-wedding.jpg';
import productDecoration from '@/assets/product-decoration.jpg';
import productBaby from '@/assets/product-baby.jpg';
import productChristmas from '@/assets/product-christmas.jpg';

const Promocoes = () => {
  const { addToCart } = useUser();

  const promoProducts = [
    {
      id: '1',
      name: 'Topo de Bolo Casal Personalizado',
      price: 45.00,
      originalPrice: 55.00,
      discount: 18,
      image: productWedding,
      category: 'casamento',
      rating: 5,
      reviewCount: 47,
      limitedTime: true,
      bestseller: true
    },
    {
      id: '4',
      name: 'Coleção Natal Encantado',
      price: 67.50,
      originalPrice: 85.00,
      discount: 21,
      image: productChristmas,
      category: 'natal',
      rating: 5,
      reviewCount: 32,
      limitedTime: true,
      bestseller: false
    },
    {
      id: '8',
      name: 'Kit Festa Completo',
      price: 120.00,
      originalPrice: 150.00,
      discount: 20,
      image: productBaby,
      category: 'infantil',
      rating: 5,
      reviewCount: 28,
      limitedTime: false,
      bestseller: true
    },
    {
      id: '9',
      name: 'Lembrancinha Trio Especial',
      price: 24.90,
      originalPrice: 35.00,
      discount: 29,
      image: productDecoration,
      category: 'lembrancinha',
      rating: 4,
      reviewCount: 15,
      limitedTime: true,
      bestseller: false
    },
    {
      id: '10',
      name: 'Decoração Mesa Romântica',
      price: 89.90,
      originalPrice: 110.00,
      discount: 18,
      image: productDecoration,
      category: 'decoracao',
      rating: 5,
      reviewCount: 22,
      limitedTime: false,
      bestseller: true
    },
    {
      id: '11',
      name: 'Kit Baby Shower Deluxe',
      price: 156.00,
      originalPrice: 195.00,
      discount: 20,
      image: productBaby,
      category: 'infantil',
      rating: 5,
      reviewCount: 19,
      limitedTime: true,
      bestseller: false
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

  const limitedTimeProducts = promoProducts.filter(p => p.limitedTime);
  const bestsellersOnSale = promoProducts.filter(p => p.bestseller);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-promo text-white text-center">
        <div className="container mx-auto px-4 space-y-6">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Percent className="h-8 w-8" />
            </div>
          </div>
          <h1 className="font-handlee text-4xl md:text-6xl font-bold">
            Promoções Especiais
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Aproveite nossas ofertas exclusivas e leve mais arte para sua vida com preços especiais!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Gift className="h-5 w-5 mr-2" />
              Ver Todas as Ofertas
            </Button>
          </div>
        </div>
      </section>

      {/* Limited Time Offers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Timer className="h-6 w-6 text-destructive" />
              <h2 className="font-handlee text-3xl md:text-4xl font-bold text-foreground">
                Ofertas por Tempo Limitado
              </h2>
            </div>
            <p className="text-muted-foreground text-lg">
              Não perca! Essas promoções são válidas apenas por poucos dias
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {limitedTimeProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-artisan transition-artisan overflow-hidden">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-artisan"
                  />
                  <div className="absolute top-2 left-2 flex flex-col gap-1">
                    <Badge className="bg-destructive text-destructive-foreground animate-pulse">
                      -{product.discount}%
                    </Badge>
                    <Badge className="bg-orange-500 text-white">
                      <Timer className="h-3 w-3 mr-1" />
                      Tempo Limitado
                    </Badge>
                    {product.bestseller && (
                      <Badge className="bg-promo text-promo-foreground">Mais Vendido</Badge>
                    )}
                  </div>
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
                    <span className="text-sm font-bold text-destructive">
                      ECONOMIZE R$ {(product.originalPrice - product.price).toFixed(2).replace('.', ',')}
                    </span>
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
                    <span className="text-sm text-muted-foreground ml-1">
                      ({product.reviewCount})
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xl text-primary">
                        R$ {product.price.toFixed(2).replace('.', ',')}
                      </span>
                      <span className="text-lg line-through text-muted-foreground">
                        R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                    <p className="text-sm text-green-600 font-medium">
                      Você economiza {product.discount}%
                    </p>
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
        </div>
      </section>

      {/* Bestsellers on Sale */}
      <section className="py-16 bg-artisan-yellow/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-handlee text-3xl md:text-4xl font-bold text-foreground mb-4">
              Mais Vendidos em Promoção
            </h2>
            <p className="text-muted-foreground text-lg">
              Nossos produtos favoritos dos clientes com preços especiais
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bestsellersOnSale.map((product) => (
              <Card key={product.id} className="group hover:shadow-artisan transition-artisan overflow-hidden">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-artisan"
                  />
                  <div className="absolute top-2 left-2 flex flex-col gap-1">
                    <Badge className="bg-destructive text-destructive-foreground">
                      -{product.discount}%
                    </Badge>
                    <Badge className="bg-promo text-promo-foreground">
                      <Star className="h-3 w-3 mr-1 fill-current" />
                      Mais Vendido
                    </Badge>
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
                    <span className="text-sm text-muted-foreground ml-1">
                      ({product.reviewCount})
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xl text-primary">
                        R$ {product.price.toFixed(2).replace('.', ',')}
                      </span>
                      <span className="text-lg line-through text-muted-foreground">
                        R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                      </span>
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
        </div>
      </section>

      {/* All Promotions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-handlee text-3xl md:text-4xl font-bold text-foreground mb-4">
              Todas as Promoções
            </h2>
            <p className="text-muted-foreground text-lg">
              Explore nossa coleção completa de produtos em oferta
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {promoProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-artisan transition-artisan overflow-hidden">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-artisan"
                  />
                  <div className="absolute top-2 left-2 flex flex-col gap-1">
                    <Badge className="bg-destructive text-destructive-foreground">
                      -{product.discount}%
                    </Badge>
                    {product.limitedTime && (
                      <Badge className="bg-orange-500 text-white">
                        <Timer className="h-3 w-3 mr-1" />
                        Limitado
                      </Badge>
                    )}
                    {product.bestseller && (
                      <Badge className="bg-promo text-promo-foreground">Mais Vendido</Badge>
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
                    <span className="text-sm text-muted-foreground ml-1">
                      ({product.reviewCount})
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xl text-primary">
                        R$ {product.price.toFixed(2).replace('.', ',')}
                      </span>
                      <span className="text-lg line-through text-muted-foreground">
                        R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                      </span>
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
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-artisan text-white">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="font-handlee text-3xl md:text-4xl font-bold">
            Não Perca Nenhuma Promoção!
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Inscreva-se em nossa newsletter e seja a primeira a saber sobre nossas ofertas exclusivas
          </p>
          <Button size="lg" variant="secondary">
            <Gift className="h-5 w-5 mr-2" />
            Quero Receber Promoções
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Promocoes;