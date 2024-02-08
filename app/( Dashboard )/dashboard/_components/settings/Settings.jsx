'use client'
import Link from "next/link"
import classnames from "./settings.module.scss"
import { useTheme } from "next-themes"

export default function Settings() {
const { theme, setTheme } = useTheme()
  return (<>
    <div className={classnames.settings}>Menu</div>
    {/* <div className={classnames.settings__dropdown}>
        <button onClick={() => setTheme("light")}>Light</button>
        <button onClick={() => setTheme("dark")}>Dark</button>
        <a href="/api/auth/logout">Logout</a>
    </div> */}
  </>)
}
