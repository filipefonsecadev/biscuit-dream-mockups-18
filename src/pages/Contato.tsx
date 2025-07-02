import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Facebook } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contato = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome, email e mensagem",
        variant: "destructive"
      });
      return;
    }

    // Simular envio
    toast({
      title: "Mensagem enviada! 💌",
      description: "Obrigada pelo contato! Responderemos em breve."
    });

    // Limpar formulário
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      info: '(11) 99999-9999',
      description: 'Segunda à sexta, 9h às 18h'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      info: '(11) 98888-8888',
      description: 'Resposta rápida e personalizada'
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'contato@ateliebiscuit.com',
      description: 'Respondemos em até 24h'
    },
    {
      icon: MapPin,
      title: 'Localização',
      info: 'São Paulo, SP',
      description: 'Atendimento em toda Grande SP'
    }
  ];

  const subjects = [
    'Orçamento personalizado',
    'Dúvidas sobre produtos',
    'Prazos de entrega',
    'Festa infantil',
    'Casamento',
    'Eventos corporativos',
    'Outros'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-warm text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-handlee text-4xl md:text-6xl font-bold text-foreground mb-4">
            Entre em Contato
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos aqui para tirar suas dúvidas e ajudar a criar algo especial para você!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="shadow-artisan">
                <CardHeader>
                  <CardTitle className="font-handlee text-2xl">Envie sua Mensagem</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Nome *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Seu nome completo"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="seu@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Telefone</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject">Assunto</Label>
                        <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione um assunto" />
                          </SelectTrigger>
                          <SelectContent>
                            {subjects.map((subject) => (
                              <SelectItem key={subject} value={subject}>
                                {subject}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Mensagem *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Conte-nos sobre seu projeto, event ou dúvida..."
                        className="min-h-32"
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="font-handlee text-3xl font-bold mb-6">Como nos Encontrar</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                  {contactInfo.map((item, index) => (
                    <Card key={index} className="hover:shadow-artisan transition-artisan">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                            <item.icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">{item.title}</h3>
                            <p className="font-medium text-primary">{item.info}</p>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <Card className="hover:shadow-artisan transition-artisan">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Horário de Atendimento
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span>Segunda à Sexta</span>
                    <span className="font-medium">9h às 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado</span>
                    <span className="font-medium">9h às 14h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo</span>
                    <span className="text-muted-foreground">Fechado</span>
                  </div>
                  <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                    <p className="text-sm text-primary">
                      💡 <strong>Dica:</strong> Para orçamentos urgentes, use nosso WhatsApp!
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="hover:shadow-artisan transition-artisan">
                <CardHeader>
                  <CardTitle>Siga-nos nas Redes Sociais</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <Button variant="outline" size="lg" className="flex-1">
                      <Instagram className="h-5 w-5 mr-2" />
                      Instagram
                    </Button>
                    <Button variant="outline" size="lg" className="flex-1">
                      <Facebook className="h-5 w-5 mr-2" />
                      Facebook
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3 text-center">
                    Veja nossos trabalhos e inspire-se com nossas criações!
                  </p>
                </CardContent>
              </Card>

              {/* FAQ Quick Links */}
              <Card className="hover:shadow-artisan transition-artisan">
                <CardHeader>
                  <CardTitle>Dúvidas Frequentes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Qual o prazo de entrega?</h4>
                    <p className="text-sm text-muted-foreground">
                      Normalmente 7-10 dias úteis para peças personalizadas.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Fazem entrega?</h4>
                    <p className="text-sm text-muted-foreground">
                      Sim! Entregamos em toda Grande São Paulo.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Posso personalizar as cores?</h4>
                    <p className="text-sm text-muted-foreground">
                      Claro! Personalizamos conforme sua preferência.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-handlee text-3xl font-bold mb-4">Nossa Localização</h2>
            <p className="text-muted-foreground">
              Atendemos toda a região da Grande São Paulo
            </p>
          </div>
          
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-handlee text-2xl font-bold mb-2">São Paulo, SP</h3>
              <p className="text-muted-foreground mb-6">
                Trabalhamos com entrega e também recebemos clientes mediante agendamento.
                Entre em contato para combinarmos o melhor para você!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button>
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Chamar no WhatsApp
                </Button>
                <Button variant="outline">
                  <Phone className="h-4 w-4 mr-2" />
                  Ligar Agora
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;