import styles from './Sidebar.module.css'
import { Home, FolderOpen, Target, Calendar, Image, Newspaper, CheckSquare, DollarSign, Heart, ShoppingCart, Settings } from 'lucide-react'

const navItems = [
  { label: 'Home', icon: Home },
  { label: 'Projects', icon: FolderOpen },
  { label: 'Goals', icon: Target },
  { label: 'Calendar', icon: Calendar },
  { label: 'Vision Board', icon: Image },
  { label: 'News', icon: Newspaper },
  { label: 'To-Do List', icon: CheckSquare },
  { label: 'Finances', icon: DollarSign },
  { label: 'Health', icon: Heart },
  { label: 'Shopping List', icon: ShoppingCart },
]

export default function Sidebar() {
  return (
    <nav className={styles.sidebar}>
      <h2>DASHBOARD</h2>

      <ul className={styles['sidebar-nav']}>
        {navItems.map(item => (
          <li key={item.label}>
            <item.icon size={18} />
            <span>{item.label}</span>
          </li>
        ))}
      </ul>

      <ul className={styles['sidebar-footer']}>
        <li>
          <Settings size={18} />
          <span>Settings</span>
        </li>
      </ul>

    </nav>
  )
}