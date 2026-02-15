/**
 * Diseño Humanista Orgánico:
 * - Formas orgánicas con bordes curvos asimétricos
 * - Paleta: terracota (#D4A574), verde salvia (#8BA888), beige cremoso (#F5EFE6), azul petróleo (#2C5F6F)
 * - Tipografía: Playfair Display (títulos) + Inter (cuerpo)
 * - Animaciones suaves tipo "respiración" (ease-in-out, 600-800ms)
 * - Layout asimétrico 60/40, evitar centrado absoluto
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Heart, 
  Home as HomeIcon, 
  Hospital, 
  Activity, 
  Users, 
  Clock, 
  Shield, 
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  MessageCircle,
  Star,
  Calendar,
  User,
  ArrowRight
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    descripcion: ''
  });

  const handleFormChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email || !formData.telefono || !formData.servicio) {
      toast.error('Por favor completa todos los campos requeridos');
      return;
    }
    toast.success('¡Gracias por tu pre-registro! Nos contactaremos pronto con tu presupuesto personalizado.');
    setFormData({ nombre: '', email: '', telefono: '', servicio: '', descripcion: '' });
  };

  const services = [
    {
      icon: HomeIcon,
      title: "Cuidados Domiciliarios",
      description: "Atención personalizada en la comodidad de su hogar para pacientes Cognitivos, Paliativos y otras condiciones, con profesionales capacitados que brindan cuidado integral.",
      features: ["Limpieza de la unidad (habitación)", "Aseo e higiene personal", "Juegos lúdicos y estimulación", "Ejercicios de elongación", "Administración de medicamentos", "Toma de signos vitales"],
      image: "https://private-us-east-1.manuscdn.com/sessionFile/eYuZQv3wZfuwwFs7nq57mv/sandbox/YppwhOFI8xFpm7wXkvyIg5-img-4_1770946976000_na1fn_c2VydmljaW9zLWRvbWljaWxpYXJpb3M.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZVl1WlF2M3daZnV3d0ZzN25xNTdtdi9zYW5kYm94L1lwcHdoT0ZJOHhGcG03d1hrdnlJZzUtaW1nLTRfMTc3MDk0Njk3NjAwMF9uYTFmbl9jMlZ5ZG1samFXOXpMV1J2YldsamFXeHBZWEpwYjNNLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=DsEn3A2t4qDgso~r~ALbyvYYEko9i7B6yEinlS8aY~f65E8mYpCveQvc-XiEqo~aHUiydkE-YFM0HgZFROj-ZlWYF3TaHRDexAUI13kQIwAB04acoq5DG-Z76OTw5WP5L~kiaU7ASzrRZ8autnTmCy-HsHKukZ6IzjHFfbPsk4MM81md0YVYflplz-5-C64ug2QoaS0ZSj2PvWzlkqLyShAEHyYcCeiO7jFiqeWcDFb8NQVezQfT0kcVJ3rl~UR7dAmUnsqY-Z4ESddy3cZPA11geHYaeeZfWdAq26Yylk-Ywi6-SPGAWiS3Vp6PoxO1PIGIqLqw153rJE1p4NfsvA__"
    },
    {
      icon: Hospital,
      title: "Cuidados Hospitalarios",
      description: "Acompañamiento profesional durante la hospitalización para pacientes Cognitivos, Paliativos y otras condiciones, asegurando confort y seguimiento médico continuo.",
      features: ["Acompañamiento 24/7", "Coordinación con personal médico", "Apoyo a familiares", "Seguimiento post-hospitalización"],
      image: "https://private-us-east-1.manuscdn.com/sessionFile/eYuZQv3wZfuwwFs7nq57mv/sandbox/YppwhOFI8xFpm7wXkvyIg5-img-3_1770946979000_na1fn_Y3VpZGFkby1ob3NwaXRhbGFyaW8.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZVl1WlF2M3daZnV3d0ZzN25xNTdtdi9zYW5kYm94L1lwcHdoT0ZJOHhGcG03d1hrdnlJZzUtaW1nLTNfMTc3MDk0Njk3OTAwMF9uYTFmbl9ZM1ZwWkdGa2J5MW9iM053YVhSaGJHRnlhVzgucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=oxTpjeEMkPRSQfwDZGcy3rm~8GAIOjyQEQxcvc7InQEeo59AQ8FYCSvUpImw~Csa1sY3SRnaNMZlXQyjK-To343W7LIC6tuT4cGqABC28QmGQ4XINKtUv99MG-3gu1PK8K-Z5teafWGDNXOVkqbDlmSk49d4AD4R8wcGuYAApu3U2stfqphLJSzVdbly~V~SDFe55AH2zHO9FmxEiBpGGdx7BZ2IrhIEVNLzT3U5VqgiPW9ZWGgZKVn5PuR3iyIs4~6lz~XMHYbUaqupLLtSbgtNacLNJhSKp9mM~kxkWxv7~QOcj1F0bCs0VphqjtVJjwxYXB1ZB-JrBm1S0VRHeA__"
    },
    {
      icon: Activity,
      title: "Rehabilitación Física Integral",
      description: "Programas personalizados de fisioterapia para pacientes Cognitivos, Paliativos y otras condiciones, diseñados para recuperar movilidad y autonomía.",
      features: ["Terapia física personalizada", "Ejercicios de movilidad", "Recuperación post-operatoria", "Prevención de lesiones"],
      image: "https://private-us-east-1.manuscdn.com/sessionFile/eYuZQv3wZfuwwFs7nq57mv/sandbox/YppwhOFI8xFpm7wXkvyIg5-img-2_1770946973000_na1fn_cmVoYWJpbGl0YWNpb24tZmlzaWNh.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZVl1WlF2M3daZnV3d0ZzN25xNTdtdi9zYW5kYm94L1lwcHdoT0ZJOHhGcG03d1hrdnlJZzUtaW1nLTJfMTc3MDk0Njk3MzAwMF9uYTFmbl9jbVZvWVdKcGJHbDBZV05wYjI0dFptbHphV05oLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=SmhegnE3rOfHbP6CT8ikU1x2GjJOHh1lbLZMTtscrralwYD4sXzGSJ59FfgbtLsQ7VTB-cK0sS69qPIVNJtuZVHgu96yXjSJ9Bry6nAyqfUQ3q6KQbDcQM0niCBYxnN2~vv7YCENYnA8g5NSK406Z-3eopMECBUFv5wHawiz4G86SH0pykUwktabgLaahQlFiCegz5SK6eBQ~NMxlxJT~LPLU44my6bURRs8TaEqpzCtLSG2VjCWHiOlElXK0H4Zo690lY~S0erFpz~BY3nKILYQreT86deN2w6JSEUc-pR-NrNEa7KMlA-Q7XH6URS4e4sB2-ISIFeVRJXiHdLXJg__"
    },
    {
      icon: Heart,
      title: "Servicios Especializados",
      description: "Atención especializada para pacientes Cognitivos, Paliativos y otras condiciones, incluyendo geriatría y apoyo en enfermedades crónicas.",
      features: ["Cuidados paliativos", "Geriatría especializada", "Manejo de enfermedades crónicas", "Apoyo nutricional"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
    }
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: "Equipo Profesional",
      description: "Personal altamente calificado con experiencia en cuidados especiales y trato humano excepcional."
    },
    {
      icon: Clock,
      title: "Disponibilidad 24/7",
      description: "Estamos disponibles en todo momento para atender sus necesidades y las de sus seres queridos."
    },
    {
      icon: Shield,
      title: "Confianza y Seguridad",
      description: "Protocolos de seguridad certificados y personal verificado para su tranquilidad absoluta."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header/Navegación */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <nav className="container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center">
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663351260548/qxzyiIWZhGwNgFkM.png" alt="BENCOMO Logo" className="h-16 w-auto" />
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#servicios" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                Servicios
              </a>
              <a href="#nosotros" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                Nosotros
              </a>
              <a href="#contacto" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                Contacto
              </a>
              <Button className="rounded-full">
                Solicitar Información
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section - Asimétrico con imagen de fondo */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://private-us-east-1.manuscdn.com/sessionFile/eYuZQv3wZfuwwFs7nq57mv/sandbox/YppwhOFI8xFpm7wXkvyIg5-img-1_1770946976000_na1fn_aGVyby1jdWlkYWRvcy1lc3BlY2lhbGVz.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZVl1WlF2M3daZnV3d0ZzN25xNTdtdi9zYW5kYm94L1lwcHdoT0ZJOHhGcG03d1hrdnlJZzUtaW1nLTFfMTc3MDk0Njk3NjAwMF9uYTFmbl9hR1Z5YnkxamRXbGtZV1J2Y3kxbGMzQmxZMmxoYkdWei5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=VOJI5Myctz1Crv8FKbT3MGPaIRsY2Wd8TosTRGo37xh268R~RWnYs~1g2zLd9YIBCeaaklWf~mw4JelH30yUiv6dI5lW2ndmQLTnnwIXKnNcsi5nbuXdGdadABwKW0R6ik8ouucmgDBMZ4rkHfMMeH72-~njHNfLfFBMr4N6fz44iV8OxPpUkgMA1q43xg6P0Ln6KWQStuv7M9KSFnPQiDI5AiY3dqzwu11K6BZHQCn8LaOrlr68PEXiN5jbIVQa-XAm7MdIGIZV1gfwxLCK4KD8ff5yopbSFCy-mmsOEe4a44TYncRdRsztv-ORX2PG5Yj~p7kZ55x1R4fsA67Yxw__)`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div className="flex justify-center mb-8 animate-fade-in-up">
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663351260548/qxzyiIWZhGwNgFkM.png" alt="BENCOMO Logo" className="h-32 w-auto" />
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6 leading-tight animate-fade-in-up" style={{animationDelay: '100ms'}}>
              Bienestar y Cuidado
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed animate-fade-in-up" style={{animationDelay: '200ms'}}>
              Brindamos servicios de salud especializados en cuidados domiciliarios, hospitalarios y rehabilitación física, 
              priorizando el bienestar integral de cada paciente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{animationDelay: '400ms'}}>
              <Button size="lg" className="rounded-full text-lg px-8 py-6">
                <Phone className="w-5 h-5 mr-2" />
                Contactar Ahora
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-lg px-8 py-6">
                Conocer Servicios
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Servicios */}
      <section id="servicios" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-lg text-muted-foreground">
              Ofrecemos una amplia gama de servicios de salud diseñados para satisfacer las necesidades específicas 
              de cada paciente, siempre con el más alto estándar de calidad y profesionalismo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-all duration-500 cursor-pointer border-2 hover:border-primary/50"
                  onMouseEnter={() => setActiveService(index)}
                  onMouseLeave={() => setActiveService(null)}
                  style={{
                    transform: activeService === index ? 'translateY(-8px)' : 'translateY(0)',
                    transition: 'all 600ms cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700"
                      style={{
                        transform: activeService === index ? 'scale(1.1)' : 'scale(1)'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 bg-primary text-primary-foreground p-3 rounded-2xl">
                      <Icon className="w-8 h-8" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-display font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                          <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Por Qué Elegirnos */}
      <section id="nosotros" className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                ¿Por Qué Elegirnos?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Nos distinguimos por nuestro compromiso con la excelencia en el cuidado de la salud, 
                combinando experiencia profesional con un trato humano excepcional que marca la diferencia 
                en la vida de nuestros pacientes y sus familias.
              </p>
              
              <div className="space-y-6">
                {whyChooseUs.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={index} 
                      className="flex gap-4 p-4 rounded-2xl hover:bg-accent/10 transition-all duration-500"
                    >
                      <div className="shrink-0 w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-secondary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://private-us-east-1.manuscdn.com/sessionFile/eYuZQv3wZfuwwFs7nq57mv/sandbox/YppwhOFI8xFpm7wXkvyIg5-img-5_1770946977000_na1fn_ZXF1aXBvLXByb2Zlc2lvbmFs.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZVl1WlF2M3daZnV3d0ZzN25xNTdtdi9zYW5kYm94L1lwcHdoT0ZJOHhGcG03d1hrdnlJZzUtaW1nLTVfMTc3MDk0Njk3NzAwMF9uYTFmbl9aWEYxYVhCdkxYQnliMlpsYzJsdmJtRnMucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=t1da9lpAHnuVcWQwyAWsYJCj4Swm7-A3kElQUhqgzHIE09NdMf65fq9sTGPtL6xl~eq2KhtNzP6sBgt6vWC9odbJHFVWNibi4~5bCIKRl~INxIEFwDXNcROqSqunYrX2dZU2C~5EJkinCNcz3UmuFE97-HgtdpEazJ0I92IPcgqcwLd9ZKmh2aGXDevUqHIRH~W0DvXCCgEA~rQzZU9n-Q7mNhMJrBNVwDg0~gGzAb~LByM6yOI-JlNXJn8-1ytm7vPw~lOnOLfR99iv5IAmGg6s70coPI1WayVXYkkvK33OwuX0DS9qRePXXsS3U7K~wDG55OUw0W9f0qIrf86-UQ__"
                  alt="Equipo profesional de Cuidados Especiales"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section id="contacto" className="py-20 bg-primary/5">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                Contáctenos
              </h2>
              <p className="text-lg text-muted-foreground">
                Estamos aquí para responder sus consultas y brindarle la información que necesita. 
                No dude en comunicarse con nosotros.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-500">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">Teléfono</h3>
                <p className="text-muted-foreground">+57 302 588 6714</p>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-500">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">Email</h3>
                <p className="text-muted-foreground">info@bencomobc.com</p>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-500">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">Ubicación</h3>
                <p className="text-muted-foreground">Atención en toda la ciudad</p>
              </Card>
            </div>

            <Card className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nombre Completo
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                      placeholder="Su nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Teléfono
                    </label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                      placeholder="Su teléfono"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Correo Electrónico
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                    placeholder="su@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Servicio de Interés
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all">
                    <option>Seleccione un servicio</option>
                    <option>Cuidados Domiciliarios</option>
                    <option>Cuidados Hospitalarios</option>
                    <option>Rehabilitación Física</option>
                    <option>Servicios Especializados</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mensaje
                  </label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
                    placeholder="Cuéntenos cómo podemos ayudarle..."
                  />
                </div>

                <Button size="lg" className="w-full rounded-full text-lg py-6">
                  Enviar Mensaje
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Sección de Precios */}
      <section id="precios" className="py-20 bg-gradient-to-br from-background via-background to-secondary/10">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-4">
              Los Mejores Precios del Mercado
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Planes flexibles adaptados a tus necesidades. Elige el horario que mejor se ajuste a tu situación.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { hours: "6 horas", description: "Cuidado matutino o vespertino", features: ["Aseo personal", "Medicamentos", "Signos vitales", "Comidas"] },
              { hours: "8 horas", description: "Jornada laboral completa", features: ["Todo incluido en 6h", "Ejercicios", "Juegos lúdicos", "Limpieza"] },
              { hours: "10 horas", description: "Cobertura extendida", features: ["Todo incluido en 8h", "Acompañamiento", "Estimulación", "Monitoreo"] },
              { hours: "12 horas", description: "Medio día completo", features: ["Cobertura integral", "Atención prioritaria", "Reportes diarios", "Flexibilidad"] },
              { hours: "24 horas", description: "Cuidado total", features: ["Disponibilidad 24/7", "Emergencias", "Descansos incluidos", "Máxima seguridad"], highlight: true }
            ].map((plan, idx) => (
              <Card key={idx} className={`flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:scale-105 ${plan.highlight ? 'ring-2 ring-primary bg-primary/5' : ''}`}>
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-3xl font-display font-bold text-primary mb-4">{plan.hours}</h3>
                  <p className="text-sm text-foreground/60 mb-6">{plan.description}</p>
                  <ul className="space-y-2 mb-6 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button size="lg" className={`w-full rounded-full ${plan.highlight ? '' : 'variant-outline'}`}>
                    Solicitar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="p-8 bg-primary/10 rounded-2xl border-2 border-primary text-center">
              <p className="text-lg font-semibold text-foreground mb-2">🎉 <strong>Nuevos Clientes</strong></p>
              <p className="text-4xl font-bold text-primary mb-2">10% Descuento</p>
              <p className="text-sm text-foreground/70">Durante el primer mes de servicio</p>
            </div>
            <div className="p-8 bg-accent/10 rounded-2xl border-2 border-accent text-center">
              <p className="text-lg font-semibold text-foreground mb-2">⭐ <strong>Clientes Existentes</strong></p>
              <p className="text-4xl font-bold text-accent mb-2">5% Descuento</p>
              <p className="text-sm text-foreground/70">A partir del segundo mes en adelante</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Reclutamiento */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white dark:bg-card rounded-2xl shadow-lg p-10 border border-primary/20">
              <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                  ¡Únete a Nuestro Equipo!
                </h2>
                <p className="text-lg text-foreground/70">
                  Estamos buscando profesionales comprometidos con la excelencia en el cuidado de la salud
                </p>
              </div>

              <div className="mb-8 p-6 bg-primary/5 rounded-xl border-l-4 border-primary">
                <p className="text-foreground mb-4 leading-relaxed">
                  Si eres <strong>Médico, Enfermero(a), Auxiliar de Enfermería, Profesional de la Salud en Cuidado, Bienestar y Mantenimiento de Pacientes, o Cuidador</strong> y deseas trabajar con nosotros en un ambiente profesional y humanista, ¡nos encantaría conocerte!
                </p>
                <p className="text-foreground/80 text-sm">
                  Ofrecemos oportunidades de crecimiento, capacitación continua y un equipo comprometido con la calidad de vida de nuestros pacientes.
                </p>
              </div>

              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Nombre Completo</label>
                    <input 
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Profesión/Especialidad</label>
                    <input 
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                      placeholder="Ej: Enfermero(a), Cuidador, etc."
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Correo Electrónico</label>
                    <input 
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Teléfono</label>
                    <input 
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                      placeholder="+57 302 588 6714"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Experiencia / Certificaciones</label>
                  <textarea 
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
                    placeholder="Cuéntanos sobre tu experiencia y certificaciones relevantes..."
                  />
                </div>

                <Button size="lg" className="w-full rounded-full text-lg py-6 bg-primary hover:bg-primary/90">
                  Enviar Solicitud de Empleo
                </Button>
              </form>

              <p className="text-center text-sm text-foreground/60 mt-6">
                Revisaremos tu solicitud y nos pondremos en contacto contigo en breve. ¡Gracias por tu interés!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Testimonios */}
      <section className="py-20 bg-gradient-to-br from-background via-secondary/5 to-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-4">
              Lo Que Dicen Nuestros Pacientes
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Historias reales de personas que han confiado en BENCOMO para su cuidado y recuperación.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Ana Lucila Barón",
                service: "Cuidado Domiciliario y Rehabilitación",
                testimonial: "Estuve 7 meses con Ricardo BENCOMO en cuidado domiciliario y rehabilitación hasta mi recuperación de trasplante total de cadera. Lo recomiendo siempre.",
                phone: "+57 320 8938962",
                rating: 5
              },
              {
                name: "Carmen Lucia",
                service: "Cuidado Paliativo",
                testimonial: "Ricardo BENCOMO trabajó con mi esposo Fernando Zamudio en cuidado paliativo. Mis hijas y yo estamos muy contentas con la atención recibida.",
                phone: "+57 313 8522137",
                rating: 5
              },
              {
                name: "Yolanda Caicedo",
                service: "Recomendación Personal",
                testimonial: "Conozco a Ricardo BENCOMO y lo recomiendo ampliamente. Es una persona confiable y dedicada al cuidado de sus pacientes.",
                phone: "+57 314 3139808",
                rating: 5
              }
            ].map((testimonial, idx) => (
              <Card key={idx} className="flex flex-col h-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-6 flex-grow leading-relaxed italic">
                    "{testimonial.testimonial}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground mb-1">{testimonial.name}</p>
                    <p className="text-sm text-foreground/60 mb-3">{testimonial.service}</p>
                    <p className="text-sm text-primary font-medium">{testimonial.phone}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Preguntas Frecuentes */}
      <section className="py-20 bg-gradient-to-br from-background to-secondary/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Resolvemos tus dudas sobre nuestros servicios, contratación y disponibilidad.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border border-border rounded-lg px-6 py-4">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                  ¿Cómo puedo contratar los servicios de BENCOMO?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pt-4">
                  Puedes contactarnos a través de nuestro formulario de pre-registro, llamando al +57 302 588 6714, enviando un email a info@bencomobc.com o usando nuestro chat de WhatsApp. Nos encargaremos de evaluar tus necesidades y ofrecerte un presupuesto personalizado.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border rounded-lg px-6 py-4">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                  ¿Qué tipos de pacientes atienden?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pt-4">
                  Atendemos pacientes Cognitivos, Paliativos y con otras condiciones especiales. Nuestro equipo está capacitado para brindar cuidados domiciliarios, hospitalarios, rehabilitación física y servicios especializados adaptados a cada situación.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border rounded-lg px-6 py-4">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                  ¿Cuáles son los horarios disponibles?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pt-4">
                  Ofrecemos planes flexibles de 6, 8, 10, 12 y 24 horas. Estamos disponibles 24/7 para emergencias y podemos adaptar nuestros horarios a tus necesidades específicas.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border rounded-lg px-6 py-4">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                  ¿Cuáles son las formas de pago?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pt-4">
                  Aceptamos más de una forma de pago para tu comodidad. Contamos con descuentos especiales: 10% para nuevos clientes durante el primer mes y 5% para clientes existentes a partir del segundo mes. Consulta directamente para conocer todas nuestras opciones de pago.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-border rounded-lg px-6 py-4">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                  ¿Qué incluye el cuidado domiciliario?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pt-4">
                  Nuestro cuidado domiciliario incluye: limpieza de la unidad (habitación), aseo e higiene personal, juegos lúdicos y estimulación, ejercicios de elongación, administración de medicamentos y toma de signos vitales.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border border-border rounded-lg px-6 py-4">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                  ¿Cómo puedo trabajar con BENCOMO?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pt-4">
                  Si eres médico, enfermero, auxiliar de enfermería o cuidador profesional, puedes enviar tu solicitud a través de nuestro formulario de reclutamiento. Buscamos profesionales comprometidos con la excelencia en el cuidado de la salud.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Sección de Pre-registro */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-card rounded-2xl shadow-lg p-10 border border-primary/20">
              <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                  Pre-Registro Gratuito
                </h2>
                <p className="text-lg text-foreground/70">
                  Regístrate ahora y recibe una consulta inicial gratuita con presupuesto personalizado
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Nombre Completo *</label>
                    <input 
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Teléfono *</label>
                    <input 
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                      placeholder="+57 302 588 6714"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Servicio Requerido *</label>
                    <select 
                      name="servicio"
                      value={formData.servicio}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                      required
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="Cuidados Domiciliarios">Cuidados Domiciliarios</option>
                      <option value="Cuidados Hospitalarios">Cuidados Hospitalarios</option>
                      <option value="Rehabilitación Física">Rehabilitación Física</option>
                      <option value="Servicios Especializados">Servicios Especializados</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Descripción de Necesidades</label>
                  <textarea 
                    rows={4}
                    name="descripcion"
                    value={formData.descripcion}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
                    placeholder="Cuéntanos sobre tu situación para ofrecerte el mejor servicio..."
                  />
                </div>

                <Button size="lg" className="w-full rounded-full text-lg py-6 bg-primary hover:bg-primary/90">
                  Registrarme Ahora
                </Button>
              </form>

              <p className="text-center text-sm text-foreground/60 mt-6">
                💰 <strong>Beneficio:</strong> Al registrarte, recibirás 10% de descuento durante tu primer mes de servicio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Galería */}
      <section className="py-20 bg-gradient-to-br from-background to-secondary/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-4">
              Galera de BENCOMO
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Conoce nuestro equipo profesional y los espacios donde brindamos cuidado de calidad.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Dedicación",
                description: "Nuestro compromiso diario con el bienestar y cuidado de cada paciente",
                image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663351260548/eAFDHdAdhXsGNTOY.jpg"
              },
              {
                title: "Bienestar",
                description: "Pacientes sonrientes y satisfechos con la calidad de nuestro cuidado integral",
                image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663351260548/uFTUGoEHqMFYAamN.jpg"
              }
            ].map((item, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-64">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 group-hover:from-black/90">
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Botón de WhatsApp Flotante */}
      <a 
        href="https://wa.me/573025886714?text=Hola%20BENCOMO%2C%20me%20gustaría%20conocer%20más%20sobre%20sus%20servicios"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
        title="Contáctanos por WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663351260548/qxzyiIWZhGwNgFkM.png" alt="BENCOMO Logo" className="h-16 w-auto" />
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Brindando servicios de salud con profesionalismo y calidez humana desde hace más de 10 años.
              </p>
            </div>

            <div>
              <h3 className="font-display font-semibold text-lg mb-4">Servicios</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Cuidados Domiciliarios</li>
                <li>Cuidados Hospitalarios</li>
                <li>Rehabilitación Física</li>
                <li>Servicios Especializados</li>
              </ul>
            </div>

            <div>
              <h3 className="font-display font-semibold text-lg mb-4">Contacto</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +57 302 588 6714
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  info@bencomobc.com
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Atención en toda la ciudad
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2026 BENCOMO - Bienestar y Cuidado. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
