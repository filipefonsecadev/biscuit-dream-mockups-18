import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Star, Filter, X } from 'lucide-react';
import { useUser } from '@/context/UserContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import productWedding from '@/assets/product-wedding.jpg';
import productDecoration from '@/assets/product-decoration.jpg';
import productBaby from '@/assets/product-baby.jpg';
import productChristmas from '@/assets/product-christmas.jpg';

const Categoria = () => {
  const { categoria } = useParams();
  const { addToCart } = useUser();
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [sortBy, setSortBy] = useState('relevance');
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedThemes, setSelectedThemes] = useState<string[]>([]);

  const categoryInfo = {
    decoracao: {
      title: 'Decoração',
      description: 'Peças únicas para decorar sua casa com charme e personalidade',
      image: productDecoration
    },
    presentes: {
      title: 'Presentes',
      description: 'Presentes especiais para momentos únicos',
      image: productBaby
    },
    personalizados: {
      title: 'Personalizados',
      description: 'Criamos peças exclusivas do jeito que você sonhou',
      image: productWedding
    },
    casamento: {
      title: 'Casamento',
      description: 'Lembrancinhas e decorações para o dia mais especial',
      image: productWedding
    },
    infantil: {
      title: 'Infantil',
      description: 'Alegria e diversão em cada peça para os pequenos',
      image: productBaby
    },
    natal: {
      title: 'Natal',
      description: 'Magia natalina em cada detalhe',
      image: productChristmas
    }
  };

  const currentCategory = categoryInfo[categoria as keyof typeof categoryInfo] || categoryInfo.decoracao;

  const products = [
    {
      id: '1',
      name: 'Topo de Bolo Casal Personalizado',
      price: 45.00,
      originalPrice: 55.00,
      image: productWedding,
      category: 'casamento',
      rating: 5,
      colors: ['branco', 'rosa'],
      themes: ['casamento', 'romântico'],
      isNew: false,
      isBestSeller: true
    },
    {
      id: '2',
      name: 'Kit Decoração Infantil Unicórnio',
      price: 89.90,
      image: productBaby,
      category: 'infantil',
      rating: 5,
      colors: ['rosa', 'roxo', 'branco'],
      themes: ['unicórnio', 'infantil'],
      isNew: true,
      isBestSeller: false
    },
    {
      id: '3',
      name: 'Enfeites de Mesa Floral',
      price: 32.00,
      image: productDecoration,
      category: 'decoracao',
      rating: 4,
      colors: ['verde', 'rosa', 'amarelo'],
      themes: ['floral', 'primavera'],
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
      colors: ['vermelho', 'verde', 'dourado'],
      themes: ['natal', 'inverno'],
      isNew: false,
      isBestSeller: false
    },
    {
      id: '5',
      name: 'Lembrancinha Borboleta',
      price: 8.50,
      image: productDecoration,
      category: 'lembrancinha',
      rating: 4,
      colors: ['azul', 'rosa'],
      themes: ['natureza', 'delicado'],
      isNew: true,
      isBestSeller: false
    },
    {
      id: '6',
      name: 'Porta-Retrato Família',
      price: 28.90,
      image: productDecoration,
      category: 'decoracao',
      rating: 4,
      colors: ['bege', 'marrom'],
      themes: ['família', 'clássico'],
      isNew: false,
      isBestSeller: true
    }
  ];

  const colors = ['branco', 'rosa', 'azul', 'verde', 'amarelo', 'roxo', 'vermelho', 'dourado', 'bege', 'marrom'];
  const themes = ['casamento', 'infantil', 'natal', 'floral', 'natureza', 'família', 'romântico', 'clássico'];

  const filteredProducts = products.filter(product => {
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesColors = selectedColors.length === 0 || selectedColors.some(color => product.colors.includes(color));
    const matchesThemes = selectedThemes.length === 0 || selectedThemes.some(theme => product.themes.includes(theme));
    return matchesPrice && matchesColors && matchesThemes;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return b.isNew ? 1 : -1;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

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

  const toggleColor = (color: string) => {
    setSelectedColors(prev => 
      prev.includes(color) 
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  };

  const toggleTheme = (theme: string) => {
    setSelectedThemes(prev => 
      prev.includes(theme) 
        ? prev.filter(t => t !== theme)
        : [...prev, theme]
    );
  };

  const clearFilters = () => {
    setPriceRange([0, 200]);
    setSelectedColors([]);
    setSelectedThemes([]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Category Hero */}
      <section className="relative h-64 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${currentCategory.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white space-y-2">
            <h1 className="font-handlee text-4xl md:text-5xl font-bold">
              {currentCategory.title}
            </h1>
            <p className="text-lg opacity-90">
              {currentCategory.description}
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 space-y-6">
            <div className="flex items-center justify-between lg:justify-start">
              <h2 className="font-semibold text-lg flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Filtros
              </h2>
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setShowFilters(!showFilters)}
              >
                {showFilters ? <X className="h-4 w-4" /> : <Filter className="h-4 w-4" />}
              </Button>
            </div>

            <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              {/* Price Range */}
              <Card>
                <CardContent className="p-4 space-y-4">
                  <Label className="font-medium">Faixa de Preço</Label>
                  <div className="space-y-2">
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={200}
                      step={5}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>R$ {priceRange[0]}</span>
                      <span>R$ {priceRange[1]}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Colors */}
              <Card>
                <CardContent className="p-4 space-y-4">
                  <Label className="font-medium">Cores</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {colors.map((color) => (
                      <div key={color} className="flex items-center space-x-2">
                        <Checkbox
                          id={`color-${color}`}
                          checked={selectedColors.includes(color)}
                          onCheckedChange={() => toggleColor(color)}
                        />
                        <Label htmlFor={`color-${color}`} className="text-sm capitalize">
                          {color}
                        </Label>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Themes */}
              <Card>
                <CardContent className="p-4 space-y-4">
                  <Label className="font-medium">Temas</Label>
                  <div className="space-y-2">
                    {themes.map((theme) => (
                      <div key={theme} className="flex items-center space-x-2">
                        <Checkbox
                          id={`theme-${theme}`}
                          checked={selectedThemes.includes(theme)}
                          onCheckedChange={() => toggleTheme(theme)}
                        />
                        <Label htmlFor={`theme-${theme}`} className="text-sm capitalize">
                          {theme}
                        </Label>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Button variant="outline" onClick={clearFilters} className="w-full">
                Limpar Filtros
              </Button>
            </div>
          </aside>

          {/* Products Grid */}
          <main className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <p className="text-muted-foreground">
                {sortedProducts.length} produto{sortedProducts.length !== 1 ? 's' : ''} encontrado{sortedProducts.length !== 1 ? 's' : ''}
              </p>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevância</SelectItem>
                  <SelectItem value="price-low">Menor Preço</SelectItem>
                  <SelectItem value="price-high">Maior Preço</SelectItem>
                  <SelectItem value="newest">Mais Recente</SelectItem>
                  <SelectItem value="rating">Melhor Avaliado</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map((product) => (
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

            {sortedProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">
                  Nenhum produto encontrado com os filtros selecionados.
                </p>
                <Button onClick={clearFilters}>
                  Limpar Filtros
                </Button>
              </div>
            )}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Categoria;