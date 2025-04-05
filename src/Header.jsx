import chef_icon from './assets/chef-claude-icon.png'

export default function Header () {
    return (
        <header className='header'>
            <img className='header-icon' src={chef_icon} alt="Chef icon"/>
            <p className='header-title'>Chef Claude</p>
        </header>
    )
}