import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Star, Heart, ShoppingCart, Plus, Minus, Truck, Shield, RotateCcw, ChevronLeft } from 'lucide-react';
import { useUser } from '@/context/UserContext';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import productWedding from '@/assets/product-wedding.jpg';
import productDecoration from '@/assets/product-decoration.jpg';
import productBaby from '@/assets/product-baby.jpg';
import productChristmas from '@/assets/product-christmas.jpg';

const Produto = () => {
  const { id } = useParams();
  const { addToCart } = useUser();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [customization, setCustomization] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Simulação de produto - em um app real, buscaria por ID
  const product = {
    id: id || '1',
    name: 'Topo de Bolo Casal Personalizado',
    price: 45.00,
    originalPrice: 55.00,
    description: 'Lindo topo de bolo personalizado para casamento, feito em biscuit com acabamento delicado. Personalizamos as cores do vestido, terno e outros detalhes conforme sua preferência.',
    images: [productWedding, productDecoration, productBaby],
    category: 'casamento',
    rating: 5,
    reviewCount: 47,
    isNew: false,
    isBestSeller: true,
    availability: 'in-stock', // 'in-stock', 'out-of-stock', 'pre-order'
    productionTime: '7-10 dias úteis',
    colors: ['Branco', 'Rosa', 'Azul', 'Vermelho'],
    sizes: ['Pequeno (8cm)', 'Médio (12cm)', 'Grande (15cm)'],
    specifications: {
      material: 'Biscuit (Porcelana Fria)',
      dimensions: '12cm altura x 8cm largura',
      weight: '50g',
      care: 'Manter em local seco e arejado'
    }
  };

  const relatedProducts = [
    {
      id: '2',
      name: 'Lembrancinha Coração',
      price: 4.50,
      image: productDecoration,
      category: 'casamento'
    },
    {
      id: '3',
      name: 'Kit Festa Infantil',
      price: 89.90,
      image: productBaby,
      category: 'infantil'
    },
    {
      id: '4',
      name: 'Decoração Mesa',
      price: 32.00,
      image: productDecoration,
      category: 'decoracao'
    }
  ];

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      toast({
        title: "Selecione as opções",
        description: "Por favor, escolha cor e tamanho antes de adicionar ao carrinho",
        variant: "destructive"
      });
      return;
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      image: product.images[0],
      category: product.category,
      customization: `Cor: ${selectedColor}, Tamanho: ${selectedSize}${customization ? `, Personalização: ${customization}` : ''}`
    });

    toast({
      title: "Produto adicionado!",
      description: `${quantity}x ${product.name} foi adicionado ao carrinho 🎨`
    });
  };

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link to={`/categoria/${product.category}`} className="hover:text-primary capitalize">
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.originalPrice && (
                <Badge className="absolute top-4 left-4 bg-destructive text-destructive-foreground">
                  Promoção
                </Badge>
              )}
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-3 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-artisan ${
                    currentImageIndex === index ? 'border-primary' : 'border-border'
                  }`}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                {product.isBestSeller && (
                  <Badge className="bg-promo text-promo-foreground">Mais Vendido</Badge>
                )}
                {product.isNew && (
                  <Badge className="bg-accent text-accent-foreground">Novo</Badge>
                )}
              </div>
              
              <h1 className="font-handlee text-3xl font-bold text-foreground mb-4">
                {product.name}
              </h1>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  ({product.reviewCount} avaliações)
                </span>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <span className="font-bold text-3xl text-primary">
                  R$ {product.price.toFixed(2).replace('.', ',')}
                </span>
                {product.originalPrice && (
                  <span className="text-xl line-through text-muted-foreground">
                    R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                  </span>
                )}
              </div>
            </div>

            {/* Options */}
            <div className="space-y-4">
              <div>
                <Label className="text-base font-medium mb-2 block">Cor</Label>
                <Select value={selectedColor} onValueChange={setSelectedColor}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a cor" />
                  </SelectTrigger>
                  <SelectContent>
                    {product.colors.map((color) => (
                      <SelectItem key={color} value={color}>{color}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-base font-medium mb-2 block">Tamanho</Label>
                <Select value={selectedSize} onValueChange={setSelectedSize}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tamanho" />
                  </SelectTrigger>
                  <SelectContent>
                    {product.sizes.map((size) => (
                      <SelectItem key={size} value={size}>{size}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-base font-medium mb-2 block">
                  Personalização (Opcional)
                </Label>
                <Textarea
                  placeholder="Descreva como gostaria de personalizar sua peça..."
                  value={customization}
                  onChange={(e) => setCustomization(e.target.value)}
                  className="min-h-20"
                />
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Label className="text-base font-medium">Quantidade:</Label>
                <div className="flex items-center border rounded-lg">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={decreaseQuantity}
                    className="h-10 w-10 p-0"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="flex items-center justify-center h-10 w-12 text-center">
                    {quantity}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={increaseQuantity}
                    className="h-10 w-10 p-0"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex gap-3">
                <Button onClick={handleAddToCart} size="lg" className="flex-1">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Adicionar ao Carrinho
                </Button>
                <Button variant="outline" size="lg" className="px-3">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Product Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <Truck className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <p className="font-medium">Entrega</p>
                  <p className="text-sm text-muted-foreground">Frete grátis acima de R$ 100</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 text-center">
                  <Shield className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <p className="font-medium">Garantia</p>
                  <p className="text-sm text-muted-foreground">30 dias</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 text-center">
                  <RotateCcw className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <p className="font-medium">Produção</p>
                  <p className="text-sm text-muted-foreground">{product.productionTime}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="mt-16 space-y-8">
          <Separator />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="font-handlee text-2xl font-bold mb-4">Descrição</h2>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>
            
            <div>
              <h2 className="font-handlee text-2xl font-bold mb-4">Especificações</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Material:</span>
                  <span className="text-muted-foreground">{product.specifications.material}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Dimensões:</span>
                  <span className="text-muted-foreground">{product.specifications.dimensions}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Peso:</span>
                  <span className="text-muted-foreground">{product.specifications.weight}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Cuidados:</span>
                  <span className="text-muted-foreground">{product.specifications.care}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <Separator className="mb-8" />
          
          <h2 className="font-handlee text-3xl font-bold text-center mb-8">
            Você pode gostar também
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card key={relatedProduct.id} className="group hover:shadow-artisan transition-artisan overflow-hidden">
                <div className="relative">
                  <img 
                    src={relatedProduct.image} 
                    alt={relatedProduct.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-artisan"
                  />
                </div>
                <CardContent className="p-4 space-y-3">
                  <h3 className="font-semibold">{relatedProduct.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg text-primary">
                      R$ {relatedProduct.price.toFixed(2).replace('.', ',')}
                    </span>
                    <Button asChild size="sm">
                      <Link to={`/produto/${relatedProduct.id}`}>Ver</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Back to Category */}
        <div className="mt-8 text-center">
          <Button asChild variant="outline">
            <Link to={`/categoria/${product.category}`} className="flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" />
              Voltar para {product.category}
            </Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Produto;