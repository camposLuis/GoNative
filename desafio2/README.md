# IMPORTANTE EXECUTAR O PROJETO ANTES DE REALIZAR AS CONFIGURAÇÕES ABAIXO

- Ao executar e o seguinte erro aparecer:

  - Unable to load script from assets 'index.android.bundle'. Make sure...

- Para resolver comece criando uma pasta assets dentro da pasta android/app/src/main.

- Logo após, execute o comando:
  - react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/

# CONFIGURANDO AMBIENTE DO PROJETO

- yarn add eslint -D
- yarn eslint --init
- yarn add babel-eslint eslint-plugin-react-native -D
- yarn add eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y -D
- yarn add babel-plugin-root-import -D
- yarn add eslint-import-resolver-babel-plugin-root-import -D

# INSTALANDO DEPENDÊNCIAS PRINCIPAIS

- yarn add axios
- yarn add prop-types
- yarn add react-native-gesture-handler
  - react-native link react-native-gesture-handler
- yarn add react-native-status-bar-height
- yarn add react-native-vector-icons
  - react-native link react-native-vector-icons
- yarn add react-navigation

# INSTALANDO DEPENDÊNCIAS PARA DEBUG DA APLICAÇÃO

- yarn add react-devtools
- yarn add reactotron-react-native
