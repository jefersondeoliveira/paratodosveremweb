
import { Accessibility, Eye, MessageCircle, Heart, ArrowRight, MessageSquare, X } from "lucide-react";
import Navigation from "@/components/Navigation";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";

const Index = () => {
  const [isPixModalOpen, setPixModalOpen] = useState(false);

  const openWhatsApp = () => {
    window.open('https://wa.me/5547996142243', '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openApoiaSe = () => {
    window.open('https://apoia.se/paratodosverem', '_blank');
  };

  const pixCode = "00020126330014BR.GOV.BCB.PIX0111091854946905204000053039865802BR5901N6001C62070503***6304169B";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(pixCode);
    alert("Código PIX copiado!");
  };

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <Section id="home" className="bg-gradient-to-b from-primary/5 to-transparent">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fadeIn">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
              Inclusão Digital
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Tornando o WhatsApp mais acessível para todos
            </h1>
            <p className="text-lg text-muted-foreground">
              Um bot que descreve imagens e figurinhas para pessoas com deficiência visual,
              tornando a comunicação mais inclusiva.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group" onClick={() => scrollToSection('como-usar')}>
                Começar agora
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('sobre')}>
                Saiba mais
              </Button>
            </div>
          </div>
          <div className="relative aspect-square lg:aspect-auto animate-fadeIn">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/5 rounded-full blur-3xl" />
            <div className="relative glass rounded-2xl p-8 aspect-square flex items-center justify-center">
              <MessageCircle className="w-32 h-32 text-primary" />
            </div>
          </div>
        </div>
      </Section>

      <Section id="como-usar">
        <div className="space-y-12 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Como Usar</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Adicionar o #ParaTodosVerem em seu grupo é simples e rápido.
              Você também pode interagir com o bot em conversas privadas!
              Siga os passos abaixo:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageSquare className="w-8 h-8" />,
                title: "Adicione o Bot",
                description: "Adicione o número do bot em seu grupo do WhatsApp ou inicie uma conversa privada",
                action: (
                  <Button
                    onClick={openWhatsApp}
                    className="mt-4 w-full"
                    variant="outline"
                  >
                    Abrir WhatsApp
                  </Button>
                )
              },
              {
                icon: <Eye className="w-8 h-8" />,
                title: "Envie uma Imagem",
                description: "Compartilhe uma imagem ou figurinha no grupo ou privado"
              },
              {
                icon: <Accessibility className="w-8 h-8" />,
                title: "Receba a Descrição",
                description: "O bot enviará automaticamente uma descrição detalhada"
              }
            ].map((step, index) => (
              <Card key={index} className="p-6 text-left hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                  {step.action}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section id="sobre" className="bg-primary/5">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Sobre o Projeto</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              O #ParaTodosVerem nasceu da necessidade de tornar a comunicação digital mais inclusiva.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Nossa Missão</h3>
              <p className="text-muted-foreground">
                Queremos garantir que todas as pessoas, independentemente de suas necessidades especiais,
                possam participar plenamente das conversas em grupo no WhatsApp.
              </p>
              <ul className="space-y-4">
                {[
                  "Descrições precisas e detalhadas",
                  "Privacidade e segurança",
                  "Totalmente gratuito"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass rounded-2xl p-8 aspect-square flex items-center justify-center">
              <Heart className="w-32 h-32 text-primary" />
            </div>
          </div>
        </div>
      </Section>

      <Section id="doacoes">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Apoie o Projeto</h2>
          <p className="text-lg text-muted-foreground">
            O #ParaTodosVerem é um projeto gratuito, mas precisa de apoio para continuar funcionando.
            Sua doação ajuda a manter o serviço ativo e a desenvolver novas funcionalidades.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" onClick={() => setPixModalOpen(true)}>
              Doar via PIX
            </Button>
            <Button size="lg" variant="outline" onClick={openApoiaSe}>
              Apoie via Apoia.se
            </Button>
          </div>
        </div>
      </Section>

      {isPixModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-8 w-full max-w-md relative">
            <button
              className="absolute top-4 right-4"
              onClick={() => setPixModalOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">Doação via PIX</h2>
            <img 
              src="paratodosveremweb/qrcode-pix.png" 
              alt="QR Code PIX" 
              className="mx-auto w-48 h-48 mb-4"
            />
            <p className="text-center mb-4 text-muted-foreground">
              Escaneie o QR Code ou copie o código abaixo:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg text-sm break-words mb-4">
              {pixCode}
            </div>
            <Button 
              onClick={copyToClipboard} 
              className="w-full"
            >
              Copiar Código PIX
            </Button>
          </div>
        </div>
      )}

      <Section id="contato" className="bg-primary/5">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Contato</h2>
            <p className="text-lg text-muted-foreground">
              Tem alguma sugestão ou feedback? Entre em contato conosco!
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Nome
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border bg-background"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border bg-background"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border bg-background"
                required
              />
            </div>
            <a
              href={`mailto:jefersondeoliveiralopes@gmail.com?subject=Mensagem de ${(document.getElementById('name') as HTMLInputElement)?.value || 'novo contato sobre paratodosverem'}&body=${(document.getElementById('message') as HTMLTextAreaElement)?.value || ''}`}
              className="w-full"
            >
              <Button type="button" className="w-full">
                Enviar mensagem
              </Button>
            </a>
          </form>
        </div>
      </Section>

      <footer className="py-8 px-6 border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>Feito com carinho para um mundo mais inclusivo</p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
