import { ComponentType } from "react"
import { WebAppProvider } from "./provider"

export const withTelegramWebApp =
  <T extends object>(Component: ComponentType<T>) =>
  (props: T) =>
    (
      <WebAppProvider>
        <Component {...props} />
      </WebAppProvider>
    )
