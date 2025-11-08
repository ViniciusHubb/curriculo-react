
# Curriculo-React (Expo / React Native)

Este repositório contém uma versão mobile do currículo usando React Native com Expo. O layout em `App.js` foi adaptado a partir de um HTML/CSS (cores e estrutura) e transformado em componentes React Native (ScrollView, View, Text, Image, etc.).

## Requisitos

- Node.js instalado
- Expo CLI (opcional, mas recomendado). Você também pode usar os scripts npm fornecidos.
- Android Studio (emulador) ou um dispositivo físico com Expo Go para Android/iOS.

## Como rodar

1. Abra um terminal e entre na pasta do projeto:

```powershell
cd Curriculo-React
```

2. Instale dependências:

```powershell
npm install
```

3. Inicie o Metro / Expo:

```powershell
npx expo start --tunnel
```

4. Durante a inicialização do Expo CLI, selecione a opção apropriada quando solicitado. No meu caso eu selecionei `a` para abrir no Android Emulator / Android Studio.

Após o start, o Expo exibirá o painel com o QR code e atalhos no terminal. Exemplos de instruções que você verá:

› Scan the QR code above with Expo Go (Android) or the Camera app (iOS)

› Using Expo Go
› Press s │ switch to development build

› Press a │ open Android
› Press w │ open web

› Press j │ open debugger
› Press r │ reload app
› Press m │ toggle menu
› shift+m │ more tools
› Press o │ open project code in your editor

Use `a` para abrir no Android (ou conecte o dispositivo com Expo Go e escaneie o QR).

## Observações sobre o projeto

- O arquivo principal é `App.js` (já alterado para reproduzir o estilo que você forneceu). Ele usa as cores do `:root` convertidas para constantes em `COLORS`.
- As imagens/símbolos usados vêm de `./assets/`. Atualmente o código referencia `assets/icon.png` para a foto. Se você tiver `v.png`, `link.png`, `github.png` ou outras imagens, coloque-as dentro de `Curriculo-React/assets/` e atualize os paths no `App.js` (ou me peça para ajustar aqui).
- O formulário presente na tela é visual — sem envio para backend. Posso adicionar validação e integração com API se desejar.

## Dicas / Troubleshooting

- Se o Expo CLI não abrir o emulador automaticamente, abra o Android Studio e inicie um AVD (emulador) antes de pressionar `a`.
- Se preferir usar um dispositivo físico Android, instale o app Expo Go no dispositivo e escaneie o QR code mostrado no terminal.
- Em Windows PowerShell, use os mesmos comandos acima; se tiver problemas com permissão de rede, verifique o firewall.