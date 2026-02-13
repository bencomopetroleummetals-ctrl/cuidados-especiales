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
  CheckCircle2
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      icon: HomeIcon,
      title: "Cuidados Domiciliarios",
      description: "Atención personalizada en la comodidad de su hogar, con profesionales capacitados que brindan cuidado integral y acompañamiento constante.",
      features: ["Asistencia personal", "Administración de medicamentos", "Compañía y apoyo emocional", "Cuidados de higiene"],
      image: "https://private-us-east-1.manuscdn.com/sessionFile/eYuZQv3wZfuwwFs7nq57mv/sandbox/YppwhOFI8xFpm7wXkvyIg5-img-4_1770946976000_na1fn_c2VydmljaW9zLWRvbWljaWxpYXJpb3M.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZVl1WlF2M3daZnV3d0ZzN25xNTdtdi9zYW5kYm94L1lwcHdoT0ZJOHhGcG03d1hrdnlJZzUtaW1nLTRfMTc3MDk0Njk3NjAwMF9uYTFmbl9jMlZ5ZG1samFXOXpMV1J2YldsamFXeHBZWEpwYjNNLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=DsEn3A2t4qDgso~r~ALbyvYYEko9i7B6yEinlS8aY~f65E8mYpCveQvc-XiEqo~aHUiydkE-YFM0HgZFROj-ZlWYF3TaHRDexAUI13kQIwAB04acoq5DG-Z76OTw5WP5L~kiaU7ASzrRZ8autnTmCy-HsHKukZ6IzjHFfbPsk4MM81md0YVYflplz-5-C64ug2QoaS0ZSj2PvWzlkqLyShAEHyYcCeiO7jFiqeWcDFb8NQVezQfT0kcVJ3rl~UR7dAmUnsqY-Z4ESddy3cZPA11geHYaeeZfWdAq26Yylk-Ywi6-SPGAWiS3Vp6PoxO1PIGIqLqw153rJE1p4NfsvA__"
    },
    {
      icon: Hospital,
      title: "Cuidados Hospitalarios",
      description: "Acompañamiento profesional durante la hospitalización, asegurando confort, seguimiento médico y apoyo continuo para pacientes y familiares.",
      features: ["Acompañamiento 24/7", "Coordinación con personal médico", "Apoyo a familiares", "Seguimiento post-hospitalización"],
      image: "https://private-us-east-1.manuscdn.com/sessionFile/eYuZQv3wZfuwwFs7nq57mv/sandbox/YppwhOFI8xFpm7wXkvyIg5-img-3_1770946979000_na1fn_Y3VpZGFkby1ob3NwaXRhbGFyaW8.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZVl1WlF2M3daZnV3d0ZzN25xNTdtdi9zYW5kYm94L1lwcHdoT0ZJOHhGcG03d1hrdnlJZzUtaW1nLTNfMTc3MDk0Njk3OTAwMF9uYTFmbl9ZM1ZwWkdGa2J5MW9iM053YVhSaGJHRnlhVzgucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=oxTpjeEMkPRSQfwDZGcy3rm~8GAIOjyQEQxcvc7InQEeo59AQ8FYCSvUpImw~Csa1sY3SRnaNMZlXQyjK-To343W7LIC6tuT4cGqABC28QmGQ4XINKtUv99MG-3gu1PK8K-Z5teafWGDNXOVkqbDlmSk49d4AD4R8wcGuYAApu3U2stfqphLJSzVdbly~V~SDFe55AH2zHO9FmxEiBpGGdx7BZ2IrhIEVNLzT3U5VqgiPW9ZWGgZKVn5PuR3iyIs4~6lz~XMHYbUaqupLLtSbgtNacLNJhSKp9mM~kxkWxv7~QOcj1F0bCs0VphqjtVJjwxYXB1ZB-JrBm1S0VRHeA__"
    },
    {
      icon: Activity,
      title: "Rehabilitación Física Integral",
      description: "Programas personalizados de fisioterapia y rehabilitación diseñados para recuperar movilidad, fuerza y autonomía en cada paciente.",
      features: ["Terapia física personalizada", "Ejercicios de movilidad", "Recuperación post-operatoria", "Prevención de lesiones"],
      image: "https://private-us-east-1.manuscdn.com/sessionFile/eYuZQv3wZfuwwFs7nq57mv/sandbox/YppwhOFI8xFpm7wXkvyIg5-img-2_1770946973000_na1fn_cmVoYWJpbGl0YWNpb24tZmlzaWNh.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZVl1WlF2M3daZnV3d0ZzN25xNTdtdi9zYW5kYm94L1lwcHdoT0ZJOHhGcG03d1hrdnlJZzUtaW1nLTJfMTc3MDk0Njk3MzAwMF9uYTFmbl9jbVZvWVdKcGJHbDBZV05wYjI0dFptbHphV05oLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=SmhegnE3rOfHbP6CT8ikU1x2GjJOHh1lbLZMTtscrralwYD4sXzGSJ59FfgbtLsQ7VTB-cK0sS69qPIVNJtuZVHgu96yXjSJ9Bry6nAyqfUQ3q6KQbDcQM0niCBYxnN2~vv7YCENYnA8g5NSK406Z-3eopMECBUFv5wHawiz4G86SH0pykUwktabgLaahQlFiCegz5SK6eBQ~NMxlxJT~LPLU44my6bURRs8TaEqpzCtLSG2VjCWHiOlElXK0H4Zo690lY~S0erFpz~BY3nKILYQreT86deN2w6JSEUc-pR-NrNEa7KMlA-Q7XH6URS4e4sB2-ISIFeVRJXiHdLXJg__"
    },
    {
      icon: Heart,
      title: "Servicios Especializados",
      description: "Atención especializada para condiciones específicas, incluyendo cuidados paliativos, geriatría, y apoyo en enfermedades crónicas.",
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
            <div className="flex items-center gap-2">
              <Heart className="w-8 h-8 text-primary" />
              <span className="text-2xl font-display font-semibold text-foreground">
                Cuidados Especiales
              </span>
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
            <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6 leading-tight animate-fade-in-up">
              Cuidado Profesional con Calidez Humana
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
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-500">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">Email</h3>
                <p className="text-muted-foreground">info@cuidadosespeciales.com</p>
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

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-8 h-8" />
                <span className="text-2xl font-display font-semibold">
                  Cuidados Especiales
                </span>
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
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  info@cuidadosespeciales.com
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Atención en toda la ciudad
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2026 Cuidados Especiales. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
