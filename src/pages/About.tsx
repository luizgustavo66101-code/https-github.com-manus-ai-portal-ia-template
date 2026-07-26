import { Card } from '@/components/ui/card';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link href="/">
            <Button variant="outline" className="mb-6">
              ← Voltar
            </Button>
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            Sobre Portal IA 2025
          </h1>
          <p className="text-xl text-muted-foreground">
            Conheça nossa missão e visão para o futuro da Inteligência Artificial
          </p>
        </div>

        {/* Mission */}
        <Card className="p-8 mb-8">
          <h2 className="text-3xl font-bold text-primary mb-4">Nossa Missão</h2>
          <p className="text-lg text-muted-foreground mb-4">
            Portal IA 2025 foi criado com a missão de democratizar o conhecimento sobre Inteligência Artificial,
            tornando-o acessível para profissionais, estudantes e entusiastas de todas as áreas.
          </p>
          <p className="text-lg text-muted-foreground">
            Acreditamos que a IA é a tecnologia mais transformadora da próxima década, e todos devem ter
            oportunidade de aprender, explorar e aplicar essas ferramentas em seus projetos.
          </p>
        </Card>

        {/* Vision */}
        <Card className="p-8 mb-8">
          <h2 className="text-3xl font-bold text-primary mb-4">Nossa Visão</h2>
          <p className="text-lg text-muted-foreground mb-4">
            Ser a principal referência em português para aprendizado sobre IA, oferecendo:
          </p>
          <ul className="text-lg text-muted-foreground space-y-3">
            <li className="flex items-start">
              <span className="text-primary mr-3">✓</span>
              <span>Conteúdo de qualidade sobre conceitos e tendências em IA</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">✓</span>
              <span>Ferramentas práticas e recursos para desenvolvimento</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">✓</span>
              <span>Comunidade ativa de especialistas e entusiastas</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">✓</span>
              <span>Atualizações constantes sobre o mercado de IA</span>
            </li>
          </ul>
        </Card>

        {/* CTA */}
        <Card className="p-8 bg-primary text-primary-foreground text-center">
          <h2 className="text-2xl font-bold mb-4">Pronto para explorar?</h2>
          <Link href="/">
            <Button variant="secondary" size="lg">
              Voltar ao Início
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default About;