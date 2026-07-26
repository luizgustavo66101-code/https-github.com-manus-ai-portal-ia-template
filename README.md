# Portal IA 2025 — Manus AI Portal Template

Este repositório é um template de portal web em React + TypeScript focado em conteúdos e recursos sobre Inteligência Artificial. Fiz melhorias iniciais para organizar a estrutura, adicionar páginas principais e um plano de features para a funcionalidade "Copilot / Plans".

Principais tecnologias
- React 18 + Vite
- TypeScript
- Tailwind CSS (configurado no projeto)
- Drizzle ORM (dependência listada)

Requisitos
- Node.js >= 18
- npm >= 9

Como executar (desenvolvimento)

```bash
npm install
npm run dev
```

Scripts úteis
- npm run dev    # inicia Vite em modo desenvolvimento
- npm run build  # gera build de produção
- npm run preview# preview do build
- npm run lint   # verifica tipos com tsc
- npm run type-check # verifica tipos explicitamente (adicionado)

O que foi organizado
- Adicionei páginas placeholder: /about, /contact, /newsletter, /plans (em src/pages)
- Adicionei um mock para planos em src/mocks/plans.json
- Adicionei um plano detalhado em features/copilot/plans.md
- Atualizei App.tsx para registrar as novas rotas
- Sugestões: adicionar testes, CI (GitHub Actions) e integração de pagamento para planos

Próximos passos sugeridos
1. Revisar e ajustar textos e estilos nas páginas criadas
2. Implementar testes unitários (Vitest + Testing Library)
3. Implementar CI (workflow para build + lint + test)
4. Integrar backend (API) e gateway de pagamento (Stripe, etc.)

Se quiser que eu crie um PR com essas mudanças ou que eu implemente testes/CI, diga qual a prioridade.