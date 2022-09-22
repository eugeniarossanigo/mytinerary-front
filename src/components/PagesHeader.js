import {Link as LinkRouter} from 'react-router-dom'

const defaultPages = [
    {_id: 101, name: 'Home', linkTo: '/'},
    {_id: 102, name: 'Cities', linkTo: '/cities'}
]

const userPages = [
    ...defaultPages,
    {_id: 103, name: 'NewCity', linkTo: '/newcity'}
]

const adminPages = [
    ...defaultPages,
    {_id: 103, name: 'NewCity', linkTo: '/newcity'},
    {_id: 104, name: 'EditCity', linkTo: '/editcity'}
]

const linkCreator = (page) => <LinkRouter key={page._id} className="Header-link" to={page.linkTo}>{page.name}</LinkRouter>

export default function PagesHeader(props) {
    const pages = !props.logged ? defaultPages : (props.role === "admin" ? adminPages : userPages)

    return (
        <>
            {pages.map(linkCreator)}
        </>
    )
}
