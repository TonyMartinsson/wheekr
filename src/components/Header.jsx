function Header() { 
    return (
        <div style={headerStyle}>
        </div>
    )
}
                        
const headerStyle = {
    background: 'aqua',
    height: '6rem',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'space-between'
}

export default Header;