import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Mail, Github, Linkedin, GraduationCap, MapPin, Calendar, ExternalLink, BookOpen, Users, Award, Building, Code, Wrench } from 'lucide-react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('bio')

  const navigation = [
    { id: 'bio', label: 'Bio' },
    { id: 'education', label: 'Educación' },
    { id: 'experience', label: 'Experiencia' },
    { id: 'research', label: 'Investigación' },
    { id: 'publications', label: 'Publicaciones' },
    { id: 'teaching', label: 'Docencia' },
    { id: 'tools', label: 'Herramientas' },
    { id: 'students', label: 'Estudiantes' },
    { id: 'contact', label: 'Contacto' }
  ]

  const interests = [
    'Biomatemáticas',
    'Análisis Topológico de Datos',
    'Modelado Epidemiológico',
    'Bioinformática',
    'Resistencia Antimicrobiana',
    'Metagenómica',
    'Machine Learning'
  ]

  const skills = [
    { category: 'Programación', items: ['Python', 'R', 'Bash', 'Git/GitHub'] },
    { category: 'Análisis de Datos', items: ['Machine Learning', 'Análisis Topológico', 'Estadística Bayesiana'] },
    { category: 'Bioinformática', items: ['Metagenómica', 'Pangenómica', 'Minería Genómica'] },
    { category: 'Modelado', items: ['Epidemiología Matemática', 'Redes Complejas', 'Ecuaciones Diferenciales'] }
  ]

  const currentProjects = [
    {
      title: 'Brote epidémico de VIH en Ciudad de México',
      description: 'Utilizando modelos matemáticos y redes de movilidad para correlacionar la cercanía de las cepas detectadas entre pacientes.',
      tags: ['Epidemiología', 'Redes', 'VIH']
    },
    {
      title: 'Resistencia Antimicrobiana',
      description: 'Aplicando análisis topológico de datos para detectar transferencia horizontal de genes de resistencia.',
      tags: ['TDA', 'Resistencia', 'Genómica']
    },
    {
      title: 'MicroAgroBiome',
      description: 'Plataforma de datos estandarizados de microbiomas de cultivos agrícolas con 554 metagenomas de 28 cultivos.',
      tags: ['Metagenómica', 'Agricultura', 'Base de datos']
    },
    {
      title: 'Cuatro Ciénegas, Coahuila',
      description: 'Estudio de organismos ancestrales a partir de 35 muestras metagenómicas de pozas, tapetes microbianos y microbialitas.',
      tags: ['Metagenómica', 'Evolución', 'Microbiología']
    }
  ]

  const allPublications = [
    {
      title: "MicroAgroBiome: A toolkit for exploring specialized metabolism and ecological interactions in rhizosphere microbiomes of cultivated crops",
      journal: "Nucleic Acids Research",
      year: "2025",
      status: "En revisión"
    },
    {
      title: "Topological data analysis captures Horizontal Gene Transfer in Antimicrobial Resistance gene families among clinically relevant bacteria",
      journal: "Frontiers in Genetics",
      year: "2025",
      doi: "10.3389/fmicb.2025.1461293"
    },
    {
      title: "Environmental enrichment-induced cognitive recovery after a moderate pediatric traumatic brain injury is associated with the gut microbiota and neuroinflammation",
      journal: "Experimental Neurology",
      year: "2025",
      doi: "10.1016/j.expneurol.2024.115109"
    },
    {
      title: "A Class of mutualistic systems having an almost periodic global attractor",
      journal: "Differential Equations and Dynamical Systems",
      year: "2025",
      doi: "10.1007/s12591-023-00639-w"
    },
    {
      title: "MIBiG 4.0: advancing biosynthetic gene cluster curation through global collaboration",
      journal: "Nucleic Acids Research",
      year: "2024",
      doi: "10.1093/nar/gkae1115"
    },
    {
      title: "CAMDA 2023: finding patterns in urban microbiomes",
      journal: "Frontiers in Genetics",
      year: "2024",
      doi: "10.3389/fgene.2024.1449461"
    },
    {
      title: "Solving Weighted Orthogonal Procrustes Problems via a Projected Gradient Method",
      journal: "TCAM",
      year: "2024",
      doi: "10.5540/tcam.2024.025.e01786"
    },
    {
      title: "Meeting the Challenge of Genomic Analysis: A Collaboratively Developed Workshop for Pangenomics and Topological Data Analysis",
      journal: "Bioinformatics Advances",
      year: "2024",
      doi: "10.1093/bioadv/vbae139"
    },
    {
      title: "Periodic orbits in a seasonal SIRS model with both incidence and treatment generalized rates",
      journal: "Revista Colombiana de Matemáticas",
      year: "2024",
      doi: "10.15446/recolma.v57n1.112372"
    },
    {
      title: "Periodic solutions of seasonal epidemiological models with information-dependent vaccination",
      journal: "Mathematical Methods in the Applied Sciences",
      year: "2023",
      doi: "10.1002/mma.9728"
    },
    {
      title: "Biosynthetic gene profiling and genomic potential of the novel photosynthetic marine bacterium Roseibaca domitiana",
      journal: "Frontiers in Microbiology",
      year: "2023",
      doi: "10.3389/fmicb.2023.1238779"
    },
    {
      title: "Genomic study and lipidomic bioassay of Leeuwenhoekiella parthenopeia: A novel rare biosphere marine bacterium that inhibits tumor cell viability",
      journal: "Frontiers in Microbiology",
      year: "2023",
      doi: "10.3389/fmicb.2022.1090197"
    },
    {
      title: "Periodic solutions for seasonal SIQRS models with nonlinear infection terms",
      journal: "Electronic Journal Differential Equations",
      year: "2019",
      volume: "Vol 2019, No. 92, pp 1-13"
    },
    {
      title: "Existence of periodic solutions for seasonal epidemic models with quarantine",
      journal: "Revista Integración",
      year: "2018",
      doi: "10.18273/revint.v36n1-2018003"
    },
    {
      title: "Different types backward bifurcations on account of an improvement in treatment efficiency",
      journal: "Revista Integración",
      year: "2018",
      doi: "10.18273/revint.v36n1-2018002"
    }
  ]

  const carpentriesLessons = [
    {
      title: "Metagenomics Analysis",
      description: "Lección completa sobre análisis de datos metagenómicos, incluyendo control de calidad, ensamblaje y anotación funcional.",
      url: "https://carpentries-lab.github.io/metagenomics-analysis/",
      category: "Carpentries Lab",
      tags: ["Metagenómica", "Análisis de datos", "Bioinformática"]
    },
    {
      title: "Topological Data Analysis",
      description: "Introducción al análisis topológico de datos aplicado a problemas biológicos y genómicos.",
      url: "https://carpentries-incubator.github.io/topological-data-analysis/",
      category: "Carpentries Incubator",
      tags: ["TDA", "Topología", "Análisis de datos"]
    },
    {
      title: "Pangenomics",
      description: "Análisis pangenómico para estudiar la diversidad genética y evolución de poblaciones microbianas.",
      url: "https://carpentries-incubator.github.io/pangenomics/",
      category: "Carpentries Incubator",
      tags: ["Pangenómica", "Genómica comparada", "Evolución"]
    },
    {
      title: "Genome Mining",
      description: "Técnicas de minería genómica para la identificación de clústeres de genes biosintéticos.",
      url: "https://carpentries-incubator.github.io/genome-mining/",
      category: "Carpentries Incubator",
      tags: ["Minería genómica", "Biosíntesis", "Productos naturales"]
    }
  ]

  const softwareCarpentryLessons = [
    {
      title: "The Unix Shell",
      description: "Introducción a la línea de comandos Unix/Linux para análisis de datos científicos.",
      url: "https://swcarpentry.github.io/shell-novice/",
      category: "Software Carpentry",
      tags: ["Bash", "Shell", "Línea de comandos"]
    },
    {
      title: "Version Control with Git",
      description: "Control de versiones con Git para proyectos de investigación colaborativa.",
      url: "https://swcarpentry.github.io/git-novice/",
      category: "Software Carpentry",
      tags: ["Git", "Control de versiones", "Colaboración"]
    },
    {
      title: "Programming with R",
      description: "Programación en R para análisis de datos científicos y visualización.",
      url: "https://swcarpentry.github.io/r-novice-inflammation/",
      category: "Software Carpentry",
      tags: ["R", "Programación", "Análisis de datos"]
    }
  ]

  const personalTools = [
    {
      title: "plotSIRmodels",
      description: "Herramienta en R para visualizar y analizar modelos epidemiológicos SIR y sus variantes.",
      url: "https://github.com/shadayguerrero/plotSIRmodels",
      category: "Herramienta Personal",
      tags: ["R", "Epidemiología", "Modelado", "Visualización"]
    },
    {
      title: "Tools Bioinformatics",
      description: "Colección de herramientas y scripts para análisis bioinformáticos diversos.",
      url: "https://github.com/shadayguerrero/tools_bionformatics",
      category: "Herramienta Personal",
      tags: ["Python", "Bioinformática", "Scripts", "Análisis"]
    }
  ]

  const students = [
    {
      name: "Juan Francisco Espinosa Maya",
      degree: "Tesina de maestría",
      thesis: "Análisis topológico de datos aplicado a la minería genómica",
      status: "En proceso de titulación",
      program: "Programa de Posgrado conjunto en ciencias matemáticas, CCM-UNAM y la UMSNH"
    },
    {
      name: "Luis Yovanny Bedolla Galvan",
      degree: "Tesis de Licenciatura",
      thesis: "Evomining en python",
      status: "En proceso",
      program: "Licenciatura en Tecnologías para la Información en Ciencias, ENES Morelia",
      github: "https://github.com/GalvanLuis/EvoMining_ng"
    }
  ]

  const renderSection = () => {
    switch (activeSection) {
      case 'bio':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-6xl font-bold">
                SG
              </div>
              <h1 className="text-4xl font-bold mb-2">Dr. Shaday Guerrero Flores</h1>
              <p className="text-xl text-muted-foreground mb-4">Biomatemático y Científico Computacional</p>
              <p className="text-lg text-muted-foreground">Centro de Investigación y de Estudios Avanzados del IPN (CINVESTAV), Unidad Irapuato</p>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Acerca de mí</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed">
                  Soy un matemático, bioinformático y científico computacional con amplia experiencia en ciencia de datos, 
                  bioinformática, metagenómica y modelado matemático. Mi especialidad se centra en la biología evolutiva, 
                  análisis de comunidades microbianas y transferencia horizontal de genes, aplicando aprendizaje automático 
                  y análisis topológico de datos (TDA) a conjuntos de datos biológicos complejos.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  Tengo una sólida formación en diseño de algoritmos, redes complejas y análisis de big data, con habilidades 
                  demostradas en el desarrollo de pipelines computacionales escalables para analizar datos genómicos y 
                  metagenómicos. Mi experiencia en investigación interdisciplinaria me ha permitido colaborar con biólogos, 
                  biotecnólogos y científicos computacionales para abordar desafíos clave en genómica, epidemiología y sostenibilidad.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Áreas de Interés</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Habilidades Técnicas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skills.map((skillGroup, index) => (
                    <div key={index}>
                      <h4 className="font-semibold mb-2">{skillGroup.category}</h4>
                      <div className="flex flex-wrap gap-1">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case 'education':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Educación</h2>
            
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5" />
                    Doctorado en Ciencias Matemáticas
                  </CardTitle>
                  <CardDescription>
                    Instituto de Física Matemática de la Universidad Michoacana de San Nicolás de Hidalgo y 
                    Centro de Ciencias Matemáticas de la UNAM, Morelia México
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">Septiembre 2017 – Diciembre 2021</p>
                  <p><strong>Tesis:</strong> Dinámica de Modelos Epidemiológicos Estacionales</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5" />
                    Maestría en Ciencias en Matemáticas
                  </CardTitle>
                  <CardDescription>
                    Instituto de Física Matemática de la Universidad Michoacana de San Nicolás de Hidalgo y 
                    Centro de Ciencias Matemáticas de la UNAM, Morelia México
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">Febrero 2015 - Agosto 2017</p>
                  <p><strong>Tesis:</strong> Interacción Depredador-Presa en Sistemas de Reacción-Difusión</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5" />
                    Licenciatura en Ciencias Matemáticas
                  </CardTitle>
                  <CardDescription>
                    Universidad Centro Occidental Lisandro Alvarado (UCLA), Barquisimeto Venezuela
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">Noviembre 2007 – Julio 2014</p>
                  <p><strong>Tesis:</strong> Funciones Ortogonales y el Átomo de Hidrógeno</p>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      case 'experience':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Experiencia Profesional</h2>
            
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5" />
                    Profesor Visitante
                  </CardTitle>
                  <CardDescription>
                    Centro de Investigación y de Estudios Avanzados del Instituto Politécnico Nacional (CINVESTAV), Unidad Irapuato
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">Marzo 2025 – Presente</p>
                  <p>Departamento de Ingeniería Genética – Laboratorio de Bioinformática y Redes Complejas. Participa en actividades de investigación y académicas en bioinformática y biología de sistemas.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5" />
                    Investigador Postdoctoral
                  </CardTitle>
                  <CardDescription>
                    Centro de Ciencias Matemáticas, UNAM Campus Morelia
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">Octubre 2022 - Septiembre 2024</p>
                  <p>Lideré proyectos de investigación en bioinformática, metagenómica, minería de genomas y pangenómica, con énfasis en análisis topológico de datos (TDA) y machine learning.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5" />
                    Investigador Postdoctoral
                  </CardTitle>
                  <CardDescription>
                    Centro de Investigación en Matemáticas, A.C
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">Junio 2022 - Septiembre 2022</p>
                  <p>Trabajé en proyectos que cerraban las brechas entre la geometría, la topología y la genómica, utilizando análisis topológico de datos aplicado a datos genómicos.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5" />
                    Profesor de Asignatura
                  </CardTitle>
                  <CardDescription>
                    Escuela Nacional de Estudios Superiores de la UNAM, Unidad Morelia
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">Agosto 2017 - Julio 2025</p>
                  <p>Impartí cursos de Modelado Matemático, Modelos Matemáticos en Ecología, Biodiversidad y Conservación, y Bioinformática en las licenciaturas de Ciencias Ambientales, Ecología y Tecnología de la Información en Ciencias.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      case 'research':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Proyectos de Investigación Actuales</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentProjects.map((project, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )

      case 'publications':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Publicaciones</h2>
            
            <div className="space-y-4">
              {allPublications.map((pub, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{pub.title}</CardTitle>
                    <CardDescription>
                      <span className="font-medium">{pub.journal}</span> • {pub.year}
                      {pub.status && <span className="ml-2 text-orange-600">({pub.status})</span>}
                      {pub.volume && <span className="ml-2 text-muted-foreground">• {pub.volume}</span>}
                    </CardDescription>
                  </CardHeader>
                  {pub.doi && (
                    <CardContent>
                      <a 
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        <ExternalLink className="h-3 w-3" />
                        DOI: {pub.doi}
                      </a>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        )

      case 'tools':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Lecciones Carpentries y Herramientas Computacionales</h2>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Code className="h-6 w-6" />
                Lecciones Carpentries Especializadas
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {carpentriesLessons.map((lesson, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{lesson.title}</CardTitle>
                      <CardDescription>{lesson.category}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">{lesson.description}</p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {lesson.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <a 
                        href={lesson.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        <ExternalLink className="h-3 w-3" />
                        Ver lección
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <BookOpen className="h-6 w-6" />
                Software Carpentry
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {softwareCarpentryLessons.map((lesson, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{lesson.title}</CardTitle>
                      <CardDescription>{lesson.category}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">{lesson.description}</p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {lesson.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <a 
                        href={lesson.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        <ExternalLink className="h-3 w-3" />
                        Ver lección
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Wrench className="h-6 w-6" />
                Herramientas Desarrolladas
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {personalTools.map((tool, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{tool.title}</CardTitle>
                      <CardDescription>{tool.category}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">{tool.description}</p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {tool.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <a 
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        <Github className="h-3 w-3" />
                        Ver en GitHub
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )

      case 'students':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Formación de Estudiantes</h2>
            
            <div className="space-y-4">
              {students.map((student, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      {student.name}
                    </CardTitle>
                    <CardDescription>{student.program}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2"><strong>{student.degree}:</strong> {student.thesis}</p>
                    <p className="text-sm text-muted-foreground mb-2"><strong>Estado:</strong> {student.status}</p>
                    {student.github && (
                      <a 
                        href={student.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        <Github className="h-3 w-3" />
                        Repositorio GitHub
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )

      case 'contact':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Contacto</h2>
            
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">shadayguerrero@gmail.com</p>
                      <p className="text-sm text-muted-foreground">shaday.guerrero@cinvestav.mx</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Ubicación</p>
                      <p className="text-sm text-muted-foreground">Irapuato, Guanajuato, México</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">GitHub</p>
                      <a 
                        href="https://github.com/shadayguerrero"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        github.com/shadayguerrero
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">ORCID</p>
                      <a 
                        href="https://orcid.org/my-orcid?orcid=0009-0000-7112-8018"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        0009-0000-7112-8018
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <BookOpen className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">ResearchGate</p>
                      <a 
                        href="https://www.researchgate.net/profile/Shaday-Guerrero-Flores"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        Shaday Guerrero Flores
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-bold">Dr. Shaday Guerrero</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden border-b bg-background">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-wrap gap-2">
            {navigation.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveSection(item.id)}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {renderSection()}
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Dr. Shaday Guerrero Flores. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <a href="mailto:shadayguerrero@gmail.com" className="text-muted-foreground hover:text-primary">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://github.com/shadayguerrero" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.researchgate.net/profile/Shaday-Guerrero-Flores" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <BookOpen className="h-5 w-5" />
              </a>
              <a href="https://orcid.org/my-orcid?orcid=0009-0000-7112-8018" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <GraduationCap className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

