import chef_icon from './assets/chef-claude-icon.png'

export default function Header () {
    return (
        <header className='header'>
            <img className='header-icon' src={chef_icon} alt="Chef icon"/>
            <h1 className='header-title'>Chef Mistral</h1>
        </header>
    )
}