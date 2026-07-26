import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

const Contact = () => {
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
          type: 'contact',
        }),
      });
      
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
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
            Entre em Contato
          </h1>
          <p className="text-xl text-muted-foreground">
            Temos interesse em ouvir você. Envie-nos uma mensagem!
          </p>
        </div>

        {/* Contact Form */}
        <Card className="p-8">
          {submitted && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
              ✓ Mensagem enviada com sucesso! Entraremos em contato em breve.
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
                placeholder="Seu nome"
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
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                placeholder="Sua mensagem aqui..."
              />
            </div>

            <Button type="submit" size="lg" className="w-full">
              Enviar Mensagem
            </Button>
          </form>
        </Card>

        {/* Info */}
        <Card className="p-8 mt-8 bg-muted">
          <h2 className="text-2xl font-bold text-primary mb-4">Outras Formas de Contato</h2>
          <div className="space-y-3 text-muted-foreground">
            <p><strong>Email:</strong> luizgustavo66101@gmail.com</p>
            <p><strong>GitHub:</strong> github.com/luizgustavo66101-code</p>
            <p><strong>LinkedIn:</strong> linkedin.com/in/gustavo</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
