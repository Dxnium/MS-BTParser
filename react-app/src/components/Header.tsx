import { useSelector } from "react-redux"
import { RootState } from '../redux/store';

export const Header = () => {

    const {title} = useSelector((state: RootState) => state.appState);
    
    return(
        <header className="header__main-header">
            <h1> { title } </h1>            
        </header>
    )
}
