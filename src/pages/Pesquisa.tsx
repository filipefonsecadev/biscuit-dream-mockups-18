import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Star } from 'lucide-react';
import { useUser } from '@/context/UserContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import productWedding from '@/assets/product-wedding.jpg';
import productDecoration from '@/assets/product-decoration.jpg';
import productBaby from '@/assets/product-baby.jpg';

const Pesquisa = () => {
  const [searchParams] = useSearchParams();
  const { addToCart } = useUser();
  const [query, setQuery] = useState(searchParams.get('q') || '');

  const allProducts = [
    { id: '1', name: 'Topo de Bolo Casal', price: 45.00, image: productWedding, category: 'casamento', rating: 5 },
    { id: '2', name: 'Kit Decoração Infantil', price: 89.90, image: productBaby, category: 'infantil', rating: 5 },
    { id: '3', name: 'Enfeites de Mesa', price: 32.00, image: productDecoration, category: 'decoracao', rating: 4 }
  ];

  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setQuery(searchParams.get('q') || '');
  }, [searchParams]);

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
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-handlee text-3xl font-bold mb-8">Resultados da Pesquisa</h1>
        
        <div className="mb-6">
          <div className="relative max-w-md">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar produtos..."
              className="pr-10"
            />
            <Search className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
          </div>
        </div>

        <p className="text-muted-foreground mb-6">
          {filteredProducts.length} resultado{filteredProducts.length !== 1 ? 's' : ''} para "{query}"
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-artisan transition-artisan overflow-hidden">
              <div className="relative">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              </div>
              <CardContent className="p-4 space-y-3">
                <h3 className="font-semibold">{product.name}</h3>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                  ))}
                </div>
                <span className="font-bold text-lg text-primary">R$ {product.price.toFixed(2).replace('.', ',')}</span>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1" onClick={() => handleAddToCart(product)}>Adicionar</Button>
                  <Button asChild variant="outline" size="sm">
                    <Link to={`/produto/${product.id}`}>Ver</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">Nenhum produto encontrado para "{query}"</p>
            <Button asChild><Link to="/categoria/decoracao">Explorar Produtos</Link></Button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Pesquisa;