import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebook } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section
      id="contato"
      className="py-16 flex items-center bg-gray-100"
      style={{ minHeight: "calc(100vh)" }} // Ajustando para a altura correta
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-800">
          Entre em Contato
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Formulário de Contato */}
          <Card className="shadow-lg bg-gradient-to-br from-white to-gray-50">
            <CardHeader className="pb-4 border-b">
              <h3 className="text-2xl font-semibold text-gray-700 text-center">
                Envie-nos uma Mensagem
              </h3>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                    Nome
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Seu nome"
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                    E-mail
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Seu e-mail"
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Sua mensagem"
                    rows="4"
                    required
                    className="mt-1"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                >
                  Enviar
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Informações de Contato */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-blue-600 text-xl" />
              <div>
                <h4 className="font-semibold text-lg">Endereço</h4>
                <p className="text-gray-700">Rua Exemplo, 123 - Centro</p>
                <p className="text-gray-700">Cidade, Estado, CEP</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaPhoneAlt className="text-blue-600 text-xl" />
              <div>
                <h4 className="font-semibold text-lg">Telefone</h4>
                <p className="text-gray-700">(11) 1234-5678</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaEnvelope className="text-blue-600 text-xl" />
              <div>
                <h4 className="font-semibold text-lg">E-mail</h4>
                <p className="text-gray-700">contato@empresa.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex items-center space-x-2">
                <a href="#" className="text-blue-600 hover:text-blue-800 text-xl">
                  <FaInstagram />
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800 text-xl">
                  <FaFacebook />
                </a>
              </div>
              <div>
                <h4 className="font-semibold text-lg">Redes Sociais</h4>
                <p className="text-gray-700">Siga-nos para novidades!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
