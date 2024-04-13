import { useSelector } from 'react-redux'
// ==============================|| LOGO ||============================== //

const Logo = () => {
    const customization = useSelector((state) => state.customization)

    return (
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'row' }}>
            <span style={{
                height: 'auto',
                width: 150,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                fontWeight: 'bold',
                color: customization.isDarkMode ? 'white' : 'black' // Cambia el color del texto basado en isDarkMode
            }}>
                Veyonder Bot
            </span>
        </div>
    )
}

export default Logo
