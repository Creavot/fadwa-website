// Case study detail content, keyed by slug. Order matches translations.js portfolio.items order.
// "In their words" is intentionally omitted site-wide until real testimonials exist, see case-studies/README.md.

const caseStudies = {
  'aios-setup-walkthrough': {
    hasAssets: true,
    illustrative: true,
    screenshots: [
      { src: '/case-studies/aios-setup-walkthrough/screenshot-0.png', caption: { en: 'The transformation: everything scattered goes in, one connected system comes out.', fr: 'La transformation : tout ce qui était éparpillé entre, un système connecté en sort.' } },
      { src: '/case-studies/aios-setup-walkthrough/screenshot-1.png', caption: { en: 'The workspace after setup: priorities, client base, offers, and operations, all connected.', fr: 'Le workspace après le setup : priorités, base de clients, offres et opérations, tout connecté.' } },
      { src: '/case-studies/aios-setup-walkthrough/screenshot-2.png', caption: { en: 'Automation opportunities, identified and ranked by leverage.', fr: "Opportunités d'automatisation, identifiées et classées par impact." } },
    ],
    loomUrl: null,
    en: {
      hook: "If you disappeared for two weeks, would your business survive without you? After one 2-hour session, yes. Everything that only lived in your head now lives in a system that runs with or without you.",
      whoFor: [
        "You've re-explained the same thing to a new hire or VA three times because nothing is written down anywhere.",
        "You've scrolled through weeks of WhatsApp just to remember what you promised a client.",
        "Your \"system\" is a notes app, a few sticky notes, and your own memory, and you're the only one who can run it.",
        "You've tried to organize your business before, gotten overwhelmed trying to fix everything at once, and given up.",
        "You know exactly what to do next, until you're too tired to remember, and then nothing moves for days.",
      ],
      problem: "The business only worked because one person personally remembered everything, every single day. Client history lived in old WhatsApp threads. Priorities shifted depending on whatever felt loudest that morning. Every new hire had to be re-trained from scratch because nothing existed outside the founder's head. The moment she got sick, distracted, or simply tired, the business didn't just slow down, it stopped.",
      whatChanged: "Every part of the business got pulled out of her head and into one connected system, her real priorities, her actual client history, her voice, her offers, the way she genuinely works, not a generic template. By the end of the 2 hours, she could ask the system a question, the way you'd ask a trusted operations manager, and get a specific, correct answer back instantly.",
      results: [
        '2 hours, and 40+ separate "only I know this" facts about the business documented and connected',
        'Any future hire, VA, or AI tool can now be onboarded from the system, not from her memory',
        'Zero dependency on her being available, reachable, or well-rested for the business to keep functioning',
      ],
      underHood: 'A structured 4-step session: diagnose what is actually broken, decide what to automate and what not to, build what matters, hand off with full documentation and a walkthrough.',
    },
    fr: {
      hook: "Si vous disparaissiez deux semaines, votre entreprise survivrait-elle sans vous ? Après une seule session de 2 heures, oui. Tout ce qui ne vivait que dans votre tête vit désormais dans un système qui tourne avec ou sans vous.",
      whoFor: [
        "Vous avez expliqué la même chose trois fois à une nouvelle recrue ou une assistante virtuelle parce que rien n'est écrit nulle part.",
        "Vous avez fait défiler des semaines de WhatsApp juste pour vous rappeler ce que vous aviez promis à un client.",
        "Votre \"système\", c'est une appli de notes, quelques post-it et votre mémoire, et vous êtes la seule à savoir le faire tourner.",
        "Vous avez déjà essayé d'organiser votre entreprise, vous vous êtes sentie dépassée à vouloir tout régler d'un coup, et vous avez abandonné.",
        "Vous savez exactement quoi faire ensuite, jusqu'à ce que vous soyez trop fatiguée pour vous en souvenir, et là plus rien n'avance pendant des jours.",
      ],
      problem: "L'entreprise ne fonctionnait que parce qu'une seule personne se souvenait de tout, chaque jour. L'historique des clients vivait dans de vieilles conversations WhatsApp. Les priorités changeaient selon ce qui criait le plus fort ce matin-là. Chaque nouvelle recrue devait être reformée de zéro parce que rien n'existait en dehors de la tête de la fondatrice. Dès qu'elle tombait malade, se laissait distraire ou était simplement fatiguée, l'entreprise ne ralentissait pas, elle s'arrêtait.",
      whatChanged: "Chaque partie de l'entreprise a été sortie de sa tête pour rejoindre un seul système connecté, ses vraies priorités, son véritable historique client, sa voix, ses offres, sa façon réelle de travailler, pas un modèle générique. À la fin des 2 heures, elle pouvait poser une question au système, comme à une responsable des opérations de confiance, et obtenir une réponse précise et juste, instantanément.",
      results: [
        '2 heures, et plus de 40 informations "seule moi le sais" sur l\'entreprise documentées et connectées',
        "Toute future recrue, assistante virtuelle ou outil IA peut désormais être formé à partir du système, pas de sa mémoire",
        "Zéro dépendance à sa disponibilité, sa joignabilité ou son niveau de fatigue pour que l'entreprise continue de fonctionner",
      ],
      underHood: "Une session structurée en 4 étapes : diagnostiquer ce qui bloque réellement, décider quoi automatiser et quoi laisser de côté, construire ce qui compte, transmettre avec documentation complète et vidéo de prise en main.",
    },
  },
  'ai-business-audit': {
    hasAssets: true,
    illustrative: true,
    screenshots: [
      { src: '/case-studies/ai-business-audit/screenshot-1.png', caption: { en: 'Business overview and current tools, mapped on one page.', fr: "Aperçu de l'entreprise et outils actuels, cartographiés sur une page." } },
      { src: '/case-studies/ai-business-audit/screenshot-2.png', caption: { en: 'What to automate, restructure, or drop, plus the 6-week roadmap.', fr: 'Quoi automatiser, restructurer ou abandonner, plus la feuille de route sur 6 semaines.' } },
    ],
    loomUrl: null,
    en: {
      hook: "She was spending 70% of her time on work that didn't need her brain. Now she knows exactly what to fix first.",
      whoFor: "You're a coach with a handful of active clients, no real systems, and a growing sense that you're busy but not moving forward.",
      problem: '5 active clients, everything held together by habit and memory, no clear sense of what was actually worth fixing.',
      whatChanged: 'A full review of how the business actually runs day to day, then a clear, prioritized answer: what to automate, what to restructure, and what to drop entirely.',
      results: [
        '11 processes reviewed',
        '3 worth automating, 4 needing restructuring, 4 eliminated entirely',
        '70% of her time was going to work that did not require her judgment',
        'Walked away with a clear 6-week implementation roadmap',
      ],
      underHood: 'A one-page strategic audit: current tools mapped, manual processes identified, what to automate and what not to (with reasoning for both), priority order for what to build first.',
    },
    fr: {
      hook: "Elle passait 70 % de son temps sur des tâches qui ne demandaient pas son expertise. Elle sait maintenant exactement quoi corriger en premier.",
      whoFor: "Vous êtes coach avec quelques clients actifs, aucun système réel, et le sentiment grandissant d'être occupée sans avancer.",
      problem: "5 clients actifs, tout tenait grâce à l'habitude et à la mémoire, aucune idée claire de ce qui valait vraiment la peine d'être corrigé.",
      whatChanged: "Une revue complète du fonctionnement quotidien réel de l'entreprise, puis une réponse claire et priorisée : quoi automatiser, quoi restructurer, quoi abandonner complètement.",
      results: [
        '11 processus examinés',
        '3 méritaient d\'être automatisés, 4 nécessitaient une restructuration, 4 ont été éliminés',
        '70 % de son temps partait dans des tâches qui ne demandaient pas son jugement',
        'Repartie avec une feuille de route claire sur 6 semaines',
      ],
      underHood: "Un audit stratégique d'une page : outils actuels cartographiés, processus manuels identifiés, ce qu'il faut automatiser et ce qu'il ne faut pas (avec le raisonnement pour chaque cas), ordre de priorité pour ce qui se construit en premier.",
    },
  },
  'speed-to-lead-system': {
    hasAssets: true,
    screenshots: [
      { src: '/case-studies/speed-to-lead-system/screenshot-1.png', caption: { en: 'The automation workflow: a Facebook lead triggers an AI-drafted message, then email, WhatsApp, CRM, and an internal notification all update automatically.', fr: "Le workflow d'automatisation : un lead Facebook déclenche un message rédigé par IA, puis email, WhatsApp, CRM et une notification interne se mettent à jour automatiquement." } },
      { src: '/case-studies/speed-to-lead-system/screenshot-2.png', caption: { en: 'The lead profile, created automatically in the CRM the moment the lead comes in.', fr: 'Le profil du prospect, créé automatiquement dans le CRM dès son arrivée.' } },
      { src: '/case-studies/speed-to-lead-system/screenshot-3.png', caption: { en: 'The agent gets notified instantly, with the full lead details.', fr: "L'agente est notifiée instantanément, avec tous les détails du prospect." } },
    ],
    loomUrl: 'https://www.loom.com/share/952ecf204eca40428f2df88926f0b812',
    en: {
      hook: 'She stopped losing deals to faster competitors, every lead now gets a personal reply in under 5 minutes.',
      whoFor: "You're a real estate agent, and you know speed wins deals, but leads sit for hours before you get to them, and by then they've already talked to someone else.",
      problem: 'The agent was following up 3 to 4 hours after a lead came in. By then, the prospect had already spoken to someone else, deal lost, every time, to nothing but slow response time.',
      whatChanged: 'Every new lead now gets a personalized message within 5 minutes, followed by a WhatsApp message and a direct booking link, no manual work required.',
      results: [
        'Response time: 3 to 4 hours, down to under 5 minutes',
        'She no longer loses deals to speed',
      ],
      underHood: 'Captures leads from Facebook Lead Ads and responds in under 5 minutes with a personalized AI-written email, a WhatsApp message, and a booking link. Lead profile auto-created in the CRM. Agent notified instantly.',
    },
    fr: {
      hook: "Elle a arrêté de perdre des mandats face à des concurrents plus réactifs, chaque prospect reçoit désormais une réponse personnalisée en moins de 5 minutes.",
      whoFor: "Vous êtes agent immobilier, et vous savez que la rapidité fait gagner des mandats, mais vos prospects attendent des heures avant que vous les contactiez, et à ce moment-là, ils ont déjà parlé à quelqu'un d'autre.",
      problem: "L'agente contactait ses prospects 3 à 4 heures après leur première prise de contact. À ce stade, ils avaient déjà parlé à quelqu'un d'autre, mandat perdu, à chaque fois, uniquement à cause du temps de réponse.",
      whatChanged: "Chaque nouveau prospect reçoit désormais un message personnalisé en moins de 5 minutes, suivi d'un message WhatsApp et d'un lien de réservation direct, sans aucune intervention manuelle.",
      results: [
        'Temps de réponse : 3 à 4 heures, ramené à moins de 5 minutes',
        'Elle ne perd plus de mandats à cause de la réactivité',
      ],
      underHood: "Capture les prospects depuis Facebook Lead Ads et répond en moins de 5 minutes avec un email personnalisé généré par IA, un message WhatsApp et un lien de réservation. Profil du prospect créé automatiquement dans le CRM. L'agente est notifiée instantanément.",
    },
  },
  'ai-smart-inbox-automation': {
    hasAssets: true,
    screenshots: [
      { src: '/case-studies/ai-smart-inbox-automation/screenshot-1.png', caption: { en: 'The automation workflow: incoming emails get analyzed by AI and routed to a notification or a drafted reply, plus a weekly summary pipeline.', fr: "Le workflow d'automatisation : les emails entrants sont analysés par IA et dirigés vers une notification ou une réponse rédigée, plus un pipeline de résumé hebdomadaire." } },
      { src: '/case-studies/ai-smart-inbox-automation/screenshot-2.png', caption: { en: 'Every task auto-created in a shared dashboard, categorized and prioritized.', fr: 'Chaque tâche créée automatiquement dans un tableau de bord partagé, catégorisée et priorisée.' } },
      { src: '/case-studies/ai-smart-inbox-automation/screenshot-3.png', caption: { en: 'An instant notification the moment a new email is processed, category and priority included.', fr: "Une notification instantanée dès qu'un nouvel email est traité, catégorie et priorité incluses." } },
      { src: '/case-studies/ai-smart-inbox-automation/screenshot-4.png', caption: { en: 'A reply drafted in his own voice, ready to review and send.', fr: 'Une réponse rédigée dans sa propre voix, prête à relire et envoyer.' } },
    ],
    loomUrl: 'https://www.loom.com/share/edad7127563b4552b90a0b2b8dd31b37',
    en: {
      hook: '10 hours a week, back. His inbox now thinks before he even opens it.',
      whoFor: "You're a solo consultant, and email is quietly eating your day, 2 hours gone before you've done any real work.",
      problem: '2 hours lost to email every single day, reading, deciding, drafting, repeating the same categories of replies over and over.',
      whatChanged: 'The 6 most common email types got mapped and categorized, and the AI now drafts replies in his own voice. Follow-up sequences trigger automatically based on client status. He just reviews and sends.',
      results: [
        '10 hours saved per week',
        'The thinking is done before he opens his inbox',
      ],
      underHood: 'Emails categorized and AI-drafted responses created automatically, follow-up sequences triggered by client status, key context stored in an AI memory system, weekly business summary auto-generated, all operations visible in one shared dashboard. Replaces a part-time VA.',
    },
    fr: {
      hook: "10 heures par semaine, récupérées. Sa boîte mail réfléchit avant même qu'il ne l'ouvre.",
      whoFor: "Vous êtes consultant solo, et les emails grignotent discrètement votre journée, 2 heures parties avant même d'avoir commencé le vrai travail.",
      problem: "2 heures perdues chaque jour dans les emails, lire, décider, rédiger, répéter sans cesse les mêmes catégories de réponses.",
      whatChanged: "Les 6 types d'emails les plus fréquents ont été cartographiés et catégorisés, et l'IA rédige désormais les réponses dans sa propre voix. Les relances se déclenchent automatiquement selon le statut du client. Il relit et envoie.",
      results: [
        '10 heures économisées par semaine',
        "La réflexion est faite avant même qu'il ouvre sa boîte mail",
      ],
      underHood: "Emails catégorisés et réponses rédigées automatiquement par IA, relances déclenchées selon le statut client, contexte clé stocké dans un système de mémoire IA, résumé hebdomadaire de l'activité généré automatiquement, tout est visible dans un tableau de bord partagé. Remplace une assistante virtuelle à temps partiel.",
    },
  },
  'automated-client-onboarding': {
    hasAssets: true,
    screenshots: [
      { src: '/case-studies/automated-client-onboarding/screenshot-1.png', caption: { en: 'The automation workflow: an intake form triggers AI to write a welcome email, create the client profile, and notify the coach instantly.', fr: "Le workflow d'automatisation : un formulaire d'inscription déclenche l'IA qui rédige l'email de bienvenue, crée le profil client et notifie le coach instantanément." } },
      { src: '/case-studies/automated-client-onboarding/screenshot-2.png', caption: { en: "Every new client's profile, created automatically.", fr: 'Le profil de chaque nouveau client, créé automatiquement.' } },
      { src: '/case-studies/automated-client-onboarding/screenshot-3.png', caption: { en: 'The coach gets notified instantly the moment a new client is onboarded.', fr: "Le coach est notifié instantanément dès qu'un nouveau client est intégré." } },
    ],
    loomUrl: 'https://www.loom.com/share/f5303b8ec544493691c5b77d4662fde9',
    en: {
      hook: '45 minutes of admin per new client, gone. Her first real moment with every new client is now the kickoff call, not a stack of paperwork.',
      whoFor: "You're a fitness coach bringing on new clients regularly, and every single one costs you the same block of manual admin before you even get to the work you actually love.",
      problem: 'Every new client triggered 45 minutes of manual admin, intake data copied by hand, a welcome email written from scratch, a client folder created manually, the CRM updated by hand. None of it required her judgment, all of it ate into her time.',
      whatChanged: 'The moment a client signs, the entire onboarding sequence now runs on its own. The only human touchpoint left is the one that should be human, the kickoff call.',
      results: [
        '45 minutes of admin per client, down to 0',
        'Every client now gets a warm, consistent onboarding automatically',
      ],
      underHood: 'Triggered the moment a client submits their intake form: AI generates a personalized welcome email, a client profile is created with intake data pre-filled, and the coach gets an instant notification with an AI-generated client summary.',
    },
    fr: {
      hook: "45 minutes d'administration par nouveau client, disparues. Son premier vrai moment avec chaque nouveau client est désormais l'appel de lancement, pas une pile de paperasse.",
      whoFor: "Vous êtes coach sportif et accueillez régulièrement de nouveaux clients, chacun vous coûtant le même bloc d'administration manuelle avant même d'arriver au travail que vous aimez vraiment.",
      problem: "Chaque nouveau client déclenchait 45 minutes d'administration manuelle : données d'inscription recopiées à la main, email de bienvenue rédigé de zéro, dossier client créé manuellement, CRM mis à jour à la main. Rien de tout cela ne demandait son jugement, mais tout ça mangeait son temps.",
      whatChanged: "Dès qu'un client signe, toute la séquence d'onboarding se déclenche automatiquement. Le seul point de contact humain restant est celui qui doit l'être, l'appel de lancement.",
      results: [
        "45 minutes d'administration par client, ramenées à 0",
        "Chaque client reçoit désormais un accueil chaleureux et cohérent, automatiquement",
      ],
      underHood: "Déclenché dès qu'un client soumet son formulaire d'inscription : l'IA génère un email de bienvenue personnalisé, un profil client est créé avec les données pré-remplies, et le coach reçoit une notification instantanée avec un résumé du client généré par IA.",
    },
  },
  'session-to-content-pipeline': {
    hasAssets: true,
    screenshots: [
      { src: '/case-studies/session-to-content-pipeline/screenshot-1.png', caption: { en: 'The automation workflow: a session transcript becomes 3 LinkedIn posts and a newsletter, saved straight to a content calendar.', fr: "Le workflow d'automatisation : une transcription de session devient 3 posts LinkedIn et une newsletter, sauvegardés directement dans un calendrier de contenu." } },
      { src: '/case-studies/session-to-content-pipeline/screenshot-2.png', caption: { en: 'Every draft lands in a shared content calendar, ready to review.', fr: 'Chaque brouillon atterrit dans un calendrier de contenu partagé, prêt à relire.' } },
      { src: '/case-studies/session-to-content-pipeline/screenshot-3.png', caption: { en: "A full draft, written in the coach's voice, ready to publish.", fr: 'Un brouillon complet, rédigé dans la voix du coach, prêt à publier.' } },
    ],
    loomUrl: 'https://www.loom.com/share/651ca327c54543178b03277116fe86d7',
    en: {
      hook: 'Her content output tripled, and writing time dropped from 2 hours to 10 minutes, per post.',
      whoFor: "You're a business coach sitting on weeks of recorded sessions full of good material, but turning any of it into a post still means starting from a blank page.",
      problem: 'Writing a single LinkedIn post was taking 2 hours. The insights were already there, sitting unused in weekly session recordings, but the time to dig them out and write them up was not.',
      whatChanged: 'Every session recording now gets scanned automatically, the most relevant moments pulled out, and a draft post written in her own voice, ready for her to review.',
      results: [
        'Writing time: 2 hours, down to 10 minutes of editing',
        'Content output: tripled',
        'Zero extra hours added to her week',
      ],
      underHood: "Detects new session recordings automatically, extracts key insights with AI, generates content in the coach's voice, saves everything to a shared content calendar. Produces LinkedIn posts and newsletter sections, not just one format.",
    },
    fr: {
      hook: "Sa production de contenu a triplé, et le temps de rédaction est passé de 2 heures à 10 minutes, par post.",
      whoFor: "Vous êtes coach business et vous avez des semaines d'enregistrements de sessions pleins de bonnes idées, mais en tirer un post signifie encore repartir d'une page blanche.",
      problem: "Écrire un seul post LinkedIn prenait 2 heures. Les idées étaient déjà là, inutilisées dans les enregistrements hebdomadaires, mais le temps de les retrouver et de les rédiger ne l'était pas.",
      whatChanged: "Chaque enregistrement de session est désormais scanné automatiquement, les moments les plus pertinents en sont extraits, et un brouillon de post est rédigé dans sa propre voix, prêt à être relu.",
      results: [
        'Temps de rédaction : 2 heures, ramené à 10 minutes de relecture',
        'Production de contenu : triplée',
        'Zéro heure supplémentaire ajoutée à sa semaine',
      ],
      underHood: "Détecte automatiquement les nouveaux enregistrements de session, extrait les idées clés avec l'IA, génère du contenu dans la voix du coach, sauvegarde tout dans un calendrier de contenu partagé. Produit des posts LinkedIn et des sections de newsletter, pas seulement un format.",
    },
  },
}

export default caseStudies
