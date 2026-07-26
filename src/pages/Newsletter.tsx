import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

const Newsletter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          type: 'newsletter',
        }),
      });
      
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Erro ao inscrever-se:', error);
    }
  };

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
            Newsletter IA 2025
          </h1>
          <p className="text-xl text-muted-foreground">
            Receba as últimas notícias, tendências e recursos sobre Inteligência Artificial
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-primary mb-3">📰 Conteúdo Exclusivo</h3>
            <p className="text-muted-foreground">
              Artigos semanais sobre as tendências mais recentes em IA
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-primary mb-3">🛠️ Ferramentas Recomendadas</h3>
            <p className="text-muted-foreground">
              Descubra as melhores ferramentas e plataformas de IA do mercado
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-primary mb-3">📊 Análises de Mercado</h3>
            <p className="text-muted-foreground">
              Dados e insights sobre o mercado de Inteligência Artificial
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-primary mb-3">👥 Comunidade</h3>
            <p className="text-muted-foreground">
              Conecte-se com outros profissionais e especialistas de IA
            </p>
          </Card>
        </div>

        {/* Subscription Form */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Inscreva-se Agora</h2>
          
          {submitted && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
              ✓ Inscrição realizada com sucesso! Bem-vindo à comunidade.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-semibold text-primary mb-2">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                placeholder="Seu nome completo"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-semibold text-primary mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                placeholder="seu.email@exemplo.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-semibold text-primary mb-2">
                Sobre Você (Opcional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                placeholder="Conte-nos um pouco sobre você e seus interesses em IA..."
              />
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="terms"
                required
                className="mt-1 mr-3"
              />
              <label htmlFor="terms" className="text-muted-foreground">
                Concordo em receber comunicações sobre IA e aceito a política de privacidade
              </label>
            </div>

            <Button type="submit" size="lg" className="w-full">
              Inscrever-se na Newsletter
            </Button>
          </form>
        </Card>

        {/* Privacy Note */}
        <Card className="p-6 bg-muted">
          <p className="text-sm text-muted-foreground">
            <strong>Privacidade:</strong> Nunca compartilharemos seu email com terceiros. 
            Você pode desinscrever-se a qualquer momento clicando no link no final de cada email.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Newsletter;
