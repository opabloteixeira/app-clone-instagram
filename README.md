# Clone Instagram APP


## Dependências
- `react-navigation` para as rotas/navegações do app
- `react-native-gesture-handler` lib pra lidar com gestos, ex: trocar de página arrastando pro lado.

## Fazer o link nativo da lib gesture
```
react-native link react-native-gesture-handler

após, reinstalar a aplicação no emulador

react-native run-android ou react-native run-ios
```

## Resetar cache e reload
- `Para resetar o cache ou algum erro com o gesture`
```
Parar servidor 
react-native start --reset-cache
react-native run-android ou react-native run-ios
```