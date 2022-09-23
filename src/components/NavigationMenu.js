import PagesHeader from './PagesHeader';

export default function NavigationMenu(props) {

    return (
        <>
            <nav className="NavigationMenu">
                <PagesHeader logged={props.logged} role={props.role} />
            </nav>
        </>
    )
}
