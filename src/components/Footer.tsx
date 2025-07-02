import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import logoImage from '@/assets/logo.png';

const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular inscrição na newsletter
    alert('Obrigada por se inscrever em nossa newsletter!');
  };

  return (
    <footer className="bg-gradient-artisan text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={logoImage} alt="Ateliê Biscuit Encantado" className="h-12 w-auto" />
              <div>
                <h3 className="font-handlee text-lg font-bold">Ateliê Biscuit Encantado</h3>
                <p className="text-sm opacity-90">Artesanato com amor</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Criamos peças únicas em biscuit com muito carinho e dedicação. 
              Cada produto é feito à mão especialmente para você!
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="p-2 text-white hover:bg-white/20">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 text-white hover:bg-white/20">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 text-white hover:bg-white/20">
                <MessageCircle className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Links Rápidos</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/categoria/decoracao" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                Decoração
              </Link>
              <Link to="/categoria/presentes" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                Presentes
              </Link>
              <Link to="/categoria/personalizados" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                Personalizados
              </Link>
              <Link to="/promocoes" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                Promoções
              </Link>
              <Link to="/sobre" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                Sobre Nós
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contato</h4>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">contato@ateliebiscuit.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4" />
                <span className="text-sm">(11) 98888-8888</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span className="text-sm">
                  São Paulo, SP<br />
                  Atendimento em toda Grande SP
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Newsletter</h4>
            <p className="text-sm opacity-90">
              Receba novidades e promoções exclusivas!
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Seu email"
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-white"
              />
              <Button type="submit" className="w-full bg-white text-primary hover:bg-white/90">
                Inscrever-se
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-1 text-sm opacity-90">
              <span>© 2024 Ateliê Biscuit Encantado. Feito com</span>
              <Heart className="h-4 w-4 text-red-300" />
              <span>para você!</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/politica-privacidade" className="opacity-90 hover:opacity-100 transition-opacity">
                Política de Privacidade
              </Link>
              <Link to="/termos-uso" className="opacity-90 hover:opacity-100 transition-opacity">
                Termos de Uso
              </Link>
              <Link to="/politica-entrega" className="opacity-90 hover:opacity-100 transition-opacity">
                Política de Entrega
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;