# Amélia Vaidosa — versão estática para testes

Cópia independente do projeto original. Não utiliza backend, banco de dados, autenticação ou Manus.

## Rodar localmente

```bash
npm install
npm run dev
```

## Publicar no Cloudflare Pages

Envie esta pasta para um repositório GitHub **separado**. No Cloudflare Pages, conecte esse repositório e configure:

- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/` (raiz do novo repositório)

## Trocar fotos

Substitua arquivos em `public/assets/images/` e ajuste os caminhos e legendas em `src/Home.tsx`, na lista `fallbackGallery`. Depois faça commit e push: o Cloudflare Pages conectado ao GitHub fará novo deploy.

## Conferências antes da divulgação

Confirmar com a responsável as imagens, nome exibido, telefone, endereço, serviços, links e permissões de uso de fotos. Testar no celular, links, imagens e HTTPS.

Esta cópia ainda não foi validada por build em ambiente Node nem publicada.
