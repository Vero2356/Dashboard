import './Sidebar.css'
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
    <nav className="sidebar">

      <ul className="sidebar-nav">
        {navItems.map(item => (
          <li key={item.label}>
            <item.icon size={18} />
            <span>{item.label}</span>
          </li>
        ))}
      </ul>

      <ul className="sidebar-footer">
        <li>
          <Settings size={18} />
          <span>Settings</span>
        </li>
      </ul>

    </nav>
  )
}