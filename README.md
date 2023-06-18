# React Telegram Web App

React wrapper for [Telegram Web Apps](https://core.telegram.org/bots/webapps).

> This project is in early development stage. Breaking change may happen at any time.

## Installation

```bash
yarn add react-tg-webapp
```

# Usage

## With React Context

React Telegram Web App is a React Context Provider. This will only provide `Telegram` object to the children components.

```jsx
import { WebAppProvider } from "react-tg-webapp"

export default function App() {
  return (
    <WebAppProvider>
      <Children />
    </WebAppProvider>
  )
}
```

Then you can use `Telegram.WebApp` object in any children components.

```jsx
import { useContext } from "react"
import { TelegramWebAppContext, MainButton } from "react-tg-webapp"

export default function Children() {
  const { WebApp, isReady } = useContext(TelegramWebAppContext)

  return (
    <div>
      <h1>WebApp is {isReady ? "ready" : "not ready"}</h1>
      <MainButton
        color="#000"
        text="Hello World"
        textColor="#fff"
        onClick={() => {
          console.log("Main button clicked")
        }}
      />
    </div>
  )
}
```

## With HOC

The package also provides a HOC that under the hood also uses `WebAppProvider` context provider.
With this HOC, you can use `Telegram.WebApp` object in any wrapped component without needing it to put inside a `WebAppProvider` children.

```jsx
import { useContext } from "react"
import { TelegramWebAppContext, withTelegramWebApp, MainButton } from "react-tg-webapp"

function App() {
  const { WebApp, isReady } = useContext(TelegramWebAppContext)

  return (
    <div>
      <h1>WebApp is {isReady ? "ready" : "not ready"}</h1>
      <MainButton
        color="#000"
        text="Hello World"
        textColor="#fff"
        onClick={() => {
          console.log("Main button clicked")
        }}
      />
    </div>
  )
}

const AppWithWebApp = withTelegramWebApp(App)
export default AppWithWebApp
```

## Components

Telegram Web App components will not render anything in the browser. It will only render the component in the Telegram interface.

### MainButton

A component for displaying a button at the bottom of the web app in the Telegram interface.

[Refer to](https://core.telegram.org/bots/webapps#mainbutton)

```jsx
import { MainButton } from "react-tg-webapp"

export default function App() {
  return (
    <MainButton
      color="#000"
      text="Hello World"
      textColor="#fff"
      onClick={() => {
        console.log("Main button clicked")
      }}
    />
  )
}
```

### BackButton

A component for displaying a back button at the header of the web app in the Telegram interface.

[Refer to](https://core.telegram.org/bots/webapps#backbutton)

```jsx
import { BackButton } from "react-tg-webapp"

export default function App() {
  return (
    <BackButton
      onClick={() => {
        console.log("Back button clicked")
      }}
    />
  )
}
```

## Hooks

### useMetadata()

A hook for getting the Web App metadata.

### useSendData()

A hook for sending data to the bot.

> This mehtod is only available for Web Apps launched via a [Keyboard Button](https://core.telegram.org/bots/webapps#keyboard-button-web-apps)

### usePopup()

A hook for opening a popup in the Telegram interface.

```jsx
function App() {
  const { WebApp } = useContext(TelegramWebAppContext)
  const { showPopup } = usePopup()

  const handleClose = async () => {
    const id = await showPopup({
      title: "WebApp",
      message: "Are you sure you want to close the app?",
      buttons: [
        { id: "1", text: "cancel", type: "cancel" },
        { id: "2", text: "Close", type: "destructive" },
      ],
    })
    if (id === "2") {
      WebApp.close()
    }
  }

  return <BackButton onClick={handleClose} />
}
```

### useThemeParams()

A hook for getting theme parameters from the Telegram interface.

### useScanQrPopupParams()

### useHapticFeedback()

A hook for sending a haptic feedback to the Telegram Client.
