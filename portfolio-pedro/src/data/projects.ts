import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 11,
    name: "D4fto's Planner",
    description: "Aplicação web desenvolvida como projeto de estudo em React. Trata-se de um calendário interativo que permite organizar eventos e tarefas por data, oferecendo personalização de cores e uma interface moderna, dinâmica e intuitiva para gerenciamento do dia a dia.",
    technologies: ['react', 'tailwind', 'css3', 'javascript'],
    imageUrl: 'https://d4fto.github.io/images/plannercover.png',
    demoUrl: 'https://d4fto.github.io/planner/',
    repoUrl: 'https://github.com/D4fto/planner',
    status: 'completed',

  },
  {
    id: 15,
    name: "GQuiz",
    description: "Plataforma de quiz multiplayer em tempo real desenvolvida para a Gincana da UTFPR. O projeto possui sistema de mundos e fases, quizzes aleatórios configuráveis e salas competitivas online. Fui responsável pelo desenvolvimento completo do backend utilizando Node.js e Prisma ORM, modelagem do banco PostgreSQL no Supabase, implementação de autenticação JWT com sistema de roles (user/admin) e criação do sistema multiplayer em tempo real via WebSocket com socket.io, além do deploy em Render e integração com Vercel.",
    technologies: ['nodejs', 'javascript', 'prisma', 'postgresql', 'socketio'],
    imageUrl: 'https://g-quizz.vercel.app/cover.png',
    demoUrl: 'https://g-quizz.vercel.app/',
    repoUrl: 'https://github.com/D4fto/GQuiz',
    status: 'completed',
    featured: true
  },
  {
  id: 16,
    name: "WhatABot",
    description: "Bot inteligente para WhatsApp desenvolvido em Node.js utilizando a biblioteca whatsapp-web.js. O projeto integra inteligência artificial via Groq para geração de respostas contextuais e possui sistema de Text-to-Speech capaz de converter mensagens em áudios enviados diretamente no WhatsApp. Inclui comandos personalizados, personalidades de IA, processamento de áudio com FFmpeg e execução em tempo real, com deploy realizado em instância AWS EC2.",
    technologies: [
      'nodejs',
      'javascript',
      'ai',
      'whatsapp',
      'aws',
    ],
    imageUrl: 'https://d4fto.github.io/images/whatabotcover.png', // troque se tiver uma capa melhor
    repoUrl: 'https://github.com/D4fto/WhatABot',
    status: 'completed',
    featured: true
  },
  {
    id: 13,
    name: "Investec",
    description: "Projeto acadêmico voltado ao controle financeiro pessoal, permitindo registrar e visualizar despesas de forma organizada. Desenvolvido em React com integração à API Google Charts para geração de gráficos interativos e análise visual dos gastos.",
    technologies: ['react', 'css3', 'javascript'],
    imageUrl: 'https://d4fto.github.io/images/gastoscover.png',
    repoUrl: 'https://github.com/D4fto/ControleDeGastosDW2',
    status: 'completed',

  },
  {
    id: 4,
    name: "Agroview",
    description: "Projeto desenvolvido em 48 horas durante o hackathon NASA Space Apps 2024. A plataforma auxilia agricultores na tomada de decisões utilizando dados climáticos e observação da Terra, indicando condições ideais para plantio, colheita e pulverização.",
    technologies: ['nodejs', 'html5', 'css3', 'javascript'],
    imageUrl: 'https://d4fto.github.io/images/agroviewcover.png',
    demoUrl: 'https://agroview-sjsk.onrender.com/',
    repoUrl: 'https://github.com/gimenezhiago/hackathon-vibranium',
    status: 'completed',
    featured: true
  },
  {
    id: 1,
    name: "Epic Gomes",
    description: "Plataforma web inspirada em lojas digitais como Steam e Epic Games Store. O projeto começou como um trabalho de banco de dados em PHP e foi posteriormente migrado para Node.js, evoluindo para uma aplicação completa de gerenciamento e visualização de jogos.",
    technologies: ['nodejs', 'html5', 'css3', 'javascript', 'mysql'],
    imageUrl: 'https://d4fto.github.io/images/epicgomescover.png',
    demoUrl: 'https://epicgomes.onrender.com/',
    repoUrl: 'https://github.com/D4fto/epic_gomes',
    status: 'in-progress'
  },
  {
    id: 12,
    name: "Linux Defender",
    description: "Jogo autoral criado para aprendizado da engine Godot e primeiro contato com a linguagem C#. O projeto explora mecânicas de combate e progressão enquanto aprofunda conceitos de desenvolvimento de jogos.",
    technologies: ['csharp', 'mysql'],
    imageUrl: 'https://d4fto.github.io/images/linuxdefendercover.png',
    demoUrl: 'https://d4fto.itch.io/linuxdefender',
    status: 'in-progress'
  },
  {
    id: 3,
    name: "flappyIA",
    description: "Projeto experimental inspirado no canal Universo Programado, focado no estudo de redes neurais e algoritmos genéticos. O site apresenta uma inteligência artificial treinada para jogar automaticamente uma variação do Flappy Bird.",
    technologies: ['html5', 'css3', 'javascript'],
    imageUrl: 'https://d4fto.github.io/images/flappyIAcover.png',
    demoUrl: 'https://d4fto.github.io/flappyIA/',
    repoUrl: 'https://github.com/D4fto/flappyIA',
    status: 'in-progress'
  },
  {
    id: 2,
    name: "Comcam",
    description: "Projeto iniciado em um trabalho escolar de geografia e posteriormente expandido para uma plataforma web informativa. O site reúne e apresenta dados relevantes das cidades pertencentes à região da COMCAM de forma centralizada e acessível.",
    technologies: ['html5', 'css3', 'javascript'],
    imageUrl: 'https://d4fto.github.io/images/comcamcover.png',
    demoUrl: 'https://comcam24-utfpr.onrender.com/',
    repoUrl: 'https://github.com/D4fto/comcam24',
    status: 'completed'
  },
  {
    id: 5,
    name: "Reaction",
    description: "Aplicação web para teste de tempo de reação inspirada no Human Benchmark. Desenvolvida como projeto pessoal para explorar eventos em tempo real, precisão de tempo e interatividade no navegador.",
    technologies: ['html5', 'css3', 'javascript'],
    imageUrl: 'https://d4fto.github.io/images/reactioncover.png',
    demoUrl: 'https://d4fto.github.io/reaction/',
    repoUrl: 'https://github.com/D4fto/reaction',
    status: 'completed'
  },
  {
    id: 6,
    name: "Linux Defender Legacy",
    description: "Jogo roguelike desenvolvido como projeto pessoal, inspirado em experiências do ensino técnico. O jogador utiliza o mascote do Linux em batalhas contra diferentes versões do Windows, combinando humor e mecânicas arcade.",
    technologies: ['html5', 'css3', 'javascript'],
    imageUrl: 'https://d4fto.github.io/images/linuxdefenderlegacycover.png',
    demoUrl: 'https://d4fto.github.io/linuxDefender/',
    repoUrl: 'https://github.com/D4fto/linuxDefender',
    status: 'in-progress'
  },
  {
    id: 7,
    name: "Pong da Vida",
    description: "Projeto acadêmico que combina o clássico Pong com o Jogo da Vida de Conway. Desenvolvido em Python utilizando Pygame e posteriormente adaptado para a web com Pygbag.",
    technologies: ['python'],
    imageUrl: 'https://d4fto.github.io/images/pongcover.png',
    demoUrl: 'https://d4fto.github.io/pong/',
    repoUrl: 'https://github.com/D4fto/pong',
    status: 'completed'
  },
  {
    id: 8,
    name: "Sapataria Passo Fino",
    description: "Sistema web desenvolvido para modelagem e gerenciamento interno de uma sapataria. Utiliza Node.js e MySQL, além de comunicação em tempo real via WebSocket para atualização dinâmica dos dados.",
    technologies: ['nodejs', 'html5', 'css3', 'javascript', 'mysql'],
    imageUrl: 'https://d4fto.github.io/images/sapatariacover.png',
    demoUrl: 'https://sapatariapf.onrender.com/',
    repoUrl: 'https://github.com/D4fto/sapatariaPF',
    status: 'completed'
  },
  {
    id: 9,
    name: "Gyroscopic Mouse",
    description: "Aplicação que permite controlar o cursor do computador remotamente utilizando o giroscópio do celular. A comunicação ocorre via rede Wi-Fi, permitindo uso prático em apresentações sem necessidade de dispositivos adicionais.",
    technologies: ['html5', 'css3', 'javascript', 'python'],
    imageUrl: 'https://d4fto.github.io/images/mousecover.png',
    repoUrl: 'https://github.com/D4fto/gyroscopicMouse',
    status: 'completed'
  },
  {
    id: 10,
    name: "UniAlert",
    description: "Landing page desenvolvida para disciplina do ensino técnico com o objetivo de conscientizar sobre a importância do ensino superior, apresentando informações de forma visual e acessível.",
    technologies: ['html5', 'css3', 'javascript'],
    imageUrl: 'https://d4fto.github.io/images/unialertcover.png',
    demoUrl: 'https://d4fto.github.io/uniAlert/',
    repoUrl: 'https://github.com/D4fto/uniAlert',
    status: 'completed'
  }
];