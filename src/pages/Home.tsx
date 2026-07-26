import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'wouter';

const Home = () => {
  useEffect(() => {
    document.title = 'Portal IA 2025 - O Futuro da Inteligência Artificial';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            Portal IA 2025
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            O Futuro da Inteligência Artificial
          </p>
          <Link href="/about">
            <Button size="lg" className="mr-4">
              Saiba Mais
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg">
              Entrar em Contato
            </Button>
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3 text-primary">IA Avançada</h3>
            <p className="text-muted-foreground">
              Explore as tecnologias mais recentes em inteligência artificial
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3 text-primary">Inovação</h3>
            <p className="text-muted-foreground">
              Descubra soluções inovadoras para problemas complexos
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3 text-primary">Comunidade</h3>
            <p className="text-muted-foreground">
              Conecte-se com especialistas e entusiastas de IA
            </p>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="p-8 bg-primary text-primary-foreground text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para o futuro?</h2>
          <p className="mb-6 text-lg opacity-90">
            Junte-se a nossa comunidade e fique atualizado com as últimas inovações em IA
          </p>
          <Link href="/newsletter">
            <Button variant="secondary" size="lg">
              Inscrever-se na Newsletter
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default Home;