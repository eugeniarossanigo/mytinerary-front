import PagesHeader from './PagesHeader';

export default function NavigationMenu(props) {
    const logged = props.logged

    return (
        <>
            <nav className="NavigationMenu">
                <PagesHeader logged={logged} />
            </nav>
        </>
    )
}
