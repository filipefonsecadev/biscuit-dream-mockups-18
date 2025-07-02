import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Star, Users, Award, MessageCircle, Mail } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import heroBanner from '@/assets/hero-banner.jpg';
import productWedding from '@/assets/product-wedding.jpg';
import productDecoration from '@/assets/product-decoration.jpg';
import productBaby from '@/assets/product-baby.jpg';

const Sobre = () => {
  const values = [
    {
      icon: Heart,
      title: 'Amor pelo Artesanato',
      description: 'Cada peça é criada com dedicação e carinho, transformando ideias em arte.'
    },
    {
      icon: Star,
      title: 'Qualidade Excepcional',
      description: 'Utilizamos apenas materiais de primeira qualidade para garantir durabilidade.'
    },
    {
      icon: Users,
      title: 'Atendimento Personalizado',
      description: 'Cada cliente é único e merece um atendimento especial e exclusivo.'
    },
    {
      icon: Award,
      title: 'Experiência Comprovada',
      description: 'Anos de experiência criando momentos únicos e inesquecíveis.'
    }
  ];

  const testimonials = [
    {
      name: 'Ana Silva',
      text: 'O topo de bolo do meu casamento ficou perfeito! Superou todas as expectativas.',
      rating: 5,
      image: productWedding
    },
    {
      name: 'Maria Santos',
      text: 'As lembrancinhas da festa da minha filha foram um sucesso. Todos elogiaram!',
      rating: 5,
      image: productBaby
    },
    {
      name: 'João Oliveira',
      text: 'Presenteei minha esposa com um porta-retrato personalizado. Ela amou!',
      rating: 5,
      image: productDecoration
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBanner})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white space-y-4">
            <h1 className="font-handlee text-4xl md:text-6xl font-bold leading-tight">
              Nossa História
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Transformando sonhos em arte através do biscuit há mais de 10 anos
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-handlee text-3xl md:text-4xl font-bold text-foreground">
                Bem-vindos ao Ateliê Biscuit Encantado
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  O <strong>Ateliê Biscuit Encantado</strong> nasceu de uma paixão genuína pelo artesanato 
                  e pela arte de criar momentos especiais através de peças únicas em biscuit.
                </p>
                <p>
                  Há mais de 10 anos, começamos esta jornada com o sonho de levar alegria e 
                  personalização para as celebrações mais importantes da vida das pessoas. Cada 
                  peça que criamos carrega não apenas técnica e qualidade, mas também o amor 
                  e a dedicação que colocamos em nosso trabalho.
                </p>
                <p>
                  Especializamo-nos em criar lembrancinhas para casamentos, festas infantis, 
                  aniversários, batizados e todas as ocasiões que merecem ser celebradas com 
                  algo verdadeiramente especial e personalizado.
                </p>
                <p>
                  Nossa missão é transformar seus momentos especiais em memórias eternas, 
                  criando peças que contam histórias e despertam sorrisos.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link to="/categoria/personalizados">Ver Personalizados</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contato">Entre em Contato</Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img 
                src={productWedding} 
                alt="Trabalhos em biscuit" 
                className="rounded-lg shadow-artisan"
              />
              <img 
                src={productBaby} 
                alt="Peças artesanais" 
                className="rounded-lg shadow-artisan mt-8"
              />
              <img 
                src={productDecoration} 
                alt="Decorações personalizadas" 
                className="rounded-lg shadow-artisan -mt-8"
              />
              <img 
                src={heroBanner} 
                alt="Ateliê" 
                className="rounded-lg shadow-artisan"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-artisan-yellow/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-handlee text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossos Valores
            </h2>
            <p className="text-muted-foreground text-lg">
              O que nos move e inspira todos os dias
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-artisan transition-artisan">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-handlee text-xl font-bold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-handlee text-3xl md:text-4xl font-bold text-foreground mb-4">
              Como Trabalhamos
            </h2>
            <p className="text-muted-foreground text-lg">
              Do conceito à entrega, cada etapa é cuidadosamente planejada
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-artisan rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
                1
              </div>
              <h3 className="font-handlee text-xl font-bold">Consulta Personalizada</h3>
              <p className="text-muted-foreground">
                Conversamos sobre suas ideias, tema da festa e preferências para criar 
                algo verdadeiramente único.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-artisan rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
                2
              </div>
              <h3 className="font-handlee text-xl font-bold">Criação Artesanal</h3>
              <p className="text-muted-foreground">
                Cada peça é cuidadosamente modelada à mão, pintada e finalizada 
                com atenção aos mínimos detalhes.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-artisan rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
                3
              </div>
              <h3 className="font-handlee text-xl font-bold">Entrega Especial</h3>
              <p className="text-muted-foreground">
                Suas peças são embaladas com carinho e entregues prontas para 
                encantar em seu evento especial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-handlee text-3xl md:text-4xl font-bold text-foreground mb-4">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-muted-foreground text-lg">
              Depoimentos reais de quem confia em nosso trabalho
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-artisan transition-artisan">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">Cliente satisfeita</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-artisan text-white">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="font-handlee text-3xl md:text-4xl font-bold">
            Pronta para Criar Algo Especial?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Entre em contato conosco e vamos juntas criar as peças perfeitas 
            para o seu evento especial. Cada sonho merece ser realizado!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contato" className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Fale Conosco
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/categoria/personalizados" className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sobre;